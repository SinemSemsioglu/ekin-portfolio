// Markforged

app.constant("portfolioItemData4",
    {
        "name": "Markforged (Branding)",
        "isIncomplete": false,
        "header": {
            "alert_box": {
                "message":  "Hey there! This site is very new, and this section is still incomplete. Please check again in a couple of days to see the final version.",
                "show_message": true
            },
            "title": "Rebranding the world’s first carbon fiber 3D printer",
            "description": "I will be able to share clear images soon.",
            "image_path": "/assets/images/pitems/markforged/mfheader.png",
            "tags": ["BRANDING", "TECHNOLOGY"],
            "date": "AUGUST 2015"
        },
        "text_sections": [
            {
                "text": "Markforged is a 3D printing startup, building the world’s first composite 3d printer, able to print in carbon fiber, Kevlar, and, fiberglass and nylon. During my time there as a Product Design Intern, I got to rebrand the whole company, and the new brand will be coming out soon! (Detailed description coming soon.)",
                "number_of_columns": 1,
            }
        ],
        "image_sections": [
            {
                "path": "/assets/images/pitems/markforged/mf1.jpg",
                "class": "regular",
                "annotation": "Lorem ipsum dolor sit amet"
            }
        ],
        "extra_images": [
            {
                "path": "/assets/images/pitems/markforged/mf2.jpg",
                "class": "regular",
                "annotation": ""
            },
            {
                "path": "/assets/images/pitems/markforged/mf3.jpg",
                "class": "regular",
                "annotation": ""
            },
            {
                "path": "/assets/images/pitems/markforged/printer.jpg",
                "class": "regular",
                "annotation": ""
            }
        ]
    }
);
app.config(["portfolioData", "portfolioItemData4",
    function (portfolioData, portfolioItemData4) {
        portfolioData.item4 = portfolioItemData4;
}]);
