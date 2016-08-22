
$.fn.prettyBreak = function () {

    return this.each(function () {

        var element = $(this);

        const clone = element.clone();
        clone.css("visibility", "hidden");
        clone.wrapInner("<span style='white-space: nowrap'>");
        element.parent().append(clone);
        const textWidth = clone.find("span").width();
        clone.remove();

        const splitText = function () {

            const elementText = $.trim(element.text());

            if (textWidth > element.width()) {

                let middle = Math.floor(elementText.length / 2);
                const before = elementText.lastIndexOf(" ", middle);
                const after = elementText.indexOf(" ", middle + 1);

                if (middle - before < after - middle) {
                    middle = before;
                } else {
                    middle = after;
                }

                const s1 = elementText.substr(0, middle);
                const s2 = elementText.substr(middle + 1);

                element.html(s1 + "<br>" + s2);

            } else {
                element.html(elementText);
            }
        };

        $(window).on("load resize", function () {

            splitText();

        });
    });
}
