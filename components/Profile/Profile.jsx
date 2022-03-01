import React from 'react'
import Information from './Information'
import Repos from './Repos'

function Profile({ userExist, dataUser, userNotExist, repositorios }) {
  return (
    <div
      className="mx-1 my-5 flex flex-col justify-center border-4 px-2 text-center md:flex-row"
      id="profile"
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
