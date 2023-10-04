import React from "react";
import ProfileCard from "./Components/ProfileCard.jsx";
import AboutMe from "./Components/AboutMe.jsx";

function App() {
  return (
    <div className="flex flex-wrap justify-center text-center relative">
      <ProfileCard/>
      <AboutMe/>
    </div>
  )
}

export default App
