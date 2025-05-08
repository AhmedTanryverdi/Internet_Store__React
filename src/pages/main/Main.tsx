import React, { useCallback, useRef, useState } from "react";
import { ProductType } from "../../shared/utils/types/types";
import { Header } from "../../widgets/header/Header";
import { Card } from "../../shared/components/card/Card";
import { useScroll } from "./utils/hooks";
import loading from "../../shared/assets/icons/loading.png";
import "./main.scss";

export const Main: React.FC = (): React.JSX.Element => {
	const [products, setProducts] = useState<ProductType[]>([]);
	const [isLoading, setIsLoading] = useState(false);
	const skip = useRef<number>(0);
	const childRef = useRef<HTMLDivElement>(null);

	const productFetching = useCallback(() => {
		if (!isLoading) {
			setIsLoading(true);
			fetch(
				`https://dummyjson.com/products?limit=6&skip=${
					skip.current * 18
				}`
			)
				.then((response) => response.json())
				.then((data) => {
					setProducts((prevProducts) => [
						...prevProducts,
						...data.products,
					]);

					skip.current += 1;
				})
				.finally(() => setIsLoading(false));
		}
	}, [isLoading]);

	useScroll(childRef, isLoading, productFetching);

	return (
		<div className="main">
			<div className="container">
				<Header />
				<div className="products">
					{products.map((product) => {
						return <Card key={product.id} {...product} />;
					})}
					<div className="child" ref={childRef}>
						<img src={loading} className="img" alt="loading icon" />
					</div>
				</div>
			</div>
		</div>
	);
};
