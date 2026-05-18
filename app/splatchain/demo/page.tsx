"use client";

import { useState, useEffect, useCallback } from "react";

const CONTRACT = "0xB113bD0094c6500bD7215E4eFC8c1d6f01D2e513";
const RPC = "https://base-mainnet.infura.io/v3/74d5d9bff57c4d72945884d5d7662bf5";

const ABI = [
  "function attest(bytes32 inputHash, bytes32 modelHash, string calldata captureMethod, string calldata modelFormat) external",
  "function getAttestation(bytes32 modelHash) external view returns (address creator, bytes32 inputHash, bytes32 modelHash, string captureMethod, string modelFormat, uint256 timestamp, uint8 tier, bool revoked)",
  "function totalAttestations() external view returns (uint256)",
  "function owner() external view returns (address)",
  "function isVerified(bytes32 modelHash) external view returns (bool)",
  "function getTier(bytes32 modelHash) external view returns (uint8)",
];

const GENESIS_HASH = "0xdd009a54fae9894f9deb45da913ca37651cfadc13852e3622bcd0a875a1d4054";
const GENESIS_TX = "0x31e0c74daf4d255e6d8b3b017287e0e7ba04a52b25098e6144e46cec1835cfee";

function shortAddr(hash: string) {
  return hash.slice(0, 6) + "..." + hash.slice(-4);
}

function shortHash(hash: string) {
  return hash.slice(0, 10) + "..." + hash.slice(-6);
}

const TIER_LABELS: Record<number, { label: string; sub: string; cls: string }> = {
  1: { label: "Creator-signed",   sub: "You registered it yourself",        cls: "tierBadge tier1" },
  2: { label: "Studio-verified",  sub: "Approved by a trusted reviewer",    cls: "tierBadge tier2" },
  3: { label: "Hardware-certified", sub: "Verified by capture device",      cls: "tierBadge tier3" },
};

function TierBadge({ tier }: { tier: number }) {
  const t = TIER_LABELS[tier] ?? { label: "Unknown", sub: "", cls: "tierBadge tier1" };
  return <span className={t.cls}>{t.label}</span>;
}

