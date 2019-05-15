import PropTypes from 'prop-types';

export const linkType = PropTypes.shape({
	name: PropTypes.string,
	url: PropTypes.string
});

export const cardType = PropTypes.arrayOf(
	PropTypes.shape({
		name: PropTypes.string,
		svgId: PropTypes.string,
		url: PropTypes.string
	})
);