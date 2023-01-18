
function FloatingButton({onClick}) {
    return (
        <button className="rounded-full w-16 h-16 flex justify-center items-center" onClick={onClick}>
            Play
        </button>
    );
}

export default FloatingButton;