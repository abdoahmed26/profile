
const Card = ({icon,title,desc}) => {
    return (
        <div className='p-6 py-8 text-center duration-300 rounded-2xl hover:scale-105 px-7 bg-bgcolor-1'>
            <div className="flex justify-center icon">
                {icon}
            </div>
            <h1 className='my-2 text-2xl font-bold text-white'>{title}</h1>
            <p className='text-seconderycolor'>
                {desc}
            </p>
        </div>
    );
}

export default Card;