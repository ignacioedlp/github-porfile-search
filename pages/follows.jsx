import Head from 'next/head'

import { useContext } from 'react'
import { ProfileContext } from '../context/ProfileContext'
import { Search, Loader, Follower } from '../components/index'
import Modal from 'react-modal'
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

Modal.setAppElement('#__next')

const Follows = () => {
  const { followers, loading } = useContext(ProfileContext)
  const router = useRouter()

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#2c3e50]  p-2 ">
      <Head>
        <title>Github finder</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="my-1 box-border flex w-full flex-1 flex-col items-center justify-center  px-20 text-center">
        <Search />
        <div
          className="my-3 flex w-[100px] cursor-pointer flex-col items-center justify-center rounded-xl bg-[#e74c3c] text-[#ecf0f1] hover:bg-[#c0392b]"
          onClick={() => {
            router.push('/')
          }}
        >
          Back
        </div>
        <div className="m-4 flex flex-wrap ">
          {followers.map((follower, index) => (
            <Follower key={index} follower={follower} />
          ))}
        </div>
      </main>
      <Modal isOpen={!!loading} style={customStyles}>
        <Loader />
      </Modal>
    </div>
  )
}

export default Follows
