if(!document.querySelector('link[href="forms.css"]')){const l=document.createElement('link');l.rel='stylesheet';l.href='forms.css';document.head.appendChild(l);}

const MOTOR_IMAGE='https://commons.wikimedia.org/wiki/Special:Redirect/file/ABB_AMXM290-SBIMC2CF04_traction_motor_on_PM179_(20211214142118).jpg?width=900';
const CAR_FALLBACK='https://commons.wikimedia.org/wiki/Special:Redirect/file/Tesla_Model_3_Front.jpg?width=1280';
const HERO_PARTS=[1,2,3,4,5,6,7].map(n=>`assets/hero-b64-0${n}.txt?v=20260908-1`);

const brand=document.querySelector('.brand');
const brandLogo=document.querySelector('.brand-logo');
if(brandLogo){brandLogo.src='assets/idk-advanced-rd-logo.svg';brandLogo.alt='IDK Advanced R&D — Driving a Better Tomorrow';}
if(brand&&!brand.querySelector('.brand-motor')){
  const m=document.createElement('span');m.className='brand-motor';m.innerHTML=`<img src="${MOTOR_IMAGE}" alt="Electric traction motor">`;brand.appendChild(m);
}

const toggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('.nav-links');
if(toggle&&nav){
  toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));});
  nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');}));
}
const year=document.getElementById('year');if(year)year.textContent=new Date().getFullYear();

const hero=document.querySelector('.hero');
if(hero){
  const eyebrow=hero.querySelector('.eyebrow');if(eyebrow)eyebrow.textContent='RESEARCH • MODELLING • CONTROL • REAL-WORLD IMPACT';
  const h1=hero.querySelector('h1');if(h1)h1.innerHTML='Research-Backed Engineering for <span class="hero-accent">Electrified Systems</span>';
  const lead=hero.querySelector('.hero-lead');if(lead)lead.textContent='From electric drives and EV systems to power electronics, intelligent control, modelling and thermal intelligence — we turn advanced research into measurable engineering outcomes.';
  const actions=hero.querySelector('.hero-actions');if(actions)actions.innerHTML='<a class="btn btn-primary" href="#contact">Discuss a Project →</a><a class="btn btn-secondary" href="#capabilities">Explore Our Capabilities</a>';
  const tags=hero.querySelector('.hero-tags');if(tags)tags.innerHTML='<span>Cleaner Mobility</span><span>Higher Performance</span><span>Engineering Impact</span><span>A Brighter Tomorrow</span>';
  const visual=hero.querySelector('.hero-visual');
  if(visual){
    visual.innerHTML=`<img class="ev-hero-photo" src="${CAR_FALLBACK}" alt="Full electric car — IDK Advanced R&D electrification"><div class="hero-image-label"><small>ELECTRIFICATION</small><strong>Driving a Better Tomorrow</strong></div>`;
    const img=visual.querySelector('.ev-hero-photo');
    Promise.all(HERO_PARTS.map(u=>fetch(u,{cache:'no-store'}).then(r=>{if(!r.ok)throw new Error('hero part');return r.text();})))
      .then(parts=>{img.src='data:image/webp;base64,'+parts.join('').replace(/\s+/g,'');})
      .catch(()=>{});
  }
}

