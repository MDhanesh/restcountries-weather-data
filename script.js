let nav = document.createElement("nav");
nav.setAttribute("class", " text-center py-3");
nav.innerHTML = "<h4>Rest Countries & Weather Map </h4>";
document.body.append(nav);
/*-------------------------------------------------------------------------*/

//container
let container = document.createElement("div");
container.setAttribute("class", "container pt-3 text-center");
container.setAttribute("id", "container");
document.body.append(container);
//row
let row = document.createElement("div");
row.setAttribute("class", "row");
container.append(row);

async function restCountriesData() {
  var res = await fetch("https://restcountries.com/v3.1/all");
  let result = await res.json();
  //console.log(result);
  for (let i in result) {
    //console.log(result[i]);
    //column
    let column = document.createElement("div");
    column.setAttribute("class", "col-lg-4 col-md-6 col-sm-12");
    row.append(column);
    //card
    let card = document.createElement("div");
    card.setAttribute("class", "card ");
    column.append(card);
    //card header
    let cardheader = document.createElement("div");
    cardheader.setAttribute("class", "card-header  text-white text-uppercase");
    cardheader.innerHTML = `<h5>${result[i].name.common}</h5>`;
    card.append(cardheader);
    //box
    let box = document.createElement("div");
    box.setAttribute("class", "box m-3");
    card.append(box);
    //image
    let flag = document.createElement("img");
    flag.setAttribute("src", `${result[i].flags.png}`);
    flag.setAttribute("class", "image ");
    box.append(flag);
    //card-body
    let cardbody = document.createElement("div");
    cardbody.setAttribute("class", "card-body");
    card.append(cardbody);
    //list1
    let list1 = document.createElement("h6");
    list1.setAttribute("class", "card-text");
    list1.innerHTML = `Region: ${result[i].region}`;
    cardbody.append(list1);
    //list2
    let list2 = document.createElement("h6");
    list2.setAttribute("class", "card-text");
    list2.innerHTML = `Capital: ${result[i].capital}`;
    cardbody.append(list2);
    //list3
    let list3 = document.createElement("h6");
    list3.setAttribute("class", "card-text");
    list3.innerHTML = `Latitude: ${result[i].latlng[0]}`;
    cardbody.append(list3);
    //list4
    let list4 = document.createElement("h6");
    list4.setAttribute("class", "card-text");
    list4.innerHTML = `Longitude: ${result[i].latlng[1]}`;
    cardbody.append(list4);
    //list5
    let list5 = document.createElement("h6");
    list5.setAttribute("class", "card-text");
    list5.innerHTML = `Country Code: ${result[i].cca3}`;
    cardbody.append(list5);
    //button
    let btn = document.createElement("button");
    btn.setAttribute("type", "button");
    btn.setAttribute("class", "btn btn-outline-primary");
    btn.addEventListener("click", weather);
    btn.innerHTML = "Click for weather";
    cardbody.append(btn);
    //
    //
    ///weather data
    ///
    //
    let link = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${result[i].latlng[0]}&lon=${result[i].latlng[1]}&APPID=c9d8308ac7c40a9cb841dccdc17683c5`
    );
    let data1 = await link.json();
    console.log(data1);

    //weather function

    function weather() {
      document.getElementById("container").innerHTML = "";

      //create card
      //row
      let row = document.createElement("div");
      row.setAttribute("class", "row");
      container.append(row);
      //column
      let Column = document.createElement("div");
      Column.setAttribute("class", " col-lg-4 col-md-6");
      row.append(Column);
      //card
      let card = document.createElement("div");
      card.setAttribute("class", "card h-100 bg-info");
      card.setAttribute("style", "width: 18rem;");
      Column.append(card);
      //card header
      let cardheader = document.createElement("div");
      cardheader.setAttribute("class", "card-header bg-primary text-uppercase");
      cardheader.innerHTML = `<h5>${data1.name}</h5>`;
      card.append(cardheader);
      //image
      let flag = document.createElement("img");
      flag.setAttribute("src", `${result[i].flags.png}`);
      flag.setAttribute("class", "card-img-top");
      card.append(flag);
      //body
      let body = document.createElement("div");
      body.setAttribute("class", "card-body text-center");
      card.append(body);
      //list 1
      let list1 = document.createElement("h6");
      list1.innerText = `Weather : ${data1.weather[0].main}`;
      body.append(list1);
      //list 2
      let list2 = document.createElement("h6");
      list2.innerText = `Temperature : ${data1.main.temp}`;
      body.append(list2);
      //list 3
      let list3 = document.createElement("h6");
      list3.innerText = `Wind Speed : ${data1.wind.speed}`;
      body.append(list3);
      //reset button
      let button1 = document.createElement("button");
      button1.setAttribute("class", "btn btn-primary");
      button1.innerText = "Reset";
      body.append(button1);

      //Location reset
      button1.addEventListener("click", () => {
        location.reload();
      });
    }
  }
}
restCountriesData();
