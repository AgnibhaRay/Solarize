import newMoon from "./assets/new-moon.svg";

function Progress() {
    const progress = "69%"
    return (
        <>
            <div className="progress">
                <div className="bubble" style={{marginLeft: progress}}>
                    <img src={newMoon} width="32px" height="32px" alt="moon"/>
                </div>
                <div className="progress-container">
                    <div className="progress-bar" style={{width: progress}}></div>
                </div>
            </div>
        </>
    )
}

export default Progress