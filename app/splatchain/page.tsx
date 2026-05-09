import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SplatChain | HelioStack Technologies",
  description:
    "SplatChain is a provenance layer for 3D Gaussian Splats, combining signatures, deterministic hashing, and Base-compatible on-chain attestation.",
  openGraph: {
    title: "SplatChain — The Trust Layer for 3D",
    description:
      "Prove every 3D capture is real, own its chain of custody, and verify authenticity on-chain. Built for studios, archives, and platforms.",
    url: "https://heliostacktechnologies.com/splatchain",
    siteName: "HelioStack Technologies",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SplatChain — The Trust Layer for 3D",
    description:
      "Prove every 3D capture is real, own its chain of custody, and verify authenticity on-chain.",
  },
};

const highlights = [
  { value: "<2s", label: "Target verification experience" },
  {
    value: "Base",
    label: "On-chain registry direction",
    badge: true,
  },
  { value: "3", label: "Core proof layers" },
  { value: "MIT", label: "Open-source license" },
];

const thesisCards = [
  {
    label: "Why now",
    text: "Generative 3D is exploding — Luma, Meshy, CSM. Zero infrastructure exists to verify what's real.",
  },
  {
    label: "Who pays",
    text: "Studios, platforms, archives, and enterprise review workflows that need proof of authenticity.",
  },
  {
    label: "Expansion",
    text: "Start with Gaussian Splats, expand into adjacent 3D and media provenance workflows.",
  },
];

const proofCards = [
  {
    title: "Capture authenticity",
    description:
      "Start provenance at the source with signed capture fingerprints tied to raw inputs before model generation.",
    accent: true,
  },
  {
    title: "Model traceability",
    description:
      "Bind trained splat outputs back to their originating input hash so downstream teams can verify lineage fast.",
    accent: false,
  },
  {
    title: "Portable verification",
    description:
      "Combine signatures, sidecar data, and Base-compatible on-chain records for practical trust across tools and viewers.",
    accent: false,
  },
];

const investmentCards = [
  {
    title: "Clear market wedge",
    description:
      "SplatChain starts where risk is highest: proving whether a 3D asset came from authentic capture or synthetic generation.",
  },
  {
    title: "Trust as infrastructure",
    description:
      "Not just a badge — a verification layer that can sit inside capture workflows, viewers, archives, and marketplaces.",
  },
  {
    title: "Monetization path",
    description:
      "Verification, registry access, workflow tooling, and enterprise provenance controls create multiple ways to price value over time.",
  },
  {
    title: "Platform expansion",
    description:
      "The same trust model extends beyond Gaussian Splats into adjacent 3D, spatial, and media authenticity workflows.",
  },
];

const timelineSteps = [
  {
    step: "01",
    title: "Capture attestation",
    description:
      "Raw photos, depth maps, GPS, and sensor files are hashed into a signed capture record before training begins.",
  },
  {
    step: "02",
    title: "Training receipt",
    description:
      "The trained .ply or .splat output is hashed and cryptographically bound to the original capture fingerprint.",
  },
  {
    step: "03",
    title: "Registry verification",
    description:
      "Input and model hashes are anchored to Base-compatible infrastructure so provenance can be checked later in seconds.",
  },
  {
    step: "04",
    title: "Viewer trust layer",
    description:
      "Badges, sidecars, and verification UX make provenance visible where teams actually review and distribute assets.",
  },
];

const useCases = [
  "Studios proving field-captured 3D content is authentic",
  "Archives and documentation teams protecting chain of custody",
  "Viewer and marketplace experiences with verification badges",
  "Enterprise review pipelines detecting tampered or re-exported splats",
];

const tractionItems = [
  { label: "Sepolia contract deployed", done: true },
  { label: "Python SDK on PyPI (splatchain)", done: true },
  { label: "Ed25519 signing + deterministic hashing", done: true },
  { label: "NFT provenance layer v0.2", done: true },
  { label: "Base registry integration", done: false },
  { label: "PlayCanvas viewer with verification UX", done: false },
  { label: "Pilot studio partnerships", done: false },
];

