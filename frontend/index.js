function moduleProject3() {

  // 👉 TASK 1 - Write a `buildNav` component that returns a nav

  function buildNav(links) {
    //  ✨ do your magic here
    let returnNav=document.createElement('nav');
    
    links.forEach(link=>{
      const newA=document.createElement('a');
      newA.href=link.href;
      newA.textContent=link.textContent;
      newA.title=link.title;
      returnNav.append(newA);
    });
    return returnNav
  }

  // ❗ DOM creation using your `buildNav` component (do not change):
  document.querySelector('header').appendChild(buildNav([
    { href: 'https://www.example.com', textContent: 'Home', title: 'Go to the home page' },
    { href: 'https://www.example.com/about', textContent: 'About', title: 'Learn more about our company' },
    { href: 'https://www.example.com/services', textContent: 'Services', title: 'View our available services' },
    { href: 'https://www.example.com/blog', textContent: 'Blog', title: 'Read our latest blog posts' },
    { href: 'https://www.example.com/contact', textContent: 'Contact', title: 'Get in touch with us' },
  ]))

  // 👉 TASK 2A - Write a `buildLearnerCard` component that returns a card

  function buildLearnerCard(learner, languages) {
    //  ✨ do your magic here
    let returnCard=document.createElement('div');
    let pName=document.createElement('p');
    let pID=document.createElement('p');
    let pDoB=document.createElement('p');
    let pFavLang=document.createElement('p');

    let languageName = languages.filter(language=>language.id===learner.favLanguage)[0].name;

    pName.textContent=learner.fullName;
    pID.textContent=`Learner ID: ${learner.id}`;
    pDoB.textContent=`Date of Birth: ${learner.dateOfBirth}`;
    pFavLang.textContent=`Favorite Language: ${languageName}`;

    returnCard.classList.add('learner-card');
    returnCard.append(pName);
    returnCard.append(pID);
    returnCard.append(pDoB);
    returnCard.append(pFavLang);

    return returnCard;
  }

  {
    // 👉 TASK 2B - Use the two variables below to make learner Cards, and put them in the DOM

    let languages = [
      { id: 37, name: 'JavaScript', creator: 'Brendan Eich', year: 1995 },
      { id: 82, name: 'Python', creator: 'Guido van Rossum', year: 1991 },
      { id: 12, name: 'Java', creator: 'James Gosling', year: 1995 },
      { id: 53, name: 'C#', creator: 'Microsoft Corporation', year: 2000 },
      { id: 91, name: 'Ruby', creator: 'Yukihiro Matsumoto', year: 1995 }
    ]
    let learners = [
      { id: 24, fullName: 'Kenneth Fisher', dateOfBirth: '1990-01-01', favLanguage: 82 },
      { id: 53, fullName: 'Jess Williams', dateOfBirth: '1985-05-10', favLanguage: 37 },
      { id: 72, fullName: 'Brandon Nguyen', dateOfBirth: '1992-09-15', favLanguage: 53 },
      { id: 41, fullName: 'Sabah Beydoun', dateOfBirth: '1988-03-25', favLanguage: 91 },
      { id: 17, fullName: 'Daniel Castillo', dateOfBirth: '1995-11-05', favLanguage: 12 }
    ]
    //  ✨ do your magic here
    let mySection = document.querySelector('section');

    learners.forEach(learner=>{
      let newLearnerCard=buildLearnerCard(learner, languages);
      mySection.append(newLearnerCard);
    });

    let arrCards = document.querySelectorAll('.learner-card');

    arrCards.forEach(card => {
      card.addEventListener('click',()=>{
        arrCards.forEach(card=>card.classList.remove('active'));
        card.classList.add('active');
        event.stopPropagation();
      });      
    });
  }


  // 👉 TASK 3 - Write a `buildFooter` component that returns a footer

  function buildFooter(footerData) {
    //  ✨ do your magic here
    let newFooter=document.createElement('footer');

    let divCompanyInfo = document.createElement('div');
    let pCompanyName = document.createElement('p');
    let pCompanyAddress = document.createElement('p');
    let pCompanyEmail = document.createElement('p');
    let aCompanyEmail = document.createElement('a');

    let divSocialMedia = document.createElement('div');
    let aTwitter= document.createElement('a');
    let aFacebook= document.createElement('a');
    let aInstagram= document.createElement('a');

    let divSignoff= document.createElement('div');



    // Add all the values
    divCompanyInfo.classList.add('company-info');
    
    pCompanyName.classList.add('company-name');
    pCompanyName.textContent=footerData.companyName;
    
    pCompanyAddress.classList.add('address');
    pCompanyAddress.textContent=footerData.address;

    pCompanyEmail.classList.add('contact-email');
    pCompanyEmail.textContent='Email: ';
    aCompanyEmail.textContent=footerData.contactEmail;
    aCompanyEmail.href="mailto:info@example.com";

    aTwitter.textContent='Twitter';
    aTwitter.href=footerData.socialMedia.twitter;

    aFacebook.textContent='Facebook';
    aFacebook.href=footerData.socialMedia.facebook;

    aInstagram.textContent='Instagram';
    aInstagram.href=footerData.socialMedia.instagram;

    divSignoff.textContent=`© BLOOM INSTITUTE OF TECHNOLOGY ${new Date().getFullYear()}`;

    // Append Everything
    divCompanyInfo.append(pCompanyName);
    divCompanyInfo.append(pCompanyAddress);
    divCompanyInfo.append(pCompanyEmail);
    pCompanyEmail.append(aCompanyEmail);

    divSocialMedia.append(aTwitter);
    divSocialMedia.append(aFacebook);
    divSocialMedia.append(aInstagram);    

    newFooter.append(divCompanyInfo);
    newFooter.append(divSocialMedia);
    newFooter.append(divSignoff);    

    return newFooter;
  }

  // ❗ DOM creation using your `buildFooter` component (do not change):
  document.body.appendChild(buildFooter({
    companyName: 'Bloom Institute of Technology',
    address: '123 Main Street, City, Country',
    contactEmail: 'info@example.com',
    socialMedia: {
      twitter: 'https://twitter.com/example',
      facebook: 'https://www.facebook.com/example',
      instagram: 'https://www.instagram.com/example',
    },
  }))

  // 👉 TASK 4 - Clicking on the section should deactivate the active card
  let section = document.querySelector('section');
  section.addEventListener('click',unclickAll);
  //  ✨ do your magic here

  function unclickAll(){    
    let arrCards = document.querySelectorAll('.learner-card');
    arrCards.forEach(card =>card.classList.remove('active'));
  }

}

// ❗ DO NOT CHANGE THIS CODE
// ❗ DO NOT CHANGE THIS CODE
// ❗ DO NOT CHANGE THIS CODE
if (typeof module !== 'undefined' && module.exports) module.exports = { moduleProject3 }
else moduleProject3()
