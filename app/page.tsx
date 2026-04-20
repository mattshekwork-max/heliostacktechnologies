const ventures = [
  {
    category: "AI Receptionist",
    name: "Pick.UP",
    description:
      "An AI phone receptionist for small service businesses that answers calls, captures intent, and sends clean follow-up summaries.",
    status: "Active",
    tone: "active",
    href: "https://pickuphone.com",
  },
  {
    category: "Solar Operations",
    name: "SolarOps",
    description:
      "Workflow tools for turning messy post-sale solar handoffs into operations-ready project context.",
    status: "In Development",
    tone: "building",
    href: "#contact",
  },
];

const principles = [
  {
    title: "Software That Works",
    description:
      "We build practical tools that reduce missed calls, lost details, repeated admin work, and handoff friction.",
    icon: LightbulbIcon,
  },
  {
    title: "Fast, Useful Launches",
    description:
      "Our focus is shipping small, dependable products first, then improving them with real customer feedback.",
    icon: RocketIcon,
  },
  {
    title: "Small Business First",
    description:
      "The work is shaped around owners and operators who need clear systems, not another complicated dashboard.",
    icon: UsersIcon,
  },
];

const stats = [
  ["1", "Active Product"],
  ["2+", "Years Building"],
  ["3", "Core Service Areas"],
  ["100%", "Operator Focus"],
];

export default function Home() {
  return (
    <main>
      <section className="hero section">
        <div className="heroInner">
          <p className="eyebrow">Software, Automation, IT</p>
          <h1>Building useful systems for small business operators.</h1>
          <p className="heroCopy">
            HelioStack Technologies LLC builds SaaS products, AI workflow tools,
            and practical technology services for businesses that need clearer
            operations and faster follow-up.
          </p>
          <div className="actions">
            <a className="button primary" href="#portfolio">
              View Portfolio
              <ArrowRightIcon />
            </a>
            <a className="button secondary" href="#contact">
              Start a Conversation
            </a>
          </div>
        </div>
      </section>

      <section aria-label="Company metrics" className="stats">
        {stats.map(([value, label]) => (
          <div className="stat" key={label}>
            <strong>{value}</strong>
            <span>{label}</span>
          </div>
        ))}
      </section>

      <section className="section" id="portfolio">
        <div className="sectionHeader">
          <p className="eyebrow">Portfolio</p>
          <h2>Companies and products we are building</h2>
        </div>
        <div className="portfolioGrid">
          {ventures.map((venture) => (
            <a className="ventureCard" href={venture.href} key={venture.name}>
              <div>
                <div className="cardTop">
                  <div>
                    <span className="tag">{venture.category}</span>
                    <h3>{venture.name}</h3>
                  </div>
                  <span className="circleArrow">
                    <ArrowUpRightIcon />
                  </span>
                </div>
                <p>{venture.description}</p>
              </div>
              <div className="status">
                <span className={venture.tone} />
                {venture.status}
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="section about" id="about">
        <div>
          <p className="eyebrow">About</p>
          <h2>A small venture studio with operator DNA.</h2>
          <p>
            HelioStack Technologies LLC is built around hands-on experience in
            service work, solar, IT, and software. We look for everyday business
            friction and turn it into focused products.
          </p>
          <p>
            Our first priority is Pick.UP, an AI phone receptionist designed to
            help small businesses respond faster and keep better records of
            every call.
          </p>
        </div>
        <div className="principles">
          {principles.map(({ title, description, icon: Icon }) => (
            <div className="principle" key={title}>
              <span className="principleIcon">
                <Icon />
              </span>
              <div>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="contact section" id="contact">
        <div className="contactIcon">
          <MailIcon />
        </div>
        <h2>Let&apos;s build something useful.</h2>
        <p>
          Partnerships, product questions, IT support, and early customer
          conversations are welcome.
        </p>
        <a className="button primary" href="mailto:support@heliostacktechnologies.com">
          Contact HelioStack
          <ArrowRightIcon />
        </a>
      </section>

      <SiteFooter />
    </main>
  );
}

function SiteHeader() {
  return (
    <header className="siteHeader">
      <a className="brand" href="#">
        <span className="brandMark">H</span>
        <span>HelioStack Technologies</span>
      </a>
      <nav aria-label="Primary navigation">
        <a href="#portfolio">Portfolio</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="siteFooter">
      <a className="brand" href="#">
        <span className="brandMark">H</span>
        <span>HelioStack Technologies</span>
      </a>
      <nav aria-label="Footer navigation">
        <a href="#portfolio">Portfolio</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
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

function LightbulbIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
      <path d="M9 18h6" />
      <path d="M10 22h4" />
    </svg>
  );
}

function RocketIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  );
}

function UsersIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <path d="M16 3.128a4 4 0 0 1 0 7.744" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <circle cx="9" cy="7" r="4" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
      <rect height="16" rx="2" width="20" x="2" y="4" />
    </svg>
  );
}
