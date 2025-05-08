import { useEffect, useRef } from "react";

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
