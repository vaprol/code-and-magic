(function () {
    window.utils = {
        enterKeycode: 13,
        escKeyCode: 27,
        pickElementFromArray: function (arr) {
            return arr[Math.floor(Math.random() * arr.length)];
        }
    };
})();