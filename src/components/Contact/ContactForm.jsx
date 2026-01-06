import { Send, User, Mail, MessageSquare, Loader2 } from "lucide-react";
import { useState } from "react";
import emailjs from "@emailjs/browser"
import Swal from "sweetalert2";

const ContactForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [checkName, setCheckName] = useState(false);
    const [checkEmail, setCheckEmail] = useState(false);
    const [checkMessage, setCheckMessage] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    
    const submit = (e) => {
        e.preventDefault()
        let hasError = false;
        
        if(!name.length > 0){
            setCheckName(true)
            hasError = true;
        }
        if(!email.length > 0){
            setCheckEmail(true)
            hasError = true;
        }
        if(!message.length > 0){
            setCheckMessage(true)
            hasError = true;
        }
        
        if (!hasError) {
            setIsLoading(true);
            const data = {
                name: name,
                email: email,
                message: message,
                toEmail: "abdulrahman.ahmed2623@gmail.com",
            }
            const serviceId = "service_uz24l7q"
            const templateId = "template_ssnr7il"
            const publicKey = "3Pv6K4jZe4Au0HUkA"
            
            emailjs.send(serviceId, templateId, data, publicKey)
            .then(res => {
                if(res.status === 200){
                    Swal.fire({
                        title: "Successfully!",
                        text: "Your message has been sent successfully!!",
                        icon: "success",
                        confirmButtonColor: "#3B82F6"
                    });
                } else {
                    Swal.fire({
                        title: "Error!",
                        text: "Your Message couldn't be sent!",
                        icon: "error",
                        confirmButtonColor: "#3B82F6"
                    });
                }
            })
            .catch(() => {
                Swal.fire({
                    title: "Error!",
                    text: "Something went wrong. Please try again!",
                    icon: "error",
                    confirmButtonColor: "#3B82F6"
                });
            })
            .finally(() => {
                setName("")
                setEmail("")
                setMessage("")
                setIsLoading(false);
            })
        }
    }
    
    return (
        <div className="w-full">
            <form onSubmit={(e) => submit(e)} className="space-y-6">
                {/* Name Input */}
                <div className="space-y-2">
                    <label className="flex items-center gap-2 text-sm font-semibold text-lightcolor">
                        <User size={16} className="text-primarycolor" />
                        Your Name
                    </label>
                    <div className="relative group">
                        <input 
                            type="text" 
                            name="name" 
                            value={name} 
                            onInput={(e) => {
                                setName(e.target.value)
                                e.target.value.length > 0 ? setCheckName(false) : setCheckName(true)
                            }} 
                            placeholder="John Doe"
                            className={`w-full h-12 px-4 rounded-xl outline-none caret-primarycolor text-lightcolor bg-bgcolor-2 placeholder:text-gray-500 border-2 transition-all duration-300 ${
                                checkName 
                                    ? 'border-red-500 focus:border-red-500' 
                                    : 'border-transparent focus:border-primarycolor focus:shadow-lg focus:shadow-primarycolor/20'
                            }`}
                        />
                        <div className="absolute inset-0 transition-all duration-300 rounded-xl bg-gradient-to-r from-primarycolor/0 to-primarycolor/0 group-focus-within:from-primarycolor/5 group-focus-within:to-transparent -z-10"></div>
                    </div>
                    {checkName && (
                        <p className="flex items-center gap-1 text-sm text-red-500 animate-pulse">
                            <span>⚠️</span> Your Name is required
                        </p>
                    )}
                </div>

                {/* Email Input */}
                <div className="space-y-2">
                    <label className="flex items-center gap-2 text-sm font-semibold text-lightcolor">
                        <Mail size={16} className="text-primarycolor" />
                        Your Email
                    </label>
                    <div className="relative group">
                        <input 
                            type="email" 
                            name="email" 
                            value={email} 
                            onInput={(e) => {
                                setEmail(e.target.value)
                                e.target.value.length > 0 ? setCheckEmail(false) : setCheckEmail(true)
                            }} 
                            placeholder="john@example.com"
                            className={`w-full h-12 px-4 rounded-xl outline-none caret-primarycolor text-lightcolor bg-bgcolor-2 placeholder:text-gray-500 border-2 transition-all duration-300 ${
                                checkEmail 
                                    ? 'border-red-500 focus:border-red-500' 
                                    : 'border-transparent focus:border-primarycolor focus:shadow-lg focus:shadow-primarycolor/20'
                            }`}
                        />
                        <div className="absolute inset-0 transition-all duration-300 rounded-xl bg-gradient-to-r from-primarycolor/0 to-primarycolor/0 group-focus-within:from-primarycolor/5 group-focus-within:to-transparent -z-10"></div>
                    </div>
                    {checkEmail && (
                        <p className="flex items-center gap-1 text-sm text-red-500 animate-pulse">
                            <span>⚠️</span> Your Email is required
                        </p>
                    )}
                </div>

                {/* Message Textarea */}
                <div className="space-y-2">
                    <label className="flex items-center gap-2 text-sm font-semibold text-lightcolor">
                        <MessageSquare size={16} className="text-primarycolor" />
                        Your Message
                    </label>
                    <div className="relative group">
                        <textarea 
                            name="message" 
                            value={message} 
                            onInput={(e) => {
                                setMessage(e.target.value)
                                e.target.value.length > 0 ? setCheckMessage(false) : setCheckMessage(true)
                            }} 
                            placeholder="Tell me about your project..."
                            rows="5"
                            className={`w-full p-4 rounded-xl outline-none resize-none caret-primarycolor text-lightcolor bg-bgcolor-2 placeholder:text-gray-500 border-2 transition-all duration-300 ${
                                checkMessage 
                                    ? 'border-red-500 focus:border-red-500' 
                                    : 'border-transparent focus:border-primarycolor focus:shadow-lg focus:shadow-primarycolor/20'
                            }`}
                        />
                        <div className="absolute inset-0 transition-all duration-300 rounded-xl bg-gradient-to-r from-primarycolor/0 to-primarycolor/0 group-focus-within:from-primarycolor/5 group-focus-within:to-transparent -z-10"></div>
                    </div>
                    {checkMessage && (
                        <p className="flex items-center gap-1 text-sm text-red-500 animate-pulse">
                            <span>⚠️</span> Your Message is required
                        </p>
                    )}
                </div>

                {/* Submit Button */}
                <button 
                    type="submit"
                    disabled={isLoading}
                    className="relative flex items-center justify-center w-full gap-2 px-8 py-3 overflow-hidden font-semibold text-white transition-all duration-300 border-2 rounded-full shadow-lg group sm:w-auto border-primarycolor bg-primarycolor hover:bg-transparent shadow-primarycolor/30 hover:shadow-primarycolor/50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    <span className="relative z-10 flex items-center gap-2">
                        {isLoading ? (
                            <>
                                <Loader2 size={20} className="animate-spin" />
                                Sending...
                            </>
                        ) : (
                            <>
                                Send Message
                                <Send size={20} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                            </>
                        )}
                    </span>
                    {!isLoading && (
                        <div className="absolute inset-0 bg-gradient-to-r from-primarycolor/0 via-white/20 to-primarycolor/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                    )}
                </button>
            </form>
        </div>
    );
}

export default ContactForm;