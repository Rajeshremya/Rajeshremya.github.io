const brandLogo=document.querySelector('.brand-logo');if(brandLogo){brandLogo.src='assets/idk-advanced-rd-logo-final.webp';brandLogo.alt='IDK Advanced R&D — Driving a Better Tomorrow';}
const toggle=document.querySelector('.menu-toggle');const nav=document.querySelector('.nav-links');if(toggle&&nav){toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');}));}
const year=document.getElementById('year');if(year)year.textContent=new Date().getFullYear();

// Public operating locations supplied by IDK Advanced R&D.
const heroBase=document.querySelector('.hero-facts > div:first-child strong');if(heroBase){heroBase.textContent='Kollengode, Kerala, India • Mussaffah, Abu Dhabi, UAE';}
document.querySelectorAll('.contact-row').forEach(row=>{const label=row.querySelector('span');const value=row.querySelector('strong');if(label&&value&&label.textContent.trim().toLowerCase()==='location'){value.innerHTML='India — Kollengode, Palakkad, Kerala 678506<br>UAE — Shabia 11, Mussaffah, Abu Dhabi';}});

// Keep structured organisation data aligned with the two public locations.
const orgData=document.querySelector('script[type="application/ld+json"]');if(orgData){try{const data=JSON.parse(orgData.textContent);delete data.address;data.telephone='+971565728483';data.location=[{'@type':'Place','address':{'@type':'PostalAddress','addressLocality':'Kollengode','addressRegion':'Kerala','postalCode':'678506','addressCountry':'IN'}},{'@type':'Place','address':{'@type':'PostalAddress','streetAddress':'Shabia 11, Mussaffah','addressLocality':'Abu Dhabi','addressCountry':'AE'}}];orgData.textContent=JSON.stringify(data);}catch(e){}}

// WhatsApp contact.
const waNumber='971565728483';
const waUrl=`https://wa.me/${waNumber}?text=${encodeURIComponent('Hello IDK Advanced R&D, I would like to discuss an engineering R&D project.')}`;
const contactCard=document.querySelector('.contact-card');
if(contactCard&&!contactCard.querySelector('.whatsapp-contact')){
  const waButton=document.createElement('a');waButton.className='btn btn-whatsapp btn-wide whatsapp-contact';waButton.href=waUrl;waButton.target='_blank';waButton.rel='noopener';waButton.innerHTML='<span class="wa-dot">●</span> WhatsApp +971 56 572 8483';
  const firstButton=contactCard.querySelector('.btn');if(firstButton)firstButton.insertAdjacentElement('afterend',waButton);else contactCard.prepend(waButton);
}
if(!document.querySelector('.wa-float')){
  const float=document.createElement('a');float.className='wa-float';float.href=waUrl;float.target='_blank';float.rel='noopener';float.setAttribute('aria-label','Contact IDK Advanced R&D on WhatsApp');float.innerHTML='<svg viewBox="0 0 32 32" aria-hidden="true"><path fill="currentColor" d="M19.1 17.5c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-1.7-.8-2.8-1.5-3.9-3.4-.3-.5.3-.5.8-1.6.1-.2.1-.4 0-.6-.1-.2-.7-1.7-1-2.4-.3-.6-.6-.5-.8-.5h-.7c-.2 0-.6.1-.9.4-.3.3-1.2 1.2-1.2 2.9s1.2 3.3 1.4 3.5c.2.2 2.4 3.7 5.9 5.2.8.4 1.5.6 2 .7.8.3 1.6.2 2.2.1.7-.1 1.8-.7 2.1-1.5.3-.7.3-1.4.2-1.5-.1-.1-.3-.2-.6-.3M16 27.5c-2.1 0-4.1-.6-5.8-1.6l-.4-.2-4.3 1.1 1.1-4.2-.3-.4A11.4 11.4 0 1 1 16 27.5m0-25A13.5 13.5 0 0 0 4.4 22.8L2.5 29.5l6.9-1.8A13.5 13.5 0 1 0 16 2.5"/></svg><span>WhatsApp</span>';
  document.body.appendChild(float);
}

// Add forms for project registration, document upload and general enquiries.
const footer=document.querySelector('.site-footer');
if(footer&&!document.getElementById('project-forms')){
  const forms=document.createElement('section');forms.id='project-forms';forms.className='section forms-section';
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
  if(nav){const cta=nav.querySelector('.nav-cta');const link=document.createElement('a');link.href='#project-forms';link.textContent='Project Form';if(cta)nav.insertBefore(link,cta);else nav.appendChild(link);}
}
