import preact from 'preact';
import {
	cleanup,
	debounceRenderingOff,
	fireEvent,
	render,
	queryByRole
} from 'preact-testing-library';

import MegaMenu from '../MegaMenu';

const setup = () => {
	const configs = [
		{
			name: 'Item 1'
		},
		{
			svgId: '#glasses',
			url: '/'
		},
		{
			name: 'Item 3',
			svgId: '#sushi',
			url: '/'
		}
	];

	const locale = {
		alternativeLocales: [
			{
				name: 'fr',
				url: '/'
			},
			{
				name: 'de',
				url: '/'
			}
		],
		currentLocale: {
			name: 'en',
			url: '/'
		}
	};

	const utils = render(
		<MegaMenu
			accountLinks={{configs: configs}}
			cardMenuItems={{configs: configs}}
			highlightedLinks={{configs: configs}}
			locale={locale}
			name="Test"
		/>
	);

	return {...utils};
};

afterEach(cleanup);

describe('MegaMenu', () => {
	it('renders menu correctly', () => {
		const {container} = setup();

		expect(container).toMatchSnapshot();
	});

	it('renders a list of language selectors on clicking the current language', () => {
		debounceRenderingOff();

		const {container, getByText, queryByText} = setup();

		expect(queryByText('en')).toBeTruthy();

		fireEvent.click(getByText('en'));

		expect(queryByText('fr')).toBeTruthy();
		expect(queryByText('de')).toBeTruthy();
		expect(container).toMatchSnapshot();
	});

	it('returns to main mega menu when clicking on the back arrow in language selection', () => {
		const {getByText, queryByRole, queryByText} = setup();

		fireEvent.click(getByText('en'));

		expect(queryByText('fr')).toBeTruthy();
		expect(queryByText('de')).toBeTruthy();

		fireEvent.click(queryByRole('img'));

		expect(queryByText('fr')).toBeFalsy();
		expect(queryByText('de')).toBeFalsy();
	});
});