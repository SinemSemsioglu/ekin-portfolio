// Markforged

app.constant("portfolioItemData4",
    {
        "name": "Markforged (Branding)",
        "isIncomplete": false,
        "header": {
            "alert_box": {
                "message":  "Hey there! This section is still missing some description. It'll be updated soon.",
                "show_message": true
            },
            "title": "Rebranding the world’s first carbon fiber 3D printer",
            "description": "During my internship I got to rebrand Markforged.",
            "image_path": "/assets/images/pitems/markforged/printer1.jpg",
            "tags": ["BRANDING", "TECHNOLOGY"],
            "date": "AUGUST 2015"
        },
        "text_sections": [
            {
                "text": "Markforged is a 3D printing startup, building the world’s first composite 3d printer, able to print in carbon fiber, Kevlar, and, fiberglass and nylon. During my time there as a Product Design Intern, I got to rebrand the whole company, and the new brand will be coming out soon! (This section will be updated.)",
                "number_of_columns": 1,
            }
        ],
        "image_sections": [
            {
                "path": "/assets/images/pitems/markforged/0.jpg",
                "class": "regular",
                "annotation": ""
            }
        ],
        "extra_images": [
            {
                "path": "/assets/images/pitems/markforged/1.jpg",
                "class": "regular",
                "annotation": ""
            },
            {
                "path": "/assets/images/pitems/markforged/2.jpg",
                "class": "regular",
                "annotation": ""
            },
            {
                "path": "/assets/images/pitems/markforged/3.jpg",
                "class": "regular",
                "annotation": ""
            },
            {
                "path": "/assets/images/pitems/markforged/4.jpg",
                "class": "regular",
                "annotation": ""
            },
            {
                "path": "/assets/images/pitems/markforged/5.jpg",
                "class": "regular",
                "annotation": ""
            },
            {
                "path": "/assets/images/pitems/markforged/6.jpg",
                "class": "regular",
                "annotation": ""
            },
            {
                "path": "/assets/images/pitems/markforged/7.jpg",
                "class": "regular",
                "annotation": ""
            },
            {
                "path": "/assets/images/pitems/markforged/8.jpg",
                "class": "regular",
                "annotation": ""
            },
            {
                "path": "/assets/images/pitems/markforged/9.jpg",
                "class": "regular",
                "annotation": ""
            },
            {
                "path": "/assets/images/pitems/markforged/10.jpg",
                "class": "regular",
                "annotation": ""
            },
            {
                "path": "/assets/images/pitems/markforged/11.jpg",
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
