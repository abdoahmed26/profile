import React from 'react';

const SmallList = ({appear}) => {
    return (
        <div style={{display:appear}} className='absolute right-0 z-50 mt-4 duration-300 top-full'>
            <ul className="flex relative flex-col w-[200px] rounded-lg bg-bgcolor-1 shadow-xl list-none text-lightcolor
            after:w-0 after:h-0 after:absolute after:top-[-20px] after:right-1 after:z-50 after:border-[10px] after:border-transparent after:border-b-primarycolor">
                <li className='px-3 py-2 duration-300 border-b border-b-black hover:text-primarycolor hover:pl-5'>
                    <a
                        href="#home"
                    >
                        Home
                    </a>
                </li>
                <li className='px-3 py-2 duration-300 border-b border-b-black hover:text-primarycolor hover:pl-5'>
                    <a
                        href="#Services"
                    >
                        Services
                    </a>
                </li>
                <li className='px-3 py-2 duration-300 border-b border-b-black hover:text-primarycolor hover:pl-5'>
                    <a
                        href="#Skills"
                    >
                        Skills
                    </a>
                </li>
                <li className='px-3 py-2 duration-300 border-b border-b-black hover:text-primarycolor hover:pl-5'>
                    <a
                        href="#Projects"
                    >
                        My Projects
                    </a>
                </li>
                <li className='px-3 py-2 duration-300 border-b border-b-black hover:text-primarycolor hover:pl-5'>
                    <a
                        href="#Certificates"
                    >
                        My Certificates
                    </a>
                </li>
                <li className='px-3 py-2 duration-300 border-b border-b-black hover:text-primarycolor hover:pl-5'>
                    <a
                        href="#About"
                    >
                        About Me
                    </a>
                </li>
                <li className='px-3 py-2 duration-300 hover:text-primarycolor hover:pl-5'>
                    <a
                        href="#Contact"
                    >
                        Contact Me
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default SmallList;