export default function SplatChainDemo() {
  const [totalRegistered, setTotalRegistered] = useState<string>("—");
  const [genesis, setGenesis] = useState<any>(null);
  const [searchHash, setSearchHash] = useState("");
  const [searchResult, setSearchResult] = useState<any>(null);
  const [searchError, setSearchError] = useState("");
  const [searching, setSearching] = useState(false);
  const [walletAddr, setWalletAddr] = useState("");
  const [inputHash, setInputHash] = useState("");
  const [modelHash, setModelHash] = useState("");
  const [captureMethod, setCaptureMethod] = useState("dslr_photogrammetry");
  const [modelFormat, setModelFormat] = useState("ply");
  const [attestStatus, setAttestStatus] = useState("");
  const [attestLoading, setAttestLoading] = useState(false);
  const [showTechInfo, setShowTechInfo] = useState(false);

  const loadData = useCallback(async () => {
    try {
      const { ethers } = await import("ethers");
      const provider = new ethers.providers.JsonRpcProvider(RPC);
      const contract = new ethers.Contract(CONTRACT, ABI, provider);
      const total = await contract.totalAttestations();
      setTotalRegistered(total.toString());
      const att = await contract.getAttestation(GENESIS_HASH);
      if (att.timestamp.toNumber() !== 0) {
        setGenesis({
          creator: att.creator,
          inputHash: att.inputHash,
          modelHash: att.modelHash,
          captureMethod: att.captureMethod,
          modelFormat: att.modelFormat,
          timestamp: att.timestamp.toNumber(),
          tier: att.tier,
          revoked: att.revoked,
        });
      }
    } catch (e) {
      console.error("Load error:", e);
    }
  }, []);

  useEffect(() => { loadData(); }, [loadData]);

  const verifySplat = async () => {
    if (!searchHash.trim()) return;
    setSearching(true);
    setSearchError("");
    setSearchResult(null);
    try {
      const { ethers } = await import("ethers");
      const provider = new ethers.providers.JsonRpcProvider(RPC);
      const contract = new ethers.Contract(CONTRACT, ABI, provider);
      const att = await contract.getAttestation(searchHash);
      if (att.timestamp.toNumber() === 0) {
        setSearchError("No record found for this fingerprint. This splat hasn't been registered yet.");
        return;
      }
      const isVerified = await contract.isVerified(searchHash);
      const tier = await contract.getTier(searchHash);
      setSearchResult({ ...att, isVerified, tier: Number(tier), timestamp: att.timestamp.toNumber() });
    } catch (e: any) {
      setSearchError("Couldn't check this fingerprint. Make sure it's a valid splat fingerprint (starts with 0x).");
    } finally {
      setSearching(false);
    }
  };

  const connectWallet = async () => {
    if (!(window as any).ethereum) {
      alert("You'll need MetaMask (or a compatible wallet) to register a splat. Get it free at metamask.io.");
      return;
    }
    try {
      await (window as any).ethereum.request({ method: "eth_requestAccounts" });
      const { ethers } = await import("ethers");
      const provider = new ethers.providers.Web3Provider((window as any).ethereum);
      const network = await provider.getNetwork();
      if (network.chainId !== 8453) {
        try {
          await (window as any).ethereum.request({
            method: "wallet_switchEthereumChain",
            params: [{ chainId: "0x2105" }],
          });
        } catch (switchErr: any) {
          if (switchErr.code === 4902) {
            await (window as any).ethereum.request({
              method: "wallet_addEthereumChain",
              params: [{
                chainId: "0x2105",
                chainName: "Base",
                nativeCurrency: { name: "ETH", symbol: "ETH", decimals: 18 },
                rpcUrls: ["https://mainnet.base.org"],
                blockExplorerUrls: ["https://basescan.org"],
              }],
            });
          } else throw switchErr;
        }
      }
      const signer = provider.getSigner();
      const addr = await signer.getAddress();
      setWalletAddr(addr);
    } catch (e: any) {
      alert("Wallet connection failed: " + e.message);
    }
  };

  const attestSplat = async () => {
    if (!inputHash.startsWith("0x") || inputHash.length !== 66) {
      setAttestStatus("Capture fingerprint looks wrong — it should start with 0x and be 66 characters total.");
      return;
    }
    if (!modelHash.startsWith("0x") || modelHash.length !== 66) {
      setAttestStatus("Splat fingerprint looks wrong — it should start with 0x and be 66 characters total.");
      return;
    }
    setAttestLoading(true);
    setAttestStatus("Submitting to the public record…");
    try {
      const { ethers } = await import("ethers");
      const provider = new ethers.providers.Web3Provider((window as any).ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(CONTRACT, ABI, signer);
      const tx = await contract.attest(inputHash, modelHash, captureMethod, modelFormat);
      setAttestStatus(`Waiting for confirmation… (${shortHash(tx.hash)})`);
      await tx.wait();
      setAttestStatus(`registered:${tx.hash}`);
      loadData();
    } catch (e: any) {
      setAttestStatus("error:" + e.message);
    } finally {
      setAttestLoading(false);
    }
  };

  const isRegisteredSuccess = attestStatus.startsWith("registered:");
  const isAttestError = attestStatus.startsWith("error:");
  const registeredTxHash = isRegisteredSuccess ? attestStatus.replace("registered:", "") : "";

  return (
    <div className="demoShell">
      {/* Back nav */}
      <nav className="demoNav">
        <a href="/splatchain" className="demoNavBack">
          <ChevronLeftIcon /> SplatChain
        </a>
        <span className="demoBadgeLive">Live on Base</span>
      </nav>

      {/* Hero */}
      <header className="demoHero">
        <p className="eyebrow">Splat Registry</p>
        <h1 className="demoTitle">Verify or Register Your Splat</h1>
        <p className="demoSubtitle">
          Every registered splat gets a permanent public record — proof that
          your capture is real and traceable back to you.
        </p>
      </header>

      {/* Stats row */}
      <div className="demoStats">
        <div className="demoStat">
          <strong>{totalRegistered}</strong>
          <span>Splats registered</span>
        </div>
        <div className="demoStat">
          <strong>Base</strong>
          <span>Public record network</span>
        </div>
        <div className="demoStat">
          <strong>&lt;2s</strong>
          <span>To verify any splat</span>
        </div>
      </div>

      {/* Fingerprint explainer */}
      <div className="demoExplainer">
        <span className="demoExplainerIcon"><InfoIcon /></span>
        <div>
          <strong>What&rsquo;s a splat fingerprint?</strong>
          <p>
            A fingerprint is a unique code generated from your file contents — like a
            digital signature specific to that exact file. Run{" "}
            <code>sha256sum yourfile.ply</code> (or use the{" "}
            <a href="https://github.com/mattshekwork-max/splatchain" target="_blank" rel="noopener">
              SplatChain CLI
            </a>
            ) to get yours. No two files produce the same fingerprint.
          </p>
        </div>
      </div>

      {/* Verification levels */}
      <section className="demoCard">
        <h2 className="demoCardTitle">Verification levels</h2>
        <p className="demoCardSub">
          When you look up a splat, you&rsquo;ll see one of these trust levels.
        </p>
        <div className="demoTierGrid">
          <div className="demoTierItem">
            <span className="tierBadge tier1">Creator-signed</span>
            <p>The creator registered it themselves. A good starting point for trust.</p>
          </div>
          <div className="demoTierItem">
            <span className="tierBadge tier2">Studio-verified</span>
            <p>A trusted reviewer independently confirmed the splat&rsquo;s origin.</p>
          </div>
          <div className="demoTierItem">
            <span className="tierBadge tier3">Hardware-certified</span>
            <p>The capture device itself signed the record — the strongest proof available.</p>
          </div>
        </div>
      </section>

      {/* Look up a splat */}
      <section className="demoCard">
        <h2 className="demoCardTitle">Look up a splat</h2>
        <p className="demoCardSub">
          Paste a splat fingerprint to see its registration record.
        </p>
        <div className="demoInputRow">
          <input
            className="demoInput"
            type="text"
            value={searchHash}
            onChange={(e) => { setSearchHash(e.target.value); setSearchResult(null); setSearchError(""); }}
            placeholder={GENESIS_HASH}
            aria-label="Splat fingerprint"
          />
          <button
            className="button primary demoBtn"
            onClick={verifySplat}
            disabled={searching || !searchHash.trim()}
          >
            {searching ? "Checking…" : "Check Record"}
            {!searching && <SearchIcon />}
          </button>
        </div>
        <p className="demoHint">
          Try the example: <button className="demoInlineBtn" onClick={() => setSearchHash(GENESIS_HASH)}>load genesis splat</button>
        </p>

        {searchError && (
          <div className="demoAlert demoAlertWarn">
            <AlertIcon /> {searchError}
          </div>
        )}

        {searchResult && (
          <div className="demoResult">
            <div className="demoResultHeader">
              <span className="demoResultBadge"><CheckCircleIcon /> Splat found</span>
              <TierBadge tier={searchResult.tier} />
            </div>
            <dl className="demoDataGrid">
              <dt>Registered by</dt>
              <dd><code>{shortAddr(searchResult.creator)}</code></dd>
              <dt>Capture fingerprint</dt>
              <dd><code>{shortHash(searchResult.inputHash)}</code></dd>
              <dt>Splat fingerprint</dt>
              <dd><code>{shortHash(searchResult.modelHash)}</code></dd>
              <dt>Capture method</dt>
              <dd>{searchResult.captureMethod.replace(/_/g, " ")}</dd>
              <dt>File format</dt>
              <dd>.{searchResult.modelFormat}</dd>
              <dt>Registered on</dt>
              <dd>{new Date(searchResult.timestamp * 1000).toLocaleString()}</dd>
              <dt>Status</dt>
              <dd>
                {searchResult.revoked
                  ? <span className="demoStatusRevoked">Revoked</span>
                  : <span className="demoStatusActive">Active</span>}
              </dd>
            </dl>
          </div>
        )}
      </section>

      {/* Genesis splat */}
      {genesis && (
        <section className="demoCard demoCardGenesis">
          <div className="demoGenesisBadge">Genesis</div>
          <h2 className="demoCardTitle">First registered splat</h2>
          <p className="demoCardSub">
            The first splat recorded on SplatChain — a proof-of-concept that the
            system works end-to-end.
          </p>
          <dl className="demoDataGrid">
            <dt>Registered by</dt>
            <dd><code>{shortAddr(genesis.creator)}</code></dd>
            <dt>Capture fingerprint</dt>
            <dd><code>{shortHash(genesis.inputHash)}</code></dd>
            <dt>Splat fingerprint</dt>
            <dd><code>{shortHash(genesis.modelHash)}</code></dd>
            <dt>Capture method</dt>
            <dd>{genesis.captureMethod.replace(/_/g, " ")}</dd>
            <dt>File format</dt>
            <dd>.{genesis.modelFormat}</dd>
            <dt>Registered on</dt>
            <dd>{new Date(genesis.timestamp * 1000).toLocaleString()}</dd>
            <dt>Verification level</dt>
            <dd><TierBadge tier={genesis.tier} /></dd>
            <dt>Status</dt>
            <dd>{genesis.revoked ? <span className="demoStatusRevoked">Revoked</span> : <span className="demoStatusActive">Active</span>}</dd>
          </dl>
          <a
            className="demoExternalLink"
            href={`https://basescan.org/tx/${GENESIS_TX}`}
            target="_blank"
            rel="noopener"
          >
            View original transaction <ExternalLinkIcon />
          </a>
        </section>
      )}

      {/* Register your splat */}
      <section className="demoCard">
        <h2 className="demoCardTitle">Register your splat</h2>
        <p className="demoCardSub">
          Stamp your splat&rsquo;s origin into a permanent, public record. You&rsquo;ll need
          a wallet with a small amount of ETH on Base (typically &lt;$0.01).
        </p>

        {!walletAddr ? (
          <div className="demoWalletPrompt">
            <p>
              New to crypto wallets?{" "}
              <a href="https://metamask.io" target="_blank" rel="noopener">
                MetaMask
              </a>{" "}
              is free and takes about 2 minutes to set up. You only need a tiny
              amount of ETH to cover the record-keeping fee.
            </p>
            <button className="button primary" onClick={connectWallet}>
              Connect Wallet <WalletIcon />
            </button>
          </div>
        ) : (
          <div className="demoRegisterForm">
            <div className="demoConnectedBadge">
              <CheckCircleIcon /> Connected: <code>{shortAddr(walletAddr)}</code>
            </div>

            <div className="demoFormField">
              <label htmlFor="inputHash">
                Capture fingerprint
                <span className="demoFieldHint">SHA-256 hash of your raw photos or scan files</span>
              </label>
              <input
                className="demoInput"
                id="inputHash"
                type="text"
                value={inputHash}
                onChange={(e) => setInputHash(e.target.value)}
                placeholder="0x… (66 characters)"
              />
            </div>

            <div className="demoFormField">
              <label htmlFor="modelHash">
                Splat fingerprint
                <span className="demoFieldHint">SHA-256 hash of your trained .ply or .splat file</span>
              </label>
              <input
                className="demoInput"
                id="modelHash"
                type="text"
                value={modelHash}
                onChange={(e) => setModelHash(e.target.value)}
                placeholder="0x… (66 characters)"
              />
            </div>

            <div className="demoFormRow">
              <div className="demoFormField">
                <label htmlFor="captureMethod">How did you capture it?</label>
                <select
                  className="demoInput demoSelect"
                  id="captureMethod"
                  value={captureMethod}
                  onChange={(e) => setCaptureMethod(e.target.value)}
                >
                  <option value="iphone_lidar">iPhone LiDAR</option>
                  <option value="dslr_photogrammetry">DSLR Photogrammetry</option>
                  <option value="drone_photogrammetry">Drone Photogrammetry</option>
                  <option value="terrestrial_scan">Terrestrial Laser Scan</option>
                  <option value="web_capture">Web Capture</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="demoFormField">
                <label htmlFor="modelFormat">File format</label>
                <select
                  className="demoInput demoSelect"
                  id="modelFormat"
                  value={modelFormat}
                  onChange={(e) => setModelFormat(e.target.value)}
                >
                  <option value="ply">.ply</option>
                  <option value="splat">.splat</option>
                  <option value="ksplat">.ksplat</option>
                </select>
              </div>
            </div>

            <button
              className="button primary"
              onClick={attestSplat}
              disabled={attestLoading}
            >
              {attestLoading ? "Registering…" : "Register Splat"}
              {!attestLoading && <CheckCircleIcon />}
            </button>

            {attestStatus && !isRegisteredSuccess && !isAttestError && (
              <div className="demoAlert demoAlertInfo">{attestStatus}</div>
            )}
            {isRegisteredSuccess && (
              <div className="demoAlert demoAlertSuccess">
                <CheckCircleIcon /> Your splat is registered.{" "}
                <a href={`https://basescan.org/tx/${registeredTxHash}`} target="_blank" rel="noopener">
                  View record <ExternalLinkIcon />
                </a>
              </div>
            )}
            {isAttestError && (
              <div className="demoAlert demoAlertWarn">
                <AlertIcon /> {attestStatus.replace("error:", "")}
              </div>
            )}
          </div>
        )}
      </section>

      {/* Technical details (collapsed) */}
      <section className="demoCard demoCardTech">
        <button
          className="demoTechToggle"
          onClick={() => setShowTechInfo((v) => !v)}
          aria-expanded={showTechInfo}
        >
          <span>Technical details</span>
          <ChevronDownIcon rotated={showTechInfo} />
        </button>
        {showTechInfo && (
          <dl className="demoDataGrid demoDataGridMono">
            <dt>Contract address</dt>
            <dd>
              <a href={`https://basescan.org/address/${CONTRACT}#code`} target="_blank" rel="noopener">
                <code>{shortHash(CONTRACT)}</code> <ExternalLinkIcon />
              </a>
            </dd>
            <dt>Network</dt>
            <dd>Base mainnet (chain ID 8453)</dd>
            <dt>Verification</dt>
            <dd>Verified on Basescan</dd>
            <dt>Tier 1</dt>
            <dd>Self-attestation — any wallet</dd>
            <dt>Tier 2</dt>
            <dd>DAO-approved attesters</dd>
            <dt>Tier 3</dt>
            <dd>Hardware-verified via TEE/SGX pipeline</dd>
          </dl>
        )}
      </section>

      {/* Footer */}
      <footer className="demoFooter">
        <a href="/splatchain">SplatChain</a>
        <span>&middot;</span>
        <a href="https://github.com/mattshekwork-max/splatchain" target="_blank" rel="noopener">GitHub</a>
        <span>&middot;</span>
        <a href={`https://basescan.org/address/${CONTRACT}`} target="_blank" rel="noopener">
          Contract <ExternalLinkIcon />
        </a>
        <span>&middot;</span>
        <span>MIT License</span>
      </footer>
    </div>
  );
}

/* ── Icons ── */

function ChevronLeftIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}

function ChevronDownIcon({ rotated }: { rotated: boolean }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      style={{ transform: rotated ? "rotate(180deg)" : "none", transition: "transform 200ms ease" }}
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function CheckCircleIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <path d="m9 11 3 3L22 4" />
    </svg>
  );
}

function AlertIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
      <line x1="12" x2="12" y1="9" y2="13" />
      <line x1="12" x2="12.01" y1="17" y2="17" />
    </svg>
  );
}

function InfoIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.35-4.35" />
    </svg>
  );
}

function ExternalLinkIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" style={{ height: "0.75rem", width: "0.75rem" }}>
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" x2="21" y1="14" y2="3" />
    </svg>
  );
}

function WalletIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M20 12V8H6a2 2 0 0 1-2-2c0-1.1.9-2 2-2h12v4" />
      <path d="M4 6v12c0 1.1.9 2 2 2h14v-4" />
      <path d="M18 12a2 2 0 0 0-2 2c0 1.1.9 2 2 2h4v-4h-4z" />
    </svg>
  );
}
