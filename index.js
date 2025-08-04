const items = document.getElementsByClassName("magicCounter");

let seed = parseInt(new Date().toISOString().slice(0, 10).replace(/-/g, ''))
const rate = [1.2, 0.69, 0.3, 0.01]

if (items.length !== rate.length) throw Error("Rate array should be as long as number of counters");

setInterval(() => {
    for (let i = 0; i< items.length; i++){
        seed = seed ^ i;
        seed ^= seed << 13;
        seed ^= seed >>> 17;
        seed ^= seed << 5;
        seed = (seed >>> 0) % 60;

        const date = new Date();
        const base = date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds();
        for (let i = 0; i < items.length; i++) {
            items[i].innerHTML = (Math.floor(base * rate[i])).toString();
        }
    }
}, 1000)

const pics = document.getElementsByClassName("pic");
