import React from "react"
import avatar from "../assets/Avatar.jpeg"

export default function About() {
  return (
    <div class="grid grid-cols-2">
      <div
        class="h-screen flex flex-col flex-items-stretch"
        style={{maxWidth: "550px"}}
      >
        <img
          src={avatar}
          alt="avatar"
          className="img-fluid"
          style={({maxHeight: "300px"}, {maxWidth: "300px"})}
          class="self-end"
        />
      </div>
      <div class="flex-items-stretch">
        <div class="h-screen flex flex-col items-center ml-0 self-start">
          <h1>About me</h1>
          <p style={{maxWidth: "550px"}}>
            From Fredericton, New Brunswick, I am a bilingual full stack
            developer with a BA in Philosophy from St. Thomas University. This
            unique background enhances my approach to software development,
            blending analytical prowess with technical expertise. Skilled in
            both English and French, I offer a fresh perspective and a
            commitment to crafting thoughtful software solutions. Ready to bring
            both depth and breadth to your team.
          </p>
        </div>
      </div>
    </div>
  )
}
