export function clickOutside(nodeList, clickedOutsideCB, clickedInsideCB) {
	const handleClickOutside = event => {
		Array.prototype.forEach.call(
			nodeList,
			node => {
				if (!node.contains(event.target)) {
					clickedOutsideCB(node);
				} else {
					clickedInsideCB(node);
				}
			}
		);
	}

	document.addEventListener('click', handleClickOutside);
}