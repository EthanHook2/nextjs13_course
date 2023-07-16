import Login from '@/components/Login'
import React from 'react'

type Props = {}

function page({}: Props) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
    <div className="max-w-md w-full mx-auto p-6 bg-white rounded shadow">
      {/* Login Compoment */}
      <Login />
    </div>
  </div>
  )
}

export default page