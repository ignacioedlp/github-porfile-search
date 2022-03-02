import React from 'react'
import {
  AiOutlineTwitter,
  AiOutlineGithub,
  AiFillLinkedin,
} from 'react-icons/ai'

function Footer() {
  return (
    <footer className=" animate__animated animate__backInUp mx-1 my-5 flex w-[350px] flex-row items-center  justify-between rounded-lg bg-[#34495e] px-2 py-2 text-center shadow-lg md:w-[800px]">
      <a
        href="#"
        className="text-lg font-bold text-gray-800 hover:text-gray-700 dark:text-white dark:hover:text-gray-300"
      >
        Github finder
      </a>

      <p className="py-2 text-gray-800 dark:text-white sm:py-0">
        All rights reserved
      </p>

      <div className="-mx-2 flex">
        <a
          href="https://www.linkedin.com/in/ignacio-cafiero-torrubia/"
          className="mx-2 text-gray-600 hover:text-gray-500 dark:text-gray-300 dark:hover:text-gray-300"
          ariaLabel="Linkedin"
        >
          <AiFillLinkedin />
        </a>

        <a
          href="https://twitter.com/Tofidev"
          className="mx-2 text-gray-600 hover:text-gray-500 dark:text-gray-300 dark:hover:text-gray-300"
          ariaLabel="Twitter"
        >
          <AiOutlineTwitter />
        </a>

        <a
          href="https://github.com/ignacioedlp"
          className="mx-2 cursor-pointer text-gray-600 hover:text-gray-500 dark:text-gray-300 dark:hover:text-gray-300"
          ariaLabel="Github"
        >
          <AiOutlineGithub />
        </a>
      </div>
    </footer>
  )
}

export default Footer
