import './App.css'
import './index.css'
import ttv from './assets/ttv.png'
import logo from './assets/logo.png'
import Progress from "./Progress.tsx";

function App() {
    return (
        <>
            <div style={{position: "absolute", zIndex: 99, margin: "22px"}}>
                <img src={ttv} className="logo" alt="ttv-logo" height="85px" width="85px"/>
            </div>

            <div className="logo-module">
                <img src={logo} className="logo" alt="Vite logo" height="170px" width="170px"/>
            </div>
            <main>

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

                <footer>
                    ©️ Copyright 2023 Created by<strong> AbK and AgR.</strong>
                </footer >
            </main>
        </>
    )
}


export default App
