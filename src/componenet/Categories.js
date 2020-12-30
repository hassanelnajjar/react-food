import React from 'react';
import Input from './Input';
const categories = [
	'all',
	'burger',
	'hot dog',
	'sandwich',
	'fries',
	'topping',
	'drink',
	'extra',
];
export default function (props) {
	const { category, handleCategory } = props;
	return (
		<fieldset>
			<legend>Categories</legend>
			{categories.map((name, index) => (
				<Input
					key={index}
					name={name}
					category={category}
					handleCategory={handleCategory}
				/>
			))}
		</fieldset>
	);
}
