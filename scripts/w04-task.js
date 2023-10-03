/* LESSON 3 - Programming Tasks */

/* Profile Object  */

let myProfile = {
    name: "Samuel Imonah",
    photo: "images/myself.jpg",
    favoriteFoods: ["Rice", "Spaghetti", "Pizza", "Yam and egg sauce", "Chocolate"],
    hobbies: ["Science Movies", "Table Tennis", "Reading"],
    placesLived: [],

};


/* Populate Profile Object with placesLive objects */

myProfile.placesLived.push({
    place: "Ibadan, Nigeria",
    length: "11 months"
})

myProfile.placesLived.push(
    {
        place: "Lagos, Nigeria",
        length: "9 months"
    }
)

myProfile.placesLived.push(
    {
        place: "Tema, Ghana",
        length: "2 weeks"
    }
)

/* DOM Manipulation - Output */
document.querySelector("#name").textContent = myProfile.name;

/* Name */

/* Photo with attributes */
document.querySelector("#photo").src = myProfile.photo;
document.querySelector("#photo").alt = myProfile.photo;

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement("li");
    li.textContent = food;
    document.querySelector("#favorite-foods").appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let ul = document.createElement("ul");
    ul.textContent = hobby;
    document.querySelector("#hobbies").appendChild(ul);
});

/* Places Lived DataList */
myProfile.placesLived.forEach(place => {
    let dt = document.createElement("dt");
    dt.textContent = place.place;

    let dd = document.createElement("dd");
    dd.textContent = place.length;

    document.querySelector("#places-lived").appendChild(dt);
    document.querySelector("#places-lived").appendChild(dd);
});

