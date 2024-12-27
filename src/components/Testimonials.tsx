import TestimonialCard from "./TestimonialCard"
import avatar1 from "../assets/avatar1.jpg"
import avatar2 from "../assets/avatar2.png"
import avatar3 from "../assets/avatar3.jpg"
import avatar4 from "../assets/avatar4.png"
import avatar5 from "../assets/avatar5.png"
import avatar6 from "../assets/avatar6.png"
const Testimonials = () => {
    return (
        <div className=" mt-52 px-3 py-3">
            <h2 className=" text-center text-4xl font-dosis ">Testimonials</h2>
            <div className=" flex flex-wrap justify-between mt-28">
                <TestimonialCard
                    textCard="I've found a mentor who is supportive and always here for me"
                    author="Ani Nano"
                    titleCard="Best mentor ever"
                    avatar={avatar1}
                />
                <TestimonialCard
                    textCard="This platform helped me find the right guidance to excel in my coding journey. Highly recommend it!"
                    author="Emily Cartridge"
                    titleCard="Perfect Platform for Growth"
                    avatar={avatar2}
                />
                <TestimonialCard
                    textCard="The mentors here are so patient and knowledgeable. I’ve learned more in 3 months than in a year of self-study!"
                    author="Emily Carter"
                    titleCard="Incredible Learning Experience"
                    avatar={avatar3}
                />
                <TestimonialCard
                    textCard="The mentorship here is unparalleled. I feel much more confident in my skills and my career direction."
                    author="Mark Simmons"
                    titleCard="Life-Changing Support"
                    avatar={avatar4}
                />
                <TestimonialCard
                    textCard="From math to programming, the mentors are experts in every field. A must-try for any student!"
                    author="Paul Williams"
                    titleCard="A Game-Changer for Students"
                    avatar={avatar5}
                />
                <TestimonialCard
                    textCard="The personalized feedback and guidance I’ve received have been invaluable. I finally feel on the right track."
                    author="Liam Johnson"
                    titleCard="Personalized Guidance"
                    avatar={avatar6}
                />
            </div>

        </div>

    )
}

export default Testimonials
