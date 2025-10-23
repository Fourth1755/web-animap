'use client'
import { useEffect, useState } from 'react';
const levelOfGame=[
  {level:0 , label: "Beginer" ,numberOfAnime: 0 ,color :"#1EC602"},
  {level:1 , label: "Beginer" ,numberOfAnime: 10 ,color :"#1EC602"},
  {level:2 , label: "Bronze" ,numberOfAnime: 20 ,color :"#1EB406"},
  {level:3 , label: "Master" ,numberOfAnime: 30 ,color :"#177708"},
  {level:4 , label: "Silver" ,numberOfAnime: 40 ,color :"#2ADCF4"},
  {level:5 , label: "Gold" ,numberOfAnime: 50 ,color :"#1CA0B1"},
  {level:6 , label: "Platinum" ,numberOfAnime: 60 ,color :"#1C7683"},
  {level:7 , label: "Diamond" ,numberOfAnime: 70 ,color :"#9228E5"},
  {level:8 , label: "Master" ,numberOfAnime: 80 ,color :"#6F20AC"},
  {level:9 , label: "Grandmaster" ,numberOfAnime: 90 ,color :"#47176C"} ,
  {level:10 , label: "Challenger" ,numberOfAnime: 100 ,color :"#19002D"}
]

type PropProgressBar ={
    totalAnime: number
}

const ProgressBar = (props:PropProgressBar) => {
    const { totalAnime } = props;
    const [level, setLevel] = useState(0);
    const [percent, setPercent] = useState(0)

    useEffect(()=>{
      let userLevel = 1
      for(let item of levelOfGame){
        if(item.numberOfAnime>=totalAnime){
          userLevel=item.level
          break
        }
      }
      setLevel(userLevel)
      const numberOfItem = 10 - (levelOfGame[userLevel].numberOfAnime - totalAnime)
      setPercent(numberOfItem)
    },[level])
    return (
      <div className='bg-black w-full rounded-2xl pb-3'>
        <div className="px-6 py-3">
          <h1 className="font-semibold text-4xl pb-3">{levelOfGame[level].label}</h1>
          <h2 className="text-gray-500">Viewed {totalAnime} item</h2>
          <div className="mt-4">
            <div className='bg-gray-900 rounded-3xl'>
              <div style={{width:`${(percent/10)*100}%`}} className="rounded-3xl text-center w-full h-12 bg-pink-500">
                <div className='pt-3 font-bold' >{`${ ((percent/10)*100) }%`}</div>
              </div> 
            </div>
        </div>
        </div>
      </div>
    );
  };
  
  export default ProgressBar;