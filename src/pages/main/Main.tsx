import React, { useRef, useState } from "react";
import { ProductType } from "../../shared/utils/types/types";
import { Header } from "../../widgets/header/Header";
import { Card } from "../../shared/components/card/Card";
import { useScroll } from "./utils/hooks";
import "./main.scss";

export const Main: React.FC = (): React.JSX.Element => {
	const [products, setProducts] = useState<ProductType[]>([]);
	const [isLoading, setIsLoading] = useState(false);
	const [skip, setSkip] = useState<number>(0);
	const parentRef = useRef<HTMLDivElement>(null);
	const childRef = useRef<HTMLDivElement>(null);

	useScroll(parentRef, childRef, isLoading, productFetching);

	function productFetching() {
		if (!isLoading) {
			setIsLoading(true);
			fetch(`https://dummyjson.com/products?limit=6&skip=${skip * 6}`)
				.then((response) => response.json())
				.then((data) => {
					setProducts((prevProducts) => [
						...prevProducts,
						...data.products,
					]);
					setSkip(skip + 1);
				})
				.finally(() => setIsLoading(false));
		}
	}

	return (
		<div className="main">
			<div className="container">
				<Header />
				<div className="products" ref={parentRef}>
					{products.map((product) => {
						return <Card key={product.id} {...product} />;
					})}
					<div
						className="child"
						ref={childRef}
						style={{
							width: "100%",
							height: "20px",
							background: "black",
						}}
					></div>
				</div>
			</div>
		</div>
	);
};
