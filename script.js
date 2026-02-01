const creaturesLink = "https://rpg-creature-api.freecodecamp.rocks/api/creatures"

const searchButton = document.getElementById('search-button')
const creatureName = document.getElementById('creature-name')
const creatureId = document.getElementById('creature-id')
const height = document.getElementById('height')
const weight = document.getElementById('weight')
const types = document.getElementById('types')
const hp = document.getElementById('hp')
const attack = document.getElementById('attack')
const defense = document.getElementById('defense')
const specialAttack = document.getElementById('special-attack')
const specialDefense = document.getElementById('special-defense')
const speed = document.getElementById('speed')
const searchInput = document.getElementById('search-input')

const fetchCreature = async () => {
  try {
    
    const nameOrId = searchInput.value.toLowerCase();
    const res = await fetch(`https://rpg-creature-api.freecodecamp.rocks/api/creature/${nameOrId}`);
    
    if (!res.ok) {
      alert("Creature not found");
      return;
    }

    const data = await res.json();
    update(data);
  } catch (err) {
    console.log(err);
    alert("Creature not found");
  }
};

searchButton.addEventListener("click", () => {
  fetchCreature();
});

const update = (creature) => {
  
  types.innerHTML = '';


  creatureName.innerText = creature.name.toUpperCase();
  creatureId.innerText = `#${creature.id}`;
  weight.innerText = `Weight: ${creature.weight}`;
  height.innerText = `Height: ${creature.height}`;
  
 
  hp.innerText = creature.stats[0].base_stat;
  attack.innerText = creature.stats[1].base_stat;
  defense.innerText = creature.stats[2].base_stat;
  specialAttack.innerText = creature.stats[3].base_stat;
  specialDefense.innerText = creature.stats[4].base_stat;
  speed.innerText = creature.stats[5].base_stat;

  
  creature.types.forEach(typeObj => {
    const typeElement = document.createElement('span');
    typeElement.innerText = typeObj.name.toUpperCase();
    types.appendChild(typeElement);
  });
}
