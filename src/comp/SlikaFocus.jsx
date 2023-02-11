import { useState } from 'react'

function SlikaFocus(props) {


    function CloseImg() {
        document.getElementById('slikaFocus').style.display = 'none'
        document.getElementById('menu').style.display = 'flex'
    }
  return (
    <div id="slikaFocus" style={{position: 'absolute',
    display: 'none',
    top: 0,
    left: 0,
    backgroundColor: 'rgb(0,0,0,0.8',
    height: '100%',
    width: '100%',
    textAlign: 'center'
    }}>
          <img id='imgSrc' style={{ height: '100%'}}
           />
           

           <button style={{position: 'absolute',
           top: '50px',
        right: '250px',
    height: '200px',
    width: '200px',
    backgroundColor: 'rgb(215,255,0,0.8',
    fontSize: '60px'
    }}
           onClick={CloseImg}>X</button>
    </div>
  )
}

export default SlikaFocus