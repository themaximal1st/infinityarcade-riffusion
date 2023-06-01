import { useEffect } from "react";
import { FiPause, FiPlay } from "react-icons/fi";

interface PauseProps {
    paused: boolean;
    setPaused: (value: boolean) => void;
}

export default function Pause({ paused, setPaused }: PauseProps) {
    // Print the state into the console
    useEffect(() => {
        if (paused) {
            console.log("Pause");
        } else {
            console.log("Play");
        }
    }, [paused]);

    return (
        <>
            <button
                className="text-white w-6 h-6 inline-block"
                onClick={() => setPaused(!paused)}
            >
                {paused && (
                    <img
                        className="w-full h-full"
                        src="/radio-stop.png"
                        alt="Radio Stop"
                        id="icon-stop"
                    />
                )}
                {!paused && (
                    <img
                        className="w-full h-full"
                        src="/radio-play.png"
                        alt="Radio Play"
                        id="icon-play"
                    />
                )}
            </button>
        </>
    );
}
