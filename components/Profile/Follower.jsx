import React from 'react'

function Follower({ follower }) {

  

  return (
    <div className="p-4 text-[#ecf0f1] md:w-1/2 lg:w-1/4">
      <div className="flex h-full flex-col items-center text-center">
        <img
          alt="team"
          className="mb-4 h-56 w-full flex-shrink-0 rounded-lg object-cover object-center"
          src={follower.avatar_url}
        />
        <div className="w-full">
          <h2 className="title-font text-lg font-medium text-[#ecf0f1]">
            {follower.login}
          </h2>
        </div>
      </div>
    </div>
  )
}

export default Follower
