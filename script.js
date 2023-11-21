
//navbar logic
const hamburgerMenu = document.querySelector('.hamburger-menu');
const menuItems = document.querySelector('.menu-items');
// 
hamburgerMenu.addEventListener('click', () => {
  menuItems.classList.toggle('show');
});

//features logic

const featuresDiplay = document.querySelectorAll('.features');
const featureImages = document.querySelectorAll('.feature-display-image');
const featureTitles = document.querySelectorAll('.feature-display-title');
const featureDescriptions = document.querySelectorAll('.feature-display-desc');
const veild = document.querySelector('.feature-1');
const karma = document.querySelector('.feature-2');
const persona = document.querySelector('.feature-3');
const concierge = document.querySelector('.feature-4');
 
const features = {
  veild: {
    title: 'Veild',
    description: 'Veild is a psudo anonymous, and privacy-focused Chat Mechanism to promote discussion of ideas in a civil manner.',
    image: 'assets/veild.svg'
  },
  karma: {
    title: 'Karma',
    description: 'karma is a point system to moderate users and promote good behaviour.',
    image: 'assets/karma.svg'
  },
  persona: {
    title: 'Persona',
    description: 'Persona is a way to create a unique identity for yourself, be anyone you want and be anonymous.',
    image: 'assets/persona.svg'
  },
  concierge: {
    title: 'Concierge',
    description: 'Concierge is a way to get help from our AI assistant, and get your questions answered regarding anything on the platform.',
    image: 'assets/concierge.svg'
  },
}


function updateFeatureDetails(featureName) {
  const feature = features[featureName];
  
  featureImages.forEach(image => {
    image.src = feature.image;
  });
  
  featureTitles.forEach(title => {
    title.innerHTML = feature.title;
  });
  
  featureDescriptions.forEach(description => {
    description.innerHTML = feature.description;
  });
}

veild.addEventListener('click', () => {
  updateFeatureDetails('veild');
});

karma.addEventListener('click', () => {
  updateFeatureDetails('karma');
});

persona.addEventListener('click', () => {
  updateFeatureDetails('persona');
});

concierge.addEventListener('click', () => {
  updateFeatureDetails('concierge');
});

 
