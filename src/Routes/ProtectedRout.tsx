import React from 'react'
import { Navigate, useLocation } from 'react-router'
import { useAuth } from '../context/useAuth'

type Props = { children: React.ReactNode }

function ProtectedRouts({ children }: Props) {
    const location = useLocation()
    const { isLoggedIn } = useAuth()
  return isLoggedIn() ? (
    <>{ children }</>
  ) : (
    <Navigate to="/login" state={{ form: location}} replace />
  )
}

export default ProtectedRouts