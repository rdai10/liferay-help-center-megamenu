import preact from 'preact';
import PropTypes from 'prop-types';

import Card from './Card';

const CardMenu = ({className, configs, type}) => (
	<div class={className}>
		{configs.map((config, index) => (
			<Card
				key={index}
				description={config.description}
				name={config.name}
				svgId={config.svgId}
				type={type}
				url={config.url}
			/>
		))}
	</div>
);

CardMenu.defaultProps = {
	type: 'product'
};

CardMenu.propTypes = {
	className: PropTypes.string,
	configs: PropTypes.arrayOf(
		PropTypes.shape({
			description: PropTypes.string,
			name: PropTypes.string,
			svgId: PropTypes.string,
			url: PropTypes.string
		})
	),
	type: PropTypes.oneOf(['nav', 'product'])
};

export default CardMenu;