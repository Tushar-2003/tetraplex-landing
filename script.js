
// navbar logic
const hamburgerMenu = document.querySelector('.hamburger-menu');
const menuItems = document.querySelector('.menu-items');

hamburgerMenu.addEventListener('click', () => {
  menuItems.classList.toggle('show');
});

// features logic

const featuresDiplay = document.querySelectorAll('.features');
const featureImages = document.querySelectorAll('.feature-display-image');
const featureTitles = document.querySelectorAll('.feature-display-title');
const featureDescriptions = document.querySelectorAll('.feature-display-desc');


const features = {
  veild: {
    title: 'Veild',
    description: 'Veild is a psudo anonymous, and privacy-focused Chat Mechanizm to promote discussion of ideas.',
    image: '../assets/veild.svg'
  },
  karma: {
    title: 'Karma',
    description: 'Karma is a decentralized, peer-to-peer, and pseudo anonymous social media platform.',
    image: '../assets/karma.svg'
  },
  persona: {
    title: 'Persona',
    description: 'Persona is a decentralized, peer-to-peer, and pseudo anonymous social media platform.',
    image: '../assets/persona.svg'
  },
  concierge: {
    title: 'Concierge',
    description: 'Concierge is a decentralized, peer-to-peer, and pseudo anonymous social media platform.',
    image: '../assets/concierge.svg'
  },
}

console.log(features.veild.description)
