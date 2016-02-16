// Information Design

app.constant("portfolioItemData7",
    {
        "name": "Information Design",
        "isIncomplete": false,
        "header": {
            "alert_box": {
                "message":  "Hey there! I've deployed this portfolio very recently and I'm still updating it. Check again in a couple of days to see the final version.",
                "show_message": true
            },
            "title": "Diagramming ambiguities and fiction",
            "description": "These are experiments in information design incorporating somewhat unusual datasets",
            "image_path": "/assets/images/pitems/diagrams/diagheader.jpg",
            "tags": ["INFORMATION DESIGN", "FICTION"],
            "date": "NOVEMBER 2015"
        },
        "text_sections": [
            {
                "text": "In this series rather than working with traditional datasets, I've visualised information extracted from Escherian paintings, Invisible Cities and colorful conversations. The time required to work on such things of course is afforded by school. (Details coming soon.)",
                "number_of_columns": 1
            }
        ],
        "image_sections": [
            {
                "path": "/assets/images/pitems/diagrams/calvino.jpg",
                "class": "regular",
                "annotation": ""
            }
        ],
        "extra_images": [
            {
                "path": "/assets/images/pitems/diagrams/diagram1.jpg",
                "class": "regular"
            },
            {
                "path": "/assets/images/pitems/diagrams/displace.jpg",
                "class": "regular",
                "annotation": ""
            },
            {
                "type": "video",
                "source": "<iframe src=\"https://player.vimeo.com/video/155275198\" " +
                "frameborder=\"0\" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>" +
                "<p><a href=\"https://vimeo.com/155275198\">Escherian Metamorphosis</a> from " +
                "<a href=\"https://vimeo.com/user2135944\">Ekin Keserer</a> on <a href=\"https://vimeo.com\">" +
                "Vimeo</a>.</p>",
                "class": "regular"
            },
            {
                "type": "image",
                "path": "/assets/images/pitems/diagrams/maps1.jpg",
                "class": "regular",
                "annotation": ""
            }
        ]
    }
);
app.config(["portfolioData", "portfolioItemData7",
    function (portfolioData, portfolioItemData7) {
        portfolioData.item7 = portfolioItemData7;
    }]);
