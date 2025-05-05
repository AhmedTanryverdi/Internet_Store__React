import React, { useEffect, useState } from "react";
import { ProductType } from "../../shared/utils/types/types";
import { Header } from "../../widgets/header/Header";
import { Card } from "../../shared/components/card/Card";
import "./main.scss";

export const Main: React.FC = (): React.JSX.Element => {
	const [products, setProducts] = useState<ProductType[]>([]);

	useEffect(() => {
		fetch("https://dummyjson.com/products/")
			.then((response) => response.json())
			.then((data) => setProducts(data.products));
	}, []);

	return (
		<div className="main">
			<div className="container">
				<Header />
				<div className="products">
					{products.map((product, index) => {
						return <Card key={index} {...product} />;
					})}
				</div>
			</div>
		</div>
	);
};
