import { useEffect, useState } from 'react';
import { ArrowRight } from '@phosphor-icons/react/ArrowRight';
import { Bank } from '@phosphor-icons/react/Bank';
import { Buildings } from '@phosphor-icons/react/Buildings';
import { ChartLineUp } from '@phosphor-icons/react/ChartLineUp';
import { Check } from '@phosphor-icons/react/Check';
import { Coins } from '@phosphor-icons/react/Coins';
import { EnvelopeSimple } from '@phosphor-icons/react/EnvelopeSimple';
import { GlobeHemisphereEast } from '@phosphor-icons/react/GlobeHemisphereEast';
import { Handshake } from '@phosphor-icons/react/Handshake';
import { List } from '@phosphor-icons/react/List';
import { MapPin } from '@phosphor-icons/react/MapPin';
import { ShieldCheck } from '@phosphor-icons/react/ShieldCheck';
import { Stack } from '@phosphor-icons/react/Stack';
import { TrendUp } from '@phosphor-icons/react/TrendUp';
import { X } from '@phosphor-icons/react/X';

const navItems = [['About','about'],['Investment Approach','approach'],['Scope of Activity','activity'],['Compliance','compliance'],['Contact','contact']];
const trustPoints = [
  { icon: Coins, label: 'Own-capital investment activity' },
  { icon: TrendUp, label: 'Medium- and long-term strategy' },
  { icon: GlobeHemisphereEast, label: 'UAE and regional opportunity analysis' },
  { icon: Bank, label: 'Dubai-registered private company' },
];
const facts = [['Registration','Dubai, United Arab Emirates'],['Activity','Investment of proprietary capital'],['Capital Source','Shareholder and company-owned funds only'],['Time Horizon','Medium- and long-term investments']];
const pillars = [
  ['01','Proprietary capital only','The company invests its own funds. It does not raise external capital, pool third-party assets or manage client portfolios.'],
  ['02','Medium- and long-term orientation','Decisions are made with a measured perspective, seeking stable capital growth or recurring investment income over time.'],
  ['03','Risk-aware allocation','Each opportunity is reviewed for market risk, liquidity, counterparty profile, legal structure, expected return and macroeconomic context.'],
  ['04','Regional focus, global flexibility','Global instruments may be considered while opportunities in the UAE and wider Gulf region remain an active focus.'],
];
const activities = [
  [ChartLineUp,'Listed securities','Publicly traded equities, bonds and other instruments where valuation, income potential or strategic exposure is compelling.'],
  [Stack,'Derivatives and structured instruments','Selective use for investment exposure, hedging or portfolio efficiency, subject to internal risk assessment.'],
  [Handshake,'Private credit and investment loans','Investment loans and interest-income arrangements considered on a disciplined, selective basis.'],
  [Buildings,'Funds and private markets','Funds, private equity and other vehicles aligned with the company’s objectives and due diligence standards.'],
];
const exclusions = ['Accept deposits or client money','Solicit, raise or pool external funds','Provide third-party asset management','Operate as a collective investment scheme','Provide public investment advice','Execute transactions on behalf of clients'];
const accountActivity = ['Custody and trading of listed securities','Settlement of investment transactions','Receipt of interest or investment income','Subscriptions or redemptions for approved opportunities','Transfers between company-owned accounts','Execution of UAE and regional opportunities'];

function ArrowLink({ href, children, variant = 'primary' }) {
  return <a className={`button button--${variant}`} href={href}><span>{children}</span><ArrowRight aria-hidden="true" /></a>;
}
function SectionHeading({ eyebrow, title, intro }) {
  return <div className="section-heading"><p className="eyebrow">{eyebrow}</p><h2>{title}</h2>{intro && <p className="section-intro">{intro}</p>}</div>;
}

