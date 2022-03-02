import React, { useEffect } from 'react'
import Information from './Information'
import Repos from './Repos'

function Profile({ userExist, dataUser, userNotExist, repositorios }) {
  return (
    <div
      className=" animate__animated animate__backInUp mx-1 my-5 flex flex-col items-center justify-center rounded-lg bg-[#34495e] px-2 text-center shadow-lg md:flex-row"
      
    >
      <Information
        userExist={userExist}
        dataUser={dataUser}
        userNotExist={userNotExist}
      />
      <Repos repositorios={repositorios} userExist={userExist} />
    </div>
  )
}

export default Profile
