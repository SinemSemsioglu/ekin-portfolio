// Markforged

app.constant("portfolioItemData4",
    {
        "name": "Markforged",
        "isIncomplete": false,
        "header": {
            "alert_box": {
                "message":  "Hey there! This is the new version of my portfolio and it was deployed very recently. It will be updated heavily throughout this week. Please check again soon if any content is buggy or missing.",
                "show_message": true
            },
            "title": "Rebranding the world’s first carbon fiber 3D printer",
            "description": "I've had the opportunity to rebrand Markforged,",
            "image_path": "/assets/images/pitems/markforged/mfheader.png",
            "tags": ["BRANDING", "TECHNOLOGY"],
            "date": "AUGUST 2015"
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
                "path": "/assets/images/pitems/markforged/mf1.jpg",
                "class": "regular",
                "annotation": "Lorem ipsum dolor sit amet"
            }
        ],
        "extra_images": [
            {
                "path": "/assets/images/pitems/markforged/mf2.jpg",
                "class": "regular",
                "annotation": "Lorem ipsum dolor sit amet"
            },
            {
                "path": "/assets/images/pitems/markforged/mf3.jpg",
                "class": "regular",
                "annotation": "Lorem ipsum dolor sit amet"
            },
            {
                "path": "/assets/images/pitems/markforged/printer.jpg",
                "class": "regular",
                "annotation": "Lorem ipsum dolor sit amet"
            }
        ]
    }
);
app.config(["portfolioData", "portfolioItemData4",
    function (portfolioData, portfolioItemData4) {
        portfolioData.item4 = portfolioItemData4;
}]);
