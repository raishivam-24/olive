import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

const A = '/assets/';
const features = [
  ['Club Casa d’Olive', '01'], ['Swimming pool', '02'], ['Great garden', '03'], ['Jogging track', '04'],
  ['Kids’ play area', '05'], ['Indoor sports', '06'], ['Gymnasium', '07'], ['Banquet hall', '08'],
  ['Mandir temple', '09'], ['Gazebo seating', '10'], ['Grand entrance', '11'], ['Street lights', '12'],
  ['CC roads', '13'], ['Guard room', '14'], ['Water supply', '15'], ['Transformer', '16'],
];
const distances = [
  ['Petrol pump', '0.1 km'], ['High school', '1.0 km'], ['College', '1.0 km'], ['Banks', '1.0 km'],
  ['Hotel & marriage lawn', '1.0 km'], ['RTO Bilaspur', '2.0 km'], ['Amusement park', '3.0 km'],
  ['Apollo Hospitals', '3.0 km'], ['Sports complex & stadium', '3.0 km'], ['SECL Headquarters', '5.0 km'],
  ['Bilaspur Railway Station', '6.0 km'], ['NTPC Sipat', '10 km'],
];
function Mark({ light = false }) {
  return <span className={`brand ${light ? 'brand-light' : ''}`}><img src={A + 'olive-residency-mark.svg'} alt="" /><span>Olive<br />Residency</span></span>;
}
function Arrow() { return <span aria-hidden="true">↗</span>; }
function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  return <>
    <header className="topbar">
      <a className="brand-link" href="#home" aria-label="Olive Residency home" onClick={closeMenu}><Mark /></a>
      <button className="menu-toggle" aria-label="Toggle navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}><span></span><span></span></button>
      <nav className={menuOpen ? 'nav nav-open' : 'nav'} aria-label="Main navigation">
        <a href="#story" onClick={closeMenu}>The vision</a><a href="#amenities" onClick={closeMenu}>Amenities</a><a href="#gallery" onClick={closeMenu}>Gallery</a><a href="#location" onClick={closeMenu}>Location</a><a href="#rera" onClick={closeMenu}>RERA details</a>
      </nav>
      <a className="nav-cta" href="tel:+917771840000">Enquire <Arrow /></a>
    </header>

    <main>
      <section id="home" className="hero">
        <div className="hero-main">
          <div className="hero-content">
            <div className="eyebrow hero-eyebrow"><span className="eyebrow-line"></span> A finer way to call somewhere home</div>
            <h1>Room to grow.<br /><em>Space to belong.</em></h1>
            <p>A thoughtfully planned plotted community on Chilhati Main Road, Bilaspur.</p>
            <div className="hero-actions"><a className="button button-gold" href="#story">Explore Olive <span>↓</span></a><a className="button button-ghost" href="tel:+917771840000">Talk to our team <Arrow /></a></div>
          </div>
          <div className="hero-visual"><img className="hero-image" src={A + 'hero-entrance.jpg'} alt="Olive Residency entrance as shown in the project brochure" /></div>
        </div>
        <div className="hero-foot">
          <div className="hero-detail"><small>PROJECT ADDRESS</small><span>Chilhati Main Road, opposite Vivekanand Residency, Chilhati, Bilaspur</span></div>
          <div className="hero-detail"><small>RERA REGISTRATION NO.</small><a href="#rera">PCGRERA031126002182</a></div>
         <div className="hero-detail"><small>BOOKING ENQUIRIES</small><span><a href="tel:+917771840000">+91 77718 40000</a><br/><a href="tel:+919993246700">+91 99932 46700</a></span></div>
        </div>
      </section>

      <section className="rera-certificate-promo section-pad" id="rera-certificate">
        <div className="certificate-preview"><img src={A + 'rera-certificate-preview.png'} alt="Preview of the Chhattisgarh RERA registration certificate for Olive Residency" /></div>
        <div className="certificate-copy">
          <span className="eyebrow">Official project registration</span>
          <h2>RERA certificate,<br /><em>in view.</em></h2>
          <p>Review the registration certificate issued by the Chhattisgarh Real Estate Regulatory Authority.</p>
          <div className="certificate-number"><small>PROJECT REGISTRATION NO.</small><strong>PCGRERA031126002182</strong><span>Registered 03 Nov 2026 · Valid through 09 Oct 2031</span></div>
          <a className="button button-dark certificate-download" href={A + 'rera-registration-certificate.pdf'} download="Olive-Residency-RERA-Certificate.pdf">Download RERA certificate <Arrow /></a>
        </div>
      </section>

      <section className="intro section-pad" id="story">
        <div className="intro-label"><span className="eyebrow">A place of your own</span><span className="vertical-note">OLIVE RESIDENCY · EST. 2026</span></div>
        <div className="intro-main">
          <h2>Some places feel<br />like <em>possibility.</em></h2>
          <div className="intro-copy"><p className="lead">At Olive Residency, the everyday has room to become something more.</p><p>Set along Chilhati Main Road in Bilaspur, this plotted residential community brings considered planning, open green spaces and shared places together — so you can shape a home that feels like your own.</p><a className="text-link" href={A + 'olive-residency-brochure.pdf?v=19'} target="_blank" rel="noreferrer">Read the project brochure <Arrow /></a></div>
        </div>
        <div className="stats-row">
          <div className="stat"><strong>113</strong><span>RESIDENTIAL PLOTS SHOWN</span></div>
          <div className="stat"><strong>15k<span className="stat-unit">+</span></strong><span>SQ. FT. OF GREEN & AMENITY SPACE</span></div>
          <div className="stat"><strong>16</strong><span>COMMUNITY AMENITIES</span></div>
        </div>
      </section>

      <section className="amenities section-pad" id="amenities">
        <div className="section-heading"><div><span className="eyebrow">Made for everyday living</span><h2>Space for the <em>moments</em><br />that make a life.</h2></div><p>From an unhurried walk to a little celebration, the shared spaces are designed to bring neighbors and generations together.</p></div>
        <div className="amenity-layout">
          <div className="amenity-list">{features.map(([name, number]) => <div className="amenity-item" key={name}><span>{number}</span><strong>{name}</strong><b>+</b></div>)}</div>
        </div>
        <div className="amenity-bottom"><span>01 — 16</span><span>Amenities as described in the supplied brochure</span></div>
      </section>

      <section className="project-gallery section-pad" id="gallery">
        <div className="section-heading"><div><span className="eyebrow">A look around Olive</span><h2>Picture life <em>here.</em></h2></div><p>Explore the entrance, plotted community, gardens and shared spaces shown in the project brochure.</p></div>
        <div className="project-gallery-grid">
          <figure className="project-gallery-card"><img src={A + 'community-aerial.jpg'} alt="Aerial overview of Olive Residency community layout" /><figcaption><span>01</span><strong>The community</strong></figcaption></figure>
          <figure className="project-gallery-card"><img src={A + 'hero-entrance.jpg'} alt="Olive Residency entrance gate" /><figcaption><span>02</span><strong>Grand entrance</strong></figcaption></figure>
          <figure className="project-gallery-card"><img src={A + 'garden-walk.jpg'} alt="Landscaped garden walk, play area and seating" /><figcaption><span>03</span><strong>Garden & play</strong></figcaption></figure>
          <figure className="project-gallery-card"><img src={A + 'leisure-deck.jpg'} alt="Pool and leisure deck" /><figcaption><span>04</span><strong>Leisure deck</strong></figcaption></figure>
          <figure className="project-gallery-card"><img src={A + 'temple-garden.jpg'} alt="Temple set within landscaped gardens" /><figcaption><span>05</span><strong>Temple & garden</strong></figcaption></figure>
        </div>
        <p className="gallery-caption-note">Project imagery from the supplied brochure. Illustrative only.</p>
      </section>

      <section className="location section-pad" id="location">
        <div className="section-heading location-heading"><div><span className="eyebrow">Connected to what matters</span><h2>Chilhati, <em>Bilaspur.</em></h2></div><p>Located on Chilhati Main Road, opposite Vivekanand Residency. Distances below are reproduced from the project brochure.</p></div>
        <div className="location-layout">
          <div className="map-card"><div className="map-top"><span className="eyebrow">THE NEIGHBOURHOOD</span><a href={A + 'olive-residency-brochure.pdf?v=19'} target="_blank" rel="noreferrer">View location map <Arrow /></a></div><div className="map-art"><img src={A + 'location-map.jpg'} alt="Location map from the Olive Residency brochure" /></div><div className="map-address"><span>SITE ADDRESS</span><p>Chilhati Main Road, opposite Vivekanand Residency,<br />Chilhati, Bilaspur, Chhattisgarh</p></div></div>
          <div className="distance-list">{distances.map(([place, distance], i) => <div className="distance-row" key={place}><span className="distance-num">{String(i + 1).padStart(2, '0')}</span><span>{place}</span><span className="distance-rule"></span><strong>{distance}</strong></div>)}</div>
        </div>
      </section>

      <section className="rera-section" id="rera">
        <div className="rera-top section-pad"><div className="rera-copy"><span className="eyebrow">Clarity from the start</span><h2>Registered.<br /><em>On record.</em></h2><p>Olive Residency is registered with the Chhattisgarh Real Estate Regulatory Authority. Review the certificate and approved layout plan below.</p><a className="button button-dark" href="https://rera.cgstate.gov.in/" target="_blank" rel="noreferrer">Visit CG RERA <Arrow /></a></div><div className="rera-badge"><div className="badge-inner"><span>CHHATTISGARH</span><strong>RERA</strong><span>REGISTERED PROJECT</span><i>CG</i></div></div></div>
        <div className="rera-details section-pad"><div className="rera-heading"><span className="eyebrow">Project registration</span><span>FORM C · RULE 6(1)</span></div><div className="rera-grid">
          <div className="rera-card rera-id"><span>REGISTRATION NUMBER</span><strong>PCGRERA<br />031126002182</strong><span className="id-status"><i></i> Certificate issued 03 Nov 2026</span></div>
          <div className="rera-card"><span>PROJECT NAME</span><strong>Olive (Residential Plotted Development)</strong></div>
          <div className="rera-card"><span>PROJECT LOCATION</span><strong>Kh. No. 15000, Village Chilhati, Bilaspur, Chhattisgarh</strong></div>
          <div className="rera-card"><span>REGISTRATION VALIDITY</span><strong>03 Nov 2026 — 09 Oct 2031</strong><small>As stated on the certificate</small></div>
          <div className="rera-card"><span>PROMOTER</span><strong>Mahadev Developers</strong><small>Office Address: Gendram Sao Marg, Juna Bilaspur, Chhattisgarh 495001</small></div>
        </div>
        <div className="documents"><a href={A + 'rera-registration-certificate.pdf'} target="_blank" rel="noreferrer"><span className="doc-icon">↗</span><span><small>FORM C · 1 PAGE</small><strong>RERA registration certificate</strong></span><b>OPEN PDF</b></a><a href={A + 'approved-layout-plan.pdf'} target="_blank" rel="noreferrer"><span className="doc-icon">↗</span><span><small>SIGNED PLAN · 1 PAGE</small><strong>Approved layout & area statement</strong></span><b>OPEN PDF</b></a><a href={A + 'olive-residency-brochure.pdf?v=19'} target="_blank" rel="noreferrer"><span className="doc-icon">↗</span><span><small>PROJECT BROCHURE · 19 PAGES</small><strong>Olive Residency brochure</strong></span><b>OPEN PDF</b></a></div>
        </div>
        <div className="area-section section-pad"><div className="area-title"><span className="eyebrow">From the signed layout</span><h3>Land, thoughtfully <em>planned.</em></h3><p>The approved plan describes a 5.06-acre site with residential plots, roads, gardens and community uses.</p></div><div className="area-data"><div className="area-total"><span>TOTAL LAND AREA</span><strong>220,337 <small>sq. ft.</small></strong><small>5.06 acres · 2.0470 hectares</small></div><div className="area-row"><span>Residential plotting <small>113 plots shown, incl. 7 LIG and 11 EWS plots</small></span><b>147,773 sq. ft.</b><i>68.57%</i></div><div className="area-row"><span>Roads</span><b>47,459 sq. ft.</b><i>22.02%</i></div><div className="area-row"><span>Garden area</span><b>10,776 sq. ft.</b><i>5.01%</i></div><div className="area-row"><span>Commercial area</span><b>5,186 sq. ft.</b><i>2.40%</i></div><div className="area-row"><span>Amenities area</span><b>4,311 sq. ft.</b><i>2.00%</i></div><div className="area-row area-note"><span>Area under road widening</span><b>4,832 sq. ft.</b><i>separate</i></div></div></div>
      </section>

       <section className="contact section-pad" id="contact"><div className="contact-copy"><span className="eyebrow">A place to begin</span><h2>Make room for<br/><em>what’s next.</em></h2><p>Speak with the Olive Residency team to learn more about the project and availability.</p><a className="button button-dark" href="tel:+917771840000">Call +91 77718 40000 <Arrow /></a><a className="contact-secondary" href="tel:+919993246700">Or call +91 99932 46700</a><small>Booking enquiries · Olive Residency</small></div></section>
    </main>
    <footer className="footer"><div className="footer-brand"><Mark light /><p>A finer way to call somewhere home.</p></div><div className="footer-info"><span>MAHADEV DEVELOPERS · BUILDER & DEVELOPER</span><span className="office-address"><strong>OFFICE ADDRESS</strong>Gendram Sao Marg, Juna Bilaspur, Chhattisgarh 495001</span><span>SUMIT AGRAWAL · ARCHITECT & TOWN PLANNER</span></div><div className="footer-bottom"><span>OLIVE RESIDENCY · CHILHATI, BILASPUR, CHHATTISGARH</span><a href="#rera">RERA PCGRERA031126002182 ↑</a></div><p className="disclaimer">Project details and amenities on this website are based on the supplied project brochure and registration documents. Images and plans are illustrative; the brochure notes that specifications, amenities and plans are subject to approvals and change. Please refer to the final agreement and official CG RERA records.</p></footer>
  </>;
}

createRoot(document.getElementById('root')).render(<App />);



