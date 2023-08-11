import './App.css'
import './index.css'
import ttv from './assets/ttv.png'
import logo from './assets/logo.png'
import Progress from "./Progress.tsx";

function App() {
    return (
        <>
            <div style={{position: "absolute", zIndex: 99, margin: "22px"}}>
                <img src={ttv} className="logo" alt="Vite logo" height="85px" width="85px"/>
            </div>
            <main>
                <div className="logo-module">
                    <img src={logo} className="logo" alt="Vite logo" height="150px" width="150px"/>
                </div>
                <div className="title-div">
                    <h1 className="title">Project Solarize</h1>
                </div>
                <Progress/>
                <div className="text-line">
                    <span className="text">
                        One Step forward towards a greener earth 🌏<br/>
                        Work in Progress 👷‍♂️👷‍♀️
                    </span>
                </div>
            </main>
        </>
    )
}


export default App
