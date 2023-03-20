import { useEffect, useState } from "react";
import "./Clock.css";

function Clock(): JSX.Element {

    const [time, setTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        const timerId = window.setInterval(() => {
            const now = new Date();
            const currentTime = now.toLocaleTimeString();
            setTime(currentTime);
        }, 1000);

        // Following return function will be invoked when react destroy this component
        return () => window.clearInterval(timerId);
    }, []);

    return (
        <div className="Clock Box">
            <span>{time}</span>
        </div>
    );
}

export default Clock;
