"use client";

import { useEffect, useRef, useState } from "react";
import { Code2, Smartphone, Layers3, GitBranch, Copy, Mail, MapPin, Check, Plus, Sun, Moon } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";
import { Switch } from "@/components/ui/switch";
import { useTheme } from "next-themes";
import { BrandMark } from "@/components/brand-mark";
import { assetPath } from "@/lib/asset-path";

const expertise = [
  { id: "web", number: "01", title: "Web automation", icon: Code2, summary: "Reliable tests. Repeatable confidence.", description: "Designing, developing, and executing automated test frameworks for web applications. Functional and regression testing that helps reduce manual effort and improve software quality.", tags: ["Selenium WebDriver", "Python", "Regression testing"] },
  { id: "mobile", number: "02", title: "Mobile testing", icon: Smartphone, summary: "Quality that travels with the user.", description: "Automated testing for mobile applications with Appium, bringing a consistent quality focus to the experiences people use every day.", tags: ["Appium", "Mobile automation", "Functional testing"] },
  { id: "api", number: "03", title: "API testing", icon: Layers3, summary: "Confidence beneath the interface.", description: "Testing application programming interfaces alongside the user experience, with an analytical approach to functional behavior and software reliability.", tags: ["API testing", "Functional validation", "Quality assurance"] },
  { id: "delivery", number: "04", title: "Continuous quality", icon: GitBranch, summary: "Testing, woven into delivery.", description: "Integrating automated testing into CI/CD with Jenkins. Working across teams with Git, JIRA, and agile methodologies to make quality part of the development lifecycle.", tags: ["Jenkins", "Git", "JIRA", "Agile"] },
];
const experience = [
  { date: "JUL 2024 — PRESENT", title: "Senior Testing Engineer", year: "2024", current: true },
  { date: "JUL 2021 — JUL 2024", title: "IT Quality and Testing Engineer", year: "2021", current: false },
  { date: "JUL 2020 — JUL 2021", title: "Intern", year: "2020", current: false },
];
const navigation = [{ id: "about", label: "About" }, { id: "expertise", label: "Expertise" }, { id: "journey", label: "Journey" }, { id: "contact", label: "Contact" }];

