// New Cantilever
app.constant("portfolioData", {});
app.constant("portfolioItemData1",
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
                "text": "Architects and architecture students in NYC routinely miss professional events they'd like to attend because of their hectic schedules. When I missed a Frank Gehry interview at my own school I decided to tackle this problem. Skills used: Visual design, interaction design, user research.",
                "number_of_columns": 1
            },
            {
                "text": "Even though the test sample wasn't large enough to provide statistically foolproof results, there were still some important insights. The results showed people went to less than 30 percent of these events, for events they've heard about them. A general complaint was that when people did indeed have time, finding events was a pain, some didn't even think of it. Another problem is that these people think facebook is too inundated with events, and it is by random chance that they show up on their news feed. The most surefire way of getting exposed to a sample of events is to look at the bulletin boards at a design school. Obviously many people will not do this. An alternative is to follow every relevant institutions' websites to find out about events which people short on time dread. I tried to find more generalized websites that aggregate events but nothing significant came up.",
                "number_of_columns": 1
            },
            {
                "text": "Not content with these alternatives I decided to build an events aggregator, that is curated and only serves events from relevant sources. The design is based on a series of filters. You can filter for time, place, institution, people. Mostly time though. The interface isn't meant to maximize clicks but rather to minimise them. Find your date - Select an interesting event - Go to the actual event page or add to your google calendar. It is both good for discoverability of events we are not taking away their traffic but enhancing them. And it is a focused practical experience that values user time. It's not a platform but a simple tool. Yet it could track organizers, speakers, events etc.",
                "number_of_columns": 1
            },
        ],
        "image_sections": [
            
        ],
        "extra_images": [
            {
                "path": "/assets/images/pitems/cantilever/cantimobil1.jpg",
                "class": "regular",
                "annotation": ""
            },
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
app.config(["portfolioData", "portfolioItemData1",
    function (portfolioData, portfolioItemData1) {
        portfolioData.item1 = portfolioItemData1;
    }]);
