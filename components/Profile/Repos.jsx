import React from 'react'
import { ProfileContext } from '../../context/ProfileContext'

function Repos() {
  const { repositorios, userExist } = React.useContext(ProfileContext)

  return (
    <div>
      {userExist && repositorios && (
        <div className=" my-2 h-[100%] p-2 text-[#ecf0f1]  md:mx-1">
          <h1 className="m-1 font-mono text-4xl font-bold">
            Repositories Github
          </h1>
          <div className=" h-[700px] w-full overflow-auto scrollbar-hide md:max-h-[700px]">
            {repositorios?.map((repo, index) => (
              <div
                className="m-3 cursor-pointer rounded-lg bg-[#2c3e50] p-2 shadow-lg hover:bg-[#34495e]"
                key={index}
                onClick={() => {
                  window.open(repo.html_url)
                }}
              >
                <h2>
                  <span className="text-lg"> {repo.name}</span>
                </h2>
                <h2>
                  <span className="font-light"> {repo.description}</span>
                </h2>
                <h2>
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
