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
            {arr.map((e, i) => {
                return (
                    <>
                        <div className="about2">
                            <div className="about3">
                                <h4 className="aboutcardWeather">Current Weather</h4>
                                <div className="card">
                                    <div className="card2">
                                        <div className="cardWeatherImage">
                                            <div className="imgFunction">
                                                {e?.weather && (e?.weather[0]?.main.toLowerCase() === "clouds") ?
                                                    <img className="card2img" src="https://www.accuweather.com/images/weathericons/06.svg" />
                                                    : e?.weather && (e?.weather[0]?.main.toLowerCase() === "rain") ?
                                                        <img className="card2img" src="https://www.accuweather.com/images/weathericons/12.svg" />
                                                        : e?.weather && (e?.weather[0]?.main.toLowerCase() === "snow") ?
                                                            <img className="card2img" src="https://thumbs.dreamstime.com/b/unique-shape-blue-snowflake-symmetrical-logo-snow-147571122.jpg" />
                                                            :
                                                            e?.weather && (e?.weather[0]?.main.toLowerCase() === "clear") ?
                                                                <img className="card2img" src="https://www.accuweather.com/images/weathericons/33.svg" /> : null}
                                                {(e?.weather) ?
                                                    <p className="weatherMainP">{e?.weather[0]?.main}</p >
                                                    : null}
                                            </div>
                                            <div className="divFeelsReal">
                                                <p className="tempP">{e?.main?.temp}F</p>
                                                <p className="RealFeelp">RealFeel®{e?.main?.feels_like}F</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card3">
                                        <div className="cardWind">
                                            <p className="cardWindP">Air Quality</p>
                                            {(e?.wind?.deg >= 200) ?
                                                <h4 className="CardWindH4" style={{ color: "#9831FF" }}>Dangerous</h4>
                                                : (e?.wind?.deg >= 100) ?
                                                    <h4 className="CardWindH4" style={{ color: "red" }}>Unhealthy</h4>
                                                    : (e?.wind?.deg >= 50) ?
                                                        <h4 className="CardWindH4" style={{ color: "#bd7215" }}>Moderate </h4>
                                                        : (e?.wind?.deg >= 0) ?
                                                            <h4 className="CardWindH4" style={{ color: "green" }}>Excellent </h4>
                                                            : null
                                            }
                                        </div>
                                        <hr />
                                        <div className="cardWind">
                                            <p className="cardWindP">Wind Gusts</p>
                                            <p className="cardWindP">{e?.wind?.gust}</p>
                                        </div>
                                        <hr />
                                        <div className="cardSpeed">
                                            <p className="cardSpeedP">Speed</p>
                                            <p className="cardSpeedP">{e?.wind?.speed}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="about3">
                                <h4 className="aboutcardWeather">CURRENT AIR QUALITY</h4>
                                <div className="card">
                                    <div className="card4">
                                        <h4 className="Card4H4">{e?.wind?.deg}</h4>
                                    </div>
                                    <div className="card5">
                                        <div className="cardWind">
                                            {(e?.wind?.deg >= 200) ?
                                                <div className="CardWindParent">
                                                    <h4 className="CardWindH4" style={{ color: "#9831FF" }}>Dangerous</h4>
                                                    <p>Any exposure to the air, even for a few minutes, can lead to serious health effects on everybody. Avoid outdoor activities.</p>
                                                </div>
                                                : (e?.wind?.deg >= 100) ?
                                                    <div className="CardWindParent">
                                                        <h4 className="CardWindH4" style={{ color: "red" }}>Unhealthy</h4>
                                                        <p>Any exposure to the air, even for a few minutes, can lead to serious health effects on everybody. Avoid outdoor activities.</p>
                                                    </div>
                                                    : (e?.wind?.deg >= 50) ?
                                                        <div className="CardWindParent">
                                                            <h4 className="CardWindH4" style={{ color: "#bd7215" }}>Moderate </h4>
                                                            <p>The air quality is generally acceptable for most individuals. However, sensitive groups may experience minor to moderate symptoms from long-term exposure.</p>
                                                        </div>
                                                        : (e?.wind?.deg >= 0) ?
                                                            <div className="CardWindParent">
                                                                <h4 className="CardWindH4" style={{ color: "green" }}>Excellent </h4>
                                                                <p>The air quality is ideal for most individuals; enjoy your normal outdoor activities</p>
                                                            </div>
                                                            : null
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="about3">
                                <h4 className="aboutcardWeather">Temperature</h4>
                                <div className="card">
                                    <div className="card6">
                                        <div className="cardWind">
                                            <p className="cardWindP">feels like</p>
                                            <p className="cardWindP">{e?.main?.feels_like}</p>
                                        </div>
                                        <hr />
                                        <div className="cardWind">
                                            <p className="cardWindP">Pressure</p>
                                            <p className="cardWindP">{e?.main?.pressure}</p>
                                        </div>
                                        <hr />
                                        <div className="cardWind">
                                            <p className="cardWindP">Humidity</p>
                                            <p className="cardWindP">{e?.main?.humidity}</p>
                                        </div>
                                        <hr />
                                        <div className="cardWind">
                                            <p className="cardWindP">Ground level</p>
                                            <p className="cardWindP">{e?.main?.grnd_level}</p>
                                        </div>
                                    </div>
                                    <div className="card7">
                                        <div className="cardWind">
                                            <p className="cardWindP">Sea level</p>
                                            <p className="cardWindP">{e?.main?.sea_level}</p>
                                        </div>
                                        <hr />
                                        <div className="cardWind">
                                            <p className="cardWindP">Temperature</p>
                                            <p className="cardWindP">{e?.main?.temp}</p>
                                        </div>
                                        <hr />
                                        <div className="cardWind">
                                            <p className="cardWindP">Temp max</p>
                                            <p className="cardWindP">{e?.main?.temp_max}</p>
                                        </div>
                                        <hr />
                                        <div className="cardWind">
                                            <p className="cardWindP">Temp min</p>
                                            <p className="cardWindP">{e?.main?.temp_min}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )
            })}
        </div>
    )
}
