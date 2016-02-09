// Experiments

app.value("portfolioItemData9",
    {
        "header": {
            "title": "Experiments in space, noise, and free will",
            "description": "Cantilever is a simple tool to keep up with design and architecture events.",
            "image_path": "/assets/images/bg.jpg",
            "tags": ["SPATIAL DESIGN", "FICTION"],
            "date": "DECEMBER 2013"
        },
        "text_sections": [
            {
                "text": "Built upon the slopes of Mount Ingino in Umbria, the ancient town of Gubbio boasts many well-preserved structures that document its glorious history. Founded by the Etruscans between the second and first centuries B.C., its Roman theater, Consuls Palace, and various churches and fountains are spectacular monuments to the Roman, Medieval, and Renaissance periods.",
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
app.run(["portfolioData", "portfolioItemData9",
    function (portfolioData, portfolioItemData9) {
        portfolioData.item9 = portfolioItemData9;
}]);
