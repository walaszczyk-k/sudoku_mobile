const AnimatedBox = (props) => {
    return (
        <>
            {Array.from({length: props.length}, (v, k) => k++).map((idx) => {
                return <div className="animated-box" key={idx}></div>
            })}
        </>
    );
};

export default AnimatedBox;