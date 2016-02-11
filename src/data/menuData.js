app.constant("menuData", []);
app.run(["portfolioData", "menuData", "numberOfSections",
    function (portfolioData, menuData, numberOfSections) {
        for (var portfolioItemIndex = 1; portfolioItemIndex <= numberOfSections; portfolioItemIndex++) {
            var itemIndex = "item" + parseInt(portfolioItemIndex);
            menuData.push(portfolioData["item" + portfolioItemIndex].name);
        }
    }]);
