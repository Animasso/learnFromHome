import { motion } from "framer-motion";

const TestimonialCard = ({ titleCard, textCard, avatar, author }: any) => {
    return (
        <motion.div
            className="font-dosis flex flex-col bg-slate-300 mt-6 rounded-xl py-3 px-3 border shadow-2xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
                type: "spring",
                stiffness: 50,
                damping: 15,
                delay: 0.2, // Ajuster pour un effet en cascade
            }}
            viewport={{ once: false }} // L'animation ne s'exécute qu'une fois
        >
            <h2 className="text-2xl">{titleCard}</h2>
            <p className="mt-2">{textCard}</p>
            <div className="flex items-center mt-4">
                <img
                    className="h-10 w-10 rounded-full object-cover"
                    src={avatar}
                    alt={author}
                />
                <span className="ml-2 text-gray-600">{author}</span>
            </div>
        </motion.div>
    );
};

export default TestimonialCard;
