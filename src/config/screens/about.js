import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

export default function About() {
    const data = useSelector((e) => e)
    // console.log(data.api);
    // console.log(window.location);
    const arr = []
    arr.push(data.api)
    console.log(arr);
    // useEffect(()=>{
    // },[api])

    return (
        <div className="about">
            <div className="about2">
                <div className="about3">
                    {arr.map((e, i) => {
                        return (
                            <>
                                <h4>Current Weather</h4>
                                <div className="card">
                                    <div className="card2">
                                        <p>{e?.main?.temp}F</p>
                                        <p>RealFeel®{e?.main?.feels_like}</p>
                                        {e?.weather&&(e?.weather[0]?.main.toLowerCase()==="clouds")? 
                                        <img src="https://www.accuweather.com/images/weathericons/12.svg" />
                                        :e?.weather&&(e?.weather[0]?.main.toLowerCase()==="rain")?
                                        <img src="https://www.accuweather.com/images/weathericons/12.svg" />
                                        :e?.weather&&(e?.weather[0]?.main.toLowerCase()==="snow")?
                                        <img src="https://www.accuweather.com/images/weathericons/12.svg" />
                                        :
                                        e?.weather&&(e?.weather[0]?.main.toLowerCase()==="clear")?
                                        <img src="https://www.accuweather.com/images/weathericons/33.svg" />:null}
                                        {(e?.weather)?
                                        <p>{e?.weather[0]?.main}</p >
                                        :null}
                                    </div>
                                    <div className="card3">
                                        <p>Wind Gusts{e?.wind?.gust}</p>
                                        <p>{}</p>
                                    </div>
                                </div>
                            </>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
