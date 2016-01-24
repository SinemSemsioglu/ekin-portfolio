app.value("portfolioData", []);
app.value("portfolioItemData1",
    {
        "header": {
            "title": "Helping architects get the most out of events",
            "description": "Cantilever is a simple tool to keep up with design and architecture events.",
            "image_path": "/assets/images/bg.jpg",
            "tags": ["PRODUCT DESIGN", "TECHNOLOGY"],
            "date": "SEPTEMBER 2014"
        },
        "text_sections": [
            {
                "text": "Estibulum mollis eget eros et tincidunt. Sed et nisl et enim dictum tincidunt. Phasellus" +
                " accumsan at lacus non dictum. Pellentesque habitant morbi tristique senectus et netus et malesuada" +
                " fames ac turpis egestas. Phasellus et semper erat. Etiam convallis mauris quis nibh tristique" +
                " pharetra. Aliquam",
                "number_of_columns": 1,
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
                "path": "/assets/images/size.jpg",
                "class": "regular",
                "annotation": "Lorem ipsum dolor sit amet"
            },
            {
                "path": "/assets/images/size2.jpg",
                "class": "regular"
            },
            {
                "path": "/assets/images/size3.jpg",
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
