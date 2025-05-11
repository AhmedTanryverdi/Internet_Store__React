import React, { useState } from "react";
import { Img } from "./ui/img/Img";
import "./imageGallety.scss";

export const ImageGallery: React.FC<{
	images: string[];
}> = ({ images }): React.JSX.Element => {
	const [mainImage, setMainImage] = useState(0);

	return (
		<div className="image-gallery">
			<div className="main-image">
				<img src={images[mainImage] ?? ""} alt="image" />
			</div>
			<div className="thumbnails">
				{images?.map((item, index) => {
					return (
						<Img
							key={index}
							id={index}
							image={item}
							setMainImage={setMainImage}
						/>
					);
				})}
			</div>
		</div>
	);
};
