import { SyntheticEvent } from "react";
import notifyService from "../../../Services/NotifyService";
import "./Recommendations.css";

function Recommendations(): JSX.Element {

    function first():void{
        notifyService.success("Irish Coffee");
    }
    function second(args: SyntheticEvent):void{
        // console.log((args.target as HTMLButtonElement).innerHTML);
        notifyService.success("Americano");
    }

    function third(item: string):void{
        notifyService.success(item);
    }

    return (
        <div className="Recommendations Box">
			<span> Recommendations:</span>
            <button onClick={first}>First </button>
            <button onClick={second}>Second </button>
            <button onClick={()=>third("Support Liverpool")}>third </button>
        </div>
    );
}

export default Recommendations;
