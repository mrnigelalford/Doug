// export type Center = {
//   name: string;
//   state?: string;
//   phone?: string;
//   id: string
// };

const getCenterPrograms = (center) => [
  {
    _archived: false,
    _draft: false,
    'choose-program-switch': true,
    popular: false,
    deal: false,
    name: `${center.name.toLocaleUpperCase()} Birthday Parties`,
    'body-description': '',
    'external-display-name': 'Birthday Parties',
    'rich-text':
      '<p id="">Celebrate your soccer lover with the ultimate beautiful game birthday party! TOCA birthday packages include playtime in our soccer studios, exclusive use of our party area, and a dedicated party coach.</p><h4 id="">Highlights</h4><ul id=""><li id="">Celebrate the soccer lover in your life&nbsp;</li><li id="">Enjoy exclusive use of soccer studios and party area</li><li id="">Make lasting birthday memories with family and friends</li></ul><h4 id="">Contact Us</h4><p id="">Please fill out the form on this page, and our center will contact you to discuss Birthday Parties.</p>',
    slug: `${center.name.toLowerCase()}-3birthdayparties`,
    'hero-slider-image-first': {
      fileId: '63650f114443c433107341ba',
      url: 'https://uploads-ssl.webflow.com/60c7be61132e3ad0b40a333d/6345ecaf99904fbb77bb14bc_632c9598f8eaf9b3b0d155a7_birthdays.jpeg',
    },
    centers: [center.id],
    'phone-number-2': (center.phone = '111-111-1111'),
    mytoca: false,
    "sub-programs": [],
    "states": [],
  },
  {
    _archived: false,
    _draft: false,
    popular: false,
    deal: false,
    'choose-program-switch': false,
    name: `${center.name} Soccer Camps`,
    'body-description': '',
    'external-display-name': 'Soccer Camps',
    'rich-text':
      '<p id="">Improve your soccer skills throughout the year with TOCA Soccer Camps!</p><figure id="" class="w-richtext-figure-type-image w-richtext-align-fullwidth" style="max-width:1680px" data-rt-type="image" data-rt-align="fullwidth" data-rt-max-width="1680px"><div id=""><img src="https://uploads-ssl.webflow.com/60c7be61132e3ad0b40a333d/632651d23bb4e85d5f5309a8_210608_ha_toca_training_012_LowRes.jpg" alt="Group of boys in a soccer camp" id="" width="auto" height="auto" loading="auto"></div></figure><p id="">Designed for players looking to improve their game and soccer IQ, emphasis is placed on fundamentals like passing/receiving, shooting, offense/defense, and team play. Camps of various lengths run throughout spring, summer, and fall with instruction available to players of all abilities, from beginner to advanced.</p><h4 id="">Highlights</h4><ul id=""><li id="">Improve your skills and understanding of the game</li><li id="">Make friends who also love soccer</li><li id="">Stay active in a fun soccer environment </li></ul><h4 id="">Thanksgiving Break Camp</h4><ul id=""><li id="">Date(s): November 21-23, November 25 </li><li id="">Time: 9am - Noon</li><li id="">Price: $144</li></ul><h4 id="">Winter Break 1 Camp</h4><ul id=""><li id="">Date(s): December 19-23</li><li id="">Time: 9am - Noon</li><li id="">Price: $180</li></ul><h4 id="">Winter Break 2 Camp</h4><ul id=""><li id="">Date(s): December 27-30</li><li id="">Time: 9am - Noon</li><li id="">Price: $144</li></ul><h4 id="">New Year\'s Camp</h4><ul id=""><li id="">Date(s): January 2-3</li><li id="">Time: 9am - Noon</li><li id="">Price: $95.50</li></ul><h4 id="">Martin Luther King Jr. Day Camp</h4><ul id=""><li id="">Date(s): January 16</li><li id="">Time: 9am - Noon</li><li id="">Price: $63.75</li></ul><h4 id="">President\'s Day Camp</h4><ul id=""><li id="">Date(s): February 17</li><li id="">Time: 9am - Noon</li><li id="">Price: $63.75</li></ul><h4 id="">President\'s Day Camp</h4><ul id=""><li id="">Date(s): February 20</li><li id="">Time: 9am - Noon</li><li id="">Price: $63.75</li></ul>',
    slug: `${center.name.toLowerCase()}-2soccer-07camps`,
    'hero-slider-image-first': {
      fileId: '64492d7ee2522e6faa2b5686',
      url: 'https://uploads-ssl.webflow.com/60c7be61132e3ad0b40a333d/6345ecaf623cca2395ef04b1_632664be1ee68ff9e05a3cc6_210608_ha_toca_training_008_LowRes.jpeg',
    },
    'book-now-url':
      'https://clients.mindbodyonline.com/classic/ws?studioid=5720010&stype=-8&sTG=25&sView=day&sLoc=0',
    'cta-text': 'SIGN UP FOR CAMPS',
    'phone-number-2': `${(center.phone = '111-111-1111')}`,
    mytoca: false,
    "sub-programs": [],
    "states": [],
  },
  {
    _archived: false,
    _draft: false,
    'choose-program-switch': true,
    popular: false,
    deal: false,
    'sort-order': 3,
    name: `${center.name} Venue Rental`,
    'body-description': '',
    'external-display-name': 'Venue/Field Rental',
    'rich-text':
      '<p id="">Whatever your next event, TOCA has you covered! Whether it\'s a team party, holiday celebration, or any kind of corporate event, TOCA has versatile event spaces and soccer studios that will make your time with us a blast!</p><p id="">Our fields are also available for rent to teams looking for a space to train!</p><h4 id="">Contact Us</h4><p id="">Fill out the form on this page, and our center will contact you to discuss Venue and Field Rental.</p>',
    slug: `${center.name.toLowerCase()}-3venuerental`,
    'hero-slider-image-first': {
      fileId: '64492d7ee2522e4ff32b5684',
      url: 'https://uploads-ssl.webflow.com/60c7be61132e3ad0b40a333d/6345ecaff0489550046961d0_632c8e58b9a9014fc285d3d5_venue.jpeg',
    },
    centers: [center.id],
    'phone-number-2': `${(center.phone = '111-111-1111')}`,
    mytoca: false,
    "sub-programs": [],
    "states": []
  },
  {
    _archived: false,
    _draft: false,
    popular: false,
    deal: false,
    'choose-program-switch': false,
    name: `${center.name} Soccer Adult Leagues`,
    'body-description': '',
    'external-display-name': 'Adult Leagues',
    'rich-text':
      '<p id="">Looking for a night of footy, friends, and fun? Check out TOCA Leagues!</p><figure id="" class="w-richtext-figure-type-image w-richtext-align-fullwidth" style="max-width:1680px" data-rt-type="image" data-rt-align="fullwidth" data-rt-max-width="1680px"><div id=""><img src="https://uploads-ssl.webflow.com/60c7be61132e3ad0b40a333d/632be2e29a475b4577b89032_210608_ha_toca_league_021_LowRes.jpg" alt="Woman and man playing soccer" id="" width="auto" height="auto" loading="auto"></div></figure><p id="">Meet new friends, enjoy a refreshing beverage, and most importantly, get a taste of the TOCA community! Whether you\'re a former player looking to stay fit or a complete beginner looking to have fun with friends, TOCA has a league for all players.</p><figure id="" class="w-richtext-figure-type-image w-richtext-align-fullwidth" style="max-width:1680px" data-rt-type="image" data-rt-align="fullwidth" data-rt-max-width="1680px"><div id=""><img src="https://uploads-ssl.webflow.com/60c7be61132e3ad0b40a333d/632be3100da8ef81af75383d_210608_ha_toca_league_019_LowRes.jpg" alt="Group handshake after soccer game" id="" width="auto" height="auto" loading="auto"></div></figure><h4 id="">Contact Us</h4><p id="">Please fill out the form on this page, and our center will contact you to discuss Adult Leagues.</p>',
    'hero-slider-image-first': {
      fileId: '64492d7ee2522e80622b568a',
      url: 'https://uploads-ssl.webflow.com/60c7be61132e3ad0b40a333d/6345ecb04877b432e93c01cb_632650b5f8acef2e0a64ea7a_210608_ha_toca_league_031_LowRes.jpeg',
    },
    slug: `${center.name.toLowerCase()}-2soccer-08adultleagues`,
    'phone-number-2': `${(center.phone = '111-111-1111')}`,
    mytoca: false,
    "sub-programs": [],
    "states": []
  },
  {
    _archived: false,
    _draft: false,
    'choose-program-switch': true,
    popular: false,
    deal: false,
    name: `${center.name} Soccer`,
    'body-description': '',
    'external-display-name': 'Soccer',
    'rich-text': '',
    slug: `${center.name.toLowerCase()}-2soccer`,
    centers: [center.id],
    'phone-number-2': `${(center.phone = '111-111-1111')}`,
    mytoca: false,
    "sub-programs": [],
    "states": []
  },
  {
    _archived: false,
    _draft: false,
    popular: false,
    deal: false,
    'choose-program-switch': false,
    name: `${center.name.toLowerCase} Soccer Team Training`,
    'body-description': '',
    'external-display-name': 'Team Training',
    'rich-text':
      '<p id="">You work hard to develop quality players capable of playing at the elite levels of the beautiful game. Turbocharge your players’ development with TOCA’s exclusive, tech-enabled training techniques that will rapidly improve their technical skills and game awareness.&nbsp;</p><p id="">TOCA can also collaborate with you to build custom programming that augments your methodology and helps players reach their potential. Through game-like experiences featuring consistently repeatable touch-building exercises, TOCA’s innovative soccer tech drives improved technical skill, game awareness, and creativity.&nbsp;</p><p id="">Adding TOCA’s innovative soccer training technology to your player development strategy will give them the cutting edge needed to excel for what comes next. Contact us today to set up a free training session for your club or team.</p><h4 id="">Contact Us</h4><p id="">Please fill out the form on this page, and our center will contact you to discuss Team Training.</p><p id="">‍</p>',
    'hero-slider-image-first': {
      fileId: '64492d7ee2522e7cca2b5681',
      url: 'https://uploads-ssl.webflow.com/60c7be61132e3ad0b40a333d/6345ecafbbe8d957b0ec57f4_632c8a02e4a3bd333d345756_team-training.jpeg',
    },
    slug: `${center.name.toLowerCase()}-2soccer-05teamtraining`,
    'phone-number-2': `${(center.phone = '111-111-1111')}`,
    mytoca: false,
    "sub-programs": [],
    "states": []
  },
  {
    _archived: false,
    _draft: false,
    popular: false,
    deal: false,
    'choose-program-switch': false,
    name: `${center.name} Soccer Kids' Classes`,
    'body-description': '',
    'external-display-name': "Kids' Classes",
    'rich-text': `<p id="">Looking for a way to introduce your child to the beautiful game of soccer? Our kids\' classes are the perfect solution!</p><p id="">Our seasons are open enrollment and you can join anytime! Click below to view our schedule(s):</p><ul id=""><li id=""><a href="https://docs.google.com/document/d/e/2PACX-1vTkshl1PDY48onGN8JN7AsSZpWoTIQaGSc9JCFbAA2AcjxolZUXzZVbDMUevvvg0CzLmUPupyGmLkZC/pub" id="">Summer 2023</a></li></ul><figure id="" class="w-richtext-figure-type-image w-richtext-align-fullwidth" style="max-width:1605px" data-rt-type="image" data-rt-align="fullwidth" data-rt-max-width="1605px"><div id=""><img src="https://uploads-ssl.webflow.com/60c7be61132e3ad0b40a333d/632bc3bdc77a979cb502880d_HAAN0597_LowRes.jpg" id="" width="auto" height="auto" loading="auto"></div></figure><p id="">Designed for children starting at 18 months and up to 7 years old, our kids\' classes provide a fun, high-energy environment that is perfect for developing your child\'s motor and social skills. Read about the classes we offer below and see what\'s best for your child\'s age and skills.</p><h4 id="">Kids\' Classes (For Ages 18 Months - 7 Years)</h4><p id="">Introduce children to soccer through age-appropriate classes.</p><ul id=""><li id="">Introduce children to the beautiful game of soccer</li><li id="">Teach fundamental skills in fun, age-appropriate classes</li><li id="">Build motor skills using high-energy activities</li></ul><p id="">Our seasons are open enrollment. You can join anytime, and the cost will be prorated. Sign up below! </p><div id=""></div><p id="">‍</p><h4 id="">Kids\' Advanced Classes (For Ages 6-7 Years)</h4><p id="">For more experienced players, our advanced classes focus on more technical skills such as game awareness and decision-making.</p><ul id=""><li id="">Develop player skills with advanced programming</li><li id="">Focus on individual player development</li><li id="">Enhance game awareness and decision-making skills</li></ul><p id="">Our seasons are open enrollment. You can join anytime, and the cost will be prorated. Sign up below!</p><div id=""></div><p id="">‍</p><h4 id="">Kids\' League</h4><p id="">For those looking for game opportunities, our kids\' league provides players a chance to compete against other players in their age group.</p><ul id=""><li id="">Offered only in Winter and Summer seasons</li><li id="">Allows players to compete in a fun and safe environment</li><li id="">Teaches team tactics and rules of the game</li></ul><p id="">Our seasons are open enrollment. You can join anytime, and the cost will be prorated. Sign up below!</p><div id=""></div><p id="">‍</p><h4 id="">Private or Small Group Lessons</h4><p id="">Private or small group lessons can be purchased for $50 per 1 session or save 10% when you purchase a 10 pack. Each session lasts 50-minutes.</p><ul id=""><li id="">Private lessons for individual</li><li id="">1:1 time with our kids\' coach</li><li id="">minimum purchase, 4 sessions per purchase </li></ul><p id="">‍</p><p id="">Call TOCA ${center.name} or book online to schedule your private lessons!</p><p id="">Schedule availability:</p><p id="">M-F 8am-4pm</p><p id="">Sat 8am-11am</p><p id="">‍</p><div id=""></div><p id="">‍</p><h4 id="">Try A FREE Class</h4><figure id="" class="w-richtext-figure-type-image w-richtext-align-fullwidth" style="max-width:1280px" data-rt-type="image" data-rt-align="fullwidth" data-rt-max-width="1280px"><div id=""><img src="https://uploads-ssl.webflow.com/60c7be61132e3ad0b40a333d/63a0f97ea97b9304d6c03187_HAAN0625.jpg" loading="lazy" id="" width="auto" height="auto"></div></figure><p id="">We offer a FREE class for all new guests! Please fill out the form on this page and select <strong id="">Kids\' Classes</strong> under the program drop-down</p>`,
    slug: `${center.name.toLowerCase()}-2soccer-06kidsclasses`,
    'hero-slider-image-first': {
      fileId: '64492d7ee2522e265a2b5687',
      url: 'https://uploads-ssl.webflow.com/60c7be61132e3ad0b40a333d/6345ecb048d03f23d526b1df_632bc495bdb0244275a27518_strikers.jpeg',
    },
    'phone-number-2': `${(center.phone = '111-111-1111')}`,
    mytoca: false,
    "sub-programs": [],
    "states": []
  },
  {
    _archived: false,
    _draft: false,
    popular: false,
    deal: false,
    'choose-program-switch': false,
    'sort-order': 6,
    name: `${center.name} Soccer Group Training`,
    'body-description': '',
    'external-display-name': 'Group Training',
    'rich-text':
      '<p id="">TOCA Group Training provides a group of up to five similarly-skilled players our tech-enhanced soccer experience at a reduced price. It is the perfect solution for players seeking an affordable and challenging training environment.</p><figure id="" class="w-richtext-figure-type-image w-richtext-align-fullwidth" style="max-width:3840px" data-rt-type="image" data-rt-align="fullwidth" data-rt-max-width="3840px"><div id=""><img src="https://uploads-ssl.webflow.com/60c7be61132e3ad0b40a333d/6206f70f6811f858f1052267_Selects.00_03_15_11.Still024.jpg" alt="Group soccer training" id="" width="auto" height="auto" loading="auto"></div></figure><p id="">Each player in the group receives individualized instruction from TOCA’s professional trainers. Group sessions utilize TOCA’s exclusive soccer tech, including the Touch Trainer and Smart Targets, to help players rapidly develop their touch, technique, and game awareness.</p><figure id="" class="w-richtext-figure-type-image w-richtext-align-fullwidth" style="max-width:3840px" data-rt-type="image" data-rt-align="fullwidth" data-rt-max-width="3840px"><div id=""><img src="https://uploads-ssl.webflow.com/60c7be61132e3ad0b40a333d/632bdfcea910e3050f2107d8_20220127_A70021.MP4.21_32_19_57.Still004.jpg" alt="Group training at TOCA Football" id="" width="auto" height="auto" loading="auto"></div></figure><h4 id="">Details</h4><ul id=""><li id="">Ages: 7-Adult</li></ul><h4 id="">Highlights</h4><ul id=""><li id="">Affordable and competitive group training</li><li id="">Group 4-5 similar-level athletes</li><li id="">Train with TOCA’s proprietary technology</li></ul><h4 id="">Contact Us</h4><p id="">Fill out the form on this page, and our staff will reach out to you to discuss Group Training.</p><p id="">‍</p>',
    slug: `${center.name.toLowerCase()}-2soccer-04grouptraining`,
    'hero-slider-image-first': {
      fileId: '64492d7ee2522e94da2b5678',
      url: 'https://uploads-ssl.webflow.com/60c7be61132e3ad0b40a333d/6345ecaf2335189472cbfc77_6311e73ad595816c92a0b8b9_62f5affe498ebb63f4f00ef1_soccer-group-training.jpeg',
    },
    'phone-number-2': `${(center.phone = '111-111-1111')}`,
    mytoca: false,
    "sub-programs": [],
    "states": []
  },
  {
    _archived: false,
    _draft: false,
    popular: false,
    deal: false,
    'choose-program-switch': false,
    'sort-order': 7,
    name: `${center.name.toLowerCase} Soccer Individual Training`,
    'body-description': '',
    'external-display-name': 'Individual Training',
    'rich-text':
      '<p id="">The next game is coming up, and your team needs you to bring it. TOCA training will help you improve quicker than traditional practice regimens, so you’re ready to crush it with the team.</p><figure id="" class="w-richtext-figure-type-image w-richtext-align-fullwidth" style="max-width:1680px" data-rt-type="image" data-rt-align="fullwidth" data-rt-max-width="1680px"><div id=""><img src="https://uploads-ssl.webflow.com/60c7be61132e3ad0b40a333d/61943405426fec4317579192_210608_ha_toca_training_025_LowRes.jpg" alt="Young girl training with TOCA Smart Targets" id="" width="auto" height="auto" loading="auto"></div></figure><p id="">TOCA’s 1-on-1 training takes you through a guided, tech-enhanced soccer experience designed to rapidly improve your skills. The key is TOCA’s proprietary technology, including the Touch Trainer, Smart Targets, Studio Screens, and personalized data tracking, that take your game to the next level.</p><figure id="" class="w-richtext-figure-type-image w-richtext-align-fullwidth" style="max-width:1680px" data-rt-type="image" data-rt-align="fullwidth" data-rt-max-width="1680px"><div id=""><img src="https://uploads-ssl.webflow.com/60c7be61132e3ad0b40a333d/632bd081d5469fcf0a1625ac_210608_ha_toca_training_026_LowRes.jpg" alt="TOCA Touch Trainer ball machine" id="" width="auto" height="auto" loading="auto"></div></figure><p id="">Overall, you get at least 200 match-quality touches on the ball per TOCA training session - equivalent to a week full of practices! Additionally, you can see your progress during each training session through real-time stats that give you data-driven feedback on your accuracy, efficiency, quickness, and more.</p><p id="">From your first touch and ball control to in-game awareness and decision-making, TOCA’s innovative soccer technology and professional trainers will develop and hone every aspect of your game. Become the player you want to be with TOCA training.</p><figure id="" class="w-richtext-figure-type-image w-richtext-align-fullwidth" style="max-width:1680px" data-rt-type="image" data-rt-align="fullwidth" data-rt-max-width="1680px"><div id=""><img src="https://uploads-ssl.webflow.com/60c7be61132e3ad0b40a333d/632bd256bd8a0dd32cc5cbaa_210608_ha_toca_training_018_LowRes.jpg" alt="Young girl and soccer trainer celebrating" id="" width="auto" height="auto" loading="auto"></div></figure><h4 id="">Details</h4><ul id=""><li id="">Ages: 7-Adult</li><li id="">Cost: Starting at $69/session</li></ul><h4 id="">Highlights</h4><ul id=""><li id="">Train with TOCA’s innovative technology</li><li id="">Dedicated 1-on-1 training session</li><li id="">Quickly improve first touch and awareness</li></ul><h4 id="">Contact Us</h4><p id="">Please fill out the form on this page, and our center will contact you to discuss Individual Training.</p><h4 id="">Want To Try a FREE Session First?</h4><p id="">Fill out the form on this page and select <strong id="">Free Kickoff</strong> under program. Our center will contact you shortly to book your free kickoff session!</p>',
    'hero-slider-image-first': {
      fileId: '64492d7ee2522e24d72b5688',
      url: 'https://uploads-ssl.webflow.com/60c7be61132e3ad0b40a333d/6345ecafa2b199654cb4cfe0_619433d70f903f490c6ab435_210608_ha_toca_training_023_LowRes.jpeg',
    },
    slug: `${center.name.toLowerCase()}-2soccer-02individualtraining`,
    mytoca: false,
    "sub-programs": [],
    "states": []
  },
  {
    _archived: false,
    _draft: false,
    popular: false,
    deal: false,
    'choose-program-switch': true,
    name: `${center.name} About TOCA Football`,
    'body-description': '',
    'external-display-name': 'About TOCA Football',
    'rich-text': `<h4 id="">Next Generation Soccer Training</h4><figure id="" class="w-richtext-figure-type-image w-richtext-align-fullwidth" style="max-width:1680px" data-rt-type="image" data-rt-align="fullwidth" data-rt-max-width="1680px"><div id=""><img src="https://uploads-ssl.webflow.com/60c7be61132e3ad0b40a333d/632651d23bb4e85d5f5309a8_210608_ha_toca_training_012_LowRes.jpg" alt="Young boy dribbling a soccer ball" id="" width="auto" height="auto" loading="auto"></div></figure><p id="">TOCA offers technology-enhanced soccer training designed to produce rapid skill improvement and develop well-rounded players. The key is TOCA’s proprietary technology, including the Touch Trainer, Smart Targets, Studio Screens, and personalized data tracking, that take your game to the next level.</p><p id="">Overall, you get at least 200 match-quality touches on the ball per TOCA training session - equivalent to a week full of practices! Additionally, you can see your progress during each training session through real-time stats that give you data-driven feedback on your accuracy, efficiency, quickness, and more.</p><p id="">TOCA’s exclusive training tools will fine-tune your touch, improve your skills and sharpen your in-game awareness and decision-making. Become the player you want to be with TOCA</p><h4 id="">Make Every Touch Count</h4><figure id="" class="w-richtext-figure-type-image w-richtext-align-fullwidth" style="max-width:1680px" data-rt-type="image" data-rt-align="fullwidth" data-rt-max-width="1680px"><div id=""><img src="https://uploads-ssl.webflow.com/60c7be61132e3ad0b40a333d/632bd081d5469fcf0a1625ac_210608_ha_toca_training_026_LowRes.jpg" alt="A soccer ball machine called TOCA Touch Trainer" id="" width="auto" height="auto" loading="auto"></div></figure><p id="">Your first touch on a ball is one of the most important skills to develop. Possessing a good first touch can be the difference between creating a scoring opportunity for your team or gifting one to your opponent.</p><p id="">TOCA’s Touch Trainer is a revolutionary tool that develops your first touch by delivering passes at various speeds and trajectories. Compared to other training programs that produce fewer touches for players, the Touch Trainer is guaranteed to serve a minimum of 200 match-quality touches every training session.</p><p id="">Key to providing you with so many quality touches is TOCA’s innovative “small ball” methodology. Lighter and smaller than a size 5 ball, the TOCA ball reduces physical stress on your body. Our “small ball” also improves your accuracy by honing your ability to target the optimal strike zones on a regulation ball.</p><h4 id="">Train Smart</h4><figure id="" class="w-richtext-figure-type-image w-richtext-align-fullwidth" style="max-width:1680px" data-rt-type="image" data-rt-align="fullwidth" data-rt-max-width="1680px"><div id=""><img src="https://uploads-ssl.webflow.com/60c7be61132e3ad0b40a333d/61943405426fec4317579192_210608_ha_toca_training_025_LowRes.jpg" alt="Young girl training with TOCA Smart Targets" id="" width="auto" height="auto" loading="auto"></div></figure><p id="">Smart Targets light up, acting as a teammate, allowing for game-like scenarios that improve your situational awareness and condition you to make quick, smart decisions.</p><h4 id="">Track Progress in Real-Time</h4><figure id="" class="w-richtext-figure-type-image w-richtext-align-fullwidth" style="max-width:1680px" data-rt-type="image" data-rt-align="fullwidth" data-rt-max-width="1680px"><div id=""><img src="https://uploads-ssl.webflow.com/60c7be61132e3ad0b40a333d/632bd6f131fb05369e058768_210608_ha_toca_training_003_LowRes.jpg" alt="Soccer trainer and player looking at a TV screen with training stats" id="" width="auto" height="auto" loading="auto"></div></figure><p id="">Your real-time performance data is displayed on a studio screen - tracking improvements and inspiring you to find your best. </p><h4 id="">Join the TOCA Community</h4><figure id="" class="w-richtext-figure-type-image w-richtext-align-fullwidth" style="max-width:1680px" data-rt-type="image" data-rt-align="fullwidth" data-rt-max-width="1680px"><div id=""><img src="https://uploads-ssl.webflow.com/60c7be61132e3ad0b40a333d/632bd7f50da8ef2eb974921b_210608_ha_toca_training_017_LowRes.jpg" alt="Soccer trainers meeting young soccer players" id="" width="auto" height="auto" loading="auto"></div></figure><p id="">From our friendly front desk staff to our best-in-class trainers, TOCA is dedicated to helping you become the player you want to be. </p><h4 id="">Try A FREE Kickoff Session</h4><p id="">Click the links below to learn more about our different training programs below:</p><ul id=""><li id=""><a href="/center-programs/${center.name}-2soccer-02individualtraining" id="">Individual Training</a></li><li id=""><a href="/center-programs/${center.name}-2soccer-03elitetraining" id="">Elite Training</a></li><li id=""><a href="/center-programs/${center.name}-2soccer-04grouptraining" id="">Group Training</a></li><li id=""><a href="/center-programs/${center.name}--2soccer-05teamtraining">Team Training</a></li><li><a href="/center-programs/${center.name}-2soccer-07camps">Soccer Camps</a></li><li><a href="/center-programs/${center.name}-2soccer-06strikers">Strikers</a></li></ul><h4 id="">Want To Try a FREE Session?</h4><p id="">Fill out the form on this page and select <strong id="">Free Kickoff</strong> under program. Our center will contact you shortly to book your free kickoff session!<br></p>`,
    slug: `${center.name.toLowerCase()}-1abouttocafootball`,
    'hero-slider-image-first': {
      fileId: '64492d7ee2522e6c7f2b5677',
      url: 'https://uploads-ssl.webflow.com/60c7be61132e3ad0b40a333d/6345ecae987e9dfe8fb4a798_632bd5624529da25276d2d6c_fko.jpeg',
    },
    'phone-number-2': `${(center.phone = '111-111-1111')}`,
    mytoca: false,
    "sub-programs": [],
    "states": []
  },
  {
    _archived: false,
    _draft: false,
    popular: false,
    deal: false,
    'choose-program-switch': false,
    name: `${center.name} Soccer Adult Open Play`,
    'body-description': '',
    'external-display-name': 'Adult Open Play',
    'rich-text':
      '<p id="">Drop by TOCA and join one of our Open Play soccer games for a night of fun footy competition! Gather your coworkers for an evening of team-building, round up some friends from a quick scrimmage, or just drop by to meet new people.</p><h4 id="">Details</h4><ul id=""><li id="">Ages: 16+</li><li id="">Dates: Fridays 7:30-8:30PM</li><li id="">Price: $20 Per Person (Pay In Person)</li><li id="">No RSVP&nbsp;needed. Drop-ins welcome.</li><li id="">First Come, First Serve</li><li id="">Limit of 25 Players</li></ul><h4 id="">Highlights</h4><ul id=""><li id="">Pick-up style games open to all skill levels</li><li id="">Have fun with friends or make new ones who also love the beautiful game</li></ul><p id="">‍</p>',
    'hero-slider-image-first': {
      fileId: '64492d7ee2522e22242b5671',
      url: 'https://uploads-ssl.webflow.com/60c7be61132e3ad0b40a333d/6345ecae977a8e0c98194c57_632e6d9fa3d58043395dede3_adult-open.jpeg',
    },
    slug: `${center.name.toLowerCase()}-2soccer-10adultopenplay`,
    'phone-number-2': `${(center.phone = '111-111-1111')}`,
    mytoca: false,
    "sub-programs": [],
    "states": []
  },
];

exports.getCenterPrograms = getCenterPrograms;
