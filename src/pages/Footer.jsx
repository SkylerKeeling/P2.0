import React from "react"
import {AiFillGithub} from "react-icons/ai"
import {FaLinkedinIn} from "react-icons/fa"

function Footer() {
  return (
    <footer class="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
      <div class=" flex justify-center items-center mx-auto max-w-screen-xl p-4 md:flex md:items-center">
        <a
          href="https://github.com/skylerkeeling"
          style={({color: "black"}, {minWidth: "100px"})}
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/skylerkeeling"
          style={{color: "black"}}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedinIn />
        </a>
      </div>
    </footer>
  )
}

export default Footer
