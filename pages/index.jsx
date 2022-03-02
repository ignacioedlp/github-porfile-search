import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState, useContext } from 'react'
import Modal from 'react-modal'
import { Loader, Search, Profile, Footer } from '../components/index'
import { ProfileContext } from '../context/ProfileContext'

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

Modal.setAppElement('#__next')
const Home = () => {
  const { loading, userExist } = useContext(ProfileContext)

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#2c3e50]  p-2 ">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="my-0 box-border flex w-full flex-1 flex-col items-center justify-center  px-20 text-center ">
        {!userExist && (
          <div className=" animate__animated animate__backInDown mx-1 my-5 flex w-[350px] flex-col items-center  justify-between rounded-lg bg-[#34495e] px-2 py-2 text-center  shadow-lg md:w-[800px]">
            <h1 className="bg-gradient-to-br from-[#e67e22] to-[#d35400] bg-clip-text  text-7xl font-extrabold text-transparent">
              Github finder
            </h1>
          </div>
        )}
        <Search />
        {userExist !== null && <Profile id="profile" />}
        <Footer />
        <Modal isOpen={!!loading} style={customStyles}>
          <Loader />
        </Modal>
      </main>
    </div>
  )
}

export default Home