export default function Home() {
  const [active, setActive] = useState("");
  const [copied, setCopied] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const progress = useRef<HTMLDivElement>(null);
  const copyTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(() => {
    setMounted(true);
    const updateProgress = () => {
      const height = document.documentElement.scrollHeight - window.innerHeight;
      if (progress.current) progress.current.style.transform = `scaleX(${height > 0 ? window.scrollY / height : 0})`;
    };
    window.addEventListener("scroll", updateProgress, { passive: true });
    updateProgress();
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => { if (entry.isIntersecting) setActive(entry.target.id === "home" ? "" : entry.target.id); });
    }, { rootMargin: "-10% 0px -55% 0px", threshold: 0 });
    document.querySelectorAll("main > section[id]").forEach(el => sectionObserver.observe(el));
    const revealObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add("is-visible"); revealObserver.unobserve(entry.target); } });
    }, { threshold: 0.08 });
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      document.querySelectorAll(".reveal").forEach(el => { el.classList.add("will-reveal"); revealObserver.observe(el); });
    }
    return () => {
      window.removeEventListener("scroll", updateProgress);
      sectionObserver.disconnect(); revealObserver.disconnect();
      if (copyTimer.current) clearTimeout(copyTimer.current);
    };
  }, []);
  async function copyEmail() {
    try {
      await navigator.clipboard.writeText("mail@prawinraj.com");
      setCopied(true); toast.success("Email address copied");
      if (copyTimer.current) clearTimeout(copyTimer.current);
      copyTimer.current = setTimeout(() => setCopied(false), 2500);
    } catch { toast.info("You can select and copy the email address, or use the email link."); }
  }
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header"><div className="header-inner wrap">
        <a href="#home" className="brand" aria-label="Prawin Raj S S, home"><BrandMark /><span className="brand-name">Prawin Raj S S<span>SENIOR TESTING ENGINEER</span></span></a>
        <nav className="main-nav" aria-label="Main navigation">{navigation.map(item => <a key={item.id} href={`#${item.id}`} className={active === item.id ? "active" : ""} aria-current={active === item.id ? "location" : undefined}>{item.label}</a>)}</nav>
        <div className="header-actions">
          <a href="mailto:mail@prawinraj.com" className="header-contact" aria-label="Email Prawin Raj S S"><Mail size={16} aria-hidden="true" /><span>Let’s talk</span></a>
          <label className="theme-control" htmlFor="theme-switch" data-mode={mounted ? resolvedTheme : undefined}>
            <Sun className="theme-sun" size={17} strokeWidth={1.5} aria-hidden="true" />
            <Switch id="theme-switch" className="theme-switch" checked={mounted && resolvedTheme === "dark"} onCheckedChange={dark => setTheme(dark ? "dark" : "light")} aria-label="Dark theme" title={mounted && resolvedTheme === "dark" ? "Switch to light theme" : "Switch to dark theme"} />
            <Moon className="theme-moon" size={17} strokeWidth={1.5} aria-hidden="true" />
          </label>
        </div>
      </div><div className="reading-progress" ref={progress} aria-hidden="true" /></header>
      <main id="main">
        <section className="hero wrap" id="home" aria-labelledby="hero-title">
          <div className="hero-visual"><div className="portrait-topline"><span className="portrait-identity"><strong>PRAWIN RAJ S S</strong><span className="identity-divider">/</span><span>SENIOR TESTING ENGINEER</span></span><span className="portrait-index">01 / PR</span></div>
            <div className="portrait-frame"><img className="portrait" src={assetPath("/images/prawin-raj.jpg")} alt="Prawin Raj S S wearing a burgundy blazer" width="768" height="768" fetchPriority="high" /><div className="portrait-shade" /><span className="portrait-caption">Driven by detail.<br /><em>Defined by quality.</em></span><span className="portrait-corner" aria-hidden="true"><Plus size={24} strokeWidth={1} /></span></div>
            <div className="role-card"><span className="role-symbol" aria-hidden="true"><Code2 size={23} strokeWidth={1.3} /></span><div><p>Senior Testing Engineer</p><span>BSH Home Appliances India</span></div><span className="role-since">SINCE<br /><b>2024</b></span></div>
          </div>
          <div className="hero-copy"><p className="eyebrow hero-eyebrow"><span className="small-line" /> THE PERSON BEHIND THE PRECISION</p>
            <h1 id="hero-title">Quality.<br />Without<br /><em>compromise.</em></h1>
            <p className="hero-description">I build confidence in software.<br />Thoughtful automation. Rigorous testing.<br />Better experiences, from the very first line.</p>
            <div className="hero-actions"><a className="button button-primary" href="#expertise">Explore my expertise</a><a className="text-link" href="#contact">Get in touch <span className="link-underline" /></a></div>
          </div>
          <div className="hero-bottom"><span className="hero-location"><MapPin size={15} strokeWidth={1.4} aria-hidden="true" /> BENGALURU, INDIA</span><span className="hero-motto">Excellence in every test. Quality in every line.</span><a href="#about" className="scroll-link"><span className="scroll-track" aria-hidden="true"><i /></span>SCROLL TO DISCOVER</a></div>
        </section>
        <div className="tools-strip" aria-label="Tools and technologies"><div className="tools-inner wrap"><span className="tools-label">MY EVERYDAY TOOLKIT</span><div className="tools-list"><span>Python</span><span>Selenium</span><span>Appium</span><span>Jenkins</span><span>Git</span><span>JIRA</span></div></div></div>
        <section className="about section wrap" id="about" aria-labelledby="about-title"><div className="section-kicker reveal"><span className="index">01</span><span>THE MINDSET</span></div>
          <div className="about-grid"><div className="about-heading reveal"><h2 id="about-title">Great software<br />earns <em>trust.</em><br /><span>I help it keep it.</span></h2><div className="experience-stat"><span>5<span>+</span></span><p>Years of experience<br />in automation & testing</p></div></div>
          <div className="about-story reveal"><span className="eyebrow">A LITTLE ABOUT ME</span><p className="about-lead">I’m Prawin Raj S S, a senior testing engineer with an eye for detail and a drive to make software better.</p><p>I design, develop, and execute robust automated test frameworks for web and mobile applications. My work brings together Python, Selenium WebDriver, Appium, and API testing to reduce manual effort and improve software quality.</p><p>From functional and regression testing to CI/CD integration, I bring an analytical approach and a collaborative mindset to every stage of the testing lifecycle.</p><div className="about-foot"><span className="signature">Prawin Raj S S</span><span>BENGALURU, INDIA</span></div></div></div>
        </section>
        <section className="expertise-section" id="expertise" aria-labelledby="expertise-title"><div className="section wrap"><div className="section-kicker reveal"><span className="index">02</span><span>AREAS OF EXPERTISE</span></div><div className="section-heading reveal"><h2 id="expertise-title">Precision across<br />every <em>layer.</em></h2><p>From what users see to what powers it.<br />A complete approach to software quality.</p></div>
          <Accordion type="single" collapsible defaultValue="web" className="expertise-list reveal">{expertise.map(item => { const Icon = item.icon; return <AccordionItem key={item.id} value={item.id} className="expertise-item"><AccordionTrigger className="expertise-trigger"><span className="expertise-number">{item.number}</span><span className="expertise-icon"><Icon size={25} strokeWidth={1.3} aria-hidden="true" /></span><span className="expertise-name">{item.title}<span>{item.summary}</span></span><span className="expand-symbol" aria-hidden="true"><i /><i /></span></AccordionTrigger><AccordionContent className="expertise-content"><p>{item.description}</p><div className="skill-tags">{item.tags.map(tag => <span key={tag}>{tag}</span>)}</div></AccordionContent></AccordionItem>; })}</Accordion>
        </div></section>
        <section className="journey section wrap" id="journey" aria-labelledby="journey-title"><div className="section-kicker reveal"><span className="index">03</span><span>PROFESSIONAL JOURNEY</span></div><div className="journey-grid"><div className="journey-intro reveal"><h2 id="journey-title">Always<br /><em>evolving.</em></h2><p>A journey of growth, responsibility,<br />and a constant commitment to quality.</p><div className="company-note"><span className="company-monogram">BSH<span>HOME APPLIANCES</span></span><span>THE JOURNEY SO FAR<br /><b>2020 — PRESENT</b></span></div></div>
          <div className="timeline">{experience.map((role, i) => <article className={`timeline-item reveal ${role.current ? "current" : ""}`} key={role.year}><span className="timeline-point" aria-hidden="true" /><div className="timeline-meta"><span>{role.date}</span>{role.current && <span className="current-badge">CURRENT ROLE</span>}</div><h3>{role.title}</h3><p>BSH Home Appliances India</p><span className="timeline-number" aria-hidden="true">0{experience.length - i}</span></article>)}</div></div>
        </section>
        <section className="contact-section" id="contact" aria-labelledby="contact-title">
          <div className="contact-inner wrap">
            <div className="section-kicker reveal"><span className="index">04</span><span>START A CONVERSATION</span></div>
            <div className="contact-heading reveal"><p>Good things begin with a conversation.</p><h2 id="contact-title">Let’s build<br /><em>confidence.</em></h2></div>
            <div className="contact-bar">
              <div className="contact-email-row">
                <a href="mailto:mail@prawinraj.com" className="email-link"><Mail className="email-symbol" size={29} strokeWidth={1.4} aria-hidden="true" /><span className="contact-link-label">mail@prawinraj.com</span></a>
                <Button variant="outline" className="copy-button" title={copied ? "Email address copied" : "Copy email address"} onClick={copyEmail} aria-label={copied ? "Email address copied" : "Copy email address"}>{copied ? <Check size={17} /> : <Copy size={17} />}<span>{copied ? "Copied" : "Copy email"}</span></Button>
              </div>
              <a className="linkedin-link" href="https://linkedin.com/in/prawin-raj-ss" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile of Prawin Raj S S (opens in a new tab)"><span className="linkedin-symbol" aria-hidden="true"><img src={assetPath("/icons/linkedin-in.svg")} width="17" height="17" alt="" /></span><span className="contact-link-label">LinkedIn profile</span></a>
            </div>
            <div className="contact-details reveal"><p><MapPin size={16} aria-hidden="true" /> Based in Bengaluru, India</p></div>
          </div>
        </section>
      </main>
      <footer className="site-footer wrap"><a href="#home" className="footer-brand" aria-label="Prawin Raj S S, back to top"><BrandMark /></a><p>© 2026 Prawin Raj S S</p><span>EXCELLENCE IS IN THE DETAILS.</span><a href="#home" className="back-top">Back to top</a></footer>
      <Toaster position="bottom-center" />
    </>
  );
}
