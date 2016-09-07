$.fn.prettyBreak = function () {

    return this.each(function () {

        var element = $(this);

        var elementLineHeight = element.css("line-height").replace("px", "");

        var elementContent = element.contents();

        element.wrapInner("<span style='white-space: nowrap'>");

        element.find("br").remove();

        var textWidth = element.find("span").width();

        element.html(elementContent);

        var elementText = $.trim(element.text());

        if (element.is(":visible") && textWidth > element.width() && element.height() < elementLineHeight * 2.1) {

            var middle = Math.floor(elementText.length / 2);
            var before = elementText.lastIndexOf(" ", middle);
            var after = elementText.indexOf(" ", middle + 1);

            if (middle - before < after - middle) {
                middle = before;
            } else {
                middle = after;
            }

            var s1 = elementText.substr(0, middle);
            var s2 = elementText.substr(middle + 1);

            element.html(s1 + "<br> " + s2); // note the space after the tag

        } else {
            element.html(elementText);
        }

        if (element.is(":visible")) {
            element.css("opacity", 1);
        }

    });
}

$(document).on("ready", function () {
    $(".pretty-break:visible").prettyBreak();

    setInterval(function () {
        $(".pretty-break:visible").prettyBreak();
    }, 1000);
});
