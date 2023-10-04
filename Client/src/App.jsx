import React from "react";
import ProfileCard from "./Components/ProfileCard.jsx";
import AboutMe from "./Components/AboutMe.jsx";

function App() {
  return (
    <div className="flex flex-wrap justify-center text-center relative">
      <div>
        <ProfileCard/>
      </div>
      <div>
        <AboutMe/>
      </div>
    </div>
  )
}

export default App
