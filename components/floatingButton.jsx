
function FloatingButton({onClick}) {
    return (
        <div className="md:hidden bg-gray-200 rounded-full absolute w-16 h-16 bottom-44 flex justify-center items-center" onClick={onClick}>
            <img src="play-icon.png" alt="play button" className='w-12 h-12'/>
        </div>
    );
}

export default FloatingButton;