
import { motion } from "framer-motion"
import logo from "../assets/logorounded.png"
import Card from "./Card"
import { MdSchool } from "react-icons/md";
import { RiComputerFill } from "react-icons/ri";
import { FaClock } from "react-icons/fa6";
const Hero = () => {
    return (
        <div>
            <div className="border py-6 shadow-xl justify-self-center  w-3/4 justify-center text-center mt-24 text-4xl font-bold">
                <motion.img
                    src={logo}
                    className="w-56 h-56 justify-self-center"
                    alt="logo"
                    initial={{ x: "-100vw", rotate: -360 }}
                    animate={{ x: 0, rotate: 0 }}
                    transition={{
                        type: "spring",
                        stiffness: 10,
                        damping: 10,
                        duration: 5
                    }}
                />

                <h1 className="  font-dosis ">Learn from home is a platform for connecting students and mentors that will allow you to achieve your goals in the subject of your choice</h1>
                <p className=" font-dosis font-normal mt-14">Math,English,Computer engineering..., mentors are presents to guide you threw you journey </p>
            </div>
            <div className="flex flex-wrap justify-center px-3 custom:justify-between mt-24">
                <Card
                    iconBgColor="blue"
                    textCard="We provide 24/7 customer support to assist you."
                    textCardTitle="Customer Support"
                    icon={<RiComputerFill size={60} className="border-2 p-2 rounded-full" />}
                />
                <Card
                    iconBgColor="yellow"
                    textCard="We provide 24/7 customer support to assist you."
                    textCardTitle="Customer Support"
                    icon={<MdSchool size={60} className="border-2 p-2 rounded-full" />}
                />
                <Card
                    iconBgColor="purple"
                    textCard="We provide 24/7 customer support to assist you."
                    textCardTitle="Customer Support"
                    icon={<FaClock size={60} className="border-2 p-2 rounded-full" />}
                />
            </div>

        </div>
    )
}

export default Hero