const ProjectBox = (props) => {
    return (
        <div className="flex flex-col w-[24rem] xl:w-[36rem] xl:h-[24rem] bg-zinc-900 border-white border-2 rounded-lg text-white p-4 xl:p-8 gap-4 justify-center">
            <h4 className="font-semibold text-2xl xl:text-4xl">{props.title}</h4>
            <p>{props.info}</p>

            <div className="flex flex-row gap-8 items-center justify-center">
                <a className="flex justify-center items-center text-zinc-300 bg-zinc-800 hover:bg-zinc-700 hover:text-white px-3 py-3 rounded-lg text-sm font-medium cursor-pointer h-12" href={props.link} target="_blank" rel="noopener">
                    View on Event Page
                </a>
                <a className="flex justify-center items-center text-zinc-300 bg-zinc-800 hover:bg-zinc-700 hover:text-white px-3 py-3 rounded-lg text-sm font-medium cursor-pointer h-12" href={props.github} target="_blank" rel="noopener">
                    View on GitHub
                </a>
            </div>
        </div>
    )
}

export default ProjectBox;
