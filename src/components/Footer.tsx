import x from "../assets/x.png"
import linkedin from "../assets/linkedin.png"
import instagram from "../assets/instagram.jpg"


const Footer = () => {


    return (
        <footer className=" mt-32 bg-gray-800 text-white p-6">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">

                <div>
                    <h3 className="text-lg font-semibold">About Us</h3>
                    <p className="text-sm mt-2">
                        YourPlatform connects learners and mentors worldwide, offering courses and personalized guidance.
                    </p>
                </div>
                <div>
                    <h3 className="text-lg font-semibold">Quick Links</h3>
                    <ul className="mt-2 space-y-1 text-sm">
                        <li><a href="/about" className="hover:underline">About</a></li>
                        <li><a href="/contact" className="hover:underline">Contact</a></li>
                        <li><a href="/faq" className="hover:underline">FAQ</a></li>
                        <li><a href="/privacy" className="hover:underline">Privacy Policy</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-lg font-semibold">Follow Us</h3>
                    <div className="flex space-x-4 mt-2">
                        <a href="https://x.com/" target="_blank" rel="noopener noreferrer">
                            <img src={x} alt="x" className="h-6 w-6" />
                        </a>
                        <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
                            <img src={linkedin} alt="LinkedIn" className="h-6 w-6" />
                        </a>
                        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                            <img src={instagram} alt="Instagram" className="h-6 w-6" />
                        </a>
                    </div>
                </div>
            </div>

            <div className="text-center text-sm mt-6 border-t border-gray-700 pt-4">
                © 2024 AsidProd. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
