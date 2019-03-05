import preact from 'preact';
import {cleanup, render} from 'preact-testing-library';

import CardMenu from '../CardMenu';

afterEach(cleanup);

describe('CardMenu', () => {
	const configs = [
		{
			description: 'Description for One',
			name: 'One',
			svgId: '#search',
			url: '/'
		},
		{
			description: 'Description for Two',
			svgId: '#ticket',
			url: '/'
		},
		{
			name: 'Three',
			svgId: '#book',
			url: '/'
		},
		{
			description: 'Description for Four',
			name: 'Four',
			url: '/'
		},
		{
			description: 'Description for Five',
			name: 'Five',
			svgId: '#bug'
		}
	];

	it('renders product card menu correctly', () => {
		const {container} = render(<CardMenu configs={configs} />);

		expect(container).toMatchSnapshot();
	});

	it('renders nav card menu correctly', () => {
		const {container} = render(<CardMenu configs={configs} type="nav" />);

		expect(container).toMatchSnapshot();
	});
});
