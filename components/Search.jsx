import React from 'react'
import { ProfileContext } from '../context/ProfileContext'

function Search() {
  const { handleSubmit, handleChange, user } = React.useContext(ProfileContext)

  return (
    <div className="animate__animated animate__fadeIn mx-1 w-[350px] justify-center rounded-lg bg-[#34495e] p-2 text-center shadow-lg md:w-[800px]  ">
      <div className=" m-1 flex flex-col items-center justify-center text-center text-[#ecf0f1]">
        <h1 className="font-mono text-2xl font-bold">
          Search your profile Github
        </h1>
        <div className="flex flex-row">
          <input
            value={user}
            onChange={(e) => handleChange(e)}
            className="m-1 w-2/3 rounded-xl bg-[#ecf0f1] px-2 text-xs text-black"
          />
          <div
            className="m-1 w-[100px] cursor-pointer rounded-xl bg-[#e74c3c] font-mono text-[#ecf0f1] hover:bg-[#c0392b]"
            onClick={(event) => handleSubmit(event)}
          >
            Search
          </div>
        </div>
      </div>
    </div>
  )
}

export default Search
