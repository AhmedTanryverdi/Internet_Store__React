import React from "react";
import "./card.scss";
import { Link } from "react-router-dom";

export const Card: React.FC<{
	id: number,
	thumbnail: string;
	title: string;
	price: number;
}> = ({ thumbnail, title, price, id }): React.JSX.Element => {
	return (
		<div className="card">
			<div className="card__content">
				<img src={thumbnail} alt="image" className="image" />
				<h3 className="title">{title}</h3>
				<p className="price">${price}</p>
			</div>

			<div className="card__btns">
				<button type="button" className="btn-item">
					<Link to={`/main/${id}`}>Добавить в корзину</Link>
				</button>
				<button type="button" className="btn-item">
					<Link to={`/main/${id}`}>О товаре</Link>
				</button>
			</div>
		</div>
	);
};
