import image from "../../image/profile.jpg";
import React from 'react'

const ProfilPhoto = () => {
    return (
        <div>
         <img src={image} alt ='myImage' style={{width:"300px", height:"300px"}} />
        </div>
    )
}
export default ProfilPhoto;