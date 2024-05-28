import LargeNav from "./LargeNav";
import SmallNav from "./SmallNav";

const Header = () => {
    return (
        <div className="flex justify-center py-4 bg-bgcolor-2">
            <div className="container">
                <div className="flex items-center justify-between">
                    <h1 className="text-3xl font-bold text-lightcolor">My 
                        <span className="text-primarycolor"> Portfolio</span>
                    </h1>
                    <div>
                        <LargeNav />
                        <SmallNav />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
