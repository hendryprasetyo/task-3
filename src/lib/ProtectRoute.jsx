import { useSelector } from 'react-redux'
import { useLocation, Navigate } from 'react-router-dom'
const ProtectRoute = ({ children }) => {
  const user = useSelector(state => state.login.user)

  const location = useLocation()

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />
  }

  return children
}

export default ProtectRoute
