import FadeIn from "react-fade-in/lib/FadeIn";
import Image from "next/image";
import DoubleDownArrow from "../public/img/icons8-double-down-48.png"

const bannerStyles = "relative overflow-hidden"

const Banner = (props) => {
    return (
        <div className={props.top ? bannerStyles.concat(" top-16") : bannerStyles}>
            <Image className="object-cover w-full" src={props.src} alt="Pigeon on Computer"/>
            <div className="absolute top-16 left-16 sm:left-32 lg:top-32 lg:left-48">
                <FadeIn delay="200" transitionDuration="1000">
                    <h1 className="mb-3 text-6xl md:text-8xl lg:text-9xl font-bold text-gray-100">
                        Hi.<br/>
                        <FadeIn delay="1000" transitionDuration="1000">
                            <span className="leading-normal text-transparent bg-gradient-to-r bg-clip-text from-gray-100 to-gray-100">
                                I'm a Pigeon.
                            </span>
                        </FadeIn>
                    </h1>
                </FadeIn>
                <FadeIn delay="1400" transitionDuration="1000">
                    <div className="flex justify-between animate-bounce pt-2 md:pt-16 lg:pt-36">
                        <Image src={DoubleDownArrow}/>
                        <p className="text-white font-bold">Get to know me</p>
                        <Image src={DoubleDownArrow}/>
                    </div>
                </FadeIn>
            </div>
            <div className="bg-black opacity-50 h-full w-full z-20"></div>
        </div>
    )
}

export default Banner;