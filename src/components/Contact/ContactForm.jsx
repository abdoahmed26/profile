import { Send } from "lucide-react";
import { useState } from "react";
import emailjs from "@emailjs/browser"
import Swal from "sweetalert2";

const ContactForm = () => {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [message,setMessage] = useState("");
    const [checkName,setCheckName] = useState(false);
    const [checkEmail,setCheckEmail] = useState(false);
    const [checkMessage,setCheckMessage] = useState(false);
    const submit = (e)=>{
        e.preventDefault()
        if(!name.length > 0){
            setCheckName(true)
        }
        if(!email.length > 0){
            setCheckEmail(true)
        }
        if(!message.length > 0){
            setCheckMessage(true)
        }
        else{
            const data = {
                name:name,
                email:email,
                message:message,
                toEmail:"ba2662003@gmail.com",
            }
            const serviceId ="service_uz24l7q"
            const templateId ="template_ssnr7il"
            const publicKey ="3Pv6K4jZe4Au0HUkA"
            emailjs.send(serviceId,templateId,data,publicKey)
            .then(res=>{
                if(res.status===200){
                    Swal.fire({
                        title: "Successfully!",
                        text: "Your message has been sent successfully!!",
                        icon: "success"
                    });
                }
                else{
                    Swal.fire({
                        title: "Error!",
                        text: "Your Message don't send!",
                        icon: "error"
                    });
                }
            }).finally(()=>{
                setName("")
                setEmail("")
                setMessage("")
            })
        }
    }
    return (
        <div>
            <form action="" onSubmit={(e)=>submit(e)}>
                <div className="mb-2">
                    <input type="text" name="name" value={name} onInput={(e)=>{
                        setName(e.target.value)
                        e.target.value.length > 0 ? setCheckName(false) : setCheckName(true)
                    }} placeholder="Your Name"
                    className="w-full h-12 p-4 rounded-lg outline-none caret-primarycolor text-primarycolor bg-bgcolor-2 placeholder:text-gray-500"/>
                    {checkName && <p className="text-red-500 animate-bounce">Your Name is required</p>}
                </div>
                <div className="mb-2">
                    <input type="email" name="email" value={email} onInput={(e)=>{
                        setEmail(e.target.value)
                        e.target.value.length > 0 ? setCheckEmail(false) : setCheckEmail(true)
                    }} placeholder="Your Email"
                    className="w-full h-12 p-4 rounded-lg outline-none caret-primarycolor text-primarycolor bg-bgcolor-2 placeholder:text-gray-500"/>
                    {checkEmail && <p className="text-red-500 animate-bounce">Your Eamil is required</p>}
                </div>
                <div className="mb-2">
                    <textarea name="message" value={message} onInput={(e)=>{
                        setMessage(e.target.value)
                        e.target.value.length > 0 ? setCheckMessage(false) : setCheckMessage(true)
                    }} placeholder="Your Message"
                    className="w-full h-40 p-4 rounded-lg outline-none resize-none caret-primarycolor text-primarycolor bg-bgcolor-2 placeholder:text-gray-500"/>
                    {checkMessage && <p className="text-red-500 animate-bounce">Your Message is required</p>}
                </div>
                <button type="submit"
                className="flex items-center gap-2 p-1 px-3 text-white duration-300 border-2 rounded-full border-primarycolor bg-primarycolor hover:bg-bgcolor-1">
                    Send
                    <Send size={20} className='font-bold text-white'/>
                </button>
            </form>
        </div>
    );
}

export default ContactForm;