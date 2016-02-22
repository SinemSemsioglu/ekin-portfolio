// Architecture

app.constant("portfolioItemData10",
    {
        "name": "Architecture",
        "isIncomplete": false,
        "header": {
            "title": "A vacation house",
            "description": "A residence by the Aegean for a client",
            "image_path": "/assets/images/pitems/house/househead.jpg",
            "tags": ["ARCHITECTURE", "ECLECTIC"],
            "date": "MARCH 2015"
        },
        "text_sections": [
            {
                "text": "This is a vacation house project for a client. It is located in Izmir, Turkey. I’ve been corresponding with the client to figure out all exterior and interior details which include some furniture I’ve designed specifically for this project. The city is quite sunny year-round and the site has unobstructed views of Cesme seafront. Because of this the basic premise behind the structure is to have a highly adjustable membrane for maximum daylight and views. The inhabitants decide the light and view intake by by remotely opening or closing the blinds embedded within the glazing anywhere in the house through an app.",
                "number_of_columns": 1,
            }
        ],
        "image_sections": [
            {
                "path": "/assets/images/pitems/house/house1.jpg",
                "class": "regular",
                "annotation": ""
            }
        ],
        "extra_images": [
            {
                "path": "/assets/images/pitems/house/house2.jpg",
                "class": "regular",
                "annotation": ""
            },
            {
                "path": "/assets/images/pitems/house/house3.jpg",
                "class": "regular",
                "annotation": ""
            },
            {
                "path": "/assets/images/pitems/house/house4.jpg",
                "class": "regular",
                "annotation": ""
            },
            {
                "path": "/assets/images/pitems/house/house5.jpg",
                "class": "regular",
                "annotation": ""
            },
            {
                "path": "/assets/images/pitems/house/house6.jpg",
                "class": "regular",
                "annotation": ""
            },
            {
                "path": "/assets/images/pitems/house/house7.jpg",
                "class": "regular",
                "annotation": ""
            }
        ]
    }
);
app.config(["portfolioData", "portfolioItemData10",
    function (portfolioData, portfolioItemData10) {
        portfolioData.item10 = portfolioItemData10;
    }]);
