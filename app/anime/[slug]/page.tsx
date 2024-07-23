import "./page.scss"
async function getAnime(id:number){
    const response = await fetch(`https://669630670312447373c173cf.mockapi.io/animap/animes/${id}`)
    
    if(!response.ok){
        throw new Error('cannot fetch anime')
    }

    return response.json()
}

export default async function Page({params}:any){
    //const anime = await getAnime(params.slug)
    const anime = {
        "id":1,
        "name":"Sword art online",
        "year":2012,
        "studios":"A-1 Pictures",
        "seasonal":"Summer",
        "episodes":25,
        "image":"https://cdn.myanimelist.net/images/anime/11/39717.jpg",
        "trailer":"https://www.youtube.com/embed/6ohYYtxfDCg",
        "trailer_start":"",
        "wallpaper":"https://wallpaperaccess.com/full/1122002.jpg",
        "duration":"23 min. per ep.",
        "score":7.2
    }
    return (
        <div>
            <div className="wallpaper" style={{backgroundImage: `url(${anime.wallpaper})`}}>
                <h1>{anime.name}</h1>
                <div className="wallpaper-container">
                <div  className="wallpaper-container-box">
                    <img src={anime.image}/>
                    <button>
                        Add to List
                    </button>
                </div>
                <div  className="wallpaper-container-box">
                <iframe 
                    width="560" 
                    height="315" 
                    id="player" 
                    src={`${anime.trailer}`} 
                    title="YouTube video player" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                </div>
                </div>
            </div>
           
        </div>
    )
}