export function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll(); window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const closeMenu = () => setMenuOpen(false);

  return <>
    <a className="skip-link" href="#main">Skip to main content</a>
    <header className={`site-header${scrolled ? ' is-scrolled' : ''}`}>
      <a className="brand" href="#top" onClick={closeMenu}>Biltasena Ventures</a>
      <button className="menu-button" type="button" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} onClick={() => setMenuOpen(v => !v)}>{menuOpen ? <X /> : <List />}</button>
      <nav className={`nav${menuOpen ? ' is-open' : ''}`} aria-label="Primary navigation">{navItems.map(([label,id]) => <a key={id} href={`#${id}`} onClick={closeMenu}>{label}</a>)}</nav>
    </header>

    <main id="main">
      <section className="hero" id="top">
        <div className="hero__content">
          <p className="eyebrow">Dubai-registered private investment company</p>
          <h1>Biltasena<br/>Ventures</h1>
          <p className="hero__lead">A privately held investment company deploying its own capital across liquid financial markets, private credit opportunities and selected long-term investments.</p>
          <p className="hero__support">The company operates as a principal investor only. It does not solicit external capital, manage third-party assets, provide investment advice or offer financial products to the public.</p>
          <div className="hero__actions"><ArrowLink href="#contact">Contact the Company</ArrowLink><ArrowLink href="#compliance" variant="secondary">Compliance Overview</ArrowLink></div>
        </div>
        <div className="hero__image" role="img" aria-label="Modern Dubai architecture with the Burj Khalifa skyline"><img src="/hero-dubai-architecture.webp" alt="" width="1536" height="1024" loading="eager" fetchPriority="high" decoding="async" /></div>
      </section>

      <section className="trust-strip" aria-label="Company trust points">
        <div className="trust-strip__label"><span>Biltasena Ventures</span><strong>At a glance</strong></div>
        {trustPoints.map(({icon:Icon,label}) => <div className="trust-point" key={label}><Icon aria-hidden="true" weight="thin"/><span>{label}</span></div>)}
      </section>

      <section className="section glance">
        <div className="glance__intro"><p className="eyebrow">Company overview</p><h2>A private capital platform with a disciplined investment mandate</h2><p>Biltasena Ventures was established to preserve and grow shareholder capital through a measured allocation approach, with a focus on risk, liquidity, counterparty quality and long-term value.</p></div>
        <div className="facts">{facts.map(([label,value]) => <div className="fact" key={label}><span>{label}</span><strong>{value}</strong></div>)}</div>
      </section>

      <section className="section about" id="about">
        <SectionHeading eyebrow="About" title="About Biltasena Ventures"/>
        <div className="about__copy">
          <p>Biltasena Ventures is a private investment company registered in Dubai. The company allocates its own capital to a diversified range of financial instruments and opportunities, including listed equities, bonds, derivatives and other market-based instruments.</p>
          <p>In addition to marketable securities, the company has provided investment loans to selected corporate borrowers and receives income from interest payments under those arrangements. It may also consider funds, direct equity holdings and other opportunities consistent with its internal mandate.</p>
          <p className="pull-quote">Biltasena Ventures is not a public investment vehicle. Its activities are conducted for the benefit of the company and its shareholders.</p>
        </div>
      </section>

      <section className="approach" id="approach">
        <div className="approach__copy">
          <SectionHeading eyebrow="Investment approach" title="Disciplined. Selective. Aligned." intro="A prudent, research-led approach designed for capital preservation, controlled growth and sustainable income generation."/>
          <div className="pillars">{pillars.map(([n,title,text]) => <article className="pillar" key={n}><span>{n}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div>
        </div>
        <div className="approach__image" role="img" aria-label="Sunlit limestone colonnade overlooking Dubai"><img src="/approach-colonnade.webp" alt="" width="1536" height="1024" loading="lazy" decoding="async" /></div>
      </section>

      <section className="own-funds">
        <div className="own-funds__title"><p className="eyebrow">Own funds statement</p><h2>Proprietary capital and no third-party asset management.</h2></div>
        <div className="own-funds__copy"><p>For banking, brokerage and compliance purposes, Biltasena Ventures confirms that its investment activity is conducted using its own capital.</p><ul>{exclusions.map(item => <li key={item}><X aria-hidden="true"/>{item}</li>)}</ul><p className="own-funds__closing">All investment decisions are made for the company’s own account and for the benefit of its shareholder capital.</p></div>
      </section>

      <section className="section activity" id="activity">
        <SectionHeading eyebrow="Scope of activity" title="Areas of investment activity" intro="A diversified mandate across liquid markets and selected private opportunities, guided by internal risk assessment and due diligence."/>
        <div className="activity-grid">{activities.map(([Icon,title,text]) => <article className="activity-card" key={title}><Icon aria-hidden="true" weight="thin"/><h3>{title}</h3><p>{text}</p></article>)}</div>
        <div className="regional-note"><GlobeHemisphereEast aria-hidden="true" weight="thin"/><div><h3>UAE and Gulf region opportunities</h3><p>The company monitors capital markets development, regulated financial services, digital asset infrastructure, real estate-linked investment themes and regional growth sectors.</p></div></div>
      </section>

      <section className="section compliance" id="compliance">
        <div className="compliance__intro"><SectionHeading eyebrow="Compliance and counterparty readiness" title="Clear operating profile for financial counterparties" intro="A transparent operating profile for banks, brokers, custodians, exchanges and digital asset platforms conducting onboarding or periodic review."/><p>Standard documentation can be provided upon request, including incorporation documents, ownership details, source-of-funds explanations and descriptions of intended account activity.</p></div>
        <div className="compliance__list"><p className="list-label">Expected account activity may include</p>{accountActivity.map(item => <div key={item}><Check aria-hidden="true" weight="bold"/><span>{item}</span></div>)}</div>
      </section>

      <section className="regional">
        <div className="regional__copy"><p className="eyebrow">Regional positioning</p><h2>Positioned in Dubai, focused on regional opportunity</h2><p>Dubai provides access to a dynamic financial ecosystem, international banking infrastructure and a growing network of opportunities across the UAE and the wider Middle East.</p><p>The company is particularly attentive to regional capital markets, regulated financial services and the long-term economic transformation of the Gulf.</p></div>
        <div className="regional__image" role="img" aria-label="Olive tree in a sunlit Dubai limestone courtyard"><img src="/regional-limestone-courtyard.webp" alt="" width="1773" height="887" loading="lazy" decoding="async" /></div>
      </section>

      <section className="contact" id="contact">
        <div className="contact__lead"><p className="eyebrow">Contact</p><h2>For banks, brokers and platform onboarding teams</h2><p>For onboarding, compliance review or corporate information requests, please contact Biltasena Ventures directly.</p></div>
        <div className="contact__details"><div><EnvelopeSimple aria-hidden="true" weight="thin"/><span>Email</span><strong>To be confirmed</strong></div><div><MapPin aria-hidden="true" weight="thin"/><span>Registered address</span><strong>Official Dubai address to be confirmed</strong></div></div>
        <a className="contact__request" href="mailto:?subject=Biltasena%20Ventures%20%E2%80%94%20Company%20information%20request"><span>Request Company Information</span><ArrowRight aria-hidden="true"/></a>
      </section>
    </main>

    <footer className="footer"><div><a className="brand brand--footer" href="#top">Biltasena Ventures</a><p>Dubai-registered private investment company</p></div><div className="footer__statement"><ShieldCheck aria-hidden="true" weight="thin"/><p>Principal investor using proprietary capital. No third-party asset management or public investment advice.</p></div><p className="footer__legal">© {new Date().getFullYear()} Biltasena Ventures. All rights reserved.</p></footer>
  </>;
}
