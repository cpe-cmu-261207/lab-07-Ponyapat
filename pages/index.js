import { useEffect } from 'react';
import axios from 'axios'
import Link from 'next/link'

const baseURL = 'https://dummyapi.io/data/api'
const APP_ID = '6012ba2e7c5d994971c8f4ef'
const Home = () => {
  return (
    <>
      <div className="body-post">
        <br /><br /><br /><br /><br /><br />

        <img
          src="/photos/post1.jpeg"
          className="ppost card"
        />
        <br/><br/>
        <h1 className="text-page">Poonyapat Anusonthi </h1>
        <h2 className="text-page">Computer engineering, CMU</h2>
        <br /><br /><br /><br /><br />

        <div className="nav d-flex justify-content-between hover" >
          <Link href="/post"><h1 id="choose" className="text-page">Post</h1></Link>
          <Link href="/resume"><h1 id="choose" className="text-page">Resume</h1></Link>
          <Link href="/gallery"><h1 id="choose" className="text-page">Gallery</h1></Link>
          <Link href="/contact"><h1 id="choose" className="text-page">Contact</h1></Link>
          <Link href="/gpa"><h1 id="choose" className="text-page">Calculate GPA</h1></Link>
        </div>
        <br /><br /><br /><br /><br /><br />
      </div>

    </>

  )
}

export default Home
