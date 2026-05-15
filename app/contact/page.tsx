import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | HelioStack Technologies",
  description:
    "Start a conversation with HelioStack Technologies about products, partnerships, IT support, or early customer work.",
};

export default function ContactPage() {
  return (
    <main>
      <section className="hero section premiumHero">
        <div className="heroInner premiumHeroCopy">
          <p className="eyebrow">Contact</p>
          <h1>Start the conversation.</h1>
          <p className="heroCopy premiumLead">
            If you want to talk product, pilots, partnerships, or practical IT
            work, send a note here and HelioStack will follow up directly.
          </p>
          <div className="actions">
            <a className="button secondary" href="/">
              Back to Home
            </a>
          </div>
        </div>
      </section>

      <section className="section premiumCtaSection">
        <div className="premiumCtaCard splatCtaCard">
          <div>
            <p className="eyebrow">Reach out</p>
            <h2>A real contact path — not an empty mail draft.</h2>
            <p>
              If someone wants to reach HelioStack, this should open a direct
              email to Matt so he can respond personally.
            </p>
            <div className="detailList premiumList">
              {[
                "Product questions and live demos",
                "Partnerships and pilot conversations",
                "IT support and practical automation work",
              ].map((item) => (
                <div className="detailListItem premiumListItem" key={item}>
                  <span className="detailBullet" />
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="ctaFormSide splatFormShell">
            <div className="formSuccess">
              <strong>Email HelioStack directly.</strong>
              <p>mattshekwork@gmail.com</p>
              <a className="button primary" href="mailto:mattshekwork@gmail.com?subject=HelioStack%20Inquiry">
                Open Email
              </a>
            </div>
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
