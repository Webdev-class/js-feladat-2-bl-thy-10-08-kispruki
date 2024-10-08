
const APIAdress = 'https://archive-api.open-meteo.com/v1/archive?';


async function f1 (lat, long, timeStr) {
    let addr = APIAdress + `latitude=${lat}&longitude=${long}` +
        `&start_date=${timeStr}&end_date=${timeStr}&hourly=temperature_2m`;

    const resp = await fetch(addr)
    .then(data=>data.json());
    
    let arr = resp.hourly.temperature_2m;
    let s = 0;
    arr.forEach(element => {
        s+=element;
    });

    return Math.floor(s/arr.length);
}

module.exports = f1;