import React from 'react';
export default function (props) {
	const { category, handleCategory, name } = props;
	return (
		<label htmlFor={name}>
			{name}
			<input
				checked={category === name ? true : false}
				type='radio'
				name='category'
				id={name}
				value={name}
				onChange={handleCategory}
			/>
		</label>
	);
}
