// New Cilio
app.constant("portfolioItemData3",
    {
        "name": "Cilio (UX/Product)",
        "isIncomplete": false,
        "header": {
            "alert_box": {
                "message":  "Hey there! This section is still missing some description. It'll be updated soon.",
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
                "text": "Cilio is a machine learning project which won first place The Next Web USA 2015 Hackathon in New York. It optimizes blocks of text for traffic without changing their meaning through IBM Watson APIs and evolutionary algorithms. I was the product designer for the project. I also put together the website you can see below for the presentation. (This section will be updated.)",
                "number_of_columns": 1
            }
        ],
        "image_sections": [
            {
                "path": "/assets/images/pitems/cilio/cilio.jpg",
                "class": "regular",
                "annotation": ""
            }
        ],
        "extra_images": [
            {
                "path": "/assets/images/pitems/cilio/twitter.jpg",
                "class": "regular",
                "annotation": ""
            }
        ]

    }
);
app.config(["portfolioData", "portfolioItemData3",
    function (portfolioData, portfolioItemData3) {
        portfolioData.item3 = portfolioItemData3;
}]);
