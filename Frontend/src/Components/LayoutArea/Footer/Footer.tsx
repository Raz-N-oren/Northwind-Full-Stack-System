import TotalCategories from "../../ProductsArea/TotalCategories/TotalCategories";
import "./Footer.css";

function Footer(): JSX.Element {
    return (
        <div className="Footer">
            <TotalCategories />
			<p>All Rights Reserves &copy;</p>
        </div>
    );
}

export default Footer;
