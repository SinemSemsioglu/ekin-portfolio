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
                "text": "<h4>The Problem and the Audience</h4>If you know any architects or architecture students you've probably heard them complain about their extreme work hours and hectic schedules. A common symptom of this problem is being unable to attend interesting lectures, interviews and events related to design and architecture. Last semester when I missed a Frank Gehry interview at my own school I decided to tackle this problem. Skills used: Visual design, interaction design, user research.<br><br><h4>Research</h4>I started my research by trying to find any apps/websites/offline resources would help me discover good events in the design and architecture domains. I've found out that a lot of institutions that publish their own events calendars (sometimes with RSS), some magazines and design blogs that curate a small portion of these events. Another good resource for events were bulletin boards around Parsons and other design schools. These bulletin boards generally pointed to lectures and shows that are hard to come by in design blogs or other aggregated sources. Key insights that came out of this part of the investigation:<br><br><ul><li>A lot of the smaller more specialized events don't end up on Facebook. Even if they do, you are less likely to see them as they'll have less social traction than parties and large events.</li><br><li>Lists curated by design blogs and magazines are heavily skewed towards marketing the most popular events rather than helping people discover new ones.</li><br><li>The most diverse range of relevant and unique events can be found in individual institutional event calendars kept by museums, galleries, universities etc.</li><br><li>These individual event calendars offer a wide range of user experiences and generally feel dated.</li><br><li>The event calendars are generally hard to navigate and search.</li></ul><br>After reaching these conclusions I continued the investigation with user research. I've interviewed a dozen architects and architecture students that live in NYC. I put together a list of prominent but diverse design and architecture events ranging from small and specialized to very large and general. First I asked people which ones they were aware of, attended, and wanted to attend.<br><br><ul><li>The results showed that an overwhelming majority did not attend the events even when they were aware of the event and wanted to attend. Timing generally just doesn't work out.</ul></li><br>I asked how many events they attend and if that's closed to the desired amount.<br><br><ul><li>Apart from a couple of people who were completely satisfied people generally commented on how they could not find anything for their free days.</ul></li><br>Lastly I asked people which platforms they use to find events and if they were adequate.<br><br><ul><li>I've found out that none of these people regularly use any of the institutional sources or design blogs for finding events. They either come across events on Facebook or hear about them from friends. People thought this was inadequate because they were not able to filter what they were getting from friends or the Facebook news feed. However going through institutional websites were seen as too much of a hassle.</ul></li><br><h4>Design</h4>After gathering these insights I had a pretty good grasp on the problem. There are two main issues; there is no one source with enough relevant events, there is no way to filter for specific dates (especially important as these people do not have an abundance of free time).<br><br>After some brainstorming it became clear that an events aggregator making use of all the good event calendars that exist but also filter for time, place, people, and institutions and then sync all the events to Google Calendar or the device calendar. The aggregator grabs events from the RSS feeds (or through data mining when RSS is not available) and populates the interface with events according to their time, place, and institution. It also shows a short description of the event if the user focuses on it and provides a link for more details and an option to add to calendar. In essence the goal of the app is to navigate people back to the respective event sites as quickly as possible so that they can RSVP or buy tickets. The 'add to calendar' option helps users collect all the events they are interested on the site and sync them all to their Google Calendar or device calender at once.<br><br><h4>Interface</h4>I've started out by sketching the mobile interface trying to find a smart way to present and navigate the data. Through many wireframes a poster-like interface where a selected data point could be manipulated to act as a filter emerged. By swiping left or right in each of the fields, the user can change the date, place or the corresponding event.<br><br>Swiping a desired filter up or down will reveal the filter details. Here users can also perform a more specific browse by selecting dates from the calendar or by changing the institutions(or the city) they want to see. They can also opt to see all events for the selected criteria as a list.<br><br>The webapp interface for tablets and desktops shares the same design principles. However due to the extended screen space all the details can be shown at once. This allows the user to find, peruse and reach events in three taps/clicks while keeping clutter away.<br><br>The webapp also features a discussion section allowing for post event discussions for each event featured on the site. Participants at each event can scan a QR code with their phone apps and join the post event discussion.<br><br>Both the mobile app and the webapp feature night mode which allows for an better reading experience in darker environments.",
                "number_of_columns": 1
            }
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
