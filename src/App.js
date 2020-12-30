import React from 'react';
import dishes from './data';
import Dishes from './componenet/Dishes';
import Price from './componenet/Price';
import Categories from './componenet/Categories';
const minPrice = dishes.reduce((a, b) => (a < b.price ? a : b.price), Infinity);
const maxPrice = dishes.reduce(
	(a, b) => (a > b.price ? a : b.price),
	-Infinity
);

class App extends React.Component {
	state = {
		minPrice: 0,
		maxPrice: 10,
		category: 'all',
	};
	handleMinRange = (e) => {
		e.persist();
		this.setState(() => ({ minPrice: e.target.value }));
	};
	handleMaxRange = (e) => {
		e.persist();
		this.setState(() => ({ maxPrice: e.target.value }));
	};
	handleCategory = (e) => {
		e.persist();
		this.setState(() => ({ category: e.target.value }));
	};

	render() {
		return (
			<main>
				<section className='filters'>
					<h1>Burger Place</h1>
					<h2>Filters</h2>
					<Price
						maxPrice={maxPrice}
						minPrice={minPrice}
						handleMaxRange={this.handleMaxRange}
						handleMinRange={this.handleMinRange}
						currentPrice={{
							currentMinPrice: this.state.minPrice,
							currentMaxPrice: this.state.maxPrice,
						}}
					/>
					<Categories
						category={this.state.category}
						handleCategory={this.handleCategory}
					/>
				</section>
				<Dishes {...this.state}></Dishes>
			</main>
		);
	}
}

export default App;
