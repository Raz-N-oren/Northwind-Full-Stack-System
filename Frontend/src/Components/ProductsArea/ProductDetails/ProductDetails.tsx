import { useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import ProductModel from "../../../Models/ProductModel";
import notifyService from "../../../Services/NotifyService";
import productsService from "../../../Services/ProductsService";
import appConfig from "../../../Utils/config";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductDetails.css";

function ProductDetails(): JSX.Element {

    const params = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState<ProductModel>();
    // const [product, setProduct] = useState<ProductModel>(new ProductModel());


    useEffect(() => {
        const id = +params.prodId; //prodId must be the same name as declare in the routing!
        productsService.getOneProduct(id)
            .then(p => setProduct(p))
            .catch(err => notifyService.error(err))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    async function deleteProduct(id: number) {
        try {
            await productsService.deleteProduct(id);
            notifyService.success("Product has been deleted");
            navigate("/products")

        }
        catch (err: any) {
            notifyService.error(err);
        }
    }

    return (
        <div className="ProductDetails">
            {product &&

                <ProductCard key={product?.id} product={product && product}></ProductCard>

            }

            {product &&
                <>
                    {/* <Fragment> */}
                    <h2>Product Details</h2>
                    <h3>Name: {product && product.name}</h3>
                    <h3>Price: {product?.price}</h3>
                    <h3>Stock: {product?.stock}</h3>
                    <img src={appConfig.productsImagesUrl + product?.imageName} alt={product?.name} />
                </>
                // {/* </Fragment> */}

            }

            <br />
            <br />


            <NavLink to="/products">
                Back
            </NavLink>
            <span> | </span>

            <NavLink to={"/products/edit/" + product?.id}>
                Edit
            </NavLink>
            <span> | </span>

            <NavLink to="#" onClick={() => deleteProduct(product.id)}>
                Delete
            </NavLink>

        </div>
    );
}

export default ProductDetails;
