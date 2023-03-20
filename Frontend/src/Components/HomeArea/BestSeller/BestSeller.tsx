import { useState } from "react";
import "./BestSeller.css";

function BestSeller(): JSX.Element {
    //Long syntax - without Destructuring Assignment
    const nameArr = useState(""); //"" is the initial value
    const name = nameArr[0]; // the value we need.
    const setName = nameArr[1]; // A function for changing the value and for rerendering the component.

    //Short syntax - with Destructuring Assignment
    const [totalItems, setTotalItems] =useState(0);


    function showBestSeller(): void {
        //Get values from server
        setName("Exotic Liquids"); //a. change the value, b. rerender the component.
        setTotalItems(17);

    }
    return (
        <div className="BestSeller Box">
            <button onClick={showBestSeller}>Show Best Seller</button>
            <span>Name: {name} | </span>
            <span>Total Items: {totalItems} </span>
        </div>
    );
}

export default BestSeller;