export default function SplatChainPage() {
  return (
    <main>
      {/* Hero */}
      <section className="splatHeroShell section premiumHero">
        <div className="heroInner premiumHeroCopy">
          <p className="eyebrow">HelioStack App</p>
          <h1>SplatChain</h1>
          <p className="heroCopy premiumLead">
            The trust layer for 3D. Prove every capture is real, own its chain
            of custody, and verify authenticity on-chain.
          </p>
          <div className="miniTrustRow" aria-label="SplatChain highlights">
            {highlights.map((h) => (
              <div className="miniTrustItem" key={h.label}>
                <strong>
                  {h.badge ? (
                    <span className="baseBadgeValue">
                      <span className="baseBlueSquare" aria-hidden="true" />
                      {h.value}
                    </span>
                  ) : (
                    h.value
                  )}
                </strong>
                <span>{h.label}</span>
              </div>
            ))}
          </div>
          <div className="actions">
            <a
              className="button primary"
              href="https://github.com/mattshekwork-max/splatchain"
            >
              View Repository
              <ArrowUpRightIcon />
            </a>
            <a className="button secondary" href="#investment-case">
              View Investment Case
              <ArrowRightIcon />
            </a>
          </div>
        </div>

        <div className="heroVisualCard" aria-hidden="true">
          <div className="visualGlow visualGlowOne" />
          <div className="visualGlow visualGlowTwo" />
          <div className="visualHeader">
            <span className="visualBadge">Trust Stack</span>
            <span className="visualStatus">In Development</span>
          </div>
          <div className="flowRail">
            {timelineSteps.map((s) => (
              <div className="flowStep" key={s.step}>
                <span className="flowIndex">{s.step}</span>
                <strong>{s.title.replace(" attestation", "").replace(" receipt", "").replace(" verification", "")}</strong>
              </div>
            ))}
          </div>
          <div className="visualPanelGrid">
            <div className="visualPanel primaryPanel">
              <span className="panelLabel">Proof Layer</span>
              <strong>Ed25519 signatures + deterministic hashing</strong>
              <p>Cryptographic proof at the capture and training levels.</p>
            </div>
            <div className="visualPanel">
              <span className="panelLabel">Registry Layer</span>
              <strong>Base-compatible attestation path</strong>
              <p>Portable verification for future viewer and marketplace integrations.</p>
            </div>
            <div className="visualPanel codePanel">
              <span className="panelLabel">Verification Output</span>
              <code>capture → receipt → registry → badge</code>
            </div>
          </div>
        </div>
      </section>

      {/* Thesis Strip */}
      <section className="section thesisStripSection">
        <div
          className="thesisStrip"
          aria-label="SplatChain investor thesis"
        >
          {thesisCards.map((c) => (
            <article className="thesisCard" key={c.label}>
              <span className="thesisLabel">{c.label}</span>
              <p>{c.text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Why It Matters */}
      <section className="section premiumIntroSection">
        <div className="sectionHeader narrow premiumSectionHeader">
          <p className="eyebrow">Why it matters</p>
          <h2>
            Trust for synthetic-era 3D content needs better product
            infrastructure.
          </h2>
          <p>
            As generated splats become harder to distinguish from real-world
            capture, provenance stops being a nice-to-have. SplatChain is being
            shaped as a trust layer that fits real production workflows instead
            of living as a buried technical afterthought.
          </p>
        </div>
        <div className="detailGrid premiumDetailGrid">
          {proofCards.map((c) => (
            <article
              className={`detailCard premiumCard${c.accent ? " featured" : ""}`}
              key={c.title}
            >
              <span className="cardAccent" />
              <h3>{c.title}</h3>
              <p>{c.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Investment Case */}
      <section className="section" id="investment-case">
        <div className="sectionHeader narrow premiumSectionHeader">
          <p className="eyebrow">Investment case</p>
          <h2>
            A trust wedge with room to grow into workflow infrastructure.
          </h2>
          <p>
            SplatChain sits at the intersection of authenticity, workflow, and
            distribution. The product can begin as a narrow provenance layer
            and expand outward into the systems that need verification to
            operate with confidence.
          </p>
        </div>
        <div className="detailGrid premiumDetailGrid premiumFourGrid">
          {investmentCards.map((c) => (
            <article className="detailCard premiumCard" key={c.title}>
              <span className="cardAccent" />
              <h3>{c.title}</h3>
              <p>{c.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Traction / Roadmap */}
      <section className="section" id="traction">
        <div className="sectionHeader narrow premiumSectionHeader">
          <p className="eyebrow">Traction & Roadmap</p>
          <h2>Shipped on Sepolia. Building toward mainnet.</h2>
          <p>
            SplatChain has working infrastructure on testnet — contract deployed,
            SDK live, cryptographic pipeline operational. Here's what's done
            and what's next.
          </p>
        </div>
        <div className="tractionGrid">
          {tractionItems.map((item) => (
            <div
              className={`tractionItem${item.done ? " done" : ""}`}
              key={item.label}
            >
              <span className="tractionCheck">
                {item.done ? <CheckIcon /> : <CircleIcon />}
              </span>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="section" id="how-it-works">
        <div className="sectionHeader narrow premiumSectionHeader">
          <p className="eyebrow">How it works</p>
          <h2>
            A cleaner chain of custody from sensor input to verified asset.
          </h2>
        </div>
        <div className="premiumTimeline">
          {timelineSteps.map((s) => (
            <article className="timelineCard" key={s.step}>
              <div className="timelineNumber">{s.step}</div>
              <div>
                <h3>{s.title}</h3>
                <p>{s.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Use Cases */}
      <section className="section detailSplit premiumUseCases">
        <div>
          <p className="eyebrow">Use cases</p>
          <h2>
            Built for teams that need proof, polish, and operational trust.
          </h2>
          <p>
            The product direction is strongest anywhere authenticity matters
            after export: field capture, studio pipelines, enterprise review,
            publishing, and long-tail 3D asset distribution.
          </p>
        </div>
        <div className="detailList premiumList">
          {useCases.map((uc) => (
            <div className="detailListItem premiumListItem" key={uc}>
              <span className="detailBullet" />
              <p>{uc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section premiumCtaSection">
        <div className="premiumCtaCard">
          <div>
            <p className="eyebrow">Next step</p>
            <h2>Follow the build or start the conversation.</h2>
            <p>
              SplatChain is an in-development HelioStack project focused on
              bringing premium trust signals to 3D provenance workflows.
              Interested in investing, piloting, or integrating? Reach out.
            </p>
          </div>
          <div className="actions premiumCtaActions">
            <a
              className="button primary"
              href="https://github.com/mattshekwork-max/splatchain"
            >
              View Repository
              <ArrowUpRightIcon />
            </a>
            <a
              className="button secondary"
              href="mailto:support@heliostacktechnologies.com"
            >
              Contact HelioStack
              <ArrowRightIcon />
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}

function SiteFooter() {
  return (
    <footer className="siteFooter">
      <a className="brand" href="/">
        <span className="brandMark">H</span>
        <span>HelioStack Technologies</span>
      </a>
      <nav aria-label="Footer navigation">
        <a href="/">Home</a>
        <a href="/#portfolio">Portfolio</a>
        <a href="mailto:support@heliostacktechnologies.com">Contact</a>
      </nav>
      <p>&copy; 2026 HelioStack Technologies LLC. All rights reserved.</p>
    </footer>
  );
}

function ArrowRightIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

function ArrowUpRightIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M7 7h10v10" />
      <path d="M7 17 17 7" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="checkIcon">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function CircleIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="circleIcon">
      <circle cx="12" cy="12" r="10" />
    </svg>
  );
}