import { motion } from "framer-motion";
import { cardTypes } from "../types/types";

const Card = ({ textCard, textCardTitle, icon, iconBgColor }: cardTypes) => {
    return (
        <motion.div initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
                type: "spring",
                stiffness: 50,
                damping: 20,
                duration: 1,
            }}
            viewport={{ once: true, amount: 0.2 }}
            className="flex items-center border shadow-2xl mb-6 py-3 px-3">
            {/* Conteneur de l'icône avec couleur de fond dynamique */}
            <div
                className={`flex items-center justify-center w-20 h-20 rounded-full`}
                style={{ backgroundColor: iconBgColor }}
            >
                {icon}
            </div>
            <div className="flex-grow ml-4">
                <h2 className="text-lg font-semibold">{textCardTitle}</h2>
                <p className="text-gray-600">{textCard}</p>
            </div>
        </motion.div>
    );
};

export default Card;

