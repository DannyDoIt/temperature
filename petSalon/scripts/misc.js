        {//anonymous obj
            name:"Scooby",
            age:99,
            gender:"Male",
            service:"Grooming"
        },
        {
            name:"Scrappy",
            age:99,
            gender:"Male",
            service:"Grooming"
        },
        {
            name:"Pixie",
            age:99,
            gender:"Female",
            service:"Grooming"
        }

        
console.log(pets[1].name);

function displayNames(){
    let names;
    //suggestions: use a loop
    for(let i=0;i<3;i++){
        names+='<p> ${petSalon.pets[i].name} </p>';
        console.log(names);
    }
    document.getElementById("petNames").innerHTML=names;
}

function countPets(){
    console.log(petSalon.pets.length);
}
