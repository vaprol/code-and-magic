(function () {
    window.utils = {
        enterKeycode: 13,
        escKeyCode: 27,
        pickElementFromArray: function (arr) {
            return arr[Math.floor(Math.random() * arr.length)];
        },
        randomizeArray: function (arr) {
            return arr.sort(function () {
                return Math.random() - 0.5;
            });
        }
    };
})();