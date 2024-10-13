import React from 'react'
import Header from './components/header'
import Main from './components/main'
import Projects from './components/projects'
import About from './components/about'
import My_skills from './components/my_skills'
import Contact from './components/contact'
import Footer from './components/footer'


const Home = () => {
  return (
    <>
    <div className='fixed top-0 left-0 right-0 z-10'> <Header/> </div>
    <div id='sectionHome' className=''><Main/></div>
   <div  id='sectionProjects' className='h-screen w-4/5 m-auto '> <Projects/> </div>
   <div id='sectionAbout' className='h-lvh w-4/5 m-auto'><About/></div>
   <div id='sectionMy_skills' className='h-svh w-4/5 m-auto mt-7'><My_skills/></div>
   <div id='sectionContact' className='h-svh w-4/5 m-auto'> <Contact/> </div>
   <Footer/>
    </>
  )
}

export default Home