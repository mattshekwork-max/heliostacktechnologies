import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SolarOps | HelioStack Technologies",
  description:
    "SolarOps turns messy post-sale solar handoffs into a cleaner operating record for install, permitting, and customer follow-up teams.",
  openGraph: {
    title: "SolarOps — Solar handoffs, cleaned up for operations",
    description:
      "Turn messy post-sale solar handoffs into a cleaner operating record for install, permitting, and customer follow-up.",
    url: "https://heliostacktechnologies.com/solarops",
    siteName: "HelioStack Technologies",
    type: "website",
    images: [
      {
        url: "https://heliostacktechnologies.com/solarops/opengraph-image",
        width: 1200,
        height: 630,
        alt: "SolarOps social preview image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SolarOps — Solar handoffs, cleaned up for operations",
    description:
      "Turn messy post-sale solar handoffs into a cleaner operating record for install, permitting, and customer follow-up.",
    images: ["https://heliostacktechnologies.com/solarops/opengraph-image"],
  },
};

const highlights = [
  ["1", "Clean operating record"],
  ["Faster", "Install + permitting handoff"],
  ["Less", "Rework and status chasing"],
  ["Solar", "Ops-first workflow"],
];

const proofCards = [
  {
    title: "Post-sale cleanup",
    description:
      "Pull scattered deal notes, customer promises, scope changes, and missing documents into one cleaner operating record."},{
  },
  {
    title: "Operational context",
    description:
      "Give install, permitting, and project coordinators the details they actually need before work starts slipping.",
  },
  {
    title: "Fewer handoff mistakes",
    description:
      "Reduce missed change orders, bad assumptions, and internal back-and-forth that slows projects down after the sale closes.",
  },
];

const workflow = [
  {
    step: "01",
    title: "Capture the handoff",
    description:
      "SolarOps starts where things usually get messy: after the contract, when project details begin living across texts, notes, emails, and CRM fields.",
  },
  {
    step: "02",
    title: "Normalize the job",
    description:
      "Important facts get organized into a clearer ops view — scope, site notes, financing context, customer expectations, blockers, and next actions.",
  },
  {
    step: "03",
    title: "Route to the team",
    description:
      "Install, permitting, and operations teams receive a more complete record instead of reconstructing the project from fragments.",
  },
];

const useCases = [
  "Solar companies with weak post-sale handoffs between sales and operations",
  "Teams losing time to Slack searches, phone calls, and scattered customer notes",
  "Operators trying to reduce install friction, permitting misses, and preventable rework",
  "Owners who need more operational clarity without forcing a giant new platform rollout",
];

const traction = [
  "Sales-to-ops handoff cleanup",
  "Project context normalization",
  "Install and permitting readiness",
  "Customer expectation tracking",
];

export default function SolarOpsPage() {
  return (
    <main>
      <section className="splatHeroShell section premiumHero">
        <div className="heroInner premiumHeroCopy">
          <p className="eyebrow">HelioStack App</p>
          <h1>SolarOps</h1>
          <p className="heroCopy premiumLead">
            SolarOps turns messy post-sale solar handoffs into a cleaner
            operating record — so install, permitting, and customer follow-up
            teams can move faster with fewer mistakes.
          </p>
          <div className="miniTrustRow" aria-label="SolarOps highlights">
            {highlights.map(([value, label]) => (
              <div className="miniTrustItem" key={label}>
                <strong>{value}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
          <div className="actions">
            <a className="button primary" href="mailto:mattshekwork@gmail.com?subject=HelioStack%20Inquiry">
              Start a Conversation
              <ArrowRightIcon />
            </a>
            <a className="button secondary" href="#workflow">
              See How It Works
              <ArrowRightIcon />
            </a>
          </div>
        </div>

        <div className="heroVisualCard" aria-hidden="true">
          <div className="visualGlow visualGlowOne" />
          <div className="visualGlow visualGlowTwo" />
          <div className="visualHeader">
            <span className="visualBadge">Operations View</span>
            <span className="visualStatus">In Development</span>
          </div>
          <div className="flowRail">
            <div className="flowStep">
              <span className="flowIndex">01</span>
              <strong>Sale closes</strong>
            </div>
            <div className="flowStep">
              <span className="flowIndex">02</span>
              <strong>Context cleanup</strong>
            </div>
            <div className="flowStep">
              <span className="flowIndex">03</span>
              <strong>Ops handoff</strong>
            </div>
            <div className="flowStep">
              <span className="flowIndex">04</span>
              <strong>Project execution</strong>
            </div>
          </div>
          <div className="visualPanelGrid">
            <div className="visualPanel primaryPanel">
              <span className="panelLabel">Core Problem</span>
              <strong>Too much project truth lives outside the system.</strong>
              <p>SolarOps is built to reduce cleanup work after the sale.</p>
            </div>
            <div className="visualPanel">
              <span className="panelLabel">Operational Output</span>
              <strong>Cleaner operating context for install and permitting</strong>
              <p>Less guesswork, fewer internal pings, and faster readiness.</p>
            </div>
            <div className="visualPanel codePanel">
              <span className="panelLabel">Workflow</span>
              <code>sale → normalize → handoff → execute</code>
            </div>
          </div>
        </div>
      </section>

      <section className="section premiumIntroSection">
        <div className="sectionHeader narrow premiumSectionHeader">
          <p className="eyebrow">Why it matters</p>
          <h2>Solar projects get expensive when the handoff is vague.</h2>
          <p>
            After the sale closes, operations teams often inherit incomplete
            notes, scattered promises, and half-documented scope. SolarOps is
            designed to create a cleaner bridge from signed deal to executable
            project.
          </p>
        </div>
        <div className="detailGrid premiumDetailGrid premiumThreeGrid">
          {proofCards.map((card) => (
            <article className="detailCard premiumCard" key={card.title}>
              <span className="cardAccent" />
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="workflow">
        <div className="sectionHeader narrow premiumSectionHeader">
          <p className="eyebrow">Workflow</p>
          <h2>Built for the messy middle between closed deal and installed system.</h2>
          <p>
            The goal is straightforward: reduce reconstruction work before the
            job reaches install, permitting, and customer success.
          </p>
        </div>
        <div className="premiumTimeline premiumThreeGrid">
          {workflow.map((item) => (
            <article className="timelineCard" key={item.step}>
              <div className="timelineNumber">{item.step}</div>
              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="traction">
        <div className="sectionHeader narrow premiumSectionHeader">
          <p className="eyebrow">Product direction</p>
          <h2>A tighter operational layer for solar teams that already have enough tools.</h2>
          <p>
            SolarOps is aimed at workflow clarity, not dashboard theater. The
            value is in recovering the real project context that too often gets
            lost between signed contract and field execution.
          </p>
        </div>
        <div className="tractionGrid">
          {traction.map((item) => (
            <div className="tractionItem done" key={item}>
              <span className="tractionCheck">
                <CheckIcon />
              </span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section detailSplit premiumUseCases">
        <div>
          <p className="eyebrow">Best fit</p>
          <h2>For solar operators who need a clearer version of the project after the sale.</h2>
          <p>
            The strongest fit is any solar business where sales and operations
            are moving fast, but handoff quality is dragging down install
            readiness, internal alignment, and customer experience.
          </p>
        </div>
        <div className="detailList premiumList">
          {useCases.map((item) => (
            <div className="detailListItem premiumListItem" key={item}>
              <span className="detailBullet" />
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section premiumCtaSection">
        <div className="premiumCtaCard">
          <div>
            <p className="eyebrow">Next step</p>
            <h2>Start the conversation around a cleaner solar ops handoff.</h2>
            <p>
              SolarOps is in development, but the operational problem is real
              and common. If you want a tighter post-sale workflow for solar
              operations, HelioStack is open to pilots, partnerships, and early
              feedback.
            </p>
          </div>
          <div className="actions premiumCtaActions">
            <a className="button primary" href="mailto:mattshekwork@gmail.com?subject=HelioStack%20Inquiry">
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
        <a href="mailto:mattshekwork@gmail.com?subject=HelioStack%20Inquiry">Contact</a>
      </nav>
      <p>© 2026 HelioStack Technologies LLC. All rights reserved.</p>
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

function CheckIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="checkIcon">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}
