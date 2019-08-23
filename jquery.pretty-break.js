$.fn.prettyBreak = function() {
	return this.each(function() {
		const element = $(this);
		const elementContent = element.text();
		element.find("br").remove();
		element.wrapInner("<span style='white-space: nowrap'>");
		const textWidth = element.find("span").width();
		element.html(elementContent);
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
			element.html(s1 + "<br>" + " " + s2); // note the space after the tag
		} else {
			element.html(elementText);
		}
	});
};
