import Link from "next/link";

type Props = {
    name: string
    link: string
}

export default function WallpaperAnimeMain(props:Props) {
    const { link,name } = props
    let dropzoneStyle = {
        width: `100%`,
        height: `510px`,
        backgroundRepeat: `no-repeat`,
        backgroundPosition: `center center`,
        backgroundSize: `cover`
      };
    return(
        <div className="pt-16">
            <div 
                className="w-full xl:h-[510] lg:h-80 h-60 bg-cover bg-center bg-no-repeat"
                style={{backgroundImage: `url(${link})`}}>
                <div className="container mx-auto md:px-40 px-5">
                    <div className="py-7">
                        <h1 className="mb-3 text-2xl font-extrabold leading-none tracking-tight md:text-2xl lg:text-3xl capitalize pb-6 text-white">
                                {name}
                        </h1>
                        <Link href={`/map`} className="p-3 bg-pink-500 rounded-xl hover:bg-pink-600 text-white">
                            Go to Map
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}