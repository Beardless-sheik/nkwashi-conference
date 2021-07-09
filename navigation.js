const speakerData = [
  {
    speakerName: 'Alick Nyirenda',
    speakerTitle: 'Software Developer',
    speakerAchievements: `Alick has been invested in the Zambian tech scene for a long time. 
    He helped start a company called Get It Online Zambia and has been heavily involved in the building 
    up of the e-commerce & developer community in Zambia.`
  },
  { 
    speakerName: 'Robert Phiri',
    speakerTitle: 'Real estate Developer',
    speakerAchievements: `Robert has studied in the UK as an investment professional. 
    He quickly got back to Zambia after a few years as he felt he needed to give back to his home .He
    is involved as a director on the Nkwashi team and is looking to build charter cities all across Africa.`
  },
  {
    speakerName: 'Bestone Bwalya',
    speakerTitle: 'Lawyer',
    speakerAchievements: `Bestone has been a Zambian lawyer that has been practicsing law locally 
    for over 20 years. He brings his experience in local land matters to this conference to educate us
    on the work they are doing to improve local land laws for the people`
  },
  {
    speakerName: 'Mick Jenkins',
    speakerTitle: 'Rapper',
    speakerAchievements: `Alick has been invested in the Zambian tech scene for a long time. 
    He helped start a company called Get It Online Zambia and has been heavily involved in the building 
    up of the e-commerce & developer community in Zambia`
  },
  {
    speakerName: 'Dambiso Mwale',
    speakerTitle: 'Artist',
    speakerAchievements: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc volutpat dictum est. 
    Cras pulvinar lectus sit amet dolor vehicula, eu semper magna lacinia. 
    Etiam lobortis sem eget nibh posuere aliquam a sit amet nisl. Phasellus iaculis augue vel lacus laoreet commodo.` 
  },
  {
    speakerName: 'Xian Hing',
    speakerTitle: 'Asain Investment Banker',
    speakerAchievements: `Proin sit amet placerat est. Nunc sit amet augue sit amet nulla sollicitudin maximus eget sit 
    amet nunc. Etiam posuere cursus facilisis. Phasellus nec sodales odio. Sed malesuada nisl quis porttitor gravida. 
    Aliquam nec auctor tortor. Nam ut vulputate nibh.`
  }
]

const hamburger = document.querySelector('#hamburger-menu');
const closeIcon = document.getElementById('close-menu-icon');
let speakerSection = document.querySelector('#speakers');

function popUpMenu(){
  hamburger.classList.toggle('menu-hidden');
  closeIcon.classList.toggle('menu-hidden');
  document.getElementById('mobile-menu-links').classList.toggle('menu-hidden');
}

function populateFirstTwoSpeakers(){
  let counter = 0
  speakerSection.innerHTML = '';
  speakerData.forEach((data) => {
    if (counter<=1){
      speakerSection.innerHTML += `
      <div class="grid-speaker-container">
        <div class="grid-speaker-section">
          <img src="./images/speaker-placeholder.png" alt="speaker image" class="rounded speaker-image">
          <div class="speaker-description">
            <p class="h5 mb-1">${data.speakerName}</p>
            <p class="speaker-profession"> ${data.speakerTitle} </p>
            <hr class="dividing-line-speakers">
            <p class="speaker-description-text"> ${data.speakerAchievements} </p>
          </div>
        </div>
      </div>`; }
    counter++;    
  });
  speakerSection.innerHTML+= ` <button id="see-more-button" class="speakers-button rounded p-2"> MORE <i class="fas fa-chevron-down see-more-speakers-icon"></i> </button>`
  document.querySelector('#see-more-button').addEventListener('click', populateAllSpeakersMobile);
}

function populateAllSpeakersMobile(){
  speakerSection.innerHTML = '';
  speakerData.forEach((data) => {
  speakerSection.innerHTML += `
      <div class="grid-speaker-container">
        <div class="grid-speaker-section">
          <img src="./images/speaker-placeholder.png" alt="speaker image" class="rounded speaker-image">
          <div class="speaker-description">
            <p class="h5 mb-1">${data.speakerName}</p>
            <p class="speaker-profession"> ${data.speakerTitle} </p>
            <hr class="dividing-line-speakers">
            <p class="speaker-description-text"> ${data.speakerAchievements} </p>
          </div>
        </div>
      </div>`;});
  speakerSection.innerHTML+= ` <button id="see-less-button" class="speakers-button rounded p-2"> SEE LESS <i class="fas fa-chevron-down see-more-speakers-icon"></i> </button>`
  document.querySelector('#see-less-button').addEventListener('click', populateFirstTwoSpeakers);
}

function populateAllSpeakersDesktop(){
  speakerData.forEach((data) => {
    speakerSection.innerHTML += `
        <div class="grid-speaker-container">
          <div class="grid-speaker-section">
            <img src="./images/speaker-placeholder.png" alt="speaker image" class="rounded speaker-image">
            <div class="speaker-description">
              <p class="h5 mb-1">${data.speakerName}</p>
              <p class="speaker-profession"> ${data.speakerTitle} </p>
              <hr class="dividing-line-speakers">
              <p class="speaker-description-text"> ${data.speakerAchievements} </p>
            </div>
          </div>
        </div>`;})
}

hamburger.addEventListener('click', popUpMenu);
closeIcon.addEventListener('click', popUpMenu);

const mediaQuerryDesktop = window.matchMedia('(max-width:768px)')
if(mediaQuerryDesktop.matches){
  populateFirstTwoSpeakers();
}
else {
  populateAllSpeakersDesktop();
}
  

console.log(2);
