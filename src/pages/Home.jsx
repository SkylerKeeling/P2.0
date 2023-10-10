import React from "react"
import homeLogo from "../assets/deskAvatar.svg"

export default function Home() {
  return (
    <div>
      <section class="columns-2" style={{minHeight: "600px"}}>
        <div
          class="h-screen flex flex-col items-center justify-center"
          style={{maxHeight: "450px"}}
        >
          <h1>Welcome</h1>
          <h2>I'm Skyler Keeling</h2>
          <h4>Full Stack Software Developer</h4>
          <a
            href="/Contact"
            class="bg-purple-500 no-underline hover:bg-black-700 text-white font-bold py-2 px-4 rounded"
          >
            Contact me
          </a>
        </div>
        <div class="h-screen flex items-center justify-center">
          <img src={homeLogo} alt="home pic" style={{maxHeight: "450px"}} />
        </div>
      </section>
    </div>
  )
}
