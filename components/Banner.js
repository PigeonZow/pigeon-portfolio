const Banner = (props) => {
    return (
        <div class="relative overflow-hidden">
            <img class="object-cover w-full" src={props.src} alt="Pigeon on Computer"/>
            <div class="absolute top-16 left-16 sm:left-32 lg:top-32 lg:left-48">
                <h1 class="mb-3 text-6xl lg:text-9xl font-bold text-gray-300">
                    Hi.<br/>
                    <span class="leading-normal font-bold text-transparent bg-gradient-to-r bg-clip-text from-gray-300 to-gray-400">I'm a Pigeon.</span>
                </h1>

            </div>
        </div>
    )
}

export default Banner;