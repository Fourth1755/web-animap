import "./style.scss";
type Props = {
    name: string
    link: string
    main_color: string
}

export default function WallpaperStudio(props:Props) {
    const { link,name,main_color } = props
    let dropzoneStyleWallpaper = {
        width: `100%`,
        height: `330px`,
        backgroundImage: `linear-gradient(to right , ${main_color}, #000000)`,
      };

    let dropzoneStyleStudio = {
        width: `250px`,
        height: `250px`,
        backgroundImage: `url(${link})`,
        backgroundRepeat: `no-repeat`,
        backgroundPosition: `center center`,
        backgroundSize: `cover`
      };
    return(
        <div>
            <div style={dropzoneStyleWallpaper}>
                <div className="container mx-auto md:px-20 px-5 flex pt-5">
                    <div style={dropzoneStyleStudio}>
                    </div>
                    <div className="py-7 pl-10">
                        <h1 className="mb-3 text-2xl font-extrabold leading-none tracking-tight md:text-2xl lg:text-5xl dark:text-white capitalize">
                                {name}
                        </h1>
                    </div>
                    <div>
                    </div>
                </div>
            </div>
        </div>
    )
}