const credibility=document.querySelector('.credibility-strip');
if(credibility&&!document.getElementById('modelling')){
  const section=document.createElement('section');section.id='modelling';section.className='section modelling-section';
  section.innerHTML=`<div class="container">
    <div class="model-intro-grid">
      <div class="model-copy"><div class="eyebrow">MODELLING THE POSSIBILITIES</div><h2><span>PMSM Modelling</span> for Real-World Performance</h2><p>Physics-based models connect electrical behaviour, electromagnetic torque and mechanical dynamics so control concepts can be designed, simulated and validated with clear engineering assumptions.</p><div class="model-flow"><span>MODEL</span><b>→</b><span>SIMULATE</span><b>→</b><span>CONTROL</span><b>→</b><span>OPTIMISE</span><b>→</b><span>VALIDATE</span></div></div>
      <div class="model-motor-wrap"><img src="${MOTOR_IMAGE}" alt="Electric traction motor"><div class="motor-overlay">ELECTRIC DRIVE • PMSM MODELLING</div></div>
    </div>
    <div class="equation-grid">
      <article class="equation-card eq-blue"><div class="eq-head"><span>01</span><strong>d-axis voltage equation</strong></div><div class="equation"><i>v</i><sub>d</sub> = <i>R</i><sub>s</sub><i>i</i><sub>d</sub> + <i>L</i><sub>d</sub> d<i>i</i><sub>d</sub>/d<i>t</i> − ω<sub>e</sub><i>L</i><sub>q</sub><i>i</i><sub>q</sub></div><p>Electrical dynamics along the rotor d-axis.</p></article>
      <article class="equation-card eq-cyan"><div class="eq-head"><span>02</span><strong>q-axis voltage equation</strong></div><div class="equation"><i>v</i><sub>q</sub> = <i>R</i><sub>s</sub><i>i</i><sub>q</sub> + <i>L</i><sub>q</sub> d<i>i</i><sub>q</sub>/d<i>t</i> + ω<sub>e</sub>(<i>L</i><sub>d</sub><i>i</i><sub>d</sub> + λ<sub>f</sub>)</div><p>Electrical dynamics along the torque-producing q-axis.</p></article>
      <article class="equation-card eq-gold"><div class="eq-head"><span>03</span><strong>Electromagnetic torque</strong></div><div class="equation"><i>T</i><sub>e</sub> = 3/2 <i>p</i>[λ<sub>f</sub><i>i</i><sub>q</sub> + (<i>L</i><sub>d</sub> − <i>L</i><sub>q</sub>)<i>i</i><sub>d</sub><i>i</i><sub>q</sub>]</div><p>Torque contribution from magnet flux and saliency.</p></article>
      <article class="equation-card eq-teal"><div class="eq-head"><span>04</span><strong>Mechanical dynamics</strong></div><div class="equation"><i>J</i> dω<sub>m</sub>/d<i>t</i> = <i>T</i><sub>e</sub> − <i>T</i><sub>L</sub> − <i>B</i>ω<sub>m</sub></div><p>Rotor acceleration from electromagnetic, load and friction torques.</p></article>
    </div>
    <div class="model-values"><div><b>⚛</b><strong>PHYSICS-BASED MODELS</strong><span>From component to system level</span></div><div><b>▣</b><strong>SIMULATION TO REALITY</strong><span>Application-focused validation</span></div><div><b>◎</b><strong>OPTIMISED PERFORMANCE</strong><span>Control, efficiency and thermal awareness</span></div><div><b>◇</b><strong>SUSTAINABLE IMPACT</strong><span>Engineering for cleaner mobility</span></div></div>
    <div class="media-credit">Motor reference image: Wikimedia Commons.</div>
  </div>`;
  credibility.insertAdjacentElement('afterend',section);
}

const indiaAddress='Kollengode, Palakkad, Kerala 678506, India';
const publicEmails=['contact@idkadvancedrd.com','rajeshgidk@gmail.com'];
const heroBase=document.querySelector('.hero-facts > div:first-child strong');if(heroBase)heroBase.textContent=indiaAddress;
document.querySelectorAll('.contact-row').forEach(row=>{const label=row.querySelector('span'),value=row.querySelector('strong');if(!label||!value)return;const key=label.textContent.trim().toLowerCase();if(key==='location')value.textContent=indiaAddress;if(key==='email')value.innerHTML=`<a href="mailto:${publicEmails[0]}" style="color:inherit;text-decoration:none">${publicEmails[0]}</a><br><a href="mailto:${publicEmails[1]}" style="color:inherit;text-decoration:none">${publicEmails[1]}</a>`;});

const waNumber='971565728483';
const waUrl=`https://wa.me/${waNumber}?text=${encodeURIComponent('Hello IDK Advanced R&D, I would like to discuss an engineering R&D project.')}`;
const contactCard=document.querySelector('.contact-card');
if(contactCard&&!contactCard.querySelector('.whatsapp-contact')){const a=document.createElement('a');a.className='btn btn-whatsapp btn-wide whatsapp-contact';a.href=waUrl;a.target='_blank';a.rel='noopener';a.innerHTML='<span class="wa-dot">●</span> WhatsApp +971 56 572 8483';const first=contactCard.querySelector('.btn');if(first)first.insertAdjacentElement('afterend',a);else contactCard.prepend(a);}
if(!document.querySelector('.wa-float')){const a=document.createElement('a');a.className='wa-float';a.href=waUrl;a.target='_blank';a.rel='noopener';a.setAttribute('aria-label','Contact IDK Advanced R&D on WhatsApp');a.innerHTML='<svg viewBox="0 0 32 32" aria-hidden="true"><path fill="currentColor" d="M19.1 17.5c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-1.7-.8-2.8-1.5-3.9-3.4-.3-.5.3-.5.8-1.6.1-.2.1-.4 0-.6-.1-.2-.7-1.7-1-2.4-.3-.6-.6-.5-.8-.5h-.7c-.2 0-.6.1-.9.4-.3.3-1.2 1.2-1.2 2.9s1.2 3.3 1.4 3.5c.2.2 2.4 3.7 5.9 5.2.8.4 1.5.6 2 .7.8.3 1.6.2 2.2.1.7-.1 1.8-.7 2.1-1.5.3-.7.3-1.4.2-1.5-.1-.1-.3-.2-.6-.3M16 27.5c-2.1 0-4.1-.6-5.8-1.6l-.4-.2-4.3 1.1 1.1-4.2-.3-.4A11.4 11.4 0 1 1 16 27.5m0-25A13.5 13.5 0 0 0 4.4 22.8L2.5 29.5l6.9-1.8A13.5 13.5 0 1 0 16 2.5"/></svg><span>WhatsApp</span>';document.body.appendChild(a);}

const footer=document.querySelector('.site-footer');
if(footer&&!document.getElementById('project-forms')){
  const forms=document.createElement('section');forms.id='project-forms';forms.className='section forms-section';forms.innerHTML=`<div class="container"><div class="section-head forms-head"><div class="eyebrow">PROJECT REGISTRATION & ENQUIRIES</div><h2>Tell us what you are trying to build, improve or validate.</h2><p>Use the project form for a structured R&D request or the enquiry form for an initial discussion. You may attach a non-confidential technical brief or supporting document.</p></div><div class="forms-grid">
  <div class="form-card form-card-primary"><div class="form-card-head"><span>01</span><div><h3>Project Registration</h3><p>Contract R&D, feasibility, co-development or funded collaboration.</p></div></div><form class="rd-form" action="https://formsubmit.co/rajeshgidk@gmail.com" method="POST" enctype="multipart/form-data"><input type="hidden" name="_subject" value="New IDK Advanced R&D Project Registration"><input type="hidden" name="_template" value="table"><input type="hidden" name="_autoresponse" value="Thank you for contacting IDK Advanced R&D. Your project registration has been received."><input type="text" name="_honey" class="hp-field" tabindex="-1" autocomplete="off"><div class="field-grid"><label>Full name *<input type="text" name="Full Name" required></label><label>Organisation / Company<input type="text" name="Organisation"></label><label>Email *<input type="email" name="email" required></label><label>WhatsApp / Phone<input type="tel" name="WhatsApp Phone"></label><label>Country *<input type="text" name="Country" required></label><label>Project type *<select name="Project Type" required><option value="">Select</option><option>Contract R&D</option><option>Technical Feasibility Study</option><option>Co-Development</option><option>Industry-Sponsored Research</option><option>Funded / Consortium Collaboration</option><option>Technical Consulting</option><option>Other</option></select></label></div><label>Project title *<input type="text" name="Project Title" required></label><label>Problem / objective *<textarea name="Project Objective" rows="5" required></textarea></label><label>Expected deliverables<textarea name="Expected Deliverables" rows="3"></textarea></label><label class="file-field">Upload supporting document <span>Optional — PDF, DOC/DOCX, PPT/PPTX, XLS/XLSX or image; up to 10 MB.</span><input type="file" name="attachment" accept=".pdf,.doc,.docx,.ppt,.pptx,.xls,.xlsx,.png,.jpg,.jpeg"></label><label class="consent"><input type="checkbox" required><span>I confirm that I am not uploading confidential information that requires an NDA.</span></label><button type="submit" class="btn btn-primary form-submit">Submit Project Registration</button></form></div>
  <div class="form-card"><div class="form-card-head"><span>02</span><div><h3>General Enquiry</h3><p>For an introductory question, partnership discussion or information request.</p></div></div><form class="rd-form" action="https://formsubmit.co/rajeshgidk@gmail.com" method="POST" enctype="multipart/form-data"><input type="hidden" name="_subject" value="New IDK Advanced R&D Enquiry"><input type="hidden" name="_template" value="table"><input type="hidden" name="_autoresponse" value="Thank you for your enquiry to IDK Advanced R&D. We have received your message."><input type="text" name="_honey" class="hp-field" tabindex="-1" autocomplete="off"><label>Full name *<input type="text" name="Full Name" required></label><label>Company / Organisation<input type="text" name="Organisation"></label><label>Email *<input type="email" name="email" required></label><label>WhatsApp / Phone<input type="tel" name="WhatsApp Phone"></label><label>Country<input type="text" name="Country"></label><label>Enquiry type<select name="Enquiry Type"><option>Engineering R&D</option><option>Industry Collaboration</option><option>Funded Project / Consortium</option><option>Research Collaboration</option><option>Technical Consulting</option><option>Other</option></select></label><label>Your message *<textarea name="Message" rows="7" required></textarea></label><label class="file-field">Optional attachment <span>Non-confidential file, up to 10 MB.</span><input type="file" name="attachment" accept=".pdf,.doc,.docx,.ppt,.pptx,.xls,.xlsx,.png,.jpg,.jpeg"></label><button type="submit" class="btn btn-primary form-submit">Send Enquiry</button><div class="form-alt"><span>Prefer a quick conversation?</span><a href="${waUrl}" target="_blank" rel="noopener">WhatsApp +971 56 572 8483</a></div></form></div></div><div class="form-privacy"><strong>Submission note:</strong> Do not send confidential IP, passwords, financial information or controlled technical data through the public forms. Contact us first for NDA arrangements.</div></div>`;
  footer.insertAdjacentElement('beforebegin',forms);
  if(nav&&!nav.querySelector('a[href="#project-forms"]')){const a=document.createElement('a');a.href='#project-forms';a.textContent='Project Form';const cta=nav.querySelector('.nav-cta');if(cta)nav.insertBefore(a,cta);else nav.appendChild(a);}
}
