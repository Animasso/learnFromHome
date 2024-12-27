import student1 from "../assets/teenStudent.jpg"
import teacher from "../assets/teacher.jpg"
import student2 from "../assets/girlStudent.jpg"
import mentor from "../assets/mentor.jpg"
const AboutUs = () => {
    return (
        <div className=" mt-32 h-fit font-dosis font-light flex px-3 py-3">

            <section className=" py-5 grid grid-cols-1 largetablet:grid-cols-2  px-5  border rounded-xl shadow-2xl w-1/2 gap-4  bg-slate-200">
                <img src={student1} alt="Student 1" className="object-cover w-full h-auto border rounded" />
                <img src={student2} alt="Student 2" className="object-cover w-full h-auto border rounded" />
                <img src={teacher} alt="Teacher 1" className="object-cover w-full h-auto border rounded" />
                <img src={mentor} alt="Teacher 2" className="object-cover w-full h-auto border rounded" />
            </section>

            <section className=" ml-6 w-1/2 text-2xl px-6">

                <p className="font-dosis font-normal ">
                    Math, English, Computer Engineering... Mentors are present to guide you through your journey.
                </p>
                <p className="font-dosis font-normal mt-4">
                    Our platform connects you with experienced mentors who are passionate about teaching and dedicated to your success.
                </p>
                <p className="font-dosis font-normal mt-4">
                    Personalized learning paths tailored to your goals ensure you progress at your own pace and achieve mastery.
                </p>
                <p className="font-dosis font-normal mt-4">
                    Engage in interactive sessions, hands-on projects, and real-world applications to make learning more practical and exciting.
                </p>
                <p className="font-dosis font-normal mt-4">
                    Join a vibrant community of learners and mentors who inspire and support each other every step of the way.
                </p>
                <p className="font-dosis font-normal mt-4">
                    Whether you're preparing for exams, upskilling for your career, or exploring new passions, we are here to help you succeed.
                </p>

            </section>
        </div>

    )
}

export default AboutUs
