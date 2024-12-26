import PricingPlan from "./PricingPlan";
import { plans } from "../utils/utils"
import { useState } from "react";

const Pricing = () => {
    const [selectedPlan, setSelectedPlan] = useState("Starter");

    return (
        <div className="flex flex-col items-center  mt-28 p-6 font-dosis">
            <h1 className="text-4xl font-bold mb-7">Choose a Pricing Plan:</h1>

            {/* Plan Selector Buttons */}
            <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 mb-6">
                {Object.keys(plans).map((key) => (
                    <button
                        key={key}
                        className={`px-4 py-2 border rounded-lg ${selectedPlan === key ? "bg-blue-500 text-white" : "bg-gray-200"
                            }`}
                        onClick={() => setSelectedPlan(key)}
                    >
                        {key}
                    </button>
                ))}
            </div>

            {/* Pricing Plan Details */}
            <PricingPlan plan={plans[selectedPlan]} />
        </div>)
}

export default Pricing
