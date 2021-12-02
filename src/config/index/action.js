export const getData=(id)=>{
    return dispatch=>{
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${id}&appid=70eefff73d1dfcf0e9ca4bfb45c3c9d2`)
    .then((response) => response.json())
    .then((json) => {
        dispatch({
            type:"DATAFROMAPI",
            api:json,
        })
        // console.log(json);
    })
}
}
