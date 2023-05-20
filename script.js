let arr = [
    {
        id:1,
        name:"John",
        age:"18",
        profession:"Developer"
    },
    {
        id:2, 
        name:"Jack",
        age:"20", 
        profession:"Developer"
    },
    {
        id:3,
        name:"Karen", 
        age:"19",
        profession:"Admin"
    }
];

function addUser(User){
    arr.push(User);
   
    let cardContainer= document.createElement("div");
        cardContainer.className="card-container";

        let idCard = document.createElement("div");
        idCard.className = "id-card";
        idCard.innerText = User.id + ".";

        let nameCard = document.createElement("div");
        nameCard.className = "name-card";
        nameCard.innerText =  "Name : " + User.name;

        let professsionCard = document.createElement("div");
        professsionCard.className = "profession-card";
        professsionCard.innerText = "Profession : " + User.profession;

        let ageCard = document.createElement("div");
        ageCard.className = "age-card";
        ageCard.innerText = "Age : " + User.age;

        cardContainer.append(idCard);
        cardContainer.append(nameCard);
        cardContainer.append(professsionCard);
        cardContainer.append(ageCard);

        let display = document.getElementsByClassName("cards-list")[0];
        display.append(cardContainer);

}

function displayUser(){

    for(let i=0; i<arr.length; i++){
        
        let cardContainer= document.createElement("div");
        cardContainer.className="card-container";

        let idCard = document.createElement("div");
        idCard.className = "id-card";
        idCard.innerText = arr[i].id + ".";

        let nameCard = document.createElement("div");
        nameCard.className = "name-card";
        nameCard.innerText =  "Name : " + arr[i].name;

        let professsionCard = document.createElement("div");
        professsionCard.className = "profession-card";
        professsionCard.innerText = "Profession : " + arr[i].profession;

        let ageCard = document.createElement("div");
        ageCard.className = "age-card";
        ageCard.innerText = "Age : " + arr[i].age;

        cardContainer.append(idCard);
        cardContainer.append(nameCard);
        cardContainer.append(professsionCard);
        cardContainer.append(ageCard);

        let display = document.getElementsByClassName("cards-list")[0];
        display.append(cardContainer);

    }
}

function filter(profession){

    let display = document.getElementsByClassName("cards-list")[0];
    display.innerHTML = "";

    for(let i=0; i<arr.length; i++){
        
        let cardContainer= document.createElement("div");
        cardContainer.className="card-container";

        let idCard = document.createElement("div");
        idCard.className = "id-card";
        idCard.innerText = arr[i].id + ".";

        let nameCard = document.createElement("div");
        nameCard.className = "name-card";
        nameCard.innerText =  "Name : " + arr[i].name;

        let professsionCard = document.createElement("div");
        professsionCard.className = "profession-card";
        professsionCard.innerText = "Profession : " + arr[i].profession;

        let ageCard = document.createElement("div");
        ageCard.className = "age-card";
        ageCard.innerText = "Age : " + arr[i].age;

        cardContainer.append(idCard);
        cardContainer.append(nameCard);
        cardContainer.append(professsionCard);
        cardContainer.append(ageCard);

        let display = document.getElementsByClassName("cards-list")[0];

        if(profession==arr[i].profession){
            display.append(cardContainer);
        }

    }

}

displayUser();

let filterButton = document.getElementById("filter-button");

function filterButtonClicked(){

    let dropdown = document.getElementById("profession_option_id");
    
    let value = dropdown.value;

    if(value=="Profession"){
        alert("Please select a profession before clicking the button")
    }
    else{
        filter(value);
    }
}

function addUserButtonClicked(){
    let name = document.getElementById("name").value;
    let profession = document.getElementById("profession").value;
    let age = document.getElementById("age").value;

    if(name=="" || age == ""){
        alert("Invalid Inputs : Please check");
    }
    else{

        console.log(name + profession + age);

        let newUser = {
            id : arr.length + 1 ,
            name:name,
            age:age,
            profession:""

        }   

        if(profession == "Developer" || profession == "developer") {
            newUser.profession="Developer"
            addUser(newUser);
        }

        else if(profession == "Admin" || profession == "admin"){
            newUser.profession="Admin"
            addUser(newUser);
        }

        else{
            alert("Plese Enter valid profession : Developer / Admin")
        }

    }

}
