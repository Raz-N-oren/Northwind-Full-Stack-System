import { useEffect, useState } from "react";
import "./RandomDiscount.css";

function RandomDiscount(): JSX.Element {
    
    const [randomDiscount, setRandomDiscount] = useState(0);
    function generateRandomDiscount() {
        setRandomDiscount(Math.floor(Math.random() * 91));
    }

    return (
        <div className="RandomDiscount Box">
            <button onClick={generateRandomDiscount}>Random Discount</button>
            <span>Random discount: {randomDiscount}%</span>
        </div>
    );
}

export default RandomDiscount;
