import { TbSquareChevronDown } from "react-icons/tb";
import { FaqsTypes } from "../types/types";
import { useState } from "react";
import { CgChevronUpR } from "react-icons/cg";

const FaqQuestion = ({ question, answer }: FaqsTypes) => {
    const [showAnswer, setShowAnswer] = useState(false);
    return (
        <div>
            <div className="flex items-center justify-between mb-7">
                <p className="text-3xl font-dosis font-semibold flex-1">{question}</p>
                <button
                    aria-label={showAnswer ? "Collapse answer" : "Expand answer"}
                    onClick={() => setShowAnswer(!showAnswer)}
                    className="ml-4 flex-shrink-0"
                >
                    {showAnswer ? (
                        <CgChevronUpR size={40} color="white" />
                    ) : (
                        <TbSquareChevronDown size={40} color="white" />
                    )}
                </button>
            </div>
            <hr className="my-2 bg-slate-400 h-0.5 border-0" />
            <div>
                {showAnswer && (
                    <p className="mb-4 text-2xl font-dosis">{answer}</p>
                )}
            </div>

        </div>

    )
}

export default FaqQuestion