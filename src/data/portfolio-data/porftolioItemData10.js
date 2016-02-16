// Architecture

app.constant("portfolioItemData10",
    {
        "name": "Architecture",
        "isIncomplete": false,
        "header": {
            "alert_box": {
                "message":  "Hey there! I've deployed this portfolio very recently and I'm still updating it. Check again in a couple of days to see the final version.",
                "show_message": true
            },
            "title": "A vacation house",
            "description": "A residence by the Aegean for a client",
            "image_path": "/assets/images/pitems/house/househead.jpg",
            "tags": ["ARCHITECTURE", "ECLECTIC"],
            "date": "MARCH 2015"
        },
        "text_sections": [
            {
                "text": "This is a residential vacation home project that I’ve been designing for a family friend. It is going to be located in Izmir, Turkey. I’ve been corresponding with the client to figure out all exterior and interior details which include some furniture I’ve designed specifically for this project. The basic premise behind the structure is to have a highly adjustable membrane for light intake. Izmir is quite sunny and this site has beautiful unobstructed views of the sea. So maximizing the views and being able to adjust the light intake becomes important. When the inhabitants opt to invite the Mediterranean sun in its full glory, they could do so by remotely opening the blinds embedded within the glazing anywhere in the house through an app. On the flip side, a room (or the whole building) can become completely opaque at a moment’s notice through the same process. (More details soon)",
                "number_of_columns": 2,
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
