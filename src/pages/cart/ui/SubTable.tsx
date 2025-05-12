import React from "react";
import { Button } from "../../../shared/components/button/Button";
import {
	localStorageType,
	useAppDispatch,
} from "../../../shared/utils/types/types";
import { useNavigate } from "react-router-dom";
import { setColor } from "../../../entities/model/slices/cartSlice";

export const SubTable: React.FC<{
	isEmpty: boolean;
	totalPrice: number;
	setCartProducts: (arr: localStorageType[]) => void;
}> = ({ isEmpty, totalPrice, setCartProducts }): React.JSX.Element => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	return (
		<div className="cart__subTable">
			<div className="btns">
				{isEmpty && (
					<Button
						children="Очистить корзину"
						className="btns"
						onClick={() => {
							localStorage.removeItem("cartProducts");
							setCartProducts([]);
							dispatch(setColor("blue"));
						}}
					/>
				)}
				<Button
					children="Перейти к товарам"
					className="btns"
					onClick={() => navigate("/main")}
				/>
			</div>

			<div className="resultDesk">
				<ul className="desk">
					<li>
						<span>Sub Total</span>
						<span>{totalPrice.toFixed(2)}</span>
					</li>
					<li>
						<span>Shoping</span>
						<span>{(totalPrice > 0 && "$30") || 0}</span>
					</li>
					<li>
						<span>Total</span>
						<span>
							{(totalPrice > 0 && (totalPrice + 30).toFixed(2)) ||
								0}
						</span>
					</li>
				</ul>
			</div>
		</div>
	);
};
