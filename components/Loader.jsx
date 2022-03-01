import React from 'react'
import { css } from '@emotion/react'
import { MoonLoader } from 'react-spinners'

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
  return (
    <div className={style.wrapper}>
      <div className={style.title}>Searching...</div>
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
