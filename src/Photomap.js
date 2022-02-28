import React from 'react'

const Photomap = () => {
    const all=[
        {name: "anime 1", 
        img:"https://wallpaperaccess.com/full/2616726.png" 
       } 
        ,{
            name:"Anime 2",
            img:"https://kbimages1-a.akamaihd.net/2549815e-9024-4668-bf7d-ab167be95fb5/1200/1200/False/solo-leveling-vol-1-comic.jpg"
        }
    ]      
  return (
    <div>
      {all.map((el,i)=>(
         <div className='nar' key={i}>
             
             <img className='mgg' src={el.img} alt="tel9a el 3asba"/>
        </div>
      ))}
    </div>
    )
      } 
    export default Photomap;
