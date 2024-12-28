import { motion } from "framer-motion";
import React, { useState } from "react";

const ContactForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [lastName, setLastName] = useState("");
    const [sendEmail, setSendEmail] = useState(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSendEmail(true);
    };

    return (
        <div id="contact" className=" mt-32 flex flex-col items-center p-6">
            <h2 className="font-dosis text-2xl font-semibold mb-4">Contact Us</h2>

            {sendEmail ? (
                <div className="text-center">
                    <h3 className="text-lg">
                        Thanks {name} {lastName}, we will contact you at your email: {email}.
                    </h3>
                </div>
            ) : (
                <motion.form
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        type: "spring",
                        stiffness: 50,
                        damping: 15,
                        delay: 0.2,
                    }}
                    onSubmit={handleSubmit}
                    className="w-full max-w-md p-4 border rounded-lg shadow-lg bg-gray-50"
                >
                    <div className="flex flex-col space-y-4">
                        <input
                            type="text"
                            placeholder="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="p-2 border rounded-md"
                            required
                        />
                        <input
                            type="text"
                            placeholder="Last Name"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            className="p-2 border rounded-md"
                            required
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="p-2 border rounded-md"
                            required
                        />
                    </div>
                    <textarea
                        placeholder="Message"
                        className="p-2 border rounded-md w-full h-32 mt-4"
                    />
                    <button
                        type="submit"
                        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                    >
                        Submit
                    </button>
                </motion.form>
            )}
        </div>
    );
};

export default ContactForm;
