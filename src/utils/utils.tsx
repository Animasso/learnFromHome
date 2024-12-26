import { PlansTypes } from "../types/types";

export const plans: Record<string, PlansTypes> = {
    Starter: {
        price: "49",
        title: "Starter Plan",
        description: "Perfect for individuals starting their learning journey.",
        features: [
            "Access to all beginner courses",
            "Community support",
            "Monthly Q&A sessions",
        ],
    },
    Standard: {
        price: "99",
        title: "Standard Plan",
        description: "Ideal for learners looking to expand their skills.",
        features: [
            "Access to beginner and intermediate courses",
            "Priority support",
            "Weekly mentor guidance",
        ],
    },
    Premium: {
        price: "149",
        title: "Premium Plan",
        description: "Designed for advanced learners who want full access to everything.",
        features: [
            "Access to all courses (beginner to advanced)",
            "One-on-one mentor sessions",
            "Exclusive webinars and workshops",
            "Offline downloadable content",
        ],
    },
    Enterprise: {
        price: "Custom",
        title: "Enterprise Plan",
        description: "Custom pricing for organizations. Contact us for details.",
        features: [
            "Tailored courses for teams",
            "Dedicated account manager",
            "Company-wide progress tracking",
        ],
    },
};
