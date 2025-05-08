import React, { useCallback, useEffect, useRef, useState } from "react";
import { ProductType, RootState } from "../../shared/utils/types/types";
import { Header } from "../../widgets/header/Header";
import { Card } from "../../shared/components/card/Card";
import { useScroll } from "./utils/hooks";
import loading from "../../shared/assets/icons/loading.png";
import { useSelector } from "react-redux";
import "./main.scss";

export const Main: React.FC = (): React.JSX.Element => {
	const [products, setProducts] = useState<ProductType[]>([]);
	const [isLoading, setIsLoading] = useState(false);
	const [hasMore, setHasMore] = useState(true);
	const skip = useRef<number>(0);
	const childRef = useRef<HTMLDivElement>(null);
	const filter = useSelector<RootState, string>(
		(state) => state.filter.textInput
	);

	const productFetching = useCallback(() => {
		if (!isLoading) {
			setIsLoading(true);
			fetch(
				`https://dummyjson.com/products/search?q=${encodeURIComponent(
					filter
				)}&limit=18&skip=${skip.current * 18}`
			)
				.then((response) => response.json())
				.then((data) => {
					if (data.products.length < 18) {
						setHasMore(false);
					}
					setProducts((prevProducts) => [
						...prevProducts,
						...data.products,
					]);
					skip.current += 1;
				})
				.finally(() => setIsLoading(false));
		}
	}, [isLoading, filter]);

	useScroll(childRef, isLoading, hasMore, productFetching);

	useEffect(() => {
		setProducts([]);
		skip.current = 0;
		setHasMore(true);
	}, [filter]);

	return (
		<div className="main">
			<div className="container">
				<Header />
				<div className="products">
					{products.map((product) => {
						return <Card key={product.id} {...product} />;
					})}
					<div className="child" ref={childRef}>
						{hasMore && <img src={loading} className="img" alt="loading icon" />}
					</div>
				</div>
			</div>
		</div>
	);
};
