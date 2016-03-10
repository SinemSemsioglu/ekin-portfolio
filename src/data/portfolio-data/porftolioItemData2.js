// Dunemoon

app.constant("portfolioItemData2",
    {
        "name": "Dunemoon (UX/Product)",
        "isIncomplete": false,
        "header": {
            "alert_box": {
                "message":  "Hey there! This section is still missing some description. It'll be updated soon.",
                "show_message": true
            },
            "title": "Social context for a web of music",
            "description": "Dunemoon tries to help users become more engaged with their favorite songs.",
            "image_path": "/assets/images/pitems/dunemoon/duneheader.jpg",
            "tags": ["PRODUCT DESIGN", "TECHNOLOGY"],
            "date": "OCTOBER 2015"
        },
        "footer": {
            "showNext": true,
            "showLive": true
        },
        "text_sections": [
            {
                "text": "<h4>The Problem and the Audience</h4>Even though Spotify is quite good at helping users discover lesser known artists, it doesn't offer a way for users to directly engage with them. Soundcloud on the other hand is a great place for niche artists to engage with their audience, and for the audience to engage with the songs. Dunemoon is an experiment in bringing some of this functionality and more to Spotify users' libraries using the Spotify Web API to create an ever growing record of social context for music. Skills used: research, interaction design, visual design. Dunemoon is still under development.",
                "number_of_columns": 1,
            }
        ],
        "image_sections": [
            {
                "path": "/assets/images/pitems/dunemoon/dune1.jpg",
                "class": "regular",
                "annotation": ""
            }
        ],
        "extra_images": [
            {
                "path": "/assets/images/pitems/dunemoon/dune2.jpg",
                "class": "regular",
                "annotation": ""
            },
            {
                "path": "/assets/images/pitems/dunemoon/dune3.jpg",
                "class": "regular",
                "annotation": ""
            },
            {
                "path": "/assets/images/pitems/dunemoon/dune4.jpg",
                "class": "regular",
                "annotation": ""
            },
            {
                "path": "/assets/images/pitems/dunemoon/dune5.jpg",
                "class": "regular",
                "annotation": ""
            },
            {
                "path": "/assets/images/pitems/dunemoon/dune6.jpg",
                "class": "regular",
                "annotation": ""
            },
            {
                "path": "/assets/images/pitems/dunemoon/dune7.jpg",
                "class": "regular",
                "annotation": ""
            }
        ]
    }
);
app.config(["portfolioData", "portfolioItemData2",
    function (portfolioData, portfolioItemData2) {
        portfolioData.item2 = portfolioItemData2;
    }]);
