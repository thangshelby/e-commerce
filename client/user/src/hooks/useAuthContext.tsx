
import { useContext } from 'react'
import { AuthContext } from '../context/AuthProvider'

const useAuthContext = () => {
  const {accessToken,setAccessToken,user,setUser} = useContext(AuthContext)

  return ({accessToken,setAccessToken,user,setUser})
}

export default useAuthContext