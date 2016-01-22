app.value("portfolioData", []);
app.value("portfolioItemData1",
    {
        "header": {
            "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
            "description": " et dolore magna aliqua. Ut enim ad minim veniam,",
            "image_path": "/assets/images/quant.jpg",
            "tags": ["et dolore magna", "Duis aute irure"],
            "date": "September 2014"
        },
        "text_sections": [
            {
                "text": "Estibulum mollis eget eros et tincidunt. Sed et nisl et enim dictum tincidunt. Phasellus" +
                " accumsan at lacus non dictum. Pellentesque habitant morbi tristique senectus et netus et malesuada" +
                " fames ac turpis egestas. Phasellus et semper erat. Etiam convallis mauris quis nibh tristique" +
                " pharetra. Aliquam",
                "number_of_columns": 2,
                "annotations": {
                    "top": "Lorem ipsum dolor sit amet"
                }
            },
            {
                "text": "Estibulum mollis eget eros et tincidunt. Sed et nisl et enim dictum tincidunt. Phasellus" +
                " accumsan at lacus non dictum. Pellentesque habitant morbi tristique senectus et netus et malesuada" +
                " fames ac turpis egestas. Phasellus et semper erat. Etiam convallis mauris quis nibh tristique" +
                " pharetra. Aliquam",
                "number_of_columns": 1,
                "annotations": {
                    "bottom": "Lorem ipsum dolor sit amet"
                }
            },
            {
                "text": "Estibulum mollis eget eros et tincidunt. Sed et nisl et enim dictum tincidunt. Phasellus" +
                " accumsan at lacus non dictum. Pellentesque habitant morbi tristique senectus et netus et malesuada" +
                " fames ac turpis egestas. Phasellus et semper erat. Etiam convallis mauris quis nibh tristique" +
                " pharetra. Aliquam",
                "number_of_columns": 3,
                "annotations": {
                    "bottom": "Lorem ipsum dolor sit amet"
                }
            }
        ],
        "image_sections": [
            {
                "path": "/assets/images/pseud.jpg",
                "class": "without-padding",
                "annotation": "Lorem ipsum dolor sit amet"
            },
            {
                "path": "/assets/images/pseud.jpg",
                "class": "centered"
            },
            {
                "path": "/assets/images/pseud.jpg",
                "class": "regular",
                "annotation": "Lorem ipsum dolor sit amet"
            }
        ]
    }
);
app.run(["portfolioData", "portfolioItemData1",
    function (portfolioData, portfolioItemData1) {
        portfolioData.push(portfolioItemData1);
}]);
