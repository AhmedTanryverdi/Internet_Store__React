import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ImageGallery } from "./ui/gallery/ImageGallery";
import { DescriptionProduct } from "./ui/description/DescriptionProduct";
import { ProductType } from "../../../shared/utils/types/types";
import "./productinfo.scss";


export const ProductInfo: React.FC = (): React.JSX.Element => {
	const { id } = useParams();
	const [currentProduct, setCurrentProduct] = useState<Partial<ProductType>>(
		{}
	);
	useEffect(() => {
		fetch(`https://dummyjson.com/products/${id}`)
			.then((response) => response.json())
			.then((data) => setCurrentProduct(data));
	}, [id]);

    
	return (
		<div className="productInfo">
			<div className="container">
				<div className="content">
					<ImageGallery images={currentProduct.images ?? []} />
					<DescriptionProduct
						title={currentProduct.title ?? ""}
						price={currentProduct.price ?? 0}
						description={currentProduct.description ?? ""}
						rating={currentProduct.rating ?? 1}
					/>
				</div>
			</div>
		</div>
	);
};
