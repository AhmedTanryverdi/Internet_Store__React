import { useCallback, useEffect, useRef, useState } from "react";
import { ProductType } from "../../../shared/utils/types/types";

export const useScroll = (
	childRef: React.RefObject<HTMLDivElement | null>,
	isLoading: boolean,
	hasMore: boolean,
	callback: () => void
) => {
	const observer = useRef<IntersectionObserver | null>(null);

	useEffect(() => {
		const options = {
			rootMargin: "0px",
			threshold: 1,
		};

		if (observer.current !== null) {
			childRef.current && observer.current?.unobserve(childRef.current);
		}

		if (!hasMore) return;

		observer.current = new IntersectionObserver(([target]) => {
			if (target.isIntersecting && !isLoading) {
				callback();
			}
		}, options);

		childRef.current && observer.current.observe(childRef.current);

		return () => {
			if (childRef.current) {
				observer.current?.unobserve(childRef.current);
				observer.current?.disconnect();
			}
		};
	}, [callback, hasMore, isLoading]);
};

export const useProductFetch = (filter: string) => {
	const [products, setProducts] = useState<ProductType[]>([]);
	const [isLoading, setIsLoading] = useState(false);
	const [hasMore, setHasMore] = useState(true);
	const skip = useRef<number>(0);

	const fetchNextPage = useCallback(() => {
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

	useEffect(() => {
		setProducts([]);
		skip.current = 0;
		setHasMore(true);
	}, [filter]);

	return { products, isLoading, hasMore, fetchNextPage };
};
