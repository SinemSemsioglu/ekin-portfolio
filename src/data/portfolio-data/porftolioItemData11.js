// More Architecture

app.constant("portfolioItemData11",
    {
        "name": "More Architecture",
        "isIncomplete": false,
        "header": {
            "alert_box": {
                "message":  "Hey there! This site is very new, it will be updated heavily throughout this week. Please check again in a day or two if any content is buggy or missing.",
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
                "text": "Built upon the slopes of Mount Ingino in Umbria, the ancient town of Gubbio boasts many " +
                "well-preserved structures that document its glorious history. Founded by the Etruscans between the " +
                "second and first centuries B.C., its Roman theater, Consuls Palace, and various churches and " +
                "fountains are spectacular monuments to the Roman, Medieval, and Renaissance periods.",
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
