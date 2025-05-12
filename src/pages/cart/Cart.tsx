import React, { useEffect, useState } from "react";
import {
	localStorageType,
	RootState,
	useAppDispatch,
} from "../../shared/utils/types/types";
import { Row } from "./ui/Row";
import { setTotalPrice } from "../../entities/model/slices/cartSlice";
import { SubTable } from "./ui/SubTable";
import { useSelector } from "react-redux";
import "./cart.scss";

export const Cart: React.FC = (): React.JSX.Element => {
	const [cartProducts, setCartProducts] = useState<localStorageType[]>([]);
	const dispatch = useAppDispatch();
	const totalPrice = useSelector<RootState, number>(
		(state) => state.cart.totalPrice
	);

	useEffect(() => {
		const products = localStorage.getItem("cartProducts");
		if (products !== null) {
			const objArr: localStorageType[] = JSON.parse(products);
			setCartProducts(objArr);
			let total = 0;
			objArr.forEach((element) => {
				total += element.quentity * element.price;
			});

			dispatch(setTotalPrice(total));
		}
	}, []);

	const deleteProduct = (id: number) => {
		const newProductList = cartProducts.filter((item) => {
			if (item.id === id) {
				dispatch(setTotalPrice(totalPrice - item.price));
			}
			return item.id !== id;
		});

		setCartProducts(newProductList);
		localStorage.setItem("cartProducts", JSON.stringify(newProductList));
	};

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
						{cartProducts.map((product) => {
							return (
								<Row
									key={product.id}
									item={product}
									onClick={deleteProduct}
								/>
							);
						})}
					</tbody>
				</table>
				<SubTable
					isEmpty={cartProducts.length > 0}
					totalPrice={totalPrice}
					setCartProducts={setCartProducts}
				/>
			</div>
		</div>
	);
};
