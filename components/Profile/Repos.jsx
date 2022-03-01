import React from 'react'

function Repos({ repositorios, userExist }) {
  return (
    <div>
      {userExist && repositorios && (
        <div className="my-2 h-[100%]  p-2 md:mx-1">
          <h1 className="m-1">Repositories Github</h1>
          <div className=" h-[100%] w-full overflow-auto scrollbar-hide md:max-h-[700px]">
            {repositorios?.map((repo, index) => (
              <div className="m-1 border-2 p-2" key={index}>
                <h2>
                  Name
                  <span className="font-light"> {repo.name}</span>
                </h2>
                <h2>
                  Description
                  <span className="font-light"> {repo.description}</span>
                </h2>
                <h2>
                  Language
                  <span className="font-light"> {repo.language}</span>
                </h2>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default Repos
