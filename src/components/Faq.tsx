import FaqQuestion from "./FaqQuestion"


const Faq = () => {
    return (
        <div className=" px-10 py-10 font-dosis">
            <h2 className=" text-4xl justify-self-center font-semibold">FAQ</h2>
            <div className=" mt-32 ">
                <FaqQuestion
                    question="What types of courses are available on the platform?"
                    answer="We offer courses across various subjects such as technology, math, history, and more, tailored for all ages and skill levels."
                />

                <FaqQuestion
                    question="Can I access the courses at any time?"
                    answer="Yes! All our courses are accessible 24/7, so you can learn at your own pace and convenience."
                />

                <FaqQuestion
                    question="Do I get a mentor with every plan?"
                    answer="Mentor access depends on your chosen plan. Higher-tier plans like Premium include personalized one-on-one mentor sessions."
                />

                <FaqQuestion
                    question="Are there corporate training options available?"
                    answer="Absolutely! Our Enterprise plan offers tailored courses and team progress tracking for businesses."
                />

                <FaqQuestion
                    question="Is there a free trial or money-back guarantee?"
                    answer="We provide a 7-day free trial. If you’re not satisfied, you can cancel anytime within the trial period."
                />

                <FaqQuestion
                    question="Can I download course materials for offline use?"
                    answer="Yes, downloadable content is included in our Premium plan so you can continue learning without internet access."
                />

            </div>

        </div>
    )
}

export default Faq