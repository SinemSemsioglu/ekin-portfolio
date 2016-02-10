// Dunemoon

app.value("portfolioItemData2",
    {
        "isIncomplete": false,
        "header": {
            "title": "Social context for a web of music",
            "description": "Dunemoon tries to help users become more engaged with their playlists.",
            "image_path": "/assets/images/pitems/2_Dunemoon/duneheader.jpg",
            "tags": ["PRODUCT DESIGN", "TECHNOLOGY"],
            "date": "OCTOBER 2015"
        },
        "footer": {
            "showNext": true,
            "showLive": true
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
                "path": "/assets/images/pitems/2_dunemoon/dune1.jpg",
                "class": "regular",
                "annotation": "Lorem ipsum dolor sit amet"
            },
            {
                "path": "/assets/images/pitems/2_dunemoon/dune2.jpg",
                "class": "regular"
            },
            {
                "path": "/assets/images/pitems/2_dunemoon/dune1.jpg",
                "class": "regular",
                "annotation": "Lorem ipsum dolor sit amet"
            }
        ]
    }
);
app.run(["portfolioData", "portfolioItemData2",
    function (portfolioData, portfolioItemData2) {
        portfolioData.item2 = portfolioItemData2;
    }]);
