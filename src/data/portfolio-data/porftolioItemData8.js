// Experiments

app.constant("portfolioItemData8",
    {
        "name": "Experiments (Spatial)",
        "isIncomplete": false,
        "header": {
            "alert_box": {
                "message":  "Hey there! This site is very new, and this section is still incomplete. Please check again in a couple of days to see the final version.",
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
                "text": "(Details coming soon)",
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
