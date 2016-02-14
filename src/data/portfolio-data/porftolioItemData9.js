// logo

app.constant("portfolioItemData9",
    {
        "name": "Logos",
        "isIncomplete": false,
        "header": {
            "title": "Three samples of commissioned identity design",
            "description": "A construction company, a nonprofit, and a retailer",
            "image_path": "/assets/images/pitems/2-dunemoon/duneheader.jpg",
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
                "annotations": {
                    "bottom": "Lorem ipsum dolor sit amet"
                }
            }
        ],
        "image_sections": [
            {
                "path": "/assets/images/pitems/logo/tur1.png",
                "class": "regular",
                "annotation": "Lorem ipsum dolor sit amet"
            }
        ],
        "extra_images": [
            {
                "path": "/assets/images/pitems/logo/tur2.jpg",
                "class": "regular",
                "annotation": "Lorem ipsum dolor sit amet"
            },
            {
                "path": "/assets/images/pitems/logo/tur3.jpg",
                "class": "regular",
                "annotation": "Lorem ipsum dolor sit amet"
            },
            {
                "path": "/assets/images/pitems/logo/tur4.jpg",
                "class": "regular",
                "annotation": "Lorem ipsum dolor sit amet"
            },
            {
                "path": "/assets/images/pitems/logo/tur5.jpg",
                "class": "regular",
                "annotation": "Lorem ipsum dolor sit amet"
            },
            {
                "path": "/assets/images/pitems/logo/tur6.jpg",
                "class": "regular",
                "annotation": "Lorem ipsum dolor sit amet"
            },
            {
                "path": "/assets/images/pitems/logo/tur7.png",
                "class": "regular",
                "annotation": "Lorem ipsum dolor sit amet"
            },
            {
                "path": "/assets/images/pitems/logo/huz1.png",
                "class": "regular",
                "annotation": "Lorem ipsum dolor sit amet"
            },
            {
                "path": "/assets/images/pitems/logo/huz2.jpg",
                "class": "regular",
                "annotation": "Lorem ipsum dolor sit amet"
            },
            {
                "path": "/assets/images/pitems/logo/huz3.jpg",
                "class": "regular",
                "annotation": "Lorem ipsum dolor sit amet"
            },
            {
                "path": "/assets/images/pitems/logo/huz4.jpg",
                "class": "regular",
                "annotation": "Lorem ipsum dolor sit amet"
            },
            {
                "path": "/assets/images/pitems/logo/huz5.jpg",
                "class": "regular",
                "annotation": "Lorem ipsum dolor sit amet"
            },
            {
                "path": "/assets/images/pitems/logo/boa1.jpg",
                "class": "regular",
                "annotation": "Lorem ipsum dolor sit amet"
            },
            {
                "path": "/assets/images/pitems/logo/boa2.jpg",
                "class": "regular",
                "annotation": "Lorem ipsum dolor sit amet"
            }
        ]
    }
);
app.config(["portfolioData", "portfolioItemData9",
    function (portfolioData, portfolioItemData9) {
        portfolioData.item9 = portfolioItemData9;
    }]);
