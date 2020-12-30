import React from 'react';
export default function (props) {
	const { maxPrice, minPrice, handleRange, name, value } = props;
	return (
		<label htmlFor='min-price'>
			{name}{' '}
			<input
				type='range'
				value={value}
				max={maxPrice}
				min={minPrice}
				name={name}
				id={name}
				onChange={handleRange}
			/>
		</label>
	);
}
