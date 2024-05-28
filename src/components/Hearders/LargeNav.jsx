const LargeNav = () => {
    return (
        <div className="hidden lg:block">
            <ul className="flex gap-4 list-none text-lightcolor">
                <li>
                    <a
                        href="#home"
                        className="duration-300 hover:border-b hover:border-b-primarycolor hover:text-primarycolor"
                    >
                        Home
                    </a>
                </li>
                <li>
                    <a
                        href="#Services"
                        className="duration-300 hover:border-b hover:border-b-primarycolor hover:text-primarycolor"
                    >
                        Services
                    </a>
                </li>
                <li>
                    <a
                        href="#Skills"
                        className="duration-300 hover:border-b hover:border-b-primarycolor hover:text-primarycolor"
                    >
                        Skills
                    </a>
                </li>
                <li>
                    <a
                        href="#Projects"
                        className="duration-300 hover:border-b hover:border-b-primarycolor hover:text-primarycolor"
                    >
                        My Projects
                    </a>
                </li>
                <li>
                    <a
                        href="#Certificates"
                        className="duration-300 hover:border-b hover:border-b-primarycolor hover:text-primarycolor"
                    >
                        My Certificates
                    </a>
                </li>
                <li>
                    <a
                        href="#About"
                        className="duration-300 hover:border-b hover:border-b-primarycolor hover:text-primarycolor"
                    >
                        About Me
                    </a>
                </li>
                <li>
                    <a
                        href="#Contact"
                        className="duration-300 hover:border-b hover:border-b-primarycolor hover:text-primarycolor"
                    >
                        Contact Me
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default LargeNav;
