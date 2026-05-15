import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pick.UP | HelioStack Technologies",
  description:
    "Pick.UP is an AI phone receptionist for small service businesses that answers calls, captures intent, and keeps follow-up clean.",
};

const features = [
  {
    title: "Always-on answering",
    description:
      "Pick.UP helps small businesses respond even when the owner is driving, on a job, or handling another customer.",
  },
  {
    title: "Intent capture",
    description:
      "Instead of losing the context of a call, Pick.UP records why someone called and turns it into something useful.",
  },
  {
    title: "Clean follow-up",
    description:
      "Call summaries and structured details make it easier to call people back fast and keep better records.",
  },
];

const workflow = [
  {
    title: "Answer the call",
    description:
      "When the line is missed or the team is busy, Pick.UP steps in to greet the caller and keep the conversation moving.",
  },
  {
    title: "Capture the reason",
    description:
      "The system gathers the caller's intent, relevant details, and the core context needed for a real follow-up.",
  },
  {
    title: "Deliver the recap",
    description:
      "Owners get a cleaner summary they can actually use instead of a vague voicemail and a pile of disconnected notes.",
  },
];

const useCases = [
  "Service businesses that miss calls while on jobs or in the field",
  "Owners who need better records of inbound leads and customer questions",
  "Teams that want faster response without hiring a full front-desk layer first",
  "Operators who want practical AI help tied to revenue-generating conversations",
];

const stats = [
  ["24/7", "AI call coverage"],
  ["Fast", "Follow-up summaries"],
  ["Live", "Product site available now"],
];

const flow = ["Caller", "AI Answer", "Intent Capture", "Summary"];

export default function PickUpPage() {
  return (
    <main>
      <section className="hero section premiumHero">
        <div className="heroInner premiumHeroCopy">
          <p className="eyebrow">HelioStack App</p>
          <h1>Pick.UP</h1>
          <p className="heroCopy premiumLead">
            An AI phone receptionist built for small service businesses that need
            to answer more calls, capture customer intent clearly, and follow up
            without the usual phone-tag chaos.
          </p>
          <div className="miniTrustRow" aria-label="Pick.UP highlights">
            {stats.map(([value, label]) => (
              <div className="miniTrustItem" key={label}>
                <strong>{value}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
          <div className="actions">
            <a className="button primary" href="https://pickuphone.com">
              Visit Pick.UP
              <ArrowUpRightIcon />
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
            <span className="visualBadge">Call Flow</span>
            <span className="visualStatus">Active</span>
          </div>
          <div className="flowRail">
            {flow.map((item, index) => (
              <div className="flowStep" key={item}>
                <span className="flowIndex">0{index + 1}</span>
                <strong>{item}</strong>
              </div>
            ))}
          </div>
          <div className="visualPanelGrid">
            <div className="visualPanel primaryPanel">
              <span className="panelLabel">Front Desk Layer</span>
              <strong>Answer first, route cleanly, miss less.</strong>
              <p>Built for operators who cannot sit by the phone all day.</p>
            </div>
            <div className="visualPanel">
              <span className="panelLabel">Conversation Output</span>
              <strong>Structured summaries instead of vague voicemail</strong>
              <p>Intent, context, and follow-up signal stay visible after the call.</p>
            </div>
            <div className="visualPanel codePanel">
              <span className="panelLabel">Operating Flow</span>
              <code>answer → capture → summarize → follow up</code>
            </div>
          </div>
        </div>
      </section>

      <section className="section premiumIntroSection">
        <div className="sectionHeader narrow premiumSectionHeader">
          <p className="eyebrow">Why it matters</p>
          <h2>Missed calls are often missed revenue.</h2>
          <p>
            For small service businesses, the phone is still one of the highest
            leverage channels. Pick.UP is designed to make sure important calls
            get answered, understood, and turned into actionable next steps.
          </p>
        </div>
        <div className="detailGrid premiumDetailGrid premiumThreeGrid">
          {features.map((feature) => (
            <article className="detailCard premiumCard" key={feature.title}>
              <span className="cardAccent" />
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="workflow">
        <div className="sectionHeader narrow premiumSectionHeader">
          <p className="eyebrow">Workflow</p>
          <h2>Built for busy operators, not call-center theater.</h2>
        </div>
        <div className="premiumTimeline premiumThreeGrid">
          {workflow.map((step, index) => (
            <article className="timelineCard" key={step.title}>
              <div className="timelineNumber">0{index + 1}</div>
              <div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section detailSplit premiumUseCases">
        <div>
          <p className="eyebrow">Best fit</p>
          <h2>For businesses that cannot afford to let the phone slip.</h2>
          <p>
            Pick.UP fits best where every missed inbound call can mean lost
            revenue, slower response times, or weaker customer trust.
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
            <p className="eyebrow">Live product</p>
            <h2>Visit the site or start the conversation.</h2>
            <p>
              Pick.UP is one of HelioStack's live products and the clearest example
              of our operator-first software direction.
            </p>
          </div>
          <div className="actions premiumCtaActions">
            <a className="button primary" href="https://pickuphone.com">
              Visit Pick.UP
              <ArrowUpRightIcon />
            </a>
            <a className="button secondary" href="/contact#contact-form">
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
        <a href="/contact#contact-form">Contact</a>
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

function ArrowUpRightIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M7 7h10v10" />
      <path d="M7 17 17 7" />
    </svg>
  );
}
