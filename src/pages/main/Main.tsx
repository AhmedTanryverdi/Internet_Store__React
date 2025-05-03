import React, { useEffect, useState } from "react";
import { ProductType } from "../../shared/utils/types/types";
import { Header } from "../../widgets/header/Header";

export const Main: React.FC = (): React.JSX.Element => {
	const [products, setProducts] = useState<ProductType[]>([]);

	useEffect(() => {
		fetch("https://fakestoreapi.com/products")
			.then((response) => response.json())
			.then((data) => setProducts(data));
	}, []);

	return (
		<div className="main">
			<div className="container">
				<Header />
				<div className="products">
					{products.map((product, index) => {
						return (
							<img
								src={product?.image}
								key={index}
								width={200}
								alt="image"
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
};
