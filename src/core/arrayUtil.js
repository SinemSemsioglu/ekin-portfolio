app.service("arrayUtil",
    function(){
        this.getNumberArray = function (num) {
            var numArray = [];
            for (var index = 1; index <= num; index++) {
                numArray.push(index);
            }
            return numArray;
        }
});