 async function pizza(){
    const response = await fetch('https://forkify-api.herokuapp.com/api/search?q=pizza');
    const data= await response.json();
    const array = data.recipes;
    const pizzaInfo = array.map(function(ele){
     return `
      <div class="info">
      <h2> ${ele.title}</h2>
      <img src="${ele.image_url}" alt="${ele.title}">
      </div>
     `
     
    }).join('');
    document.querySelector(".pizzainfo").innerHTML = pizzaInfo;
}

pizza();