if(!document.querySelector('link[href="forms.css"]')){
  const formsCss=document.createElement('link');
  formsCss.rel='stylesheet';
  formsCss.href='forms.css?v=20260908-ev';
  document.head.appendChild(formsCss);
}

const CAR_IMAGE='https://commons.wikimedia.org/wiki/Special:Redirect/file/Tesla_Model_3_Front.jpg?width=1280';
const MOTOR_IMAGE='https://commons.wikimedia.org/wiki/Special:Redirect/file/ABB_AMXM290-SBIMC2CF04_traction_motor_on_PM179_(20211214142118).jpg?width=900';
const CAR_SOURCE='https://commons.wikimedia.org/wiki/File:Tesla_Model_3_Front.jpg';
const MOTOR_SOURCE='https://commons.wikimedia.org/wiki/File:ABB_AMXM290-SBIMC2CF04_traction_motor_on_PM179_(20211214142118).jpg';

// Brand lockup: keep the IDK wordmark and integrate a real traction-motor photograph.
const brand=document.querySelector('.brand');
const brandLogo=document.querySelector('.brand-logo');
if(brandLogo){
  brandLogo.src='assets/idk-advanced-rd-logo.svg';
  brandLogo.alt='IDK Advanced R&D — Driving a Better Tomorrow';
}
if(brand&&!brand.querySelector('.brand-motor')){
  const motor=document.createElement('span');
  motor.className='brand-motor';
  motor.innerHTML=`<img src="${MOTOR_IMAGE}" alt="Electric traction motor">`;
  brand.appendChild(motor);
}

const toggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('.nav-links');
if(toggle&&nav){
  toggle.addEventListener('click',()=>{
    const open=nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded',String(open));
  });
  nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded','false');
  }));
}

const year=document.getElementById('year');
if(year)year.textContent=new Date().getFullYear();

// Homepage hero refresh.
const hero=document.querySelector('.hero');
if(hero){
  const eyebrow=hero.querySelector('.eyebrow');
  const title=hero.querySelector('h1');
  const lead=hero.querySelector('.hero-lead');
  const actions=hero.querySelector('.hero-actions');
  const tags=hero.querySelector('.hero-tags');
  const visual=hero.querySelector('.hero-visual');
  if(eyebrow)eyebrow.textContent='RESEARCH • MODELLING • CONTROL • REAL-WORLD IMPACT';
  if(title)title.innerHTML='Research-Backed Engineering for <span class="hero-accent">Electrified Systems</span>';
  if(lead)lead.textContent='From electric drives and EV systems to power electronics, control, modelling and thermal intelligence — we turn advanced research into measurable engineering outcomes.';
  if(actions){
    actions.innerHTML='<a class="btn btn-primary" href="#contact">Discuss a Project</a><a class="btn btn-secondary" href="#capabilities">Explore Our Capabilities</a>';
  }
  if(tags){
    tags.innerHTML='<span>⚡ Cleaner Mobility</span><span>▥ Higher Performance</span><span>⚙ Engineering Impact</span><span>◒ A Brighter Tomorrow</span>';
  }
  if(visual){
    visual.innerHTML=`
      <img class="ev-hero-photo" src="${CAR_IMAGE}" alt="Electric vehicle representing IDK Advanced R&D electrified-systems engineering">
      <div class="hero-image-label"><small>ELECTRIFICATION</small><strong>Driving a Better Tomorrow</strong></div>
      <a class="image-credit" href="${CAR_SOURCE}" target="_blank" rel="noopener">EV photo: Darin Caggiano / Wikimedia Commons · CC BY-SA 4.0</a>`;
  }
}

// PMSM modelling section with clear mathematical notation.
if(hero&&!document.getElementById('pmsm-modelling')){
  const modelling=document.createElement('section');
  modelling.id='pmsm-modelling';
  modelling.className='section modelling-section';
  modelling.innerHTML=`
    <div class="container">
      <div class="model-intro-grid">
        <div class="model-copy">
          <div class="eyebrow">MODELLING THE POSSIBILITIES</div>
          <h2><span>PMSM Modelling</span> for Real-World Performance</h2>
          <p>Physics-based equations connect electrical dynamics, electromagnetic torque and mechanical motion. These models support controller design, simulation, optimisation and validation of electrified drive systems.</p>
          <div class="model-flow"><span>MODEL</span><b>→</b><span>SIMULATE</span><b>→</b><span>CONTROL</span><b>→</b><span>OPTIMISE</span><b>→</b><span>VALIDATE</span></div>
        </div>
        <div class="model-motor-wrap">
          <img src="${MOTOR_IMAGE}" alt="Real traction motor used as a visual reference for electric-drive modelling">
          <div class="motor-overlay">REAL TRACTION MOTOR</div>
        </div>
      </div>

      <div class="equation-grid" aria-label="PMSM modelling equations">
        <article class="equation-card eq-blue">
          <div class="eq-head"><span>01</span><strong>d-axis voltage equation</strong></div>
          <div class="equation">\\(v_d = R_s i_d + L_d \\frac{d i_d}{dt} - \\omega_e L_q i_q\\)</div>
          <p>Direct-axis stator voltage dynamics.</p>
        </article>
        <article class="equation-card eq-cyan">
          <div class="eq-head"><span>02</span><strong>q-axis voltage equation</strong></div>
          <div class="equation">\\(v_q = R_s i_q + L_q \\frac{d i_q}{dt} + \\omega_e(L_d i_d + \\lambda_f)\\)</div>
          <p>Quadrature-axis voltage and back-EMF coupling.</p>
        </article>
        <article class="equation-card eq-gold">
          <div class="eq-head"><span>03</span><strong>electromagnetic torque</strong></div>
          <div class="equation">\\(T_e = \\frac{3}{2}p[\\lambda_f i_q + (L_d-L_q)i_d i_q]\\)</div>
          <p>Torque from PM flux and reluctance contribution.</p>
        </article>
        <article class="equation-card eq-teal">
          <div class="eq-head"><span>04</span><strong>mechanical dynamics</strong></div>
          <div class="equation">\\(J\\frac{d\\omega_m}{dt} = T_e - T_L - B\\omega_m\\)</div>
          <p>Rotor acceleration under torque, load and damping.</p>
        </article>
      </div>

      <div class="model-values">
        <div><b>◉</b><strong>Physics-Based Models</strong><span>From component to system level</span></div>
        <div><b>▣</b><strong>Simulation to Reality</strong><span>Application-focused validation</span></div>
        <div><b>◎</b><strong>Optimised Performance</strong><span>Control, thermal and efficiency aware</span></div>
        <div><b>◒</b><strong>Sustainable Impact</strong><span>Engineering for cleaner mobility</span></div>
      </div>
      <div class="media-credit">Motor photo: <a href="${MOTOR_SOURCE}" target="_blank" rel="noopener">N509FZ / Wikimedia Commons</a> · CC BY-SA 4.0</div>
    </div>`;
  hero.insertAdjacentElement('afterend',modelling);

  window.MathJax={tex:{inlineMath:[['\\(','\\)']]},svg:{fontCache:'global'}};
  const mj=document.createElement('script');
  mj.src='https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js';
  mj.async=true;
  mj.onload=()=>{if(window.MathJax?.typesetPromise)window.MathJax.typesetPromise([modelling]);};
  document.head.appendChild(mj);
}

// Public contact details.
const indiaAddress='Kollengode, Palakkad, Kerala 678506, India';
const publicEmails=['contact@idkadvancedrd.com','rajeshgidk@gmail.com'];
const heroBase=document.querySelector('.hero-facts > div:first-child strong');
if(heroBase)heroBase.textContent=indiaAddress;

document.querySelectorAll('.contact-row').forEach(row=>{
  const label=row.querySelector('span');
  const value=row.querySelector('strong');
  if(!label||!value)return;
  const key=label.textContent.trim().toLowerCase();
  if(key==='location')value.textContent=indiaAddress;
  if(key==='email'){
    value.innerHTML=`<a href="mailto:${publicEmails[0]}">${publicEmails[0]}</a><br><a href="mailto:${publicEmails[1]}">${publicEmails[1]}</a>`;
    value.querySelectorAll('a').forEach(link=>{link.style.color='inherit';link.style.textDecoration='none';});
  }
});

const orgData=document.querySelector('script[type="application/ld+json"]');
if(orgData){
  try{
    const data=JSON.parse(orgData.textContent);
    data.email=publicEmails;
    data.telephone='+971565728483';
    data.address={'@type':'PostalAddress','addressLocality':'Kollengode','addressRegion':'Kerala','postalCode':'678506','addressCountry':'IN'};
    delete data.location;
    orgData.textContent=JSON.stringify(data);
  }catch(e){}
}

const waNumber='971565728483';
const waUrl=`https://wa.me/${waNumber}?text=${encodeURIComponent('Hello IDK Advanced R&D, I would like to discuss an engineering R&D project.')}`;
const contactCard=document.querySelector('.contact-card');
if(contactCard&&!contactCard.querySelector('.whatsapp-contact')){
  const waButton=document.createElement('a');
  waButton.className='btn btn-whatsapp btn-wide whatsapp-contact';
  waButton.href=waUrl;
  waButton.target='_blank';
  waButton.rel='noopener';
  waButton.innerHTML='<span class="wa-dot">●</span> WhatsApp +971 56 572 8483';
  const firstButton=contactCard.querySelector('.btn');
  if(firstButton)firstButton.insertAdjacentElement('afterend',waButton);else contactCard.prepend(waButton);
}

if(!document.querySelector('.wa-float')){
  const float=document.createElement('a');
  float.className='wa-float';
  float.href=waUrl;
  float.target='_blank';
  float.rel='noopener';
  float.setAttribute('aria-label','Contact IDK Advanced R&D on WhatsApp');
  float.innerHTML='<svg viewBox="0 0 32 32" aria-hidden="true"><path fill="currentColor" d="M19.1 17.5c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-1.7-.8-2.8-1.5-3.9-3.4-.3-.5.3-.5.8-1.6.1-.2.1-.4 0-.6-.1-.2-.7-1.7-1-2.4-.3-.6-.6-.5-.8-.5h-.7c-.2 0-.6.1-.9.4-.3.3-1.2 1.2-1.2 2.9s1.2 3.3 1.4 3.5c.2.2 2.4 3.7 5.9 5.2.8.4 1.5.6 2 .7.8.3 1.6.2 2.2.1.7-.1 1.8-.7 2.1-1.5.3-.7.3-1.4.2-1.5-.1-.1-.3-.2-.6-.3M16 27.5c-2.1 0-4.1-.6-5.8-1.6l-.4-.2-4.3 1.1 1.1-4.2-.3-.4A11.4 11.4 0 1 1 16 27.5m0-25A13.5 13.5 0 0 0 4.4 22.8L2.5 29.5l6.9-1.8A13.5 13.5 0 1 0 16 2.5"/></svg><span>WhatsApp</span>';
  document.body.appendChild(float);
}

