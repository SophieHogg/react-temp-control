window.onload = function () {
    var pageTitle = document.title;
    var attentionMessage = "Isn't it hot in here ...?";
    var blinkEvent = null;

    document.addEventListener("visibilitychange", function (e) {
        var pageIsActive = !document.hidden;

        if (!pageIsActive) {
            changeTitle();
        } else {
            document.title = pageTitle;
            clearInterval(blinkEvent);
        }
    });
    function changeTitle() {
        document.title = attentionMessage;
    }
};
