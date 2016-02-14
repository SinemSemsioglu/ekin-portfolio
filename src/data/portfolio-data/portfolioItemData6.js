// Horology

app.constant("portfolioItemData6",
    {
        "name": "Horology",
        "isIncomplete": false,
        "header": {
            "title": "Horology and information design problems",
            "description": "The value of a timepiece never lied in its ability to tell time during my lifetime.",
            "image_path": "/assets/images/bg.jpg",
            "tags": ["INDUSTRIAL DESIGN", "INFORMATION DESIGN"],
            "date": "MAY 2012"
        },
        "text_sections": [
            {
                "text": "Built upon the slopes of Mount Ingino in Umbria, the ancient town of Gubbio boasts many " +
                "well-preserved structures that document its glorious history. Founded by the Etruscans between the " +
                "second and first centuries B.C., its Roman theater, Consuls Palace, and various churches and " +
                "fountains are spectacular monuments to the Roman, Medieval, and Renaissance periods.",
                "number_of_columns": 1,
            },
            {
                "text": "Estibulum mollis eget eros et tincidunt. Sed et nisl et enim dictum tincidunt. Phasellus" +
                " accumsan at lacus non dictum. Pellentesque habitant morbi tristique senectus et netus et malesuada" +
                " fames ac turpis egestas. Phasellus et semper erat. Etiam convallis mauris quis nibh tristique" +
                " pharetra. Aliquam",
                "number_of_columns": 1,
            }
        ],
        "image_sections": [
            {
                "path": "/assets/images/size.jpg",
                "class": "regular",
                "annotation": "Lorem ipsum dolor sit amet"
            }
        ]
    }
);
app.config(["portfolioData", "portfolioItemData6",
    function (portfolioData, portfolioItemData6) {
        portfolioData.item6 = portfolioItemData6;
    }]);
