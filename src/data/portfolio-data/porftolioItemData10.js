// Architecture

app.constant("portfolioItemData10",
    {
        "name": "Architecture",
        "isIncomplete": false,
        "header": {
            "alert_box": {
                "message":  "Hey there! This is the new version of my portfolio and it was deployed very recently. It will be updated heavily throughout this week. Please check again soon if any content is buggy or missing.",
                "show_message": true
            },
            "title": "A vacation house and other architectural misgivings",
            "description": "house is a simple tool to keep up with design and architecture events.",
            "image_path": "/assets/images/pitems/house/househead.jpg",
            "tags": ["ARCHITECTURE", "ECLECTIC"],
            "date": "MARCH 2015"
        },
        "text_sections": [
            {
                "text": "This is a residential vacation home project that I’ve been designing for a family friend. It is going to be located in Izmir, Turkey. I’ve been corresponding with the client to figure out all exterior and interior details which include some furniture I’ve designed specifically for this project. The basic premise behind the structure is to have a highly adjustable membrane for light intake. Izmir is quite sunny and this site has beautiful unobstructed views of the sea. So maximizing the views and being able to adjust the light intake becomes important. When the inhabitants opt to invite the Mediterranean sun in its full glory, they could do so by remotely opening the blinds embedded within the 3-layered glazing anywhere in the house through a smartphone app. On the flip side, a room (or the whole building) can become completely opaque at a moment’s notice through the same process. The color black on the exterior could be considered an unintuitive choice due to heat absorption in this sunny environment but that is an aesthetic request of the client.",
                "number_of_columns": 2,
            }
        ],
        "image_sections": [
            {
                "path": "/assets/images/pitems/house/house1.jpg",
                "class": "regular",
                "annotation": "Lorem ipsum dolor sit amet"
            }
        ],
        "extra_images": [
            {
                "path": "/assets/images/pitems/house/house2.jpg",
                "class": "regular",
                "annotation": "Lorem ipsum dolor sit amet"
            },
            {
                "path": "/assets/images/pitems/house/house3.jpg",
                "class": "regular",
                "annotation": "Lorem ipsum dolor sit amet"
            },
            {
                "path": "/assets/images/pitems/house/house4.jpg",
                "class": "regular",
                "annotation": "Lorem ipsum dolor sit amet"
            },
            {
                "path": "/assets/images/pitems/house/house5.jpg",
                "class": "regular",
                "annotation": "Lorem ipsum dolor sit amet"
            },
            {
                "path": "/assets/images/pitems/house/house6.jpg",
                "class": "regular",
                "annotation": "Lorem ipsum dolor sit amet"
            },
            {
                "path": "/assets/images/pitems/house/house7.jpg",
                "class": "regular",
                "annotation": "Lorem ipsum dolor sit amet"
            }
        ]
    }
);
app.config(["portfolioData", "portfolioItemData10",
    function (portfolioData, portfolioItemData10) {
        portfolioData.item10 = portfolioItemData10;
    }]);
