export function clickOutside(nodeList, clickedOutsideCB, clickedInsideCB) {
	const handleClickOutside = event => {
		Array.prototype.forEach.call(nodeList, node => {
			if (!node.contains(event.target)) {
				clickedOutsideCB(node, event);
			} else {
				clickedInsideCB(node, event);
			}
		});
	};

	document.addEventListener('click', handleClickOutside);
}
