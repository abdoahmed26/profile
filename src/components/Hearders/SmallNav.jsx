import React, { useState } from 'react';
import SmallList from './SmallList';

const SmallNav = () => {
    const [appear,setAppear] = useState("none")
    return (
        <div className='lg:hidden'>
            <div onMouseOver={()=>setAppear("block")}
            onMouseOut={()=>setAppear("none")}
            className='relative flex flex-col justify-end w-8 gap-1 duration-300 cursor-pointer group'>
                <span className='inline-block w-full h-[2px] bg-white rounded'></span>
                <span 
                className='inline-block ml-auto w-1/2 group-hover:w-full duration-300 h-[2px] bg-white rounded'>
                </span>
                <span className='inline-block w-full h-[2px] bg-white rounded'></span>
                <SmallList appear={appear}/>
            </div>
        </div>
    );
}

export default SmallNav;