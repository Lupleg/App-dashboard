  import React from 'react';
  import './Card.css'
  
  

  function Card({title,imageUrl,body}){

    return (
        <div className='card-container'>
        <div className='image-container'>
            <img src={imageUrl}alt='' />
        </div>
        <div className='card-title'>
         <link> <h3>Front End</h3> </link>
        </div>
        <div className='card-body'>
            <p>Beginner's Guide to Becoming a Professional Front-End Developer</p>
        </div>

        <div className='profile'>
            <image>
            <a>
              Leornado samsul  
            </a>
            
            </image>


        </div>


      </div>

    );


  }

  export default Card;