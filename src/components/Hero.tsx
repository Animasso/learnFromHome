
import { motion } from "framer-motion"
import logo from "../assets/logorounded.png"
import Card from "./Card"
import { MdSchool } from "react-icons/md";
import { RiComputerFill } from "react-icons/ri";
import { FaClock } from "react-icons/fa6";
const Hero = () => {
    return (
        <div>
            <div className="border-3 px-6 py-6 shadow-2xl justify-self-center  w-3/4 justify-center text-center mt-24 text-4xl font-bold">
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
                <button className=" font-dosis font-light border px-3 py-3 rounded-md  bg-slate-400 hover:bg-slate-500 hover:text-yellow-50 mt-6">Join us</button>
            </div>
            <div id="about" className="flex flex-wrap justify-center px-3 gap-5  mt-32">
                <Card
                    iconBgColor="blue"
                    textCard="All you need is a computer and a good connection and you are set ."
                    textCardTitle="Everything From Home"
                    icon={<RiComputerFill size={60} className="border-2 p-2 rounded-full" />}
                />
                <Card
                    iconBgColor="yellow"
                    textCard="The mentors are selected to be the best in their field."
                    textCardTitle="Qualified Mentors"
                    icon={<MdSchool size={60} className="border-2 p-2 rounded-full" />}
                />
                <Card
                    iconBgColor="purple"
                    textCard="We provide a flexibily you set the session according to your schedule."
                    textCardTitle="Session Time"
                    icon={<FaClock size={60} className="border-2 p-2 rounded-full" />}
                />
            </div>

        </div>
    )
}

export default Hero