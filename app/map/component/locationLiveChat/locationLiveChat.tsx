'use client'
export default function LocationLiveChat() {
    const chatList = [
        {name:"alya ",image_url:"https://i1.sndcdn.com/artworks-H5k0ocdBTWfrUudP-oL76EQ-t500x500.jpg",message:"Hi Form Japan"},
        {name:"Yuki",image_url:"https://www.escapistmagazine.com/wp-content/uploads/2024/09/AlyaFeelingsRussian-Yuki-Ep11.jpg",message:"Hello"},
        {name:"alya ",image_url:"https://i1.sndcdn.com/artworks-H5k0ocdBTWfrUudP-oL76EQ-t500x500.jpg",message:"Be Happy"},
        {name:"Yuki",image_url:"https://www.escapistmagazine.com/wp-content/uploads/2024/09/AlyaFeelingsRussian-Yuki-Ep11.jpg",message:"Yo"},
        {name:"alya ",image_url:"https://i1.sndcdn.com/artworks-H5k0ocdBTWfrUudP-oL76EQ-t500x500.jpg",message:"Yo"}
    ]
    return (
    <div className="pt-24 h-screen">
        <div className="bg-black bg-opacity-50 w-72 py-4 rounded-lg px-3 h-full flex flex-col justify-between">
            <div>
                <h1 className="text-2xl py-2 pl-2">Live Chat</h1>
                {chatList.map((item, index)=>(
                    <div key={index} className="flex py-2">
                        <img
                            className="w-9 h-9 rounded-full object-cover shadow-xl shadow-gray-900/50"              
                            src={item.image_url}
                        />
                        <div className="flex items-center">
                            <h1 className="text-gray-600 font-semibold px-2">{item.name}</h1>
                            <p>{item.message}</p>
                        </div>
                    </div>
                    ))}
            </div>
            <div>
                <input 
                    className="w-full mb-3 bg-gray-700 h-7 rounded-md"
                    placeholder="  Chat ..."/>
            </div>
        </div>
    </div>
    )
}