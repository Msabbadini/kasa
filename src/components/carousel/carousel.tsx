import {useState} from "react";
import {Typography} from "@/components/typography/typography";
const ArrowRight =  `${process.env.PUBLIC_URL}/assets/chevron_carousel_right.png`;
const ArrowLeft =  `${process.env.PUBLIC_URL}/assets/chevron_carousel_left.png`;
interface Props {
    images: Array<string>
}
export const Carousel = ({images}:Props)=>{

    const [currentIndex,setCurrentIndex]=useState(0)
    const lengthCarousel = images.length
    const next =()=>{
        setCurrentIndex(currentIndex+1)
        if(currentIndex ===lengthCarousel -1) setCurrentIndex(0)
    }

    const prev =()=>{
        setCurrentIndex(currentIndex+1)
        if(currentIndex === 0 ) setCurrentIndex(lengthCarousel -1)
    }

    return (
        <div style={{backgroundImage : `url(${images[currentIndex]})`}} className='carousel'>
            {images.length > 1 &&
				<>
					<img
						className='carousel_arrow carousel_arrow_right'
						src={ArrowRight}
						alt="voir image suivante"
						onClick={next}
					/>
					<img
						className='carousel_arrow carousel_arrow_left'
						src={ArrowLeft}
						alt="voir image précédente"
						onClick={prev}
					/>
                    <Typography className={"carouselCount"} theme={"secondary"} component={"p"} variant={"body-lg"}>{currentIndex + 1} / {lengthCarousel}</Typography>
				</>
            }
        </div>
    )
}