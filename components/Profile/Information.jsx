import React from 'react'
import { format } from 'timeago.js'
import { SiGithub } from 'react-icons/si'
import { BsPinMap, BsFillStarFill } from 'react-icons/bs'
import { ProfileContext } from '../../context/ProfileContext'
import { useRouter } from 'next/router'

function Information() {
  const handleGoGithub = (url, e) => {
    e.preventDefault()
    window.open(url, '_blank')
  }
  const router = useRouter()

  const { userExist, dataUser, userNotExist } = React.useContext(ProfileContext)

  return (
    <>
      {userExist && (
        <div className="mx-2 my-2 flex w-80 flex-col items-center justify-center text-[#ecf0f1]">
          <div className=" ">
            <img
              src={dataUser.avatar_url}
              alt={dataUser.login}
              className={`animate__animated animate__backInDown  rounded-full bg-gradient-to-br p-2  shadow-lg ${
                dataUser.followers > 1000
                  ? ' from-[#f39c12] via-[#d35400] to-[#c0392b]'
                  : ' from-[#16a085] via-[#27ae60] to-[#2980b9]'
              }`}
            />
          </div>
          <div className="mx-1 my-2 flex  flex-row items-center justify-center text-center">
            {dataUser.followers > 1000 && <BsFillStarFill color="#f39c12" />}
            <p className="mx-2 text-center text-lg font-bold">
              {dataUser.name}
            </p>

            <SiGithub
              className="mx-2 cursor-pointer "
              onClick={(e) => {
                handleGoGithub(dataUser.html_url, e)
              }}
            />
          </div>
          {dataUser.bio && (
            <div className="mx-1 flex  flex-row items-center justify-around text-center">
              <div className="flex flex-col">
                <span className="font-mono font-light"> {dataUser.bio}</span>
              </div>
            </div>
          )}
          {dataUser.location && (
            <div className="mx-1 flex flex-row items-center justify-center text-center font-mono font-light">
              <BsPinMap />
              <div className=" mx-1 flex flex-col">
                <span className="font-light">
                  {dataUser.location ? dataUser.location : 'No twitter profile'}
                </span>
              </div>
            </div>
          )}
          <div className="mx-2 my-2 flex  flex-row items-center justify-between text-center">
            <div className="mx-1 flex  flex-col rounded-lg bg-[#2c3e50] px-2 text-center shadow-lg">
              <p className="my-2 text-center font-mono font-bold">Following</p>
              <span className="font-light"> {dataUser.following}</span>
            </div>
            <div className="mx-1 flex  flex-col rounded-lg bg-[#2c3e50] px-2 text-center shadow-lg">
              <p className="my-2 text-center font-mono font-bold">Repos</p>
              <span className="font-light"> {dataUser.public_repos}</span>
            </div>
            {dataUser.followers !== 0 ? (
              <div
                className="mx-1 flex cursor-pointer flex-col rounded-lg bg-[#2c3e50] px-2  text-center shadow-lg"
                onClick={() => {
                  router.push('/follows')
                }}
              >
                <p className="my-2 text-center font-mono font-bold">
                  Followers
                </p>
                <span className="font-light"> {dataUser.followers}</span>
              </div>
            ) : (
              <div className="mx-1 flex w-1/3  flex-col rounded-lg bg-[#2c3e50] px-1  text-center shadow-lg">
                <p className="my-2 text-center font-mono font-bold">
                  Followers
                </p>
                <span className="font-light"> {dataUser.followers}</span>
              </div>
            )}
          </div>

          <div className="mx-1 my-2 flex  flex-row items-center justify-around text-center">
            <div className="flex flex-col">
              <p className="mb-2 text-center font-mono font-bold">Blog</p>
              <span className="font-light"> {dataUser.blog}</span>
            </div>
          </div>
          {dataUser.twitter_username && (
            <div className="mx-1 flex  flex-row items-center justify-around text-center">
              <div className="flex flex-col">
                <p className="mb-2 text-center font-mono font-bold">Twitter</p>
                <span className="font-light">
                  {' '}
                  {dataUser.twitter_username
                    ? dataUser.twitter_username
                    : 'No twitter profile'}
                </span>
              </div>
            </div>
          )}
          {dataUser.company && (
            <div className="mx-1 flex  flex-row items-center justify-around text-center">
              <div className="flex flex-col">
                <p className="m-0 my-2 text-center font-mono font-bold">
                  Company
                </p>
                <span className="font-light"> {dataUser.company}</span>
              </div>
            </div>
          )}
          <div className="mx-1 flex  flex-row items-center justify-around text-center">
            <div className="flex flex-col">
              <p className="my-2 text-center font-mono font-bold">Create</p>
              <span className="font-light">
                {' '}
                {format(new Date(dataUser.created_at).getTime())}
              </span>
            </div>
          </div>
        </div>
      )}
      {userNotExist && <div>User not found</div>}
    </>
  )
}

export default Information
