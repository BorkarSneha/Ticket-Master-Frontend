import React from 'react'
import image2 from './image2.png'
export default function Home(props){
    return(
        <div align="center">
            <h2>Welcome to Ticket Master Application!!!</h2>
            <br/><br/>
            <div className="offset-md-1 pb4">
                <img src={image2} className="img-rounded"/>
            </div>
        </div>
    )
}