import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

const CerCom = ({image,data}) => {
    return (
        <div data-aos={data}  data-aos-duration="1000" className="p-2 rounded-md bg-bgcolor-2">
            <img src={image} alt="" />
        </div>
    );
}

export default CerCom;
