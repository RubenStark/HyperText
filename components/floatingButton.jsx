
function FloatingButton({onClick}) {
    return (
        <button className="md:hidden rounded-full absolute w-16 h-16 bottom-44 flex justify-center items-center" onClick={onClick}>
            {/* <img src="play-icon.png" alt="play button" className='w-12 h-12'/> */}
            Play
        </button>
    );
}

export default FloatingButton;