const Contact = () => {
    return (
        <div className="h-32 bg-zinc-800 text-white flex flex-col justify-center items-center gap-2">
            <h3 className="text-xl font-bold">Contact Me</h3>
            <div className="flex justify-center gap-8">
                <a href="mailto:patrick123cool@gmail.com" className="no-underline hover:underline" target="_blank" rel="noreferrer">E-mail</a>
                <a href="https://www.linkedin.com/in/patrick-zh/" className="no-underline hover:underline" target="_blank" rel="noreferrer">LinkedIn</a>
            </div>
        </div>
    )
};

export default Contact;
