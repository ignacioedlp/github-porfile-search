import React from 'react'

function Search({ handleSubmit, handleChange, user }) {
  return (
    <div className="mx-1  w-[350px] justify-center border-4 p-2 text-center md:w-[50%]">
      <div className="  m-1 flex flex-col items-center justify-center text-center">
        <h1 className="">Search your profile Github</h1>
        <div className="flex flex-row">
          <input
            value={user}
            onChange={(e) => handleChange(e)}
            className="m-1 w-2/3 border"
          />
          <div
            className="m-1 w-[100px] cursor-pointer rounded-xl bg-gray-700 text-white hover:bg-slate-800"
            onClick={(event) => handleSubmit(event)}
          >
            Buscar
          </div>
        </div>
      </div>
    </div>
  )
}

export default Search
