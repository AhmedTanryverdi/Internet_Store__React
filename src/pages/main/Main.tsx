import React, { useEffect, useState } from "react";
import { ProductType } from "../../shared/utils/types/types";

export const Main: React.FC = (): React.JSX.Element => {
	const [products, setProducts] = useState<ProductType[]>([]);

	useEffect(() => {
		fetch("https://fakestoreapi.com/products")
			.then((response) => response.json())
			.then((data) => setProducts(data));
	}, []);
	console.log(products);
	return (
		<div>
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
	);
};
