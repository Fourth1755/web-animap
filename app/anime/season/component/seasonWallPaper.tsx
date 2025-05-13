type Props = {
    seasonal: string
    year: string
}
export default function SeasonWallPaper(props : Props) {
    const { seasonal , year} = props
    let seasonWallpaper = ""

    const getSeasonWallpaper = (seasonal:string) =>{
        switch (seasonal) {
            case "winter":
                return 'https://wallpapercave.com/wp/wp14637278.jpg'
            case "spring":
                return 'https://images3.alphacoders.com/101/1012111.jpg'
            case "summer":
                return 'https://a-static.besthdwallpaper.com/anime-summer-season-wallpaper-3840x2160-91693_54.jpg'
            case "fall":
                return 'https://wallpapercave.com/wp/wp7436333.jpg'
        }
    }

    let dropzoneStyle = {
        width: `100%`,
        height: `330px`,
        backgroundImage: `url(${getSeasonWallpaper(seasonal)})`,
        backgroundRepeat: `no-repeat`,
        backgroundPosition: `center center`,
        backgroundSize: `cover`
      };
    return (
        <div>
            <div style={dropzoneStyle}>
                <div className="container mx-auto md:px-40 px-5">
                    <div className="py-7">
                        <h1 className="mb-3 text-2xl font-extrabold leading-none tracking-tight md:text-2xl lg:text-3xl dark:text-white capitalize">
                                {seasonal} {year}
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    )
}