import React from "react";
import ProfileCard from "./Components/ProfileCard.jsx";
import AboutMe from "./Components/AboutMe.jsx";
import Projecs from "./Components/Projects.jsx";

function App() {
  return (
    <div className="flex flex-wrap justify-center text-center relative">
      <div>
        <ProfileCard/>
      </div>

      <div>
        <AboutMe/>
      </div>

      <div>
        <Projecs/>
      </div>
    </div>
  )
}

export default App
