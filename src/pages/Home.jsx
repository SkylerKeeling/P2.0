import React from "react"
import homeLogo from "../assets/deskAvatar.svg"

export default function Home() {
  return (
    <div>
      <section class="columns-2" style={{minHeight: "600px"}}>
        <div style={{maxHeight: "450px"}}>
          <h1>Welcome</h1>
          <h2>I'm Skyler Keeling</h2>
          <h4>Full Stack Software Developer</h4>
          <button
            href="/Contact"
            class="bg-purple-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Contact me
          </button>
        </div>

        <div>
          <img
            src={homeLogo}
            alt="home pic"
            className="img-fluid"
            style={{maxHeight: "450px"}}
          />
        </div>
      </section>
    </div>
  )
}
