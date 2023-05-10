const getStateID = (name: string) => {
    const states = [
        {
            "_archived": false,
            "_draft": false,
            "number-of-vacations": 1,
            "sort-order": 9,
            "name": "Ohio",
            "slug": "ohio",
            "card-image": {
                "fileId": "64492d7ee2522ed9222b5479",
                "url": "https://uploads-ssl.webflow.com/60c7be61132e3ad0b40a333d/60de45a7deb16b658cf3a450_210608_ha_toca_training_011.png",
            },
            "continent": [
                "64492d7ee2522e374e2b5222"
            ],
            "featured": [
                "64492d7ee2522eeb892b54e4"
            ],
            "_cid": "64492d7ee2522ea8de2b51cf",
            "_id": "64492d7ee2522e1d472b555d"
        },
        {
            "_archived": false,
            "_draft": false,
            "number-of-vacations": 1,
            "sort-order": 6,
            "name": "Wisconsin",
            "slug": "wisconsin",
            "card-image": {
                "fileId": "64492d7ee2522ed9222b5479",
                "url": "https://uploads-ssl.webflow.com/60c7be61132e3ad0b40a333d/60de45a7deb16b658cf3a450_210608_ha_toca_training_011.png",
            },
            "featured": [
                "64492d7ee2522eaf642b54e3"
            ],
            "continent": [
                "64492d7ee2522e374e2b5222"
            ],
            "_cid": "64492d7ee2522ea8de2b51cf",
            "_id": "64492d7ee2522e2ab62b555b"
        },
        {
            "_archived": false,
            "_draft": false,
            "number-of-vacations": 1,
            "name": "Colorado",
            "slug": "colorado",
            "card-image": {
                "fileId": "64492d7ee2522ed9222b5479",
                "url": "https://uploads-ssl.webflow.com/60c7be61132e3ad0b40a333d/60de45a7deb16b658cf3a450_210608_ha_toca_training_011.png",
            },
            "continent": [
                "64492d7ee2522e374e2b5222"
            ],
            "featured": [
                "64492d7ee2522e70302b54e2"
            ],
            "sort-order": 4,
            "_cid": "64492d7ee2522ea8de2b51cf",
            "_id": "64492d7ee2522e60e52b555c"
        },
        {
            "_archived": false,
            "_draft": false,
            "number-of-vacations": 3,
            "name": "British Columbia",
            "slug": "british-columbia",
            "card-image": {
                "fileId": "61826f2d39814149c2c7e896",
                "url": "https://uploads-ssl.webflow.com/60c7be61132e3ad0b40a333d/60f0767e2f2d42b5b368506f_Screen%20Shot%202021-07-15%20at%2011.53.57%20AM.png",
            },
            "featured": [
                "64492d7ee2522e79952b53cf",
                "64492d7ee2522e10e72b53cb",
                "64492d7ee2522ed4bb2b54e9"
            ],
            "continent": [
                "64492d7ee2522ebb672b51f3"
            ],
            "sort-order": 1,
            "_cid": "64492d7ee2522ea8de2b51cf",
            "_id": "64492d7ee2522eadab2b54d0"
        },
        {
            "_archived": false,
            "_draft": false,
            "number-of-vacations": 2,
            "name": "Washington",
            "slug": "washington",
            "card-image": {
                "fileId": "64492d7ee2522e9a502b53dd",
                "url": "https://uploads-ssl.webflow.com/60c7be61132e3ad0b40a333d/60ca404e96feff61ca21b3c1_462ACF10-2A4B-4AFF-AC60-6A075FE9C9E2.jpg",
            },
            "featured": [
                "64492d7ee2522e40302b54e5",
                "64492d7ee2522e26032b54e1"
            ],
            "continent": [
                "64492d7ee2522e374e2b5222"
            ],
            "sort-order": 1,
            "_cid": "64492d7ee2522ea8de2b51cf",
            "_id": "64492d7ee2522e81c42b5518"
        },
        {
            "_archived": false,
            "_draft": false,
            "number-of-vacations": 1,
            "name": "Texas",
            "slug": "texas",
            "card-image": {
                "fileId": "64492d7ee2522e57b22b54b5",
                "url": "https://uploads-ssl.webflow.com/60c7be61132e3ad0b40a333d/60de46f8eb98985f9248b376_210608_ha_toca_league_016.png",
            },
            "continent": [
                "64492d7ee2522e374e2b5222"
            ],
            "featured": [
                "64492d7ee2522e75e82b54fc",
                "64492d7ee2522edf462b5519",
                "64492d7ee2522e36082b551a",
                "64492d7ee2522e504b2b551b",
                "64492d7ee2522e8bcd2b551c"
            ],
            "sort-order": 5,
            "_cid": "64492d7ee2522ea8de2b51cf",
            "_id": "64492d7ee2522e0a132b5516"
        },
        {
            "_archived": false,
            "_draft": false,
            "name": "California",
            "slug": "california",
            "continent": [
                "64492d7ee2522e374e2b5222"
            ],
            "card-image": {
                "fileId": "64492d7ee2522ed9222b5479",
                "url": "https://uploads-ssl.webflow.com/60c7be61132e3ad0b40a333d/60de45a7deb16b658cf3a450_210608_ha_toca_training_011.png",
            },
            "number-of-vacations": 1,
            "featured": [
                "64492d7ee2522e16672b53ca",
                "64492d7ee2522e11612b53ce",
                "64492d7ee2522e59472b53cc"
            ],
            "sort-order": 3,
            "_cid": "64492d7ee2522ea8de2b51cf",
            "_id": "64492d7ee2522ed1872b555a"
        },
        {
            "_archived": false,
            "_draft": false,
            "name": "Illinois",
            "slug": "illinois",
            "continent": [
                "64492d7ee2522e374e2b5222"
            ],
            "card-image": {
                "fileId": "64492d7ee2522ec4562b54c7",
                "url": "https://uploads-ssl.webflow.com/60c7be61132e3ad0b40a333d/60de4688d82d5bd55322d5b5_210608_ha_toca_league_039.png",
            },
            "featured": [
                "64492d7ee2522e2f802b54ec"
            ],
            "number-of-vacations": 1,
            "sort-order": 7,
            "_cid": "64492d7ee2522ea8de2b51cf",
            "_id": "64492d7ee2522e39242b5532"
        },
        {
            "_archived": false,
            "_draft": false,
            "name": "Tennessee",
            "slug": "tennessee",
            "continent": [
                "64492d7ee2522e374e2b5222"
            ],
            "card-image": {
                "fileId": "64492d7ee2522e57b22b54b5",
                "url": "https://uploads-ssl.webflow.com/60c7be61132e3ad0b40a333d/60de46f8eb98985f9248b376_210608_ha_toca_league_016.png",
            },
            "number-of-vacations": 1,
            "featured": [
                "64492d7ee2522e6b522b5517"
            ],
            "sort-order": 8,
            "_cid": "64492d7ee2522ea8de2b51cf",
            "_id": "64492d7ee2522e2d902b5515"
        },
        {
            "_archived": false,
            "_draft": false,
            "name": "Georgia",
            "slug": "georgia",
            "continent": [
                "64492d7ee2522e374e2b5222"
            ],
            "card-image": {
                "fileId": "64492d7ee2522e7b592b53f0",
                "url": "https://uploads-ssl.webflow.com/60c7be61132e3ad0b40a333d/60de477e7b0a4a73525196c5_50587080_2003795509712409_586920264684535808_n.jpeg",
            },
            "number-of-vacations": 4,
            "featured": [
                "64492d7ee2522e45682b53d0",
                "64492d7ee2522e072b2b53d1",
                "64492d7ee2522ed2132b54ea",
                "64492d7ee2522e78e82b53cd"
            ],
            "sort-order": 10,
            "_cid": "64492d7ee2522ea8de2b51cf",
            "_id": "64492d7ee2522e6ac12b54e7"
        }
    ]

    return states.filter(state => state.name === name)[0]._id
}

export default getStateID;
