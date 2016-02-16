// Cantilever

app.constant("portfolioItemData3",
    {
        "name": "Cantilever",
        "isIncomplete": false,
        "header": {
            "alert_box": {
                "message":  "Hey there! This site is very new, it will be updated heavily throughout this week. Please check again in a day or two if any content is buggy or missing.",
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
                "text": "When I found out about Frank Gehry’s speech at my own school too late.Architects are " +
                "terribly busy, almost at mythical levels. define problem. I concocted a list of 10 very" +
                " important events for the year. Asked a cohort of a dozen architects and architecture students " +
                "if they went and or heard about it. research",
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
