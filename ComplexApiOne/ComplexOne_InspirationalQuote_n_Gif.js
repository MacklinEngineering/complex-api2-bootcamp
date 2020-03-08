document.getElementById("GenerateButton").addEventListener("click", runBothFunctions) //getGif,         //with an anonomous function call (fat arrow notation)

function getGif(){
  fetch("https://api.imgflip.com/get_memes")
    .then(res => res.json())
    .then(gif => {
      console.log(gif)
      const gifElement = document.querySelector("iframe");
      let randomNumber = Math.floor(Math.random() * Math.floor(gif.data.memes.length));
      console.log(randomNumber)

      gifElement.src = gif.data.memes[randomNumber].url
    })



    .catch(err => {
      console.log(err.message)
    //   alert("sorry, there are no results for your search")
    });

};


function getQuote(){
  fetch("https://quotesondesign.com/wp-json/wp/v2/posts/?orderby=rand")
  .then(res => res.json())
  .then(quote =>{
    console.log(quote)
    let quoteFromObject = document.querySelector("#pageQuotes");
    let randomNumber = Math.floor(Math.random() * Math.floor(quote.length))

    quoteFromObject.textContent = quote[randomNumber].content.rendered;
    var regex = /(<([^>]+)>)/ig 
    ,   result = quoteFromObject.textContent.replace(regex, "");

    console.log(result);
    // console.log(quoteFromObject.textContent)
    // let authorFromObject = quote[randomNumber].title.rendered;

    document.querySelector("#pageQuotes").textContent = ` ${result}`;
                                                          //quoteFromObject.textContent
    // document.querySelector("pageGifs").textContent = `By: ${authorFromObject}`;


  })

  // var regex = /(<([^>]+)>)/ig
  // ,   result = quoteFromObject.textContent.replace(regex, "");
  //
  // console.log(result);
  // .catch(err => {
  //   console.log(err.message)
  // //   alert("sorry, there are no results for your search")
  // });
};

function runBothFunctions(){
  getQuote()
  getGif()
};



// var regex = /(<([^>]+)>)/ig
// ,   body = "<p>test</p>"
// ,   result = body.replace(regex, "");
//
// console.log(result);




// document.getElementById("GenerateButton").addEventListener("click", getGif);

// document.getElementById("GenerateButton").addEventListener("click", getGif()) //with an anonomous function call (fat arrow notation)






// const grabRandomBeer = () => {
//   // Fetching random beer data from API
//   fetch("https://api.punkapi.com/v2/beers/random")
//     .then(response => response.json())
//     .then(beers => {
//       // console.log("Hey", beers)
//       // API returns an array containg only one element: we get it
//       const beer = beers[0];
//       // Creating DOM element for some beer properties
//       const nameElement = document.createElement("h2");
//       nameElement.textContent = beer.name;
//       const descriptionElement = document.createElement("p");
//       descriptionElement.textContent = beer.description;
//
//       const volumeElement = document.createElement("p");
//       volumeElement.textContent = beer.volume.value; //+ `${unit}`;
//       // Clear previous beer data
//       const beerElement = document.getElementById("beer");
//       beerElement.innerHTML = "";
//       // Add beer info to the page
//       beerElement.appendChild(nameElement);
//       beerElement.appendChild(descriptionElement);
//       beerElement.appendChild(volumeElement);
//     })
//     .catch(err => {
//       console.error(err.message);
//     });
// };
//
// // Grab a new beer when clicking the button
// document.getElementById("grabButton").addEventListener("click", grabRandomBeer);
