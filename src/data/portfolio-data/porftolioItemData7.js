// Information Design

app.constant("portfolioItemData7",
    {
        "name": "Information Design",
        "isIncomplete": false,
        "header": {
            "alert_box": {
                "message":  "Hey there! This is the new version of my portfolio and it was deployed very recently. It will be updated heavily throughout this week. Please check again soon if any content is buggy or missing.",
                "show_message": true
            },
            "title": "Diagramming ambiguities and fiction",
            "description": "These are experiments in information design incorporating somewhat unusual datasets",
            "image_path": "/assets/images/pitems/diagrams/diagheader.jpg",
            "tags": ["INFORMATION DESIGN", "FICTION"],
            "date": "NOVEMBER 2015"
        },
        "text_sections": [
            {
                "text": "Built upon the slopes of Mount Ingino in Umbria, the ancient town of Gubbio boasts many " +
                "well-preserved structures that document its glorious history. Founded by the Etruscans between the " +
                "second and first centuries B.C., its Roman theater, Consuls Palace, and various churches and " +
                "fountains " +
                "are spectacular monuments to the Roman, Medieval, and Renaissance periods.",
                "number_of_columns": 1,
            },
            {
                "text": "Estibulum mollis eget eros et tincidunt. Sed et nisl et enim dictum tincidunt. Phasellus" +
                " accumsan at lacus non dictum. Pellentesque habitant morbi tristique senectus et netus et malesuada" +
                " fames ac turpis egestas. Phasellus et semper erat. Etiam convallis mauris quis nibh tristique" +
                " pharetra. Aliquam",
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
                "path": "/assets/images/pitems/diagrams/calvino.jpg",
                "class": "regular",
                "annotation": "Lorem ipsum dolor sit amet"
            },
            {
                "path": "/assets/images/pitems/diagrams/diagram1.jpg",
                "class": "regular"
            },
            {
                "path": "/assets/images/pitems/diagrams/displace.jpg",
                "class": "regular",
                "annotation": "Lorem ipsum dolor sit amet"
            }
        ],
        "extra_images": [
            {
                "path": "/assets/images/pitems/diagrams/videoholder.png",
                "class": "regular",
                "annotation": "Lorem ipsum dolor sit amet"
            },
            {
                "path": "/assets/images/pitems/diagrams/maps1.jpg",
                "class": "regular",
                "annotation": "Lorem ipsum dolor sit amet"
            }
        ],
    }
);
app.config(["portfolioData", "portfolioItemData7",
    function (portfolioData, portfolioItemData7) {
        portfolioData.item7 = portfolioItemData7;
    }]);
