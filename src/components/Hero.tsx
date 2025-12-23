import anatSmallPic from '../assets/PHOTO-anat-dagan-small.webp'
import anatCropPic from '../assets/head-shot.webp'

function Hero() {
    return (
        <picture>
            <source media="(min-width: 465px)" srcSet={anatCropPic}/>
            <img src={anatSmallPic} alt="ענת דגן"/>
        </picture>
    )
}

export default Hero
