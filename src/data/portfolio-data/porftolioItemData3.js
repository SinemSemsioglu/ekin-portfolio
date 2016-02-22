// Cantilever

app.constant("portfolioItemData3",
    {
        "name": "Cantilever (UX/Product)",
        "isIncomplete": false,
        "header": {
            "alert_box": {
                "message":  "Hey there! I've deployed this portfolio very recently and I'm still updating it. Check again in a couple of days to see the final version.",
                "show_message": true
            },
            "title": "Helping architects get the most out of events",
            "description": "Cantilever is a simple tool to keep up with design and architecture events.",
            "image_path": "/assets/images/pitems/cantilever/cantiheader1.jpg",
            "tags": ["PRODUCT DESIGN", "TECHNOLOGY"],
            "date": "SEPTEMBER 2015"
        },
        "footer": {
            "showNext": true,
            "showLive": true
        },
        "text_sections": [
            {
                "text": "Cantilever is a web and mobile app to keep up with architecture events in NYC. As an architecture student I've experienced first hand how easy it is to completely miss interesting architecture events and lectures. Cantilever aims to resolve this by aggregating such events. (This section will be updated.)",
                "number_of_columns": 1
            }
        ],
        "image_sections": [
            {
                "path": "/assets/images/pitems/cantilever/cantimobil1.jpg",
                "class": "regular",
                "annotation": ""
            },
            
        ],
        "extra_images": [
            {
                "path": "/assets/images/pitems/cantilever/cantimobil2.jpg",
                "class": "regular",
                "annotation": ""
            },
            {
                "path": "/assets/images/pitems/cantilever/cantimobil3.jpg",
                "class": "regular",
                "annotation": ""
            },
            {
                "path": "/assets/images/pitems/cantilever/cantiweb2.jpg",
                "class": "regular",
                "annotation": ""
            },
            {
                "path": "/assets/images/pitems/cantilever/cantiweb1.jpg",
                "class": "regular",
                "annotation": ""
            },
            {
                "path": "/assets/images/pitems/cantilever/cantiweb3.jpg",
                "class": "regular",
                "annotation": ""
            },
            {
                "path": "/assets/images/pitems/cantilever/cantinight1.jpg",
                "class": "regular",
                "annotation": ""
            },
            {
                "path": "/assets/images/pitems/cantilever/cantinight2.jpg",
                "class": "regular",
                "annotation": ""
            }
        ]
    }
);
app.config(["portfolioData", "portfolioItemData3",
    function (portfolioData, portfolioItemData3) {
        portfolioData.item3 = portfolioItemData3;
}]);
