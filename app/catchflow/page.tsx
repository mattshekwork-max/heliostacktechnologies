import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CatchFlow | HelioStack Technologies",
  description:
    "CatchFlow turns missed calls, buried emails, and texts into a calm, prioritized follow-up queue for small service businesses.",
};

const features = [
  {
    title: "Signal ingest",
    description:
      "Bring missed calls, texts, and emails into one place instead of forcing teams to chase multiple inboxes.",
  },
  {
    title: "Priority sorting",
    description:
      "Use urgency, context, and simple AI-assisted summaries to surface what needs attention first.",
  },
  {
    title: "Action queue",
    description:
      "Turn noise into follow-up tasks with suggested replies, status tracking, and exportable workflow history.",
  },
];

const workflow = [
  {
    title: "Capture incoming signals",
    description:
      "Missed calls, emails, and texts are pulled into a shared intake flow instead of disappearing across tools.",
  },
  {
    title: "Summarize and prioritize",
    description:
      "Each item gets cleaned up into a usable brief so the next action is obvious, not buried in raw message clutter.",
  },
  {
    title: "Follow up with confidence",
    description:
      "Operators can work from one queue, close loops faster, and reduce lost revenue from delayed response.",
  },
];

const outcomes = [
  "Small service businesses that miss leads after hours or during busy field work",
  "Teams juggling multiple inboxes without a reliable follow-up process",
  "Operators who need a calmer daily queue instead of reactive message hunting",
  "Businesses that want lightweight AI help without adopting a huge platform",
];

const stats = [
  ["1", "Queue for calls, emails, and texts"],
  ["AI", "Urgency and summary assist"],
  ["Live", "Prototype available now"],
];

const dashboardColumns = {
  incoming: [
    "Missed call · New lead",
    "Forwarded email · Estimate request",
    "Text thread · Reschedule",
  ],
  priority: [
    "High · Missed call from repeat customer",
    "Medium · Solar lead asking for status",
    "Low · General inbox follow-up",
  ],
  next: [
    "Call back in 10 min",
    "Send estimate reply",
    "Confirm appointment window",
  ],
};

export default function CatchFlowPage() {
  return (
    <main>
      <section className="hero section premiumHero catchflowHeroShell">
        <div className="heroInner premiumHeroCopy">
          <p className="eyebrow">HelioStack App</p>
          <h1>CatchFlow</h1>
          <p className="heroCopy premiumLead">
            CatchFlow turns missed calls, buried emails, and texts into one calm
            follow-up queue so small service businesses can respond faster and
            stop letting revenue slip through the cracks.
          </p>
          <div className="miniTrustRow" aria-label="CatchFlow highlights">
            {stats.map(([value, label]) => (
              <div className="miniTrustItem" key={label}>
                <strong>{value}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
          <div className="actions">
            <a className="button primary" href="https://catchflow-ten.vercel.app">
              Open Prototype
              <ArrowUpRightIcon />
            </a>
            <a className="button secondary" href="#workflow">
              See How It Works
              <ArrowRightIcon />
            </a>
          </div>
        </div>

        <div className="heroVisualCard catchflowDashboardMock" aria-hidden="true">
          <div className="visualGlow visualGlowOne" />
          <div className="visualGlow visualGlowTwo" />
          <div className="visualHeader">
            <span className="visualBadge">Queue Preview</span>
            <span className="visualStatus">Live Prototype</span>
          </div>
          <div className="dashboardSummaryBar">
            <div className="dashboardMetric">
              <span>Unread signals</span>
              <strong>18</strong>
            </div>
            <div className="dashboardMetric">
              <span>Urgent follow-ups</span>
              <strong>5</strong>
            </div>
            <div className="dashboardMetric">
              <span>Recovered today</span>
              <strong>$3.4k</strong>
            </div>
          </div>
          <div className="dashboardColumns">
            <div className="dashboardColumn">
              <div className="dashboardColumnHeader">
                <strong>Incoming</strong>
                <span>3 new</span>
              </div>
              {dashboardColumns.incoming.map((item) => (
                <div className="dashboardItem" key={item}>{item}</div>
              ))}
            </div>
            <div className="dashboardColumn priorityColumn">
              <div className="dashboardColumnHeader">
                <strong>Priority queue</strong>
                <span>Needs action</span>
              </div>
              {dashboardColumns.priority.map((item) => (
                <div className="dashboardItem priorityItem" key={item}>{item}</div>
              ))}
            </div>
            <div className="dashboardColumn">
              <div className="dashboardColumnHeader">
                <strong>Next actions</strong>
                <span>Suggested</span>
              </div>
              {dashboardColumns.next.map((item) => (
                <div className="dashboardItem" key={item}>{item}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section premiumIntroSection">
        <div className="sectionHeader narrow premiumSectionHeader">
          <p className="eyebrow">Problem</p>
          <h2>Leads go cold when the follow-up system is scattered.</h2>
          <p>
            Service businesses often lose opportunities not because demand is low,
            but because signals arrive through too many channels. CatchFlow is
            designed to create one operational surface for the work that usually
            gets missed, delayed, or forgotten.
          </p>
        </div>
        <div className="detailGrid premiumDetailGrid">
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
          <h2>Built to reduce chaos without adding more software chaos.</h2>
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
          <h2>For operators who need a calmer follow-up machine.</h2>
          <p>
            CatchFlow is best suited for small service businesses where speed,
            consistency, and response discipline directly affect revenue.
          </p>
        </div>
        <div className="detailList premiumList">
          {outcomes.map((item) => (
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
            <p className="eyebrow">Live now</p>
            <h2>Try the prototype or talk through the workflow.</h2>
            <p>
              CatchFlow is already far enough along to show the product shape.
              The current prototype demonstrates the queue-first workflow and the
              calmer operating model behind it.
            </p>
          </div>
          <div className="actions premiumCtaActions">
            <a className="button primary" href="https://catchflow-ten.vercel.app">
              Open Prototype
              <ArrowUpRightIcon />
            </a>
            <a className="button secondary" href="mailto:support@heliostacktechnologies.com">
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
