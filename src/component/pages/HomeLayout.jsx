import React from 'react'
import { Outlet } from 'react-router'
// import Navbar from '../shared/Navbar'
export default function HomeLayout() {
  return (
    <>
   <div className="bg-gray-100 min-h-screen text-gray-800">
      {/* <Header /> */}
      <main>
        <Outlet />
      </main>
    </div>
    </>
  )
}
