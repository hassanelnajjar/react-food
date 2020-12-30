import React from 'react';
import dishes from '../data';

export default function (props) {
	return (
		<section className='dishes'>
			<h2>Dishes</h2>
			<ul className='grid'>
				{dishes
					.filter(
						(dish) =>
							dish.price >= props.minPrice &&
							dish.price <= props.maxPrice &&
							(props.category !== 'all'
								? dish.category === props.category
								: dish.category)
					)
					.map((dish, index) => (
						<li className='card' key={dish.id}>
							<h2>{dish.name}</h2>
							<p>{dish.description}</p>
							<p>{dish.price} $</p>
						</li>
					))}
			</ul>
		</section>
	);
}
