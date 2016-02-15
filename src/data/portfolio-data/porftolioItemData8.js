// Experiments

app.constant("portfolioItemData8",
    {
        "name": "Experiments",
        "isIncomplete": false,
        "header": {
            "alert_box": {
                "message":  "Hey there! This site is very new, it will be updated heavily throughout this week. Please check again in a day or two if any content is buggy or missing.",
                "show_message": true
            },
            "title": "Experiments in space, noise, and free will",
            "description": "Cantilever is a simple tool to keep up with design and architecture events.",
            "image_path": "/assets/images/pitems/experiments/expheader.jpg",
            "tags": ["SPATIAL DESIGN", "FICTION"],
            "date": "DECEMBER 2013"
        },
        "text_sections": [
            {
                "text": "Built upon the slopes of Mount Ingino in Umbria, the ancient town of Gubbio boasts many" +
                " well-preserved structures that document its glorious history. Founded by the Etruscans between the" +
                " second and first centuries B.C., its Roman theater, Consuls Palace, and various churches and " +
                "fountains are spectacular monuments to the Roman, Medieval, and Renaissance periods.",
                "number_of_columns": 1,
            }
        ],
        "image_sections": [
            {
                "path": "/assets/images/pitems/experiments/vac1.jpg",
                "class": "regular",
                "annotation": "Lorem ipsum dolor sit amet"
            }
        ],
        "extra_images": [
            {
                "path": "/assets/images/pitems/experiments/vac2.jpg",
                "class": "regular",
                "annotation": "Lorem ipsum dolor sit amet"
            },
            {
                "path": "/assets/images/pitems/experiments/vac3.jpg",
                "class": "regular",
                "annotation": "Lorem ipsum dolor sit amet"
            },
            {
                "path": "/assets/images/pitems/experiments/vac4.jpg",
                "class": "regular",
                "annotation": "Lorem ipsum dolor sit amet"
            },
            {
                "path": "/assets/images/pitems/experiments/vac5.jpg",
                "class": "regular",
                "annotation": "Lorem ipsum dolor sit amet"
            },
            {
                "path": "/assets/images/pitems/experiments/vac6.jpg",
                "class": "regular",
                "annotation": "Lorem ipsum dolor sit amet"
            },
            {
                "path": "/assets/images/pitems/experiments/arc1.jpg",
                "class": "regular",
                "annotation": "Lorem ipsum dolor sit amet"
            },
            {
                "path": "/assets/images/pitems/experiments/arc2.jpg",
                "class": "regular",
                "annotation": "Lorem ipsum dolor sit amet"
            },
            {
                "path": "/assets/images/pitems/experiments/arc3.jpg",
                "class": "regular",
                "annotation": "Lorem ipsum dolor sit amet"
            },
            {
                "path": "/assets/images/pitems/experiments/arc5.jpg",
                "class": "regular",
                "annotation": "Lorem ipsum dolor sit amet"
            },
            {
                "path": "/assets/images/pitems/experiments/cub1.jpg",
                "class": "regular",
                "annotation": "Lorem ipsum dolor sit amet"
            },
            {
                "path": "/assets/images/pitems/experiments/cub2.jpg",
                "class": "regular",
                "annotation": "Lorem ipsum dolor sit amet"
            },
            {
                "path": "/assets/images/pitems/experiments/cub4.jpg",
                "class": "regular",
                "annotation": "Lorem ipsum dolor sit amet"
            },
            {
                "path": "/assets/images/pitems/experiments/expe1.jpg",
                "class": "regular",
                "annotation": "Lorem ipsum dolor sit amet"
            },
            {
                "path": "/assets/images/pitems/experiments/expe2.jpg",
                "class": "regular",
                "annotation": "Lorem ipsum dolor sit amet"
            },
            
        ]
    }
);

app.config(["portfolioData", "portfolioItemData8",
    function (portfolioData, portfolioItemData8) {
        portfolioData.item8 = portfolioItemData8;
    }]);
