// @ts-ignore
import StarActive from "@/assets/star-active.png";
// @ts-ignore
import StarInactive from "@/assets/star-inactive.png";


interface Props {
 numberStars : number,
    defaultNumber : number
}
export const Rating =({numberStars,defaultNumber}:Props)=>{


    return (
        <div className={"raiting"}>
            {[...Array(5)].map((star, index) => {
                const ratingValue = index + 1;
                return (
                    <img key={index} src={ratingValue <= numberStars ? StarActive : StarInactive} alt="star" />
                )
            })}

        </div>
    )
}