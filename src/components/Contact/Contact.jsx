import Lottie from "lottie-react";
import ContactForm from "./ContactForm";
import message from "../../animation/Animation - 1716847156388.json"

const Contact = () => {
    return (
        <div id="Contact" className="flex justify-center py-14 bg-bgcolor-1">
            <div className="container">
                <div className="flex justify-between gap-10">
                    <div>
                        <h1 className="text-5xl font-bold text-center text-lightcolor">
                            Contact<span className="text-primarycolor"> Me</span>
                        </h1>
                        <p className="my-5 text-seconderycolor">
                            If you want to create a website, contact me by filling out the information:
                        </p>
                        <ContactForm/>
                    </div>
                    <div className="hidden md:flex">
                        <Lottie className="md:w-[300px] lg:w-[400px]" animationData={message} />;
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;

// Swal.fire({
//     title: "Successfully",
//     text: "Your message has been sent successfully!",
//     icon: "success"
// });