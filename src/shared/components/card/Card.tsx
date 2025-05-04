import React from "react";
import "./card.scss";

export const Card: React.FC<{
	image: string;
	title: string;
	price: number;
}> = ({ image, title, price }): React.JSX.Element => {
	return (
		<div className="card">
			<div className="card__content">
				<img src={image} alt="image" className="image" />
				<h3 className="title">{title}</h3>
				<p className="price">${price}</p>
			</div>

			<button type="button" className="card__btn">
				Добавить в корзину
			</button>
		</div>
	);
};
