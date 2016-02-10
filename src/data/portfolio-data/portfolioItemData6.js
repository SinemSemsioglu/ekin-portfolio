// Horology

app.value("portfolioItemData6",
    {
        "header": {
            "title": "Horology and information design problems",
            "description": "The value of a timepiece never lied in its ability to tell time during my lifetime.",
            "image_path": "/assets/images/bg.jpg",
            "tags": ["INDUSTRIAL DESIGN", "INFORMATION DESIGN"],
            "date": "MAY 2012"
        },
        "text_sections": [
            {
                "text": "I’ve been a horology enthusiast since my childhood. I read about clepsydrae, sundials, perpetual calendars, al-Jazari’s automatons, and how mechanical timekeeping changed society and whatever else I could find about timekeeping. I’ve even tried and failed to make a documentary about time and timekeeping in high school, twice(!). The first thing I’ve seriously tried to design as an 11-year-old was a watch dial, which showed time with three concentric disks rather than hands. Since then I’ve designed quite a few timepiece concepts with odd ways of telling time. In most of them the focus was novelty and experience rather than clarity and feasibility.",
                "number_of_columns": 1,
                "annotations": {
                    "bottom": "Lorem ipsum dolor sit amet"
                }
            },
            {
                "text": "The value of a timepiece never lied in its ability to tell time during my lifetime. Good watches are dense cult objects imbued with poetics, and ingenuity. Wearing them is only one way to associate with this ingenuity, designing them is another. Vortico is a design I’ve worked on and off on for a while in 2013. The idea was to disturb the deep-seated equal and balanced dials, which do not treat the passing of time like humans do. Vorticism with its geometric dynamism and loud awareness of the machine age seemed to apply itself to the watch naturally. Each band represents an hour and on each day, time is weaved in a different order of bands. One can tell time by counting the fully blackened bands, or by checking their phones.",
                "number_of_columns": 1,
                "annotations": {
                    "bottom": "Lorem ipsum dolor sit amet"
                }
            },
            {
                "text": "Estibulum mollis eget eros et tincidunt. Sed et nisl et enim dictum tincidunt. Phasellus" +
                " accumsan at lacus non dictum. Pellentesque habitant morbi tristique senectus et netus et malesuada" +
                " fames ac turpis egestas. Phasellus et semper erat. Etiam convallis mauris quis nibh tristique" +
                " pharetra. Aliquam",
                "number_of_columns": 3,
                "annotations": {
                    "bottom": "Lorem ipsum dolor sit amet"
                }
            }
        ],
        "image_sections": [
            {
                "path": "/assets/images/size.jpg",
                "class": "regular",
                "annotation": "Lorem ipsum dolor sit amet"
            },
            {
                "path": "/assets/images/size2.jpg",
                "class": "regular"
            },
            {
                "path": "/assets/images/size3.jpg",
                "class": "regular",
                "annotation": "Lorem ipsum dolor sit amet"
            }
        ]
    }
);
app.run(["portfolioData", "portfolioItemData6",
    function (portfolioData, portfolioItemData6) {
        portfolioData.item6 = portfolioItemData6;
    }]);
