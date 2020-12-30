import React from 'react';
import Range from './Range';

export default function (props) {
	const {
		maxPrice,
		minPrice,
		handleMinRange,
		handleMaxRange,
		currentPrice,
	} = props;
	const ranges = [
		{
			name: 'min-price',
			fun: handleMinRange,
			currentValue: currentPrice.currentMinPrice,
		},
		{
			name: 'max-price',
			fun: handleMaxRange,
			currentValue: currentPrice.currentMaxPrice,
		},
	];
	return (
		<fieldset>
			<legend>Price</legend>
			{ranges.map((el, index) => (
				<Range
					key={index}
					maxPrice={maxPrice}
					minPrice={minPrice}
					name={el.name}
					handleRange={el.fun}
					value={el.currentValue}
				/>
			))}
		</fieldset>
	);
}
