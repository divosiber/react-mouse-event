import React, { useState } from "react";
import "./App.css"

function App() {
  // onClick - tombol klik 
const [text, setText] = useState("klik disini")
const handleClick = () =>{
 setText((prevText)=>
  prevText === "klik disini" ? "Kamu mengklik": "klik disini"
 )
}
  // onDoubleClick - rubah background
 const  [color,setColor] = useState("pink")
 const handleDoubleClick = () =>{
  setColor(color === "pink"? "gray":"pink")
 }

 const [hoverColor, setHoverColor] = useState('green')
 const handleMouseEnter = ()=> setHoverColor("pink")
 const handleMouseLeave = () => setHoverColor("green")
  // onMouseEnter / onMouseLeave - hover efek
const [coords,setCoords] = useState({x:0,y:0})
const handleMouseMove = (e) =>{
  setCoords({x:e.clientX, y: e.clientY})
  const trail = document.createElement("div")
  trail.classList.add("trail")
  trail.style.left=`${e.clientX}px`
  trail.style.top=`${e.clientY}px`
  document.body.appendChild(trail)
  setTimeout(()=>{
    trail.remove()
  },300)
}

  // onWheel - efek scrool
  const handleWheel = (e) => {
    const isScrollingUp = e.deltaY < 0;

    if (isScrollingUp) {
      document.body.style.backgroundColor = "white";
    } else {
      document.body.style.backgroundColor = "darkred";
    }
  };

  return (
    <div className="container" onWheel={handleWheel}>
      <div className="boxes">
        <div className="box">
          <h2 className="title">Klik Event React</h2>
          <button className="button" onClick={handleClick}>
            {text}
          </button>
        </div>
        <div
          className="box"
          style={{ backgroundColor: color }}
          onDoubleClick={handleDoubleClick}
        >
          <h2 className="title">Doble Klik untuk merubah warna</h2>
        </div>
        <div
          className="box"
          style={{ backgroundColor: hoverColor }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <h2 className="title">Arahkan Mouse Ke sini Untuk efeknya</h2>
        </div>
      </div>
      <div className="coordinatesContainer" onMouseMove={handleMouseMove}>
        <h2 className="title">Koordina Mouse</h2>
        <p className="coordsText">
          X: {coords.x}, Y: {coords.y}
        </p>
      </div>
    </div>
  );
}

export default App;