// Project registration, document upload and general enquiry forms.
const footer=document.querySelector('.site-footer');
if(footer&&!document.getElementById('project-forms')){
  const forms=document.createElement('section');
  forms.id='project-forms';
  forms.className='section forms-section';
  forms.innerHTML=`
  <div class="container">
    <div class="section-head forms-head">
      <div class="eyebrow">PROJECT REGISTRATION & ENQUIRIES</div>
      <h2>Tell us what you are trying to build, improve or validate.</h2>
      <p>Use the project form for a structured R&D request or the enquiry form for an initial discussion. You may attach a non-confidential technical brief, requirement sheet or supporting document.</p>
    </div>
    <div class="forms-grid">
      <div class="form-card form-card-primary">
        <div class="form-card-head"><span>01</span><div><h3>Project Registration</h3><p>For contract R&D, co-development, technical feasibility or funded-project collaboration.</p></div></div>
        <form class="rd-form" action="https://formsubmit.co/rajeshgidk@gmail.com" method="POST" enctype="multipart/form-data">
          <input type="hidden" name="_subject" value="New IDK Advanced R&D Project Registration">
          <input type="hidden" name="_template" value="table">
          <input type="text" name="_honey" class="hp-field" tabindex="-1" autocomplete="off">
          <input type="hidden" name="_autoresponse" value="Thank you for contacting IDK Advanced R&D. Your project registration has been received. We will review the information and respond regarding the appropriate next step.">
          <div class="field-grid">
            <label>Full name *<input type="text" name="Full Name" required autocomplete="name"></label>
            <label>Organisation / Company<input type="text" name="Organisation" autocomplete="organization"></label>
            <label>Email *<input type="email" name="email" required autocomplete="email"></label>
            <label>WhatsApp / Phone<input type="tel" name="WhatsApp Phone" autocomplete="tel"></label>
            <label>Country *<input type="text" name="Country" required autocomplete="country-name"></label>
            <label>Project type *<select name="Project Type" required><option value="">Select</option><option>Contract R&D</option><option>Technical Feasibility Study</option><option>Co-Development</option><option>Industry-Sponsored Research</option><option>Funded / Consortium Collaboration</option><option>Technical Consulting</option><option>Other</option></select></label>
            <label>Technical area *<select name="Technical Area" required><option value="">Select</option><option>EV & Electric Drives</option><option>Power Electronics</option><option>Control & Optimisation</option><option>Thermal / Virtual Sensing</option><option>Digital Twin / Modelling</option><option>Clean Energy / Microgrids</option><option>Other</option></select></label>
            <label>Target timeline<select name="Timeline"><option value="">Select</option><option>Urgent — under 1 month</option><option>1–3 months</option><option>3–6 months</option><option>6–12 months</option><option>Long-term collaboration</option></select></label>
          </div>
          <label>Project title *<input type="text" name="Project Title" required></label>
          <label>Problem / objective *<textarea name="Project Objective" rows="5" required placeholder="Describe the engineering problem, current status and what outcome you need."></textarea></label>
          <label>Expected deliverables<textarea name="Expected Deliverables" rows="3" placeholder="For example: simulation model, algorithm, technical report, validation plan, feasibility assessment..."></textarea></label>
          <label class="file-field">Upload supporting document <span>Optional — PDF, DOC/DOCX, PPT/PPTX, XLS/XLSX or image; total upload up to 10 MB.</span><input type="file" name="attachment" accept=".pdf,.doc,.docx,.ppt,.pptx,.xls,.xlsx,.png,.jpg,.jpeg"></label>
          <label class="consent"><input type="checkbox" required name="Submission Confirmation" value="Agreed"><span>I confirm that I am not uploading confidential, export-controlled or proprietary information that requires an NDA.</span></label>
          <button type="submit" class="btn btn-primary form-submit">Submit Project Registration</button>
        </form>
      </div>
      <div class="form-card">
        <div class="form-card-head"><span>02</span><div><h3>General Enquiry</h3><p>For an introductory question, partnership discussion or request for more information.</p></div></div>
        <form class="rd-form" action="https://formsubmit.co/rajeshgidk@gmail.com" method="POST" enctype="multipart/form-data">
          <input type="hidden" name="_subject" value="New IDK Advanced R&D Enquiry">
          <input type="hidden" name="_template" value="table">
          <input type="text" name="_honey" class="hp-field" tabindex="-1" autocomplete="off">
          <input type="hidden" name="_autoresponse" value="Thank you for your enquiry to IDK Advanced R&D. We have received your message and will respond as appropriate.">
          <label>Full name *<input type="text" name="Full Name" required autocomplete="name"></label>
          <label>Company / Organisation<input type="text" name="Organisation" autocomplete="organization"></label>
          <label>Email *<input type="email" name="email" required autocomplete="email"></label>
          <label>WhatsApp / Phone<input type="tel" name="WhatsApp Phone" autocomplete="tel"></label>
          <label>Country<input type="text" name="Country" autocomplete="country-name"></label>
          <label>Enquiry type<select name="Enquiry Type"><option>Engineering R&D</option><option>Industry Collaboration</option><option>Funded Project / Consortium</option><option>Research Collaboration</option><option>Technical Consulting</option><option>Other</option></select></label>
          <label>Your message *<textarea name="Message" rows="7" required placeholder="How can IDK Advanced R&D help?"></textarea></label>
          <label class="file-field">Optional attachment <span>Non-confidential supporting file, up to 10 MB total.</span><input type="file" name="attachment" accept=".pdf,.doc,.docx,.ppt,.pptx,.xls,.xlsx,.png,.jpg,.jpeg"></label>
          <button type="submit" class="btn btn-primary form-submit">Send Enquiry</button>
          <div class="form-alt"><span>Prefer a quick conversation?</span><a href="${waUrl}" target="_blank" rel="noopener">WhatsApp +971 56 572 8483</a></div>
        </form>
      </div>
    </div>
    <div class="form-privacy"><strong>Submission note:</strong> These forms use a third-party form-processing service to email submissions to IDK Advanced R&D. Do not send confidential IP, passwords, financial information or controlled technical data through the public forms. For sensitive projects, contact us first to discuss confidentiality/NDA arrangements.</div>
  </div>`;
  footer.insertAdjacentElement('beforebegin',forms);
  if(nav&&!nav.querySelector('a[href="#project-forms"]')){
    const cta=nav.querySelector('.nav-cta');
    const link=document.createElement('a');
    link.href='#project-forms';
    link.textContent='Project Form';
    if(cta)nav.insertBefore(link,cta);else nav.appendChild(link);
  }
}
