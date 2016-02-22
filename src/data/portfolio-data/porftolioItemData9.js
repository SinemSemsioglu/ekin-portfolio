// logo

app.constant("portfolioItemData9",
    {
        "name": "Logos",
        "isIncomplete": false,
        "header": {
            "title": "Three samples of commissioned identity design",
            "description": "A construction company, a nonprofit, and a retailer",
            "image_path": "/assets/images/pitems/logo/logohead.jpg",
            "tags": ["BRANDING", "CLIENT WORK"],
            "date": "SEPTEMBER 2014"
        },
        "text_sections": [
            {
                "text": "Throughout the years I've designed many identity systems and these are three samples of client work. The clients are a construction company, a nonprofit, and a retailer. The first in these selected identity designs is Turyapi. Turyapi is a real estate developer based in Turkey. The identity design work had many components of various sizes including the logo, print and web ad templates, uniforms, and redesign of a company wide publication. The second project is the identity design for Huz Akademi which is an education non-profit based in Turkey. Three variations of the same logo concept can be seen in the images below. The last identity project on this page is for Boarder which is a retailer focused on outdoors equipment and skateboarding.",
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
