fetch(
  `https://www.superheroapi.com/api.php/586069776286026/${localStorage.getItem(
    "id"
  )}`
)
  .then((response) => response.json())
  .then((data) => {
    document.getElementById("img").setAttribute("src", `${data.image.url}`);
    document.getElementById("name").innerHTML = `${data.name}`;
    document.getElementById("full-name").append(`${data.biography["full-name"]}`);
    document.getElementById("place").append(`${data.biography["place-of-birth"]}`);
    document.getElementById("first-appearance").append(`${data.biography["first-appearance"]}`);
    document.getElementById("publisher").append(`${data.biography.publisher}`);
    document.getElementById("alignment").append(`${data.biography.alignment}`);
    document.getElementById("intelligence").append(`${data.powerstats.intelligence}`);
    document.getElementById("strength").append(`${data.powerstats.strength}`);
    document.getElementById("speed").append(`${data.powerstats.speed}`);
    document.getElementById("power").append(`${data.powerstats.power}`);
    document.getElementById("durability").append(`${data.powerstats.durability}`);
    document.getElementById("combat").append(`${data.powerstats.combat}`);
    document.getElementById("gender").append(`${data.appearance.gender}`);
    document.getElementById("race").append(`${data.appearance.race}`);
    document.getElementById("height").append(`${data.appearance.height}`);
    document.getElementById("weight").append(`${data.appearance.weight}`);
    document.getElementById("eye-color").append(`${data.appearance["eye-color"]}`);
    document.getElementById("hair-color").append(`${data.appearance["hair-color"]}`);
    document.getElementById("occupation").append(`${data.work.occupation}`);
    document.getElementById("base").append(`${data.work.base}`);
    document.getElementById("relatives").append(`${data.connections.relatives}`);
    document.getElementById("group-affiliation").append(`${data.connections["group-affiliation"]}`);
  });

