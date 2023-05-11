/**

Returns an object with the fields needed to create a Webflow carousel item for a given center.
@param {string} centerName - The name of the center.
@returns {Object} An object containing the fields needed to create a Webflow carousel item.
*/
export const getCarousel = (centerName: string) => ({
  _archived: false,
  _draft: false,
  "cta-link-3-2": `https://www.tocafootball.com/center-programs/${centerName}-2soccer-04grouptraining`,
  "cta-link-1": `https://www.tocafootball.com/center-programs/${centerName}-2soccer-01freekickoff`,
  "cta-link-2": `https://www.tocafootball.com/center-programs/${centerName}-2soccer-02individualtraining`,
  "sub-text-3": `Join Small Group Training`,
  "main-text-1": "Free Kickoff",
  "main-text-2": "Individual Training",
  "main-text-3": "Group Training",
  name: `${centerName} Carousel`,
  "cta-text-1": "Book Now",
  "cta-text-2": "Learn More",
  "cta-text-3": "Learn More",
  "sub-text-1": "Try A FREE Lesson!",
  "sub-text-2": "Train with TOCA Technology!",
  slug: `${centerName}-carousel`,
  "image-3": {
    fileId: "64492d7ee2522e6fcb2b56d8",
    url: "https://uploads-ssl.webflow.com/60c7be61132e3ad0b40a333d/634d6f5e9dbdd2448475af89_group-training.jpg",
    alt: null,
  },
  "image-2": {
    fileId: "64492d7ee2522ea09e2b56c5",
    url: "https://uploads-ssl.webflow.com/60c7be61132e3ad0b40a333d/63462cd0c2423e5e6cd7751a_634628a145d4a188a2b6bab8_carousel-individual.jpeg",
    alt: null,
  },
  "image-1": {
    fileId: "64492d7ee2522ecdd12b56e1",
    url: "https://uploads-ssl.webflow.com/60c7be61132e3ad0b40a333d/634ee33f05955eedde7f468a_individual-training.jpg",
    alt: null,
  },
  "image-4-2": {
    fileId: "64492d7ee2522eae4b2b56f5",
    url: "https://uploads-ssl.webflow.com/60c7be61132e3ad0b40a333d/6419cc800a9ea38b3043d6cf_junior-field-4-e1541817254150.jpg",
    alt: null,
  },
});
