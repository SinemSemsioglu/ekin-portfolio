// Information Design

app.constant("portfolioItemData7",
    {
        "name": "Information Design",
        "isIncomplete": false,
        "header": {
            "title": "Diagramming ambiguities and fiction",
            "description": "These are experiments in information design incorporating somewhat unusual datasets",
            "image_path": "/assets/images/pitems/diagrams/diagheader.jpg",
            "tags": ["INFORMATION DESIGN", "FICTION"],
            "date": "NOVEMBER 2015"
        },
        "text_sections": [
            {
                "text": "First diagram in this series investigates Invisible Cities. Italo Calvino's Invisible Cities is a surreal dialogue between Kublai Khan, the aging Mongolian emperor and Marco Polo, the explorer who tells him of the cities he encounters during his journey throughout Khan's empire. The book is made up of 55 short stories describing 55 imaginary cities pushing the possibilities of different urban concepts. In nine chapters the fifty-five cities are grouped into eleven thematic categories and their ordering follows a pattern pertaining to these categories.",
                "number_of_columns": 1
            },
            {
                "text": "The book itself has an overarching narrative that comes together with all the city descriptions and interludes, and it self-referentially inquires the need for describing each of the imaginary cities. This is answered by Marco Polo's declaration of \"Without the stones there's no arch.\" meaning each of the cities are required to build the whole story. The diagram below lists all the cities, identifies the chapters, and illustrates the pattern that becomes apparent in their interlocking thematic categories.",
                "number_of_columns": 1
            },
            {
                "text": "The second diagram is an analysis of M.C. Escher's Metamorphosis III. This woodcut print dates back to 1967 and is 268 inches long. It begins with the word 'Metamorphose' (the Dutch form of the word metamorphosis) which forms into a checkerboard pattern which in turn becomes a wide range of animals, places, and shapes over the entirety of the print. The diagram spans the entire length of Metamorphosis III and documents each incorporated element, foreground-background relations, color values, dominant colors, ground, sky, water relationships.",
                "number_of_columns": 1
            },
            {
                "text": "The video below is the second iteration of this diagram, which brings the previous iteration into 3d and adds an analysis of the motion which Metamorphosis III portrays.",
                "number_of_columns": 1
            },
            {
                "text": "The third diagram is a series of maps detailing different aspects of Greenwich Village. After documenting a series of rather mundane information It culminates in a psychogeographic map of a path through the neighborhood making use of the earlier maps.",
                "number_of_columns": 1
            }
        ],
        "image_sections": [
            {
                "path": "/assets/images/pitems/diagrams/calvino.jpg",
                "class": "regular",
                "annotation": ""
            },
            {
                "path": "/assets/images/pitems/diagrams/diagram1.jpg",
                "class": "regular"
            },
            {
                "path": "/assets/images/pitems/diagrams/displace.jpg",
                "class": "regular",
                "annotation": ""
            },
            {
                "type": "video",
                "source": "<iframe src=\"https://player.vimeo.com/video/155275198\" " +
                "frameborder=\"0\" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>" +
                "<p><a href=\"https://vimeo.com/155275198\">Escherian Metamorphosis</a> from " +
                "<a href=\"https://vimeo.com/user2135944\">Ekin Keserer</a> on <a href=\"https://vimeo.com\">" +
                "Vimeo</a>.</p>",
                "class": "regular"
            },
            {
                "type": "image",
                "path": "/assets/images/pitems/diagrams/maps1.jpg",
                "class": "regular",
                "annotation": ""
            }
        ]
    }
);
app.config(["portfolioData", "portfolioItemData7",
    function (portfolioData, portfolioItemData7) {
        portfolioData.item7 = portfolioItemData7;
    }]);
