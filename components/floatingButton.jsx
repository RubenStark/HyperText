
function FloatingButton({onClick}) {
    return (
        <button className="rounded-full before:flex justify-center items-center" onClick={onClick}>
            Play
        </button>
    );
}

export default FloatingButton;