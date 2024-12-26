import FaqQuestion from "./FaqQuestion"


const Faq = () => {
    return (
        <div className=" px-10 py-10 font-dosis">
            <h2 className=" text-4xl justify-self-center font-semibold">FAQ</h2>
            <div className=" mt-32 ">
                <FaqQuestion question="What Time Takes a regular session in geneal?" answer=" Not your probleme just sign up and pay you'll see!" />
                <FaqQuestion question="What Time Takes a regular session in geneal?" answer=" Not your probleme just sign up and pay you'll see!" />
                <FaqQuestion question="What Time Takes a regular session in geneal?" answer=" Not your probleme just sign up and pay you'll see!" />
                <FaqQuestion question="What Time Takes a regular session in geneal?" answer=" Not your probleme just sign up and pay you'll see!" />
            </div>

        </div>
    )
}

export default Faq