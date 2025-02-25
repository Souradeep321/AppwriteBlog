import './App.css'
import { useState, useEffect } from "react"
import { useDispatch } from 'react-redux'
import authService from './appwrite/auth'
import { login, logout } from './store/authSlice'
import { Header } from './components/index'
import { Footer } from './components/index'
import { Outlet } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom';

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  // dispatch(login(userData)) Try this if {userData} didn't work
  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }))
        } else {
          dispatch(logout())
        }
      })
      .catch((error) => {
        console.error("Error fetching user:", error);
        dispatch(logout())
      })
      .finally(() => setLoading(false))
  }, [])

  // if (loading) {
  //   return <h1 className="text-2xl text-center text-gray-600">Loading...</h1>;
  // }

  // return (
  //   <h1 className="text-4xl font-bold underline text-center bg-pink-400">
  //     Hello world!
  //   </h1>
  // );

  return !loading ?
    <BrowserRouter>
      <div className="min-h-screen flex flex-wrap content-between bg-gray-400">
        <div className="w-full block">
          <Header />
          <main>
            TODO: {/* <Outlet /> */}
          </main>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
    : <h1 className="text-2xl text-center text-gray-600">Loading...</h1>;
}


export default App
