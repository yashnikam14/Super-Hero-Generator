const access_token="836711611458191";

const apiKey = `https://superheroapi.com/api.php/${access_token}`;
const heroName = document.getElementById('heroName');
const heroSearch = document.getElementById('heroSearch');
const heroBtn = document.getElementById('heroBtn')


const getHero = (id)=>{
    fetch(`${apiKey}/${id}`)
    .then(response => response.json())
    .then(json =>{
        getStats[json];
        console.log(json)
        console.log(json.id)
        console.log(json.name);
        document.getElementById('img').innerHTML = `<img src='${json.image.url}'></img>`;
        document.getElementById('heroid').innerHTML=`<h4 class="text-center my-3">Hero Id ->  ${json.id}</h4>`
        document.getElementById('name').innerHTML = `<h4 class="text-center my-4">Name -> ${json.name}</h4>`
        
        document.getElementById('stats').innerHTML = `<h4 class="text-center my-4">${getStats(json)}</h4>`
        
    });
}


const getSuperHero = (name)=>{
    fetch(`${apiKey}/search/${name}`)
    .then(response => response.json())
    .then(json =>{
        const hero = json.results[0];
        getStats[hero];
        console.log(hero);
        document.getElementById('img').innerHTML = `<img src='${hero.image.url}'></img>`;
        document.getElementById('heroid').innerHTML=`<h4 class="text-center my-3">Hero Id ->  ${hero.id}</h4>`
        document.getElementById('name').innerHTML = `<h4 class="text-center my-4">Name -> ${hero.name}</h4>`
        document.getElementById('stats').innerHTML = `<h4 class="text-center my-4">${getStats(hero)}</h4>`
        
    });
}
const heroRandId = () =>{
    
    return Math.ceil(Math.random()*731);
}
const getStats = (character)=>{
    const stats = Object.keys(character.powerstats).map(stat => {
        return `<p>${stat.toUpperCase()}: ${character.powerstats[stat]}</p>`
    })
    return stats.join('');
    console.log(stats.join(''));
}

heroBtn.onclick = () =>{
    const idOfHero = heroRandId();;
    
    heroName.value='';
    getHero(idOfHero);
    
    
}

heroSearch.onclick=()=>{
    const nameOfHero = heroName.value;
    console.log(nameOfHero);
    getSuperHero(nameOfHero);
}


