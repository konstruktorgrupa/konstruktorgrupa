import { useState } from 'react'
import Slika from '../comp/Slika'
import './Grid.css'

function Slike(props) {

  return (
    <div id="slike" style={{position: 'absolute',
    display: 'none',
    top: 0,
    left: 0,
    marginTop: '300px'
    }}>
<div className="grid-container">
  <div className="grid-item">
  <Slika screenWidth={props.screenWidth} img={"/img/20.PNG"}/>
  </div>
  <div className="grid-item">
  <Slika screenWidth={props.screenWidth} img={"/img/30.PNG"}/>
  </div>
  <div className="grid-item">
  <Slika screenWidth={props.screenWidth} img={"/img/3.jpg"}/>
  </div>
  <div className="grid-item">
  <Slika screenWidth={props.screenWidth} img={"/img/4.jpg"}/>
  </div>
  <div className="grid-item">
  <Slika screenWidth={props.screenWidth} img={"/img/5.jpg"}/>
  </div>
  <div className="grid-item">
  <Slika screenWidth={props.screenWidth} img={"/img/6.jpg"}/>
  </div>  
  <div className="grid-item">
  <Slika screenWidth={props.screenWidth} img={"/img/7.jpg"}/>
  </div>
  <div className="grid-item">
  <Slika screenWidth={props.screenWidth} img={"/img/8.jpg"}/>
  </div>
  <div className="grid-item">
  <Slika screenWidth={props.screenWidth} img={"/img/9.jpg"}/>
  </div>  
  <div className="grid-item">
  <Slika screenWidth={props.screenWidth} img={"/img/10.jpg"}/>
  </div>  
</div>
    </div>
  )
}

export default Slike