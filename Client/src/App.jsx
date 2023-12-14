import React from "react";
import ProfileCard from "./Components/ProfileCard.jsx";
import AboutMe from "./Components/AboutMe.jsx";
import Technologies from "./Components/Technologies.jsx";
import Projecs from "./Components/Projects.jsx";

function App() {
  return (
    <div className="flex flex-col justify-center text-center relative">
      <div className="flex flex-row max-lg:flex-wrap justify-center">
        <ProfileCard/>

        <div className="flex flex-col justify-center">
          <AboutMe/>
          <Technologies/>
        </div>
      </div>
      
      <div className="flex justify-center">
        <Projecs/>
      </div>
    </div>
  )
}

export default App
