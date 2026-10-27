import { useState, type FormEvent } from "react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  CheckCircle2,
  ChevronDown,
  Code2,
  Computer,
  Globe2,
  Laptop,
  Layers3,
  Mail,
  Menu,
  MessageCircle,
  MonitorCog,
  Palette,
  PenTool,
  Search,
  Send,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Wrench,
  X,
  Zap,
  Moon,
  Sun,
} from "lucide-react";

type ServiceKey =
  | "Landing Page"
  | "Starter Website"
  | "Standard Website"
  | "Advanced Website"
  | "E-commerce Website"
  | "Custom Website"
  | "IT Solutions"
  | "Graphic Design & Branding";
type Package = {
  name: ServiceKey;
  price: string;
  short: string;
  bestFor: string;
  icon: typeof Globe2;
  features: string[];
  admin: string;
  note?: string;
  maintenance?: string;
  popular?: boolean;
};

const packages: Package[] = [
  {
    name: "Landing Page",
    price: "₦35,000–₦50,000",
    short: "One focused page built around one clear goal.",
    bestFor:
      "A product launch, campaign, event, single service or special offer.",
    icon: Layers3,
    features: [
      "A clear headline and offer section",
      "Product or service details and benefits",
      "Mobile-friendly layout",
      "WhatsApp button or enquiry form",
      "Call-to-action such as Book Now or Get a Quote",
      "Basic Google SEO setup",
    ],
    admin:
      "No custom admin dashboard by default. This is a focused page, not a multi-page website.",
    note: "Domain registration and hosting are excluded and quoted separately.",
  },
  {
    name: "Starter Website",
    price: "₦65,000–₦85,000",
    short: "A professional starting point for your online presence.",
    bestFor:
      "Individuals, small businesses, new ventures and service providers.",
    icon: Globe2,
    features: [
      "Responsive business website with agreed core pages",
      "Business information, services and contact details",
      "WhatsApp integration and basic enquiry functionality",
      "Clean, easy-to-navigate layout",
      "Basic Google SEO setup",
      "Essential page titles and descriptions",
    ],
    admin:
      "No custom admin dashboard. Content changes can be requested from Ayotech Solutions and scoped separately.",
    note: "Domain registration and third-party hosting are excluded and billed separately.",
  },
  {
    name: "Standard Website",
    price: "₦95,000–₦150,000",
    short: "More room to explain your services and build trust.",
    bestFor:
      "Growing businesses that need more pages and a richer presentation.",
    icon: MonitorCog,
    features: [
      "Everything in the Starter package",
      "More pages and expanded service information",
      "Customised page layouts and navigation",
      "Gallery or portfolio where required",
      "Improved contact and customer enquiry features",
      "Basic Google SEO setup",
    ],
    admin:
      "No custom admin dashboard. Dashboard functionality requires the Advanced package or a separately agreed scope.",
    note: "Domain registration and third-party hosting are excluded and billed separately.",
  },
  {
    name: "Advanced Website",
    price: "₦160,000–₦250,000",
    short: "More control, tailored features and stronger search foundations.",
    bestFor:
      "Businesses that need custom functionality or manage parts of their operations online.",
    icon: Code2,
    features: [
      "Customised, feature-rich website",
      "Admin dashboard where required by agreed features",
      "Tailored forms, integrations and business workflows",
      "Google SEO foundations",
      "AI-search optimisation foundations",
      "Responsive design and usability checks",
      "One month of free website maintenance*",
    ],
    admin:
      "Admin dashboard included where required by the agreed features and project scope.",
    maintenance: "*One month of free maintenance. Terms and conditions apply.",
    note: "Domain registration, third-party hosting and paid external services are separate costs.",
  },
  {
    name: "E-commerce Website",
    price: "₦200,000–₦350,000",
    short: "A practical online store for showcasing and selling products.",
    bestFor:
      "Businesses that want customers to browse products and place orders online.",
    icon: ShoppingBag,
    features: [
      "Product catalogue and product pages",
      "Shopping cart and order placement",
      "Checkout and payment gateway integration where supported",
      "Admin dashboard for products and orders",
      "Google SEO and AI-search optimisation foundations",
      "Product-page optimisation as agreed",
      "Two months of free website maintenance*",
    ],
    admin:
      "Admin dashboard for managing products, orders and agreed store operations.",
    maintenance: "*Two months of free maintenance. Terms and conditions apply.",
    note: "Domain registration, hosting, payment-provider charges and other third-party fees are separate costs.",
  },
  {
    name: "Custom Website",
    price: "Request a quotation",
    short: "A tailored solution for requirements outside the listed packages.",
    bestFor:
      "Projects with unique features, integrations, dashboards or workflows.",
    icon: Sparkles,
    features: [
      "Your requirements reviewed individually",
      "Features and pages defined around your needs",
      "Admin dashboard if required",
      "Integrations and workflow planning",
      "A tailored scope and quotation before work begins",
    ],
    admin:
      "Admin dashboard, maintenance and other features are included only when agreed in the written project scope.",
    note: "Domain, hosting and third-party costs are itemised separately where applicable.",
  },
];

const websiteServices = packages.map((p) => p.name);
const serviceOptions: ServiceKey[] = [
  ...websiteServices,
  "IT Solutions",
  "Graphic Design & Branding",
];

function PackageDetails({
  selectedPackage,
  onChoose,
}: {
  selectedPackage?: Package;
  onChoose: () => void;
}) {
  if (!selectedPackage) return null;
  return (
    <>
      <div className="detail-top">
        <div className="detail-label">
          <span className="detail-dot" /> SELECTED PACKAGE
        </div>
        <div className="detail-check">
          <CheckCircle2 size={17} /> Selected for your enquiry
        </div>
      </div>
      <h3>{selectedPackage.name}</h3>
      <div className="detail-price">{selectedPackage.price}</div>
      <p className="detail-short">{selectedPackage.short}</p>
      <div className="best-for">
        <span>IDEAL FOR</span>
        <p>{selectedPackage.bestFor}</p>
      </div>
      <div className="included-heading">What this package includes</div>
      <ul className="feature-list">
        {selectedPackage.features.map((feature) => (
          <li key={feature}>
            <span>
              <Check size={14} />
            </span>
            {feature}
          </li>
        ))}
      </ul>
      {["Advanced Website", "E-commerce Website"].includes(
        selectedPackage.name,
      ) && (
        <div className="admin-note">
          <div className="admin-note-icon">
            <MonitorCog size={19} />
          </div>
          <div>
            <strong>Admin dashboard</strong>
            <p>{selectedPackage.admin}</p>
          </div>
        </div>
      )}
      {selectedPackage.maintenance && (
        <div className="maintenance-note">
          <ShieldCheck size={16} />
          <span>{selectedPackage.maintenance}</span>
        </div>
      )}
      <div className="price-note">
        <ShieldCheck size={16} />
        <span>{selectedPackage.note}</span>
      </div>
      <div className="detail-footer">
        <span>
          <span className="small-check">
            <Check size={12} />
          </span>{" "}
          Scope confirmed before work begins
        </span>
        <button className="button button-primary" onClick={onChoose}>
          Choose this package <ArrowRight size={16} />
        </button>
      </div>
    </>
  );
}

function App() {
  const [activePackage, setActivePackage] =
    useState<ServiceKey>("Landing Page");
  const [selectedService, setSelectedService] =
    useState<ServiceKey>("Landing Page");
  const [mobileMenu, setMobileMenu] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    try {
      return localStorage.getItem("ayotech-theme") === "dark";
    } catch {
      return false;
    }
  });
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    organisation: "",
    budget: "",
    timeline: "",
    details: "",
    channel: "email" as "email" | "whatsapp",
  });
  const [sending, setSending] = useState(false);
  const [notice, setNotice] = useState<{
    type: "success" | "error" | "info";
    text: string;
  } | null>(null);

  const selectedPackage = packages.find((p) => p.name === activePackage);
  const updateForm = (key: keyof typeof form, value: string) =>
    setForm((prev) => ({ ...prev, [key]: value }));
  const packageBrief = (p: Package) =>
    `I'm interested in the ${p.name} package (${p.price}).\n\nPackage overview: ${p.short}\nIdeal for: ${p.bestFor}\n\nIncluded features:\n${p.features.map((f) => `• ${f}`).join("\n")}${p.maintenance ? `\n\nMaintenance: ${p.maintenance}` : ""}\n\nPlease confirm the final scope, timeline and any separate domain/hosting or third-party costs.`;
  const choosePackage = (p: Package) => {
    setActivePackage(p.name);
    setSelectedService(p.name);
    setForm((prev) => ({
      ...prev,
      details: packageBrief(p),
      budget:
        p.price === "Request a quotation"
          ? "Not sure yet"
          : p.price.includes("₦35,000")
            ? "Below ₦50,000"
            : p.price.includes("₦65,000")
              ? "₦50,000–₦100,000"
              : p.price.includes("₦95,000")
                ? "₦100,000–₦200,000"
                : "₦200,000–₦350,000",
    }));
    setNotice(null);
  };
  const toggleTheme = () => {
    setDarkMode((current) => {
      const next = !current;
      try {
        localStorage.setItem("ayotech-theme", next ? "dark" : "light");
      } catch {}
      return next;
    });
  };
  const scrollToBooking = (service?: ServiceKey) => {
    if (service) {
      setSelectedService(service);
      if (websiteServices.includes(service)) setActivePackage(service);
    }
    document
      .getElementById("booking")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
    setMobileMenu(false);
  };

  const buildMessage = () => {
    const p = packages.find((item) => item.name === selectedService);
    return [
      "Hello Ayotech Solutions, I would like to make an enquiry.",
      "",
      `Service: ${selectedService}`,
      p ? `Package price: ${p.price}` : "",
      `Name: ${form.name}`,
      `Email: ${form.email || "Not provided"}`,
      `Phone: ${form.phone}`,
      `Business/Organisation: ${form.organisation || "Not provided"}`,
      `Budget: ${form.budget || "Not specified"}`,
      `Preferred timeline: ${form.timeline || "Not specified"}`,
      `Project details: ${form.details}`,
    ]
      .filter(Boolean)
      .join("\n");
  };

  const submitEnquiry = async (e: FormEvent) => {
    e.preventDefault();
    setNotice(null);
    if (!form.name.trim() || !form.phone.trim() || !form.details.trim()) {
      setNotice({
        type: "error",
        text: "Please add your name, phone number and a short description of what you need.",
      });
      return;
    }
    const message = buildMessage();
    if (form.channel === "whatsapp") {
      window.open(
        `https://wa.me/2347063788674?text=${encodeURIComponent(message)}`,
        "_blank",
        "noopener,noreferrer",
      );
      setNotice({
        type: "info",
        text: "WhatsApp has opened with your enquiry prepared. Please press Send in WhatsApp to deliver it to Ayotech Solutions.",
      });
      return;
    }
    const subject = `Website enquiry: ${selectedService}`;
    const body = [
      "Hello Ayotech Solutions, I would like to make an enquiry.",
      "",
      `Service/package: ${selectedService}`,
      `Package price: ${selectedPackage?.price ?? "To be quoted"}`,
      `Name: ${form.name}`,
      `Email: ${form.email || "Not provided"}`,
      `Phone/WhatsApp: ${form.phone}`,
      `Business/organisation: ${form.organisation || "Not provided"}`,
      `Budget: ${form.budget || "Not specified"}`,
      `Preferred timeline: ${form.timeline || "Not specified"}`,
      "",
      "Project requirements:",
      form.details,
    ].join("\n");
    window.location.href = `mailto:bookayotechsolutions@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setNotice({
      type: "info",
      text: "Your email app should open with the enquiry filled in. Review it and press Send in your email app. This website does not send email in the background.",
    });
  };

  return (
    <div className={`site-shell ${darkMode ? "dark-mode" : ""}`}>
      <div className="top-strip">
        <div className="container strip-inner">
          <span>
            <span className="live-dot" /> Practical technology for businesses
            and individuals
          </span>
          <div className="strip-links">
            <a href="mailto:bookayotechsolutions@gmail.com">
              <Mail size={14} /> bookayotechsolutions@gmail.com
            </a>
            <a
              href="https://wa.me/2347063788674"
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle size={14} /> Chat with us
            </a>
          </div>
        </div>
      </div>
      <header className="site-header">
        <div className="container nav-inner">
          <a className="brand" href="#home" aria-label="Ayotech Solutions home">
            <img
              src="/ayotech-logo.jpg"
              alt="Ayotech Solutions — IT Solution, Web/App Development, Graphic Designs"
            />
          </a>
          <nav
            className={mobileMenu ? "main-nav is-open" : "main-nav"}
            aria-label="Main navigation"
          >
            <a href="#services" onClick={() => setMobileMenu(false)}>
              Services
            </a>
            <a href="#websites" onClick={() => setMobileMenu(false)}>
              Website packages
            </a>
            <a href="#process" onClick={() => setMobileMenu(false)}>
              How it works
            </a>
            <a href="#about" onClick={() => setMobileMenu(false)}>
              About
            </a>
            <button
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label={
                darkMode ? "Switch to light mode" : "Switch to dark mode"
              }
              title={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {darkMode ? <Sun size={17} /> : <Moon size={17} />}
              <span>{darkMode ? "Light mode" : "Dark mode"}</span>
            </button>
            <button
              className="button button-primary nav-cta"
              onClick={() => scrollToBooking()}
            >
              Book a service <ArrowUpRight size={16} />
            </button>
          </nav>
          <button
            className="menu-toggle"
            onClick={() => setMobileMenu((v) => !v)}
            aria-label={mobileMenu ? "Close menu" : "Open menu"}
          >
            {mobileMenu ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-grid" aria-hidden="true" />
          <div className="container hero-layout">
            <div className="hero-copy">
              <div className="eyebrow">
                <span className="eyebrow-mark">
                  <Sparkles size={14} />
                </span>{" "}
                TECHNOLOGY THAT MOVES YOU FORWARD
              </div>
              <h1>
                Bring your ideas to life.
                <br />
                <span>Build your next step.</span>
              </h1>
              <p className="hero-lede">
                From a professional website to dependable IT support and
                standout design, we help you turn what you have in mind into
                something useful, clear and ready for the real world.
              </p>
              <div className="hero-actions">
                <button
                  className="button button-primary button-large"
                  onClick={() => scrollToBooking()}
                >
                  Tell us what you need <ArrowRight size={18} />
                </button>
                <a className="text-link" href="#services">
                  Explore our services <ArrowDown size={16} />
                </a>
              </div>
              <div className="hero-proof">
                <div className="proof-icon">
                  <ShieldCheck size={19} />
                </div>
                <div>
                  <strong>Clear scope. Practical solutions.</strong>
                  <span>
                    Every project starts with understanding what you need.
                  </span>
                </div>
              </div>
            </div>
            <div
              className="hero-art"
              aria-label="Illustration of a modern website interface"
            >
              <div className="art-orbit orbit-one" />
              <div className="art-orbit orbit-two" />
              <div className="art-spark spark-a">✳</div>
              <div className="art-spark spark-b">✦</div>
              <div className="browser-card">
                <div className="browser-top">
                  <div className="window-dots">
                    <i />
                    <i />
                    <i />
                  </div>
                  <div className="address-bar">
                    <ShieldCheck size={11} /> ayotechsolutions
                  </div>
                  <div className="browser-menu">
                    <span />
                    <span />
                    <span />
                  </div>
                </div>
                <div className="browser-content">
                  <div className="browser-side">
                    <div className="side-logo">
                      <span>A</span>
                    </div>
                    <i />
                    <i />
                    <i />
                    <i />
                  </div>
                  <div className="browser-main">
                    <div className="mini-label">YOUR DIGITAL PRESENCE</div>
                    <div className="mini-title">
                      Ideas into
                      <br />
                      <b>impact.</b>
                    </div>
                    <div className="mini-copy">
                      A clear online home for your business.
                    </div>
                    <div className="mini-button">
                      Get started <ArrowRight size={10} />
                    </div>
                    <div className="mini-stats">
                      <div>
                        <b>01</b>
                        <span>Design</span>
                      </div>
                      <div>
                        <b>02</b>
                        <span>Build</span>
                      </div>
                      <div>
                        <b>03</b>
                        <span>Grow</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="floating-chip chip-code">
                <div className="chip-icon blue">
                  <Code2 size={18} />
                </div>
                <div>
                  <b>Web development</b>
                  <span>Made for your goals</span>
                </div>
                <CheckCircle2 size={16} className="chip-check" />
              </div>
              <div className="floating-chip chip-support">
                <div className="chip-icon navy">
                  <MonitorCog size={18} />
                </div>
                <div>
                  <b>IT support</b>
                  <span>Help when you need it</span>
                </div>
                <span className="chip-status">READY</span>
              </div>
              <div className="hero-blue-orb" />
              <div className="hero-white-orb" />
            </div>
          </div>
          <div className="container hero-bottom">
            <div className="hero-bottom-item">
              <Globe2 size={17} />
              <span>Websites that work for you</span>
            </div>
            <div className="hero-bottom-item">
              <Wrench size={17} />
              <span>Practical IT solutions</span>
            </div>
            <div className="hero-bottom-item">
              <Palette size={17} />
              <span>Design that builds your brand</span>
            </div>
          </div>
        </section>

        <section className="section services-section" id="services">
          <div className="container">
            <div className="section-heading">
              <div>
                <div className="eyebrow">WHAT WE DO</div>
                <h2>
                  One partner for your
                  <br />
                  <span>digital essentials.</span>
                </h2>
              </div>
              <p>
                Whether you are starting from scratch or improving what you
                already have, choose the service that fits your next step.
              </p>
            </div>
            <div className="service-grid">
              <article className="service-card service-web">
                <div className="service-icon">
                  <Globe2 size={22} />
                </div>
                <div className="service-kicker">01 / ONLINE PRESENCE</div>
                <h3>Website Development</h3>
                <p>
                  Professional, mobile-friendly websites that explain what you
                  offer and make it easy for customers to contact you.
                </p>
                <ul>
                  <li>Business and service websites</li>
                  <li>Landing pages and online stores</li>
                  <li>Google SEO and AI-search foundations</li>
                </ul>
                <button
                  className="card-link"
                  onClick={() => {
                    setSelectedService("Landing Page");
                    document
                      .getElementById("websites")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Explore website packages <ArrowRight size={16} />
                </button>
                <div className="service-decoration web-decoration">
                  <div className="deco-window">
                    <span />
                    <span />
                    <span />
                    <div className="deco-line long" />
                    <div className="deco-line" />
                    <div className="deco-button" />
                  </div>
                </div>
              </article>
              <article className="service-card service-it">
                <div className="service-icon">
                  <Laptop size={22} />
                </div>
                <div className="service-kicker">02 / KEEP THINGS WORKING</div>
                <h3>IT Solutions</h3>
                <p>
                  Practical technical support for everyday technology and the
                  systems your work depends on.
                </p>
                <ul>
                  <li>Computer and software installation</li>
                  <li>Troubleshooting and system maintenance</li>
                  <li>Website maintenance and technical support</li>
                </ul>
                <button
                  className="card-link"
                  onClick={() => scrollToBooking("IT Solutions")}
                >
                  Discuss an IT issue <ArrowRight size={16} />
                </button>
                <div className="service-decoration it-decoration">
                  <div className="device">
                    <div className="device-screen">
                      <Wrench size={28} />
                    </div>
                    <div className="device-stand" />
                  </div>
                </div>
              </article>
              <article className="service-card service-design">
                <div className="service-icon">
                  <PenTool size={22} />
                </div>
                <div className="service-kicker">03 / VISUAL IDENTITY</div>
                <h3>Graphic Design & Branding</h3>
                <p>
                  Thoughtful visual design that helps your business look
                  consistent, credible and recognisable.
                </p>
                <ul>
                  <li>Logo and brand identity design</li>
                  <li>Flyers, posters and business cards</li>
                  <li>Social media graphics and company profiles</li>
                </ul>
                <button
                  className="card-link"
                  onClick={() => scrollToBooking("Graphic Design & Branding")}
                >
                  Plan a design project <ArrowRight size={16} />
                </button>
                <div className="service-decoration design-decoration">
                  <div className="palette-shape">
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                  </div>
                  <div className="design-pencil">
                    <PenTool size={27} />
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="section packages-section" id="websites">
          <div className="container">
            <div className="section-heading packages-heading">
              <div>
                <div className="eyebrow">WEBSITE DEVELOPMENT</div>
                <h2>
                  Choose the right
                  <br />
                  <span>website package.</span>
                </h2>
              </div>
              <p>
                Tap a package to select it and see exactly what is included. If
                your needs are different, tell us about a custom project.
              </p>
            </div>
            <div className="package-layout">
              <div
                className="package-list"
                role="radiogroup"
                aria-label="Website packages"
              >
                {packages.map((p, index) => {
                  const Icon = p.icon;
                  const isActive = activePackage === p.name;
                  return (
                    <div
                      className={`package-item ${isActive ? "is-active" : ""}`}
                      key={p.name}
                    >
                      <button
                        className={`package-option ${isActive ? "selected" : ""}`}
                        role="radio"
                        aria-checked={isActive}
                        onClick={() => choosePackage(p)}
                      >
                        <span className="package-number">0{index + 1}</span>
                        <span className="package-icon">
                          <Icon size={20} />
                        </span>
                        <span className="package-option-copy">
                          <strong>{p.name}</strong>
                          <small>{p.short}</small>
                        </span>
                        <span className="package-price-mini">{p.price}</span>
                        <span
                          className={`package-radio ${isActive ? "checked" : ""}`}
                        >
                          {isActive && <Check size={13} />}
                        </span>
                      </button>
                      <div className="package-detail package-detail-inline">
                        <PackageDetails
                          selectedPackage={p}
                          onChoose={() => scrollToBooking(p.name)}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
              <div
                className="package-detail package-detail-desktop"
                key={activePackage}
              >
                <PackageDetails
                  selectedPackage={selectedPackage}
                  onChoose={() =>
                    selectedPackage && scrollToBooking(selectedPackage.name)
                  }
                />
              </div>
            </div>
            <div className="seo-explainer">
              <div className="seo-symbol">
                <Search size={23} />
                <Sparkles size={15} />
              </div>
              <div>
                <h3>What do Google SEO and AI-search optimisation mean?</h3>
                <p>
                  <strong>Google SEO</strong> means organising your website's
                  pages, titles and information so Google can better understand
                  your business and consider it for relevant searches.{" "}
                  <strong>AI-search optimisation</strong> means structuring your
                  content so AI-powered search tools can better interpret what
                  you do and may surface your business when relevant. Neither
                  guarantees rankings or recommendations.
                </p>
              </div>
              <div className="seo-badges">
                <span>
                  <Search size={13} /> Google search
                </span>
                <span>
                  <Sparkles size={13} /> AI search
                </span>
              </div>
            </div>
            <p className="pricing-footnote">
              All package prices are in Nigerian naira. Domain registration and
              third-party hosting are not included and will be identified and
              quoted separately where applicable. Payment-provider charges, paid
              integrations and other third-party fees may also apply. Final
              scope and price are confirmed before work begins.
            </p>
          </div>
        </section>

        <section className="maintenance-band">
          <div className="container maintenance-inner">
            <div className="maintenance-icon">
              <ShieldCheck size={25} />
            </div>
            <div>
              <div className="eyebrow">SUPPORT AFTER LAUNCH</div>
              <h2>Built is only the beginning.</h2>
              <p>
                Advanced websites include one month of free website maintenance,
                while e-commerce websites include two months.{" "}
                <strong>Terms and conditions apply.</strong> Ongoing support can
                be discussed when your project is scoped.
              </p>
            </div>
            <button
              className="button button-light"
              onClick={() => scrollToBooking("IT Solutions")}
            >
              Ask about maintenance <ArrowRight size={16} />
            </button>
          </div>
        </section>

        <section className="section process-section" id="process">
          <div className="container">
            <div className="section-heading">
              <div>
                <div className="eyebrow">A CLEAR PROCESS</div>
                <h2>
                  From first message
                  <br />
                  <span>to finished work.</span>
                </h2>
              </div>
              <p>
                You should know what happens next. We keep the process
                straightforward and discuss the scope before work begins.
              </p>
            </div>
            <div className="process-grid">
              <div className="process-step">
                <div className="process-num">01</div>
                <div className="process-icon">
                  <MessageCircle size={21} />
                </div>
                <h3>Tell us what you need</h3>
                <p>
                  Choose a service, select a package or describe your own idea.
                </p>
              </div>
              <div className="process-step">
                <div className="process-num">02</div>
                <div className="process-icon">
                  <Layers3 size={21} />
                </div>
                <h3>Confirm the scope</h3>
                <p>
                  We review your requirements, clarify deliverables and confirm
                  the quotation.
                </p>
              </div>
              <div className="process-step">
                <div className="process-num">03</div>
                <div className="process-icon">
                  <Zap size={21} />
                </div>
                <h3>We get to work</h3>
                <p>
                  Work begins once the agreed scope, timeline and terms are
                  confirmed.
                </p>
              </div>
              <div className="process-step">
                <div className="process-num">04</div>
                <div className="process-icon">
                  <CheckCircle2 size={21} />
                </div>
                <h3>Review and handover</h3>
                <p>
                  You review the agreed work and receive the applicable handover
                  or support details.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section about-section" id="about">
          <div className="container about-layout">
            <div className="about-visual">
              <div className="about-grid-pattern" />
              <div className="about-logo-card">
                <img src="/ayotech-logo.jpg" alt="Ayotech Solutions logo" />
                <div className="about-tagline">
                  Bringing your ideas to life is our mission.
                </div>
              </div>
              <div className="about-floating">
                <div className="about-floating-icon">
                  <CheckCircle2 size={19} />
                </div>
                <div>
                  <strong>Built around your needs</strong>
                  <span>Clear communication from start to finish</span>
                </div>
              </div>
            </div>
            <div className="about-copy">
              <div className="eyebrow">ABOUT AYOTECH SOLUTIONS</div>
              <h2>
                Technology should make things <span>easier.</span>
              </h2>
              <p>
                Ayotech Solutions provides web development, IT solutions and
                graphic design for businesses and individuals. Our focus is on
                practical work: helping you present your business
                professionally, keep your technology working and communicate
                your ideas clearly.
              </p>
              <p>
                Whether you need a new website, help with a technical issue or
                design materials for your brand, we start by understanding your
                goal and agreeing on the right scope.
              </p>
              <div className="about-values">
                <div>
                  <CheckCircle2 size={17} />
                  <span>Practical, purpose-led work</span>
                </div>
                <div>
                  <CheckCircle2 size={17} />
                  <span>Clear scope and pricing</span>
                </div>
                <div>
                  <CheckCircle2 size={17} />
                  <span>Solutions for people and businesses</span>
                </div>
              </div>
              <button
                className="button button-primary"
                onClick={() => scrollToBooking()}
              >
                Start a conversation <ArrowRight size={17} />
              </button>
            </div>
          </div>
        </section>

        <section className="section booking-section" id="booking">
          <div className="container booking-layout">
            <div className="booking-copy">
              <div className="eyebrow">
                <span className="eyebrow-mark">
                  <Send size={13} />
                </span>{" "}
                LET'S TALK ABOUT YOUR PROJECT
              </div>
              <h2>
                What would you like
                <br />
                to <span>get done?</span>
              </h2>
              <p>
                Share a few details. Email opens a ready-to-send message in your
                email app; WhatsApp opens a prepared message you can review and
                send.
              </p>
              <div className="contact-methods">
                <a
                  href="https://wa.me/2347063788674"
                  target="_blank"
                  rel="noreferrer"
                  className="contact-method"
                >
                  <span className="contact-method-icon whatsapp">
                    <MessageCircle size={18} />
                  </span>
                  <span>
                    <strong>WhatsApp</strong>
                    <small>+234 706 378 8674</small>
                  </span>
                  <ArrowUpRight size={16} />
                </a>
                <a
                  href="mailto:bookayotechsolutions@gmail.com"
                  className="contact-method"
                >
                  <span className="contact-method-icon email">
                    <Mail size={18} />
                  </span>
                  <span>
                    <strong>Email</strong>
                    <small>bookayotechsolutions@gmail.com</small>
                  </span>
                  <ArrowUpRight size={16} />
                </a>
                <div className="contact-address">
                  <span className="contact-method-icon address">
                    <Globe2 size={18} />
                  </span>
                  <span>
                    <strong>Visit / correspondence</strong>
                    <small>16/17 Ojodu Berger Rd, Lagos, Nigeria</small>
                  </span>
                </div>
              </div>
              <div className="response-note">
                <ShieldCheck size={17} />
                <span>
                  Your details are used to respond to your enquiry. Please do
                  not include passwords or sensitive account information.
                </span>
              </div>
            </div>
            <form className="booking-form" onSubmit={submitEnquiry}>
              <div className="form-heading">
                <div>
                  <span className="form-step">PROJECT ENQUIRY</span>
                  <h3>Tell us a little more</h3>
                </div>
                <span className="required-label">* Required</span>
              </div>
              <div className="field-grid">
                <label className="field">
                  <span>
                    Full name <b>*</b>
                  </span>
                  <input
                    required
                    value={form.name}
                    onChange={(e) => updateForm("name", e.target.value)}
                    placeholder="Your name"
                    autoComplete="name"
                  />
                </label>
                <label className="field">
                  <span>
                    Phone / WhatsApp <b>*</b>
                  </span>
                  <input
                    required
                    value={form.phone}
                    onChange={(e) => updateForm("phone", e.target.value)}
                    placeholder="e.g. 0803 000 0000"
                    autoComplete="tel"
                  />
                </label>
                <label className="field">
                  <span>Email address</span>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => updateForm("email", e.target.value)}
                    placeholder="you@example.com"
                    autoComplete="email"
                  />
                </label>
                <label className="field">
                  <span>Business / organisation</span>
                  <input
                    value={form.organisation}
                    onChange={(e) => updateForm("organisation", e.target.value)}
                    placeholder="Optional"
                    autoComplete="organization"
                  />
                </label>
              </div>
              <label className="field">
                <span>
                  What service do you need? <b>*</b>
                </span>
                <div className="select-wrap">
                  <select
                    required
                    value={selectedService}
                    onChange={(e) => {
                      const v = e.target.value as ServiceKey;
                      setSelectedService(v);
                      if (websiteServices.includes(v)) {
                        const p = packages.find((item) => item.name === v);
                        if (p) choosePackage(p);
                      } else
                        setForm((prev) => ({
                          ...prev,
                          details: `I'm interested in your ${v} service. Please contact me to discuss the requirements and quotation.`,
                        }));
                    }}
                  >
                    {serviceOptions.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                  <ChevronDown size={17} />
                </div>
              </label>
              {selectedService === "Custom Website" && (
                <div className="custom-hint">
                  <Sparkles size={15} /> Describe the pages, features, dashboard
                  or integrations you have in mind below. We will review your
                  requirements and prepare a quotation.
                </div>
              )}
              <div className="field-grid">
                <label className="field">
                  <span>Estimated budget</span>
                  <div className="select-wrap">
                    <select
                      value={form.budget}
                      onChange={(e) => updateForm("budget", e.target.value)}
                    >
                      <option value="">Choose a range (optional)</option>
                      <option>Below ₦50,000</option>
                      <option>₦50,000–₦100,000</option>
                      <option>₦100,000–₦200,000</option>
                      <option>₦200,000–₦350,000</option>
                      <option>Above ₦350,000</option>
                      <option>Not sure yet</option>
                    </select>
                    <ChevronDown size={17} />
                  </div>
                </label>
                <label className="field">
                  <span>When would you like to start?</span>
                  <div className="select-wrap">
                    <select
                      value={form.timeline}
                      onChange={(e) => updateForm("timeline", e.target.value)}
                    >
                      <option value="">Choose timeline (optional)</option>
                      <option>As soon as possible</option>
                      <option>Within 2 weeks</option>
                      <option>Within a month</option>
                      <option>Just exploring for now</option>
                    </select>
                    <ChevronDown size={17} />
                  </div>
                </label>
              </div>
              <label className="field">
                <span>
                  Tell us what you need <b>*</b>
                </span>
                <textarea
                  required
                  rows={4}
                  value={form.details}
                  onChange={(e) => updateForm("details", e.target.value)}
                  placeholder="What are you trying to achieve? Include any important features, pages or problems you want us to know about."
                />
              </label>
              <fieldset className="delivery-field">
                <legend>How would you like to send your enquiry?</legend>
                <div className="delivery-options">
                  <label
                    className={`delivery-option ${form.channel === "email" ? "active" : ""}`}
                  >
                    <input
                      type="radio"
                      name="channel"
                      checked={form.channel === "email"}
                      onChange={() => updateForm("channel", "email")}
                    />
                    <Mail size={18} />
                    <span>
                      <strong>Email</strong>
                      <small>Opens your email app with details filled in</small>
                    </span>
                    {form.channel === "email" && (
                      <CheckCircle2 size={16} className="delivery-check" />
                    )}
                  </label>
                  <label
                    className={`delivery-option ${form.channel === "whatsapp" ? "active" : ""}`}
                  >
                    <input
                      type="radio"
                      name="channel"
                      checked={form.channel === "whatsapp"}
                      onChange={() => updateForm("channel", "whatsapp")}
                    />
                    <MessageCircle size={18} />
                    <span>
                      <strong>WhatsApp</strong>
                      <small>Review and send in WhatsApp</small>
                    </span>
                    {form.channel === "whatsapp" && (
                      <CheckCircle2 size={16} className="delivery-check" />
                    )}
                  </label>
                </div>
              </fieldset>
              {notice && (
                <div className={`form-notice ${notice.type}`} role="status">
                  {notice.type === "success" ? (
                    <CheckCircle2 size={17} />
                  ) : notice.type === "error" ? (
                    <X size={17} />
                  ) : (
                    <MessageCircle size={17} />
                  )}
                  <span>{notice.text}</span>
                </div>
              )}
              <button
                className="button button-primary button-submit"
                type="submit"
                disabled={sending}
              >
                {form.channel === "email"
                  ? "Continue to email"
                  : "Continue to WhatsApp"}{" "}
                {form.channel === "email" ? (
                  <Send size={17} />
                ) : (
                  <MessageCircle size={17} />
                )}
              </button>
              <p className="form-legal">
                By submitting, you agree that Ayotech Solutions may contact you
                about this request. Final pricing and project terms are
                confirmed separately.
              </p>
            </form>
          </div>
        </section>

        <section className="closing-cta">
          <div className="container closing-inner">
            <div>
              <div className="eyebrow">YOUR NEXT STEP STARTS HERE</div>
              <h2>Have an idea? Let's make it useful.</h2>
              <p>
                Tell us what you are working on. We will help you identify a
                practical next step.
              </p>
            </div>
            <button
              className="button button-light"
              onClick={() => scrollToBooking()}
            >
              Enquire with Ayotech <ArrowRight size={17} />
            </button>
            <div className="closing-decoration">
              <div />
              <div />
              <div />
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container">
          <div className="footer-main">
            <div className="footer-brand">
              <a href="#home">
                <img src="/ayotech-logo.jpg" alt="Ayotech Solutions" />
              </a>
              <p>IT Solutions · Web/App Development · Graphic Designs</p>
              <span>Bringing your ideas to life is our mission.</span>
            </div>
            <div className="footer-col">
              <strong>Explore</strong>
              <a href="#services">Our services</a>
              <a href="#websites">Website packages</a>
              <a href="#process">How it works</a>
              <a href="#about">About Ayotech</a>
            </div>
            <div className="footer-col">
              <strong>Services</strong>
              <button onClick={() => scrollToBooking("Landing Page")}>
                Website development
              </button>
              <button onClick={() => scrollToBooking("IT Solutions")}>
                IT solutions & maintenance
              </button>
              <button
                onClick={() => scrollToBooking("Graphic Design & Branding")}
              >
                Graphic design & branding
              </button>
            </div>
            <div className="footer-col footer-contact">
              <strong>Contact</strong>
              <a href="mailto:bookayotechsolutions@gmail.com">
                <Mail size={15} /> bookayotechsolutions@gmail.com
              </a>
              <a
                href="https://wa.me/2347063788674"
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle size={15} /> +234 706 378 8674
              </a>
              <a href="tel:+2348054278208">
                <MessageCircle size={15} /> +234 805 427 8208
              </a>
              <span>
                <Globe2 size={15} /> Lagos, Nigeria
              </span>
            </div>
          </div>
          <div className="footer-bottom">
            <span>
              © {new Date().getFullYear()} Ayotech Solutions. All rights
              reserved.
            </span>
            <div>
              <a href="#booking">Project enquiries</a>
              <a href="#websites">Pricing notes</a>
            </div>
          </div>
        </div>
      </footer>
      <a
        className="floating-whatsapp"
        href="https://wa.me/2347063788674?text=Hello%20Ayotech%20Solutions%2C%20I%20would%20like%20to%20make%20an%20enquiry."
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with Ayotech Solutions on WhatsApp"
      >
        <MessageCircle size={22} />
        <span>Chat with us</span>
      </a>
    </div>
  );
}

export default App;
