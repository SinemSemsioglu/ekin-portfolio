// More Architecture

app.constant("portfolioItemData11",
    {
        "name": "More Architecture",
        "isIncomplete": false,
        "header": {
            "alert_box": {
                "message":  "Hey there! I've deployed this portfolio very recently and I'm still updating it. Check again in a couple of days to see the final version.",
                "show_message": true
            },
            "title": "The sharing economy of reprogrammable architecture",
            "description": "With the advent of programmable matter, all design disciplines will undergo fundamental changes.",
            "image_path": "/assets/images/pitems/auton/authead.jpg",
            "tags": ["ARCHITECTURE", "TECHNOLOGY"],
            "date": "FEBRUARY 2016"
        },
        "text_sections": [
            {
                "text": "Auton is an exploration into the possible architectural implementations and resulting economic implications of large scale programmable matter. (This section will be updated.)",
                "number_of_columns": 1,
            }
        ],
        "image_sections": [
            {
                "path": "/assets/images/pitems/auton/aut1.jpg",
                "class": "regular",
                "annotation": ""
            }
        ],
        "extra_images": [
            {
                "path": "/assets/images/pitems/auton/aut2.jpg",
                "class": "regular",
                "annotation": ""
            },
            {
                "path": "/assets/images/pitems/auton/aut3.jpg",
                "class": "regular",
                "annotation": ""
            }
        ]

    }
);
app.config(["portfolioData", "portfolioItemData11",
    function (portfolioData, portfolioItemData11) {
        portfolioData.item11 = portfolioItemData11;
    }]);
