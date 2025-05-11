import React, { useState } from "react";
import { StarRating } from "./star-rating/StarRating";
import { Button } from "../../../../../shared/components/button/Button";
import "./descriptionProduct.scss";

export const DescriptionProduct: React.FC<{
	title: string;
	price: number;
	description: string;
	rating: number;
}> = ({ title, price, description, rating }): React.JSX.Element => {
	const [count, setCount] = useState<number>(1);
	return (
		<div className="descriptionBlock">
			<h2 className="title">{title}</h2>
			<StarRating rating={rating} />
			<p className="price">${price}</p>
			<p className="description">{description}</p>
			<div className="descriptionBlock__btns">
				<div className="counter">
					<Button children="+" className="vary" onClick={()=>setCount(count+1)}/>
					<div className="count">{count}</div>
					<Button children="-" className="vary" disabled={count <= 1} onClick={()=>{
						if(count > 1){
							setCount(count - 1);
						}
					}}/>
				</div>
				<Button children="добавить в корзину" className="addToCard" />
			</div>
		</div>
	);
};
