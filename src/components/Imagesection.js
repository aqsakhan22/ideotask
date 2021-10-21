import React from 'react'
import img1 from '../images/image1.jpg'

const style={
    marginTop: "50px"
}
const Imagesection = () => {
    return (
        <div className="imgsection" style={style}>
            <img src={img1}/>
        </div>
    )
}

export default Imagesection
