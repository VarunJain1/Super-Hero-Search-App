if (localStorage.getItem("favourites")==null) {
  localStorage.setItem("favourites",JSON.stringify([]));
}else{
  var arr = JSON.parse(localStorage.getItem("favourites"));
}
function showDetails(idnumber) {
  localStorage.setItem("id", idnumber);
  window.location = "HeroDetails.html";
}
function addFavourite(id) {
  if (!arr.includes(id) == true) {
    arr.push(id);
    localStorage.setItem("favourites", JSON.stringify(arr));
    alert("Your hero has been added to favourites")
  }else{
    alert("Your hero is already present in favourites")
  }
}
const showCorrespondingHeros = () => {
  let inputValue = document.getElementById("my-search").value;
  fetch(
    `https://www.superheroapi.com/api.php/586069776286026/search/${inputValue}`
  )
    .then((response) => response.json())
    .then((data) => {
      let html = "";
      if (data.results) {
        data.results.forEach((element) => {
          html += `
            <div class="card" style="width: 18rem;">
              <img class="card-img-top" onclick="showDetails(${element.id})" src="${element.image.url}">
              <div class="card-body">
                  <h5 class="card-title" onclick="showDetails(${element.id})">${element.name}</h5>
                  <span><i id="${element.id}" class="fa-solid fa-plus icon" onclick="addFavourite(${element.id})"></i></span>
              </div>
            </div>
                `;
        });
      } else {
        html += `
        <div class="page-wrap d-flex flex-row align-items-center">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-12 text-center">
                    <span class="display-1 d-block">404</span>
                    <div class="mb-4 lead">The hero you are looking for was not found.</div>
                </div>
            </div>
        </div>
    </div>
        `;
      }
      document.getElementById("cards-group").innerHTML = html;
    });
};