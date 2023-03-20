import { NavLink } from "react-router-dom";
import ProductModel from "../../../Models/ProductModel";
import appConfig from "../../../Utils/config";
import "./ProductCard.css";

interface ProductCardProps {
	product: ProductModel;
}

function ProductCard(props: ProductCardProps): JSX.Element {
    return (
        <div className="ProductCard Box">
			<div>
                {props.product.name}
                <br />
                Price: {props.product.price}
                <br />
                Stock: {props.product.stock}
            </div>
			<div>
                <NavLink to={"/products/details/" + props.product.id}>
                <img src={appConfig.productsImagesUrl + props.product.imageName} alt={props.product.name}/>
                </NavLink>
            </div>
        </div>
    );
}

export default ProductCard;
