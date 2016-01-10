app.controller("homeController", [
    "sectionData", "numberOfSections",
    function (sectionData, numberOfSections) {
        this.regularSections = [];
        for (var index = 0; index < numberOfSections; index++) {
            var section = sectionData["section_" + (index+1)];
            if(section.type === "descriptive") {
                this.headSection = section;
            } else {
                this.regularSections.push(section);
            }
        }
    }]);