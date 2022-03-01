import React from 'react'
import { format } from 'timeago.js'
import { SiGithub } from 'react-icons/si'

function Information({ userExist, dataUser, userNotExist }) {
  const handleGoGithub = (url, e) => {
    e.preventDefault()
    window.open(url, '_blank')
  }

  return (
    <>
      {userExist && (
        <div className="my-2 mx-auto  flex w-80 flex-col justify-center">
          <div>
            <img
              src={dataUser.avatar_url}
              alt={dataUser.login}
              className="rounded-full border-2"
            />
          </div>
          <div className="mx-1 my-2 flex  flex-row items-center justify-center text-center">
            <p className="mx-2 text-center">{dataUser.name}</p>

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
                <span className="font-light"> {dataUser.bio}</span>
              </div>
            </div>
          )}

          <div className="mx-1 flex  flex-row items-center justify-around text-center">
            <div className="flex flex-col">
              <p className="my-2 text-center">Following</p>
              <span className="font-light"> {dataUser.following}</span>
            </div>
            <div className="flex flex-col">
              <p className="my-2 text-center">Followers</p>
              <span className="font-light"> {dataUser.followers}</span>
            </div>
            <div className="flex flex-col">
              <p className="my-2 text-center">Repos</p>
              <span className="font-light"> {dataUser.public_repos}</span>
            </div>
          </div>

          <div className="mx-1 flex  flex-row items-center justify-around text-center">
            <div className="flex flex-col">
              <p className="my-2 text-center">Blog</p>
              <span className="font-light"> {dataUser.blog}</span>
            </div>
          </div>
          <div className="mx-1 flex  flex-row items-center justify-around text-center">
            <div className="flex flex-col">
              <p className="my-2 text-center">Twitter</p>
              <span className="font-light">
                {' '}
                {dataUser.twitter_username
                  ? dataUser.twitter_username
                  : 'No twitter profile'}
              </span>
            </div>
          </div>
          <div className="mx-1 flex  flex-row items-center justify-around text-center">
            <div className="flex flex-col">
              <p className="my-2 text-center">Create</p>
              <span className="font-light">
                {' '}
                {format(new Date(dataUser.created_at).getTime())}
              </span>
            </div>
          </div>
          {dataUser.company && (
            <div className="mx-1 flex  flex-row items-center justify-around text-center">
              <div className="flex flex-col">
                <p className="m-0 my-2 text-center">Company</p>
                <span className="font-light"> {dataUser.company}</span>
              </div>
            </div>
          )}
        </div>
      )}
      {userNotExist && <div>User not found</div>}
    </>
  )
}

export default Information
