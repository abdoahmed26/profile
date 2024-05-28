
const SkillsCom = ({image,name,style}) => {
    return (
        <div className="flex flex-col items-center justify-center">
            <img src={image} className={`w-24 h-24 ${style}`} alt="" />
            <p className="mt-2 font-bold text-lightcolor">{name}</p>
        </div>
    );
}

export default SkillsCom;
