
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Nav from './components/Nav'
import Dashboard from './pages/Dashboard'
import Course from './pages/Course'
import MyCourse from './pages/MyCourse'
import Profile from './pages/Profile'
import Login from './User/Login'
import Signup from './User/Signup'
import FullCourses from './components/FullCourses'
import VideoLessons from './components/VideoLesson'
import Quizzes from './components/Quiz'
import CourseLayout from './components/CourseLayout'
import ProfileLayout from './components/ProfileLayout'
import Progress from './components/Progress'
import Notification from './components/Notification'
import Notes from './components/Notes'
import Auth from './components/Auth'
import CourseDetail from './components/CourseDetails'
import Remaningvideos from "./components/RemainingVideos"

function App() {
  
  return (
   <>
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/mycourse" element={<MyCourse/>} />
        <Route path='/course/:id' element={<CourseDetail/>} />
        <Route path='/remaningvideos' element={<Remaningvideos/>} />
        

      
        <Route path='/course' element={ <Auth>  <CourseLayout/> </Auth> }>
          <Route index element={<Course/>} />
          <Route path="full" element={<FullCourses/>} />
          <Route path="videoLessons" element={<VideoLessons/>} />
          <Route path='notes' element={<Notes/>} />
        </Route>

        



        <Route path="/login" element={<Login/>} />

        <Route path='/profile' element={ <Auth> <ProfileLayout/> </Auth>}>
          <Route index element={<Profile/>} />
          <Route path='myCourse' element={<MyCourse/>} />
          <Route path='progress' element={<Progress/>} />
          <Route path="quizzes" element={<Quizzes/>} />
          <Route path='courseNotes' element={<Notes/>} />
          <Route path='notification' element={<Notification/>} />
          
        </Route>
        <Route path="/signup" element={<Signup/>}/>
      </Routes>
    </Router>
   </>
  )
}

export default App
