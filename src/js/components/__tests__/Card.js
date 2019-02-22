import preact from 'preact';
import {cleanup, fireEvent, render} from 'preact-testing-library';

import Card from '../Card';

afterEach(cleanup);

describe('Card', () => {
	it('renders nav card correctly', () => {
		const {container} = render(
			<Card
				description="Description"
				name="Name"
				svgId="#ticket"
				type="nav"
				url="/"
			/>
		);

		expect(container).toMatchSnapshot();
	});

	it('renders product card correctly', () => {
		const {container} = render(
			<Card
				description="Description"
				name="Name"
				svgId="#ticket"
				type="product"
				url="/"
			/>
		);

		expect(container).toMatchSnapshot();
	});

	it('renders without description', () => {
		const {container} = render(
			<Card name="Name" svgId="#ticket" type="nav" url="/" />
		);

		expect(container).toMatchSnapshot();
	});

	it('renders without name', () => {
		const {container} = render(
			<Card
				description="Description"
				svgId="#ticket"
				type="nav"
				url="/"
			/>
		);

		expect(container).toMatchSnapshot();
	});

	it('renders without svg', () => {
		const {container} = render(
			<Card name="Name" description="Description" type="nav" url="/" />
		);

		expect(container).toMatchSnapshot();
	});

	it('renders without url', () => {
		const {container} = render(
			<Card
				name="Name"
				description="Description"
				onClick={jest.fn()}
				svgId="#ticket"
				type="nav"
			/>
		);

		expect(container).toMatchSnapshot();
	});

	it('does something when clicked', () => {
		const handleOnClick = jest.fn();

		const {getByText} = render(
			<Card
				name="Name"
				description="Description"
				onClick={handleOnClick}
				svgId="#ticket"
				type="nav"
			/>
		);

		fireEvent.click(getByText('Name'));

		expect(handleOnClick).toBeCalledTimes(1);
	});
});