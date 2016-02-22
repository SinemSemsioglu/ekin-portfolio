// Horology

app.constant("portfolioItemData6",
    {
        "name": "Horology (Industrial)",
        "isIncomplete": false,
        "header": {
            "alert_box": {
                "message":  "Hey there! I've deployed this portfolio very recently and I'm still updating it. Check again in a couple of days to see the final version.",
                "show_message": true
            },
            "title": "Horology and information design problems",
            "description": "The value of a timepiece never lied in its ability to tell time during my lifetime.",
            "image_path": "/assets/images/pitems/horology/horoheader.jpg",
            "tags": ["INDUSTRIAL DESIGN", "INFORMATION DESIGN"],
            "date": "MAY 2012"
        },
        "text_sections": [
            {
                "text": "The value of a timepiece never lied in its ability to tell time during my lifetime. Good watches are dense objects imbued with poetics, and ingenuity. But why? And how can that effect be amplified? To find out I've designed quite a few of them. (This section will be updated.)",
                "number_of_columns": 1
            }
        ],
        "image_sections": [
            {
                "path": "/assets/images/pitems/horology/horo1.jpg",
                "class": "regular"
            }
        ]
    }
);
app.config(["portfolioData", "portfolioItemData6",
    function (portfolioData, portfolioItemData6) {
        portfolioData.item6 = portfolioItemData6;
    }]);
