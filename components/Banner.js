import FadeIn from "react-fade-in/lib/FadeIn";
import Image from "next/image";
import DoubleDownArrow from "../public/icons8-double-down-48.png";
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

// used when using an old image to add space for nav, now not using but too lazy to remove in case using again.
const bannerStyles = "relative overflow-hidden h-screen bg-zinc-900";

const Banner = (props) => {
    return (
        <div className={props.top ? bannerStyles.concat(" top-0") : bannerStyles}>
            <Image className="h-screen" src={props.src} alt="Pigeon on Computer" layout="fill" objectFit="cover"/>
            <div className="h-full flex flex-col justify-center items-center gap-8 mr-0 xl:mr-96 2xl:mr-[750px]">
                <FadeIn className="z-10" delay="400" transitionDuration="1000">
                    <h1 className="mb-3 text-6xl sm:text-8xl lg:text-9xl font-bold text-zinc-200">
                        Hi.
                    </h1>
                    <h2 className="leading-normal text-6xl sm:text-8xl lg:text-9xl font-bold text-zinc-200">
                        I&apos;m a Pigeon.
                    </h2>
                </FadeIn>
                <FadeIn delay="1200" transitionDuration="1000">
                    <Link activeClass="active" to={"about"} spy={true} smooth={true} duration={700}>
                        <div className="flex justify-between animate-bounce pt-2 sm:pt-16 lg:pt-36 cursor-pointer gap-8 sm:gap-32">
                            <Image src={DoubleDownArrow} alt="double down arrow"/>
                            <p className="text-white font-bold">Get to know me</p>
                            <Image src={DoubleDownArrow} alt="double down arrow"/>
                        </div>
                    </Link>
                </FadeIn>
            </div>
        </div>
    )
};

export default Banner;