import React, { useEffect, useState } from "react";
import { ProductType } from "../../shared/utils/types/types";
import { RiDeleteBin6Line } from "react-icons/ri";
import "./cart.scss";

interface localStorageType extends ProductType {
	quentity: number;
}

export const Cart: React.FC = (): React.JSX.Element => {
	const [cartProducts, setCartProducts] = useState<localStorageType[]>([]);

	useEffect(() => {
		const products = localStorage.getItem("cartProducts");
		if (products !== null) setCartProducts(JSON.parse(products));
	}, []);

	return (
		<div className="cart">
			<div className="container">
				<table className="cart__table">
					<thead className="thead">
						<tr className="thead__row">
							<th>IMAGE</th>
							<th>PRODUCT NAME</th>
							<th>PRICE</th>
							<th>QUENTITY</th>
							<th>TOTAL</th>
							<th>DELETE</th>
						</tr>
					</thead>
					<tbody className="tbody">
						{cartProducts.map((item) => {
							return (
								<tr key={item.id} className="item">
									<td className="image">
										<img src={item.thumbnail} alt="image" />
									</td>
									<td className="title">
										<h2>{item.title}</h2>
									</td>
									<td className="price">{item.price}</td>
									<td className="quentity">
										{item.quentity}
									</td>
									<td className="total">{item.quentity * item.price}</td>
									<td className="delete"><RiDeleteBin6Line color="red"/></td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		</div>
	);
};
