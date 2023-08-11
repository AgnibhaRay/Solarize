import newMoon from "./assets/new-moon.svg";
import {getPercentage} from "./logic.ts";
//connect logic
function Progress() {
    const progress =  getPercentage(new Date("2023-08-01"), new Date("2023-08-10"), new Date());
    console.log(progress)
    return (
        <>
            <div className="progress">
                <div className="bubble" style={{marginLeft: progress}}>
                    <img src={newMoon} width="32px" height="32px" alt="moon"/>
                </div>
                <div className="progress-container">
                    <div className="progress-bar" style={{width: progress}}></div>
                </div>
                <div className="timestamp">
                    <span>01 August</span>
                    <span>30 August</span>
                </div>
            </div>
        </>
    )
}

export default Progress