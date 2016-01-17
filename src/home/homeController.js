app.controller("homeController", [
    "sectionData", "numberOfSections",
    function (sectionData, numberOfSections) {
        this.regularSections = [];

        for (var index = 1; index <= numberOfSections; index++) {
            var section = sectionData["section_" + (index)];

            if(section.type !== "irregular") {
                this.regularSections.push(section);
            }
        }
    }]);