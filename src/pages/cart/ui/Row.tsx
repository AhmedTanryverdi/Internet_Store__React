import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import {
	ProductType,
	RootState,
	useAppDispatch,
} from "../../../shared/utils/types/types";
import { Button } from "../../../shared/components/button/Button";
import { setTotalPrice } from "../../../entities/model/slices/cartSlice";
import { useSelector } from "react-redux";

interface localStorageType extends ProductType {
	quentity: number;
}

export const Row: React.FC<{
	item: localStorageType;
	onClick: (id: number) => void;
}> = ({ item, onClick }): React.JSX.Element => {
	const dispatch = useAppDispatch();
	const totalPrice = useSelector<RootState, number>(
		(state) => state.cart.totalPrice
	);
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
				<Button
					children="+"
					className="vary"
					onClick={() => {
						item.quentity += 1;
						dispatch(setTotalPrice(totalPrice + item.price));
					}}
				/>
				<span>{item.quentity}</span>
				<Button
					children="-"
					className="vary decrease"
					onClick={() => {
						if (item.quentity > 1) {
							item.quentity -= 1;
							dispatch(setTotalPrice(totalPrice - item.price));
						}
					}}
				/>
			</td>
			<td className="total">{item.quentity * item.price}</td>
			<td className="delete">
				<RiDeleteBin6Line
					color="red"
					onClick={() => onClick(item.id)}
				/>
			</td>
		</tr>
	);
};
