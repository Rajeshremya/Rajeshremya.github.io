const brandLogo=document.querySelector('.brand-logo');if(brandLogo){brandLogo.src='assets/idk-advanced-rd-logo-final.webp';brandLogo.alt='IDK Advanced R&D — Driving a Better Tomorrow';}
const toggle=document.querySelector('.menu-toggle');const nav=document.querySelector('.nav-links');if(toggle&&nav){toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');}));}
const year=document.getElementById('year');if(year)year.textContent=new Date().getFullYear();

// Public operating locations supplied by IDK Advanced R&D.
const heroBase=document.querySelector('.hero-facts > div:first-child strong');if(heroBase){heroBase.textContent='Kollengode, Kerala, India • Mussaffah, Abu Dhabi, UAE';}
document.querySelectorAll('.contact-row').forEach(row=>{const label=row.querySelector('span');const value=row.querySelector('strong');if(label&&value&&label.textContent.trim().toLowerCase()==='location'){value.innerHTML='India — Kollengode, Palakkad, Kerala 678506<br>UAE — Shabia 11, Mussaffah, Abu Dhabi';}});

// Keep structured organisation data aligned with the two public locations.
const orgData=document.querySelector('script[type="application/ld+json"]');if(orgData){try{const data=JSON.parse(orgData.textContent);delete data.address;data.location=[{'@type':'Place','address':{'@type':'PostalAddress','addressLocality':'Kollengode','addressRegion':'Kerala','postalCode':'678506','addressCountry':'IN'}},{'@type':'Place','address':{'@type':'PostalAddress','streetAddress':'Shabia 11, Mussaffah','addressLocality':'Abu Dhabi','addressCountry':'AE'}}];orgData.textContent=JSON.stringify(data);}catch(e){}}
