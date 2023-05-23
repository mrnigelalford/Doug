import { capitalizeFirstLetter } from "../templates/nashville";

/**

Returns an object with the fields needed to create a Webflow carousel item for a given center.
@param {string} centerName - The name of the center.
@returns {Object} An object containing the fields needed to create a Webflow carousel item.
*/
export const getCarousel = (centerName: string) => ({
  _archived: false,
  _draft: true,
  "cta-link-3-2":
    `https://www.tocafootball.com/center-programs/${center.name.toLowerCase()}-2soccer-06kidsclasses`,
  "cta-link-1":
    `https://www.tocafootball.com/center-programs/${center.name.toLowerCase()}-2soccer-01freekickoff`,
  "cta-link-2":
    `https://www.tocafootball.com/center-programs/${center.name.toLowerCase()}-2soccer-02individualtraining`,
  "sub-text-3": "Introduce Your Child to Soccer",
  "main-text-1": "Free Kickoff",
  "main-text-2": "Individual Training",
  "main-text-3": "Kids' Classes",
  name: `${capitalizeFirstLetter(centerName)} Carousel`,
  "cta-text-1": "Book Now",
  "cta-text-2": "Learn More",
  "cta-text-3": "Learn More",
  "sub-text-1": "Try A FREE Lesson!",
  "sub-text-2": "Train with TOCA Technology!",
  "image-1": {
    fileId: "64492d7ee2522ecdd12b56e1",
    url: `https://uploads-ssl.webflow.com/60c7be61132e3ad0b40a333d/634ee33f05955eedde7f468a_individual-training.jpg`,
    alt: null,
  },
  "image-2": {
    fileId: "64492d7ee2522ea09e2b56c5",
    url: `https://uploads-ssl.webflow.com/60c7be61132e3ad0b40a333d/63462cd0c2423e5e6cd7751a_634628a145d4a188a2b6bab8_carousel-individual.jpeg`,
    alt: null,
  },
  "image-3": {
    fileId: "64629765a1057dbf5f16e7e1",
    url: `https://uploads-ssl.webflow.com/60c7be61132e3ad0b40a333d/64629765a1057dbf5f16e7e1_kids%20playing%20soccer.jpg`,
    alt: null,
  },
  slug: `${centerName.toLowerCase()}-carousel`,
  "cta-link-4-2":
    `https://www.tocafootball.com/center-programs/${centerName.toLowerCase()}-3birthdayparties`,
  "cta-text-4-2": "Learn More",
  "image-4-2": {
    fileId: "64492d7ee2522ea55d2b56c3",
    url: `https://uploads-ssl.webflow.com/60c7be61132e3ad0b40a333d/634629059cc86594d2f32804_carousel-bday.jpg`,
    alt: null,
  },
  "main-text-4-2": "Birthday Parties",
  "sub-text-4-2": "Celebrate Your Birthday with TOCA!",
});
