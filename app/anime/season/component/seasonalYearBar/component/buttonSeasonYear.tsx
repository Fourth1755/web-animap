import Link from "next/link"
import './buttonSeasonYear.scss'
type ItemSeasonAndYear = {
    seasonal: string
    year: string
}
type Props = {
    item:ItemSeasonAndYear
    season: string
    year: string
}

let linkSeason = {
    color:`#FFFFFF`
}

let linkSeasonNow={
    color:`#FF1493`
}

export default function ButtonSeasonYear(props:Props) {
    const { item , season, year } = props
    return (
        <Link href={`/anime/season/${item.seasonal}/${item.year}`}>
            <div 
                style={item.seasonal == season&&item.year==year?linkSeasonNow:linkSeason}
                className='link-season'
                >
            {item.seasonal} {item.year}
        </div>
        </Link>

    )
}