// Experiments

app.constant("portfolioItemData8",
    {
        "name": "Experiments (Spatial)",
        "isIncomplete": false,
        "header": {
            "title": "Experiments in space, noise, and modulation",
            "description": "Spatial experiments",
            "image_path": "/assets/images/pitems/experiments/expheader.jpg",
            "tags": ["SPATIAL DESIGN", "FICTION"],
            "date": "DECEMBER 2013"
        },
        "text_sections": [
            {
                "text": "Architecture is a field where concepts ultimately end up as environments. Therefore, the design process involves a fair amount of abstraction. These models and structures are essentially architectural abstractions. Some of them came about while trying to translate an idea into space during a more literal spatial project. And some of them just exist as experiments for different spatial conditions.",
                "number_of_columns": 1,
            }
        ],
        "image_sections": [
            {
                "path": "/assets/images/pitems/experiments/vac1.jpg",
                "class": "regular",
                "annotation": ""
            }
        ],
        "extra_images": [
            {
                "path": "/assets/images/pitems/experiments/vac2.jpg",
                "class": "regular",
                "annotation": ""
            },
            {
                "path": "/assets/images/pitems/experiments/vac3.jpg",
                "class": "regular",
                "annotation": ""
            },
            {
                "path": "/assets/images/pitems/experiments/vac4.jpg",
                "class": "regular",
                "annotation": ""
            },
            {
                "path": "/assets/images/pitems/experiments/vac5.jpg",
                "class": "regular",
                "annotation": ""
            },
            {
                "path": "/assets/images/pitems/experiments/vac6.jpg",
                "class": "regular",
                "annotation": ""
            },
            {
                "path": "/assets/images/pitems/experiments/arc1.jpg",
                "class": "regular",
                "annotation": ""
            },
            {
                "path": "/assets/images/pitems/experiments/arc2.jpg",
                "class": "regular",
                "annotation": ""
            },
            {
                "path": "/assets/images/pitems/experiments/arc3.jpg",
                "class": "regular",
                "annotation": ""
            },
            {
                "path": "/assets/images/pitems/experiments/arc5.jpg",
                "class": "regular",
                "annotation": ""
            },
            {
                "path": "/assets/images/pitems/experiments/cub1.jpg",
                "class": "regular",
                "annotation": ""
            },
            {
                "path": "/assets/images/pitems/experiments/cub2.jpg",
                "class": "regular",
                "annotation": ""
            },
            {
                "path": "/assets/images/pitems/experiments/cub4.jpg",
                "class": "regular",
                "annotation": ""
            },
            {
                "path": "/assets/images/pitems/experiments/expe1.jpg",
                "class": "regular",
                "annotation": ""
            },
            {
                "path": "/assets/images/pitems/experiments/expe2.jpg",
                "class": "regular",
                "annotation": ""
            },
            
        ]
    }
);

app.config(["portfolioData", "portfolioItemData8",
    function (portfolioData, portfolioItemData8) {
        portfolioData.item8 = portfolioItemData8;
    }]);
