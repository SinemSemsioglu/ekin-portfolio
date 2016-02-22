// Buharo

app.constant("portfolioItemData5",
    {
        "name": "Buharo (Industrial)",
        "isIncomplete": false,
        "header": {
            "alert_box": {
                "message":  "Hey there! I've deployed this portfolio very recently and I'm still updating it. Check again in a couple of days to see the final version.",
                "show_message": true
            },
            "title": "Redesigning an oriental tradition",
            "description": "Buharo addresses many problems a traditional hookah creates with design.",
            "image_path": "/assets/images/pitems/buharo/buharohead.jpg",
            "tags": ["INDUSTRIAL DESIGN", "ENTREPRENEURSHIP"],
            "date": "APRIL 2014"
        },
        "text_sections": [
            {
                "text": "Buharo started out as a satirical pet project. I used to work on a minimal, ergonomic and innovative hookah design mostly because it was an amusing idea (my friends still laugh at me when I tell them I’ve pitched a carbon fiber hookah to some of Turkey’s prominent angels and a roomful of tech people). This project just let me get away from the more ‘serious’ work on my desktop and later on became a relatively simple project with which I could try entrepreneurship. Around that time an annual entrepreneurship competition called Fikir Kutusu (Idea Box) came up at Koc University (one of the top universities in Turkey). I decided to attend with a friend of mine, Zeynep, who is a business student. Our aim was to learn as much as we could through thinking of Buharo as a business. As we pored through the market data, age, and consumption research for a business plan, the idea started to gradually become more serious. Buharo became one of the three finalists out of dozens of projects from all over the country. As a finalist, we pitched Buharo to a well-known Istanbul based angel investor, Galata Business Angels. Expectedly, they were more interested in software than tobacco (or the lackthereof) but it was quite an informative and formative experience. (This section will be updated.)",
                "number_of_columns": 1
                
            }
        ],
        "image_sections": [
            {
                "path": "/assets/images/pitems/buharo/buharo1.jpg",
                "class": "regular",
                "annotation": ""
            }
            ],
        "extra_images": [
            {
                "path": "/assets/images/pitems/buharo/buharo2.jpg",
                "class": "regular"
            },
            {
                "path": "/assets/images/pitems/buharo/buharo3.jpg",
                "class": "regular",
                "annotation": ""
            },
            {
                "path": "/assets/images/pitems/buharo/buharo4.jpg",
                "class": "regular",
                "annotation": ""
            },
            {
                "path": "/assets/images/pitems/buharo/buharo5.jpg",
                "class": "regular",
                "annotation": ""
            },
            {
                "path": "/assets/images/pitems/buharo/buharo6.jpg",
                "class": "regular",
                "annotation": ""
            },
            {
                "path": "/assets/images/pitems/buharo/buharo7.jpg",
                "class": "regular",
                "annotation": ""
            },
            {
                "path": "/assets/images/pitems/buharo/buharo8.jpg",
                "class": "regular",
                "annotation": ""
            },
            {
                "path": "/assets/images/pitems/buharo/buharo9.jpg",
                "class": "regular",
                "annotation": ""
            }
        ]
    }
);
app.config(["portfolioData", "portfolioItemData5",
    function (portfolioData, portfolioItemData5) {
        portfolioData.item5 = portfolioItemData5;
}]);
