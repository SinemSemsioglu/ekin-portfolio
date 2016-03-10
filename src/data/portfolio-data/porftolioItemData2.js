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
                "text": "Dunemoon is a service which uses Spotify Web API to let users comment on and songs, playlists, a la Soundcloud. Even though new versions of Spotify has a host of social features none are as direct as Soundcloud, Dunemoon is an experiment in bringing about that functionality. (This section will be updated.)",
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
