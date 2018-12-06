export function clickOutside(nodeList, clickedOutsideCB, clickedInsideCB) {
	const handleClickOutside = event => {
		nodeList.forEach(
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