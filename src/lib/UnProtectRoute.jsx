import { useSelector } from 'react-redux'
import { useLocation, Navigate } from 'react-router-dom'
const UnProtectRoute = ({ children }) => {
  const user = useSelector(state => state.login.user)

  const location = useLocation()

  if (user) {
    return <Navigate to="/" state={{ from: location }} replace />
  }

  return children
}

export default UnProtectRoute
