import React from 'react';
import '../Styles/Hero.css'
import Tribute from '../assets/tribute-pic.jpg';
import Quote from '../assets/random-quote-machine.png';
import jsCal from '../assets/js-calc.png'
import mapPic from '../assets/map.jpg'
import wikiPic from '../assets/wiki.png'
import tikPic from '../assets/tic-tac-toe.png'
import { Link } from 'react-router-dom';


const Hero = () => {
  const tributePage = 'https://codepen.io/freeCodeCamp/full/zNqgVx';
  const randomQuote = 'https://codepen.io/freeCodeCamp/full/qRZeGZ';
  const jsCalc = 'https://codepen.io/freeCodeCamp/full/wgGVVX';
  const mapLink = 'https://codepen.io/freeCodeCamp/full/mVEJag'
  const wikipediaLink = 'https://codepen.io/freeCodeCamp/full/wGqEga';
  const ticLink = 'https://codepen.io/freeCodeCamp/full/KzXQgy';
  const showMoreLink ='https://codepen.io/FreeCodeCamp/';
  return (
    <div className='body' id='hero'>
      <main>
        {/* Work */}
        <section className='work' id='work'>

          <div className='work_div pt-5'>
          <h2 className='text-light text-center'>These are some of my projects</h2>
          <hr className='work_hr'/>
          
          <div> 
            <Link to={Tribute} >
            <img src= {Tribute} target='_blank' alt="Tribute-pic" />
            </Link>

            <button className='project_name d-flex justify-content-center align-items-center'> 
            <Link to={tributePage} target='_blank' className='text-decoration-none text-light'>
            Tribute Page
            </Link>
            </button>
            
            </div>
         
          <div>
            <Link to={Quote} target='_blank'>
            <img src= {Quote} target='_blank' alt="Quote-pic" />
            </Link>
            <button className='project_name  d-flex justify-content-center align-items-center'>
              <Link to={randomQuote} target='_blank' className='text-decoration-none text-light'>
              Random Quote Machine
              </Link>
              
              </button>
            </div>

          
          <div>
            <Link to={jsCal} target='_blank'>
            <img src= {jsCal} target='_blank' alt="Javascript-calc-pic" />
            </Link>
            <button className='project_name d-flex justify-content-center align-items-center'>
              <Link to={jsCalc} target='_blank' className='text-decoration-none text-light'>
              Javascript Calculator
              </Link>
              </button>
            </div>

          <div>
            <Link to={mapPic} target='_blank' >
            <img src= {mapPic} target='_blank' alt="Map-pic" />
            </Link>

            <button className='project_name d-flex justify-content-center align-items-center'>
              <Link to={mapLink} target='_blank' className='text-decoration-none text-light'>
              Map Data Across the Globe
              </Link>
              </button>
            </div>
  
          <div>
            <Link to={wikiPic} target='_blank'>
            <img src= {wikiPic} target='_blank' alt="Wiki-pic"/>
            </Link>
            <button className='project_name d-flex justify-content-center align-items-center'>
              <Link to={wikipediaLink} target='_blank' className='text-decoration-none text-light'>
              Wikipedia Media
              </Link>
              </button>
            </div>
           
          <div>
            <Link to={tikPic} target='_blank'>
            <img src= {tikPic} target='_blank' alt="Tic-tac-toe-pic" />
            </Link>
            <button className='project_name d-flex justify-content-center align-items-center'>
              <Link to={ticLink} target='_blank' className='text-decoration-none text-light'>
              Tic Tac Toe Game
              </Link>
              </button>
            </div>
          </div>

            <div className='show btn-dark d-flex justify-content-center align-items-center'>

              <Link to={showMoreLink} className='text-decoration-none text-light'>Show all 
              <i class="fa-solid fa-chevron-right fa-beat chevarrow ps-2"></i>
              </Link>
             </div>


        </section>
      
      </main>

    </div>
  )
}

export default Hero 