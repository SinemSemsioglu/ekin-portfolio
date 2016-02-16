// logo

app.constant("portfolioItemData9",
    {
        "name": "Logos",
        "isIncomplete": false,
        "header": {
            "alert_box": {
                "message":  "Hey there! This site is very new, it will be updated heavily throughout this week. Please check again in a day or two if any content is buggy or missing.",
                "show_message": true
            },
            "title": "Three samples of commissioned identity design",
            "description": "A construction company, a nonprofit, and a retailer",
            "image_path": "/assets/images/pitems/logo/logohead.jpg",
            "tags": ["BRANDING", "CLIENT WORK"],
            "date": "SEPTEMBER 2014"
        },
        "text_sections": [
            {
                "text": "Built upon the slopes of Mount Ingino in Umbria, the ancient town of Gubbio boasts many" +
                " well-preserved structures that document its glorious history. Founded by the Etruscans between the " +
                "second and first centuries B.C., its Roman theater, Consuls Palace, and various churches and " +
                "fountains are spectacular monuments to the Roman, Medieval, and Renaissance periods.",
                "number_of_columns": 1,
            }
        ],
        "image_sections": [
            {
                "path": "/assets/images/pitems/logo/tur1.jpg",
                "class": "regular",
            }
        ],
        "extra_images": [
            {
                "path": "/assets/images/pitems/logo/tur7.jpg",
                "class": "regular",
            },
            {
                "path": "/assets/images/pitems/logo/tur2.jpg",
                "class": "regular",
            },
            {
                "path": "/assets/images/pitems/logo/tur3.jpg",
                "class": "regular",
            },
            {
                "path": "/assets/images/pitems/logo/tur4.jpg",
                "class": "regular",
            },
            {
                "path": "/assets/images/pitems/logo/tur5.jpg",
                "class": "regular",
            },
            {
                "path": "/assets/images/pitems/logo/tur6.jpg",
                "class": "regular",
            },
            {
                "path": "/assets/images/pitems/logo/huz1.png",
                "class": "regular",
            },
            {
                "path": "/assets/images/pitems/logo/huz2.jpg",
                "class": "regular",
            },
            {
                "path": "/assets/images/pitems/logo/huz3.jpg",
                "class": "regular",
            },
            {
                "path": "/assets/images/pitems/logo/huz4.jpg",
                "class": "regular",
            },
            {
                "path": "/assets/images/pitems/logo/huz5.jpg",
                "class": "regular",
            },
            {
                "path": "/assets/images/pitems/logo/boa11.jpg",
                "class": "regular",
            },
            {
                "path": "/assets/images/pitems/logo/boa2.jpg",
                "class": "regular",
            }
        ]
    }
);
app.config(["portfolioData", "portfolioItemData9",
    function (portfolioData, portfolioItemData9) {
        portfolioData.item9 = portfolioItemData9;
    }]);
