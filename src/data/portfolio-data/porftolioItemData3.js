// Cantilever

app.constant("portfolioItemData3",
    {
        "name": "Cantilever",
        "header": {
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
                "annotation": "Lorem ipsum dolor sit amet"
            },
            
        ],
        "extra_images": [
            {
<<<<<<< Updated upstream
                "text": "The results showed people went to less than 30 percent of these events even when they’ve" +
                " heard about them. A general complaint was that when people did indeed have time finding events " +
                "was a pain some didn’t even think of it. Another problem is that these people think facebook is " +
                "too inundated with events, and it is by random chance that they show up on the news feed.",
                "number_of_columns": 1
            },
            {
                "text": "The best course of action is to look at the bulletin boards at a design   school? (I know " +
                "for a fact that I don't do that) Or follow each institutions' websites to find out about" +
                " events. _findings_ Not content with these alternatives I decided to build an events aggregator, " +
                "that is curated and only serves events from relevant sources. _solution_ ",
                "number_of_columns": 1
            },
            {
                "text": "The interface isn't meant to maximize clicks but rather to minimise them. Find your " +
                "date - Select an interesting event - Go to the actual event page or add to your google calendar. " +
                "_wireframes + hifi_ It is both good for discoverability of events - we are not taking away their" +
                " traffic but enhancing them. And it is a focused practical experience that values user time.",
                "number_of_columns": 1
            },
            {
                "text": "It's not a platform but a simple tool. Yet it could track organizers, speakers, events " +
                "etc. - Phone app can also look at distance from current location and call an uber. It could help " +
                "you host post event discussions with the use of qr codes. (screen 1 code per signup)",
                "number_of_columns": 1
            }
        ],
        "image_sections": [
=======
                "path": "/assets/images/pitems/cantilever/cantimobil2.jpg",
                "class": "regular",
                "annotation": "Lorem ipsum dolor sit amet"
            },
            {
                "path": "/assets/images/pitems/cantilever/cantimobil3.jpg",
                "class": "regular",
                "annotation": "Lorem ipsum dolor sit amet"
            },
            {
                "path": "/assets/images/pitems/cantilever/cantiweb1.jpg",
                "class": "regular",
                "annotation": "Lorem ipsum dolor sit amet"
            },
            {
                "path": "/assets/images/pitems/cantilever/cantiweb2.jpg",
                "class": "regular",
                "annotation": "Lorem ipsum dolor sit amet"
            },
>>>>>>> Stashed changes
            {
                "path": "/assets/images/pitems/cantilever/cantiweb3.jpg",
                "class": "regular",
                "annotation": "Lorem ipsum dolor sit amet"
            },
            {
                "path": "/assets/images/pitems/cantilever/cantinight1.jpg",
                "class": "regular",
                "annotation": "Lorem ipsum dolor sit amet"
            },
            {
                "path": "/assets/images/pitems/cantilever/cantinight2.jpg",
                "class": "regular",
                "annotation": "Lorem ipsum dolor sit amet"
            }
        ]
    }
);
app.config(["portfolioData", "portfolioItemData3",
    function (portfolioData, portfolioItemData3) {
        portfolioData.item3 = portfolioItemData3;
}]);
