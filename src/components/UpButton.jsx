import { ArrowUpToLine } from "lucide-react";
import { useState } from "react";

const UpButton = () => {
    const [appear,setAppear] = useState("none")
    window.onscroll = ()=>{
        if(window.scrollY > 20){
            setAppear("block")
        }
        else{
            setAppear("none")
        }
    }
    const scrollUp = ()=>{
        window.scrollTo({
            top:0,
            behavior:"smooth"
        })
    }
    return (
        <button onClick={()=>scrollUp()} style={{display:appear}} 
        className="fixed p-[6px] px-2 text-white rounded-md right-5 bottom-5 bg-primarycolor">
            <ArrowUpToLine size={20} className='font-bold text-white'/>
        </button>
    );
}

export default UpButton;
