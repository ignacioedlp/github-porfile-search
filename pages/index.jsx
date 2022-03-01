import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import Modal from 'react-modal'
import { Loader, Search, Profile } from '../components/index'
import { useRouter } from 'next/router'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#0a0b0d',
    padding: 0,
    border: 'none',
  },
  overlay: {
    backgroundColor: 'rgba(10, 11, 13, 0.75)',
  },
}

const Home = () => {
  const router = useRouter()
  const [user, setUser] = useState('')
  const [dataUser, setDataUser] = useState({})
  const [userExist, setUserExist] = useState(null)
  const [userNotExist, setUserNotExist] = useState(null)
  const [repositorios, setRepositorios] = useState([])
  const [loading, setLoading] = useState(false)

  const handleChange = (event) => {
    setUser(event.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
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

    await fetch('https://api.github.com/users/' + user + '/repos')
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        if (data.length > 0) {
          setRepositorios(data)
        } else {
          setRepositorios([])
        }
      })
    setLoading(false)
    router.push('#profile')
    setUser('')
  }

  Modal.setAppElement('#__next')

  return (
    <div className="m-2  flex min-h-screen flex-col items-center  justify-center px-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="my-0 box-border flex  w-full flex-1 flex-col items-center justify-center   px-20 text-center">
        <Search
          user={user}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
        />
        {userExist !== null && (
          <Profile
            repositorios={repositorios}
            dataUser={dataUser}
            userExist={userExist}
            userNotExist={userNotExist}
          />
        )}
      </main>
      <Modal isOpen={!!loading} style={customStyles}>
        <Loader />
      </Modal>
    </div>
  )
}

export default Home
