const promise = await fetch("https://learnwebcode.github.io/pet-adoption-data/pets.json");
const pets = await promise.json();

console.log(pets);

const node = document.querySelector(".animal-card");
console.log(node);
const wrapper = document.createElement("div")
console.log(wrapper);



export function handleClick(animal)  {
   return (pets.forEach((pet) => {
        if(animal === pet.species){
            const clone  =  node.content.cloneNode(true);  
      console.log(clone);
      clone.querySelector("h1").textContent = pet.name;
      clone.querySelector(".species").textContent = pet.species;
      clone.querySelector(".description").textContent = pet.description
      const img = clone.querySelector("img")
      img.src = pet.photo;
      img.alt = `A ${pet.species} named ${pet.name}`

      const age = new Date().getFullYear() - pet.birthYear;
      clone.querySelector(".birthyear").textContent = `${age} year old `;
      clone.querySelector(".adopt-btn").textContent = `Adopt ${pet.name}`;
      clone.querySelector(".adopt-btn").setAttribute("href" ,`https://learnwebcode.github.io/pet-adoption-data/pets/${pet.id}/`);
      

      wrapper.appendChild(clone);
        }else if (animal === "allAnimals") {
            const clone  =  node.content.cloneNode(true);  
            console.log(clone);
            clone.querySelector("h1").textContent = pet.name;
            clone.querySelector(".species").textContent = pet.species;
            clone.querySelector(".description").textContent = pet.description
            const img = clone.querySelector("img")
            img.src = pet.photo;
            img.alt = `A ${pet.species} named ${pet.name}`
      
            const age = new Date().getFullYear() - pet.birthYear;
            clone.querySelector(".birthyear").textContent = `${age} year old `;
            clone.querySelector(".adopt-btn").textContent = `Adopt ${pet.name}`;
            clone.querySelector(".adopt-btn").setAttribute("href" ,`https://learnwebcode.github.io/pet-adoption-data/pets/${pet.id}/`);
            
      
            wrapper.appendChild(clone);
        }
        document.querySelector(".animals").appendChild(wrapper);
   }))
}



pets.forEach(pet => {
      const clone  =  node.content.cloneNode(true);  
      console.log(clone);
      clone.querySelector("h1").textContent = pet.name;
      clone.querySelector(".species").textContent = pet.species;
      clone.querySelector(".description").textContent = pet.description
      const img = clone.querySelector("img")
      img.src = pet.photo;
      img.alt = `A ${pet.species} named ${pet.name}`

      const age = new Date().getFullYear() - pet.birthYear;
      clone.querySelector(".birthyear").textContent = `${age} year old `;
      clone.querySelector(".adopt-btn").textContent = `Adopt ${pet.name}`;
      clone.querySelector(".adopt-btn").setAttribute("href" ,`https://learnwebcode.github.io/pet-adoption-data/pets/${pet.id}/`);
      

      wrapper.appendChild(clone);

});
document.querySelector(".animals").appendChild(wrapper);

window.handleClick = handleClick;