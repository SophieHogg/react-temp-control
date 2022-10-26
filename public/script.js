window.onload = function () {
    var pageTitle = document.title;
    var attentionMessage = "Change temperature!";
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
