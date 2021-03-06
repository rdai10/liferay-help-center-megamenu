import preact from 'preact';
import PropTypes from 'prop-types';

const Card = ({description, id, name, onClick, svgId, type, url}) => {
	return (
		<div class={`${type}-card`} id={id}>
			<a
				class="autofit-row autofit-row-center"
				href={url}
				onClick={onClick}
			>
				{svgId && (
					<div class="autofit-col">
						<svg class="icon">
							<use xlinkHref={svgId} />
						</svg>
					</div>
				)}

				<div class="autofit-col autofit-col-expand">
					{name && (
						<h4 class="title">
							{name}
						</h4>
					)}

					{description && <p class="description">{description}</p>}
				</div>
			</a>
		</div>
	);
};

Card.propTypes = {
	description: PropTypes.string,
	id: PropTypes.string,
	name: PropTypes.node,
	onClick: PropTypes.func,
	svgId: PropTypes.string,
	type: PropTypes.oneOf(['nav', 'product']).isRequired,
	url: PropTypes.string
};

export default Card;