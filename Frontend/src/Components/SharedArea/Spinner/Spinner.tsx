import "./Spinner.css";
import imageSource from "../../../Assets/Images/loading.gif"

function Spinner(): JSX.Element {
    return (
        <div className="Spinner">
            <img src={imageSource} alt="Loading gif" />
        </div>
    );
}

export default Spinner;
