import ImageWithPreview from "../Image/ImageWithPreview.jsx";
import titleGraphic from "../../assets/wordle.png"
import notGraphic from "../../assets/not.png"
import dontSue from "../../assets/dontSue.png"
export default function (){
    return (
        <div className="title-container">
            <ImageWithPreview
                src={titleGraphic}
                previewSrc="/images/hero-preview.jpg"
                alt="A dramatic fantasy landscape"
                className="title-graphic"
            />
            <ImageWithPreview
                src={notGraphic}
                previewSrc="/images/hero-preview.jpg"
                alt="A dramatic fantasy landscape"
                className="not-graphic"
            />
            <ImageWithPreview
                src={dontSue}
                previewSrc="/images/hero-preview.jpg"
                alt="A dramatic fantasy landscape"
                className="dont-sue"
            />
        </div>
    )
}