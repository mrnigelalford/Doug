import { capitalizeFirstLetter } from "../templates/nashville";
import { Center } from "../types/webflow";

/**
 * Returns an object containing the fields for creating a new center item.
 * @param {string} center.centerName - Name of the center.
 * @param {string} center.address - Address of the center.
 * @returns {Object} Object containing the fields for creating a new center item.
 */
const getCenter = (center: Center) => ({
    _archived: false,
    _draft: false,
    "facebook-url": `https://www.facebook.com/TOCASoccer${center.name.toLowerCase()}`,
    "show-events": false,
    closing: false,
    "get-directions-link": "https://goo.gl/maps/buoisPZWnUodJXnf9",
    email: `${center.name.toLowerCase()}@tocafootball.com`,
    "program-count": 8,
    "phone-number": center.phone,
    "hours-m-f": "10:00 AM – 12:00 PM",
    "short-description": center.address,
    name: capitalizeFirstLetter(center.name),
    "hours-tuesday": "10:00 AM – 12:00 PM",
    "body-description": `<blockquote id="">Located in a northern suburb, TOCA ${capitalizeFirstLetter(center.name)} is an indoor soccer center offering the next generation of soccer training. <br><br>With our tech-enabled studios and world-class coaches, our training program is ideal for kids 7 years and older looking to take their game to the next level. Whether it\'s individual or group training, our program guarantees player development by focusing on high-quality repetitions and game-like scenarios.<br></blockquote>`,
    "hours-saturday": "7:30 AM – 8:00 PM",
    "hours-wednesday": "10:00 AM – 12:00 PM",
    "hours-thursday": "10:00 AM – 12:00 PM",
    "hours-s-s": "7:30 AM – 8:00 PM",
    map: '<div id=""></div>',
    "hours-friday": "10:00 AM – 12:00 PM",
    slug: center.name.toLowerCase(),
    trainers: [],
    programs: [],
    "center-features": [],
    "featured-programs": "64492d7ee2522eb5852b54ef",
    location: "64492d7ee2522e0a132b5516",
    "card-image": {
      fileId: "64492d7ee2522ed4692b56f6",
      url: "https://uploads-ssl.webflow.com/60c7be61132e3ad0b40a333d/641b25b7073f7a2eac0242e8_Junior-field-e1541817239379.jpg",
      alt: null,
    },
  });
  
 export default getCenter;
  