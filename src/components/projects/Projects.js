import React from 'react'
import Footer from '../footer/Footer'
import Navbar from "../navbar/Navbar"
import Project from "../project/Project"
import './projects.css'

export default function Projects() {
  return (
    <div className='projects'><Navbar/>
    <Project/>
 <Footer/>
    </div>
  )
}
