
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    const ramdom = getRandomInt(1, 152);
    fetchData(ramdom);
  });
  
  const fetchData = async (id) => {
    try {  
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const data = await res.json();
  
      console.log(data);
  
      const pokemon = {
        img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`,
        imgJuego: data.sprites.front_default,
        imgCvg: data.sprites.other.dream_world.front_default,
        nombre: data.name,
        experiencia: data.base_experience,
        hp: data.stats[0].base_stat,
        ataque: data.stats[1].base_stat,
        defensa: data.stats[2].base_stat,
        especial: data.stats[3].base_stat,
      };
      document.getElementById("buscar").onclick=()=>{
        document.getElementById("pantalla").innerHTML="<br>Numero:"+id+"<img src="+data.sprites.other.dream_world.front_default+" class='imgPokemon'>";
        document.getElementById("nombrePokemon").innerHTML=data.name+"--> Experiencia "+data.base_experience;
        console.log(data.sprites.other.dream_world.front_default);
        setTimeout(function(){
            location.reload();
         }, 3000);
        
    }
    } catch (error) {
      console.log(error);
    }

    
  };
  
  
  