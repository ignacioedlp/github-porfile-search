import '../styles/globals.css'
import 'animate.css'
import { ProfileProvider } from '../context/ProfileContext'

function MyApp({ Component, pageProps }) {
  return (
   
    <ProfileProvider>
      <Component {...pageProps} />
    </ProfileProvider>
 
  )
}

export default MyApp
