import React from 'react'
import { css } from '@emotion/react'
import { MoonLoader } from 'react-spinners'
import { ProfileContext } from '../context/ProfileContext'

const style = {
  wrapper: `text-white h-96 w-72 flex flex-col justify-center items-center`,
  title: `font-semibold text-xl mb-12`,
}

const cssOverride = css`
  display: block;
  margin: 0 auto;
  border-color: white;
`

function Loader() {
  const { statusProcess } = React.useContext(ProfileContext)

  return (
    <div className={style.wrapper}>
      <div className={style.title}>Searching...</div>
      <div className={style.title}>{statusProcess}</div>
      <MoonLoader
        color={'#fff'}
        loading={true}
        size={50}
        css={css`
          display: block;
          margin: 0 auto;
          border-color: white;
        `}
      />
    </div>
  )
}

export default Loader
