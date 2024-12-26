import { TbSquareChevronDown } from "react-icons/tb";
import { FaqsTypes } from "../types/types";
import { useState } from "react";
// <TbSquareChevronDown />
import { CgChevronUpR } from "react-icons/cg";
// <CgChevronUpR />
const FaqQuestion = ({ question, answer }: FaqsTypes) => {
    const [showAnswer, setShowAnswer] = useState(false);
    return (
        <div>
            <div className="flex justify-between mb-7">
                <p className=" text-3xl font-dosis font-semibold"> {question} </p>
                {showAnswer ? <button onClick={() => setShowAnswer(!showAnswer)}><CgChevronUpR size={40} /></button>
                    : <button onClick={() => setShowAnswer(!showAnswer)}><TbSquareChevronDown size={40} /></button>}
                <hr />
            </div>
            <div className=" ">
                {showAnswer && <p className=" mb-4 text-2xl font-dosis"> {answer} </p>}
            </div>
        </div>


    )
}

export default FaqQuestion