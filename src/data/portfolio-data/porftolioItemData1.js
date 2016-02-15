// Cilio

app.constant("portfolioData", {});
app.constant("portfolioItemData1",
    {
        "name": "Cilio",
        "isIncomplete": false,
        "header": {
            "alert_box": {
                "message":  "Hey there! This site is very new, it will be updated heavily throughout this week. Please check again in a day or two if any content is buggy or missing.",
                "show_message": true
            },
            "title": "Optimizing text strategically through natural selection",
            "description": "Cilio intelligently optimizes your writing for traction.",
            "image_path": "/assets/images/bg.jpg",
            "tags": ["PRODUCT DESIGN", "TECHNOLOGY"],
            "date": "NOVEMBER 2015"
        },
        "footer": {
            "showNext": false,
            "showLive": false
        },
        "text_sections": [
            {
                "text": "Cilio first identifies the essential bits of information in your text, such as names," +
                " dates, " +
                "organizations etc. using IBM Watson’s Relationship Extraction service, and makes sure to keep them " +
                "unaltered. Later, using the Tone Analyzer service Cilio identifies the parts of the text that could " +
                "be mutated in order to change the audiences reaction on the text." + "Again, utilizing the Tone Analyzer Cilio, replaces the previously identified mutable parts " +
                "of the text with their synonyms. Through this technique it creates a multitude of permutations of " +
                "the text and deploys these mutated versions to different users.",
                "number_of_columns": 1
            }
        ],
        "image_sections": [
            {
                "path": "/assets/images/pitems/cilio/cilio.jpg",
                "class": "regular",
                "annotation": "Lorem ipsum dolor sit amet"
            }
        ],
        "extra_images": [
            {
                "path": "/assets/images/pitems/cilio/twitter.jpg",
                "class": "regular",
                "annotation": "Lorem ipsum dolor sit amet"
            }
        ]

    }
);
app.config(["portfolioData", "portfolioItemData1",
    function (portfolioData, portfolioItemData1) {
        portfolioData.item1 = portfolioItemData1;
    }]);
