
import { PlansTypes } from "../types/types";
interface PricingPlanProps {
    plan: PlansTypes;
}
const PricingPlan = ({ plan }: PricingPlanProps) => {
    return (
        <div className="p-6 border rounded-lg shadow-lg bg-white w-full max-w-md">
            <h2 className="text-xl font-semibold mb-2">{plan.title}</h2>
            <p className="text-gray-600 mb-4">{plan.description}</p>

            <ul className="list-disc ml-5 mb-4">
                {plan.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                ))}
            </ul>

            <p className="text-lg font-bold">Price: ${plan.price}</p>
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg">
                Buy Now
            </button>
        </div>
    );
}

export default PricingPlan
