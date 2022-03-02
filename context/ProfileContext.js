import { createContext, useEffect, useState } from 'react'
import { useRouter } from 'next/router'

export const ProfileContext = createContext()

export const ProfileProvider = ({ children }) => {
  //states for the profile
  const [user, setUser] = useState('')
  const [dataUser, setDataUser] = useState({})
  const [userExist, setUserExist] = useState(null)
  const [userNotExist, setUserNotExist] = useState(null)
  const [repositorios, setRepositorios] = useState([])
  const [loading, setLoading] = useState(false)
  const [followers, setFollowers] = useState([])
  const [statusProcess, setStatusProcess] = useState('')

  const router = useRouter()
  //function for the profile

  const handleChange = (event) => {
    setUser(event.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatusProcess('Getting data')
    //fetch api github data
    await fetch('https://api.github.com/users/' + user)
      .then((response) => response.json())
      .then((data) => {
        if (data.message !== 'Not Found') {
          setDataUser(data)
          setUserExist(true)
          setUserNotExist(false)
        } else {
          setUserExist(false)
          setUserNotExist(true)
        }
      })

    setStatusProcess('Getting repositorios')
    await fetch('https://api.github.com/users/' + user + '/repos')
      .then((response) => response.json())
      .then((data) => {
        if (data.length > 0) {
          setRepositorios(data)
        } else {
          setRepositorios([])
        }
      })

    setStatusProcess('Getting followers')
    await fetch('https://api.github.com/users/' + user + '/followers')
      .then((response) => response.json())
      .then((data) => {
        if (data.length > 0) {
          setFollowers(data)
        } else {
          setFollowers([])
        }
      })

    setStatusProcess('Done')
    setLoading(false)
    router.push('/#profile')
    setUser('')
  }

  //provider
  return (
    <ProfileContext.Provider
      value={{
        user,
        dataUser,
        userExist,
        userNotExist,
        repositorios,
        loading,
        handleChange,
        handleSubmit,
        followers,
        statusProcess,
      }}
    >
      {children}
    </ProfileContext.Provider>
  )
}
