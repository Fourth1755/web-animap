import Link from "next/link";

type Props = {
    name: string
    link: string
}

export default function WallpaperAnimeMain(props:Props) {
    const { link,name } = props
    let dropzoneStyle = {
        width: `100%`,
        height: `530px`,
        backgroundImage: `url(${link})`,
        backgroundRepeat: `no-repeat`,
        backgroundPosition: `center center`,
        backgroundSize: `cover`
      };
    return(
        <div className="pt-16">
            <div style={dropzoneStyle}>
                <div className="container mx-auto md:px-40 px-5">
                    <div className="py-7">
                        <h1 className="mb-3 text-2xl font-extrabold leading-none tracking-tight md:text-2xl lg:text-3xl dark:text-white capitalize pb-6">
                                {name}
                        </h1>
                        <Link href={`/map`} className="p-3 bg-pink-500 rounded-xl hover:bg-pink-600">
                            Go to Map
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}