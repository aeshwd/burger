const sr = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: "2500",
    delay: "300",
})

sr.reveal(`.hero`);
sr.reveal(`.main-img`, {delay: 1000, distance: '100px', duration: 1300, origin: 'bottom'})
sr.reveal(`.tomato`, {delay: 1200, interval: 100, origin: 'left'})
sr.reveal(`.re`, {delay: 800, interval: 100, origin: 'right'})
sr.reveal(`.ing`, {delay:1000, interval: 100, origin: 'left'})



// JavaScript for triggering animation when steps come into view
document.addEventListener('DOMContentLoaded', () => {
    const steps = document.querySelectorAll('.step');
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.2 });
  
    steps.forEach(step => {
      observer.observe(step);
    });
  });


  /* Products */

  


/* Products list */

const products = [
  { id: 1, name: "Firecracker McCrispy", category: "Burgers", price: "5.99" , imageUrl: 'images/McCrispy.png', des: "Crispy Jalapenos Ingredients: Jalapeno peppers, Enriched flour (wheat flour, niacin, reduced iron, thiamin mononitrate, riboflavin, folic acid), Vegetable oil (sunflower and/or safflower and/or canola), Salt. Contains: Wheat. Creamy Red Jalapeno Sauce Ingredients: Soybean oil and/or canola oil, Sugar, Water, Red jalapeno puree (red jalapeno peppers, salt, acetic acid), Vinegar, Liquid egg yolk, Sesame oil, Dehydrated onion, Salt, Dehydrated garlic, Modified corn starch, Aleppo chili pepper, Concentrated lemon juice, Natural flavours, Xanthan gum, Propylene glycol alginate, Shiitake mushroom extract powder (maltodextrin, shiitake extract, salt), Potassium sorbate, Sodium benzoate, Calcium disodium EDTA. Contains: Egg. Lettuce Ingredients: Shredded iceberg lettuce. Potato Bun Ingredients: Sugars (sugar, honey, dextrose), Enriched wheat flour, Water, Yeast, Potato flour, Wheat gluten, Vegetable oil (soybean, canola, sunflower), Salt, Vegetable proteins (pea, potato, faba bean), Starch (corn, potato, rice, and/or waxy maize), Maltodextrin, Natural flavors, Corn flour, Spices (turmeric, paprika), Vinegar, Enzymes, Ascorbic acid." },

  { id: 2, name: "Sweet Chili Junior Chicken",  category: "Burgers", price: "3.99" , imageUrl: 'images/Junior.png', des: "Your tastebuds will be singing a whole new tune with a remixed Sweet Chili Junior Chicken made with Canadian-raised crispy seasoned chicken, topped with crunchy shredded lettuce, tangy sweet chili sauce and mayo-style sauce, all on a toasty bun." },

  { id: 3, name: "4 Chicken McNuggets", category: "Nuggets", price: "3.49" , imageUrl: 'images/Nuggets.png', des: "No artificial flavours, colours or preservatives. Made with 100% seasoned chicken breast, the Chicken McNuggets you crave are still simply delicious." },

  { id: 4, name: "Sweet Chili McWrap - Crispy", category: "McWraps", price: "4.49" , imageUrl: 'images/Sweet.png', des: "Made with 100% Canadian raised seasoned chicken topped with shredded lettuce, cucumbers, mayo-style sauce and sweet chili sauce. All wrapped up in a soft white flour tortilla." },

  { id: 5, name: "Hot Fudge Sundae", category: "Sundae", price: "4.99" , imageUrl: 'images/Fudge.png', des: "Hot Fudge Sundae Topping Ingredients: Sugars (sugar, glucose syrup), Water, Milk ingredients, Hydrogenated palm kernel oil or hydrogenated coconut oil, Cocoa, Salt, Disodium phosphate, Potassium sorbate, Natural flavour (plant source), Polyglycerol esters of fatty acids, Soy lecithin. Contains: Soy, Milk. Vanilla Ice Milk Ingredients: Milk ingredients, Sugars (sugar, glucose, dextrose), Modified milk ingredients, Mono- and diglycerides, Guar gum, Carrageenan, Cellulose gum, Natural flavour, Sodium hydroxide, Sodium carbonate. Contains: Milk." },

  { id: 6, name: "Hot Caramel Sundae", category: "Sundae", price: "4.59" , imageUrl: 'images/Caramel.png', des: "Ingredients: Sugars (sugar, glucose-fructose), Sweetened condensed milk, Water, Unsalted butter, Disodium phosphate, Salt, Pectin, Natural flavours (plant and dairy source).Contains: Milk Vanilla Ice Milk Ingredients: Milk ingredients, Sugars (sugar, glucose, dextrose), Modified milk ingredients, Mono- and diglycerides, Guar gum, Carrageenan, Cellulose gum, Natural flavour, Sodium hydroxide, Sodium carbonate. Contains: Milk." },

  { id: 7, name: "Vanilla Cone", price: "1.99" , category: "Cone", imageUrl: 'images/Vanilla.png', des: "Large Cone Ingredients: Enriched wheat flour, tapioca starch, sugar, vegetable shortening (soybean oil and/or canola oil, palm oil, soy lecithin), leavening (baking soda, ammonium bicarbonate), salt, natural flavour (plant source), natural colour (annatto), corn syrup Contains: Soy, Wheat. Vanilla Ice Milk Ingredients: Milk ingredients, Sugars (sugar, glucose, dextrose), Modified milk ingredients, Mono- and diglycerides, Guar gum, Carrageenan, Cellulose gum, Natural flavour, Sodium hydroxide, Sodium carbonate. Contains: Milk." },

  { id: 8, name: "Mighty McMuffin", category: "Burgers", price: "2.49" , imageUrl: 'images/McMuffin.png', des: "Get a double portion of hickory-smoked bacon, plus a freshly-cracked Canada Grade A egg, processed cheese and savoury sausage on a toasted English muffin. A mighty eat to rid you of your mighty hunger. Available for a limited time." },

  { id: 9, name: "Egg BLT McMuffin", category: "Burgers", price: "3.39" , imageUrl: 'images/BLT.png', des: "This breakfast sandwich is made with a freshly cracked Canada Grade A egg, topped with crispy hickory smoked bacon (B), crisp lettuce (L) and fresh tomato (T), mayo-style sauce and a slice of processed cheese, served on a toasted English muffin." },

  { id: 10, name: "Chicken McGriddles", category: "Burgers", price: "2.19" , imageUrl: 'images/McGriiddles.png', des: "A breaded seasoned chicken patty, made with chicken raised on Canadian farms, on two sweet, warm maple-flavoured griddle cakes." },

  { id: 11, name: "Hotcakes", price: "1.99" , category: "Burgers", imageUrl: 'images/HotCakes.png', des: "Start the day with three golden-brown, melt-in-your-mouth hotcakes." },

  { id: 12, name: "McCrispy Bacon Deluxe", price: "3.57" , category: "Burgers", imageUrl: 'images/Bacon.png', des: "Bacon and a slice of fresh tomato take the McCrispy to the next level. Made with crispy, tender and juicy 100% Canadian-raised seasoned chicken, then topped with shredded lettuce, creamy mayo-style sauce and served on a soft potato bun for a taste that’s so McDonald’s." },

  { id: 13, name: "6 Chicken McNuggets", category: "Nuggets", price: "4.49" , imageUrl: 'images/Nuggest6.png', des: "No artificial flavours, colours or preservatives. Made with 100% seasoned chicken breast, the Chicken McNuggets you crave are still simply delicious." },

  { id: 14, name: "10 Chicken Nuggets", category: "Nuggets", price: "5.49" , imageUrl: 'images/Nuggets10.png', des: "No artificial flavours, colours or preservatives. Made with 100% seasoned chicken breast, the Chicken McNuggets you crave are still simply delicious." },

  { id: 15, name: "Spicy Buffalo Chicken Wrap", category: "McWraps", price: "3.19" , imageUrl: 'images/buffalo.png', des: "Made with 100% Canadian raised seasoned chicken topped with shredded lettuce, shredded cheese and spicy buffalo sauce wrapped in a soft white flour tortilla. " },

  { id: 16, name: "Ranch Chicken Snack Wrap", price: "5.99" , category: "McWraps", imageUrl: 'images/ranch.png', des: "Made with 100% Canadian raised seasoned chicken topped with shredded lettuce, shredded cheese and ranch sauce wrapped in a soft white flour tortilla." },

  { id: 21, name: "Ranch Chicken Snack Wrap", price: "5.99" , category: "McWraps", imageUrl: 'images/ranch.png', des: "Made with 100% Canadian raised seasoned chicken topped with shredded lettuce, shredded cheese and ranch sauce wrapped in a soft white flour tortilla." },

  { id: 17, name: "Lemon Fruit Splash", price: "3.17" , category: "Cold", imageUrl: 'images/cold3.png', des: "A refreshing lemonade beverage made with real lemon juice concentrate and real lemon pulp. Served over ice." },

  { id: 18, name: "Coca-Cola Zero", category: "Cold", price: "2.49" , imageUrl: 'images/cold1.png', des: "Real Coca-Cola taste with zero calories and zero sugar. Perfection on ice." },

  { id: 19, name: "Coca-Cola", category: "Cold", price: "3.49" , imageUrl: 'images/cold2.png', des: "Enjoy your favourite McDonald's meal with a Coke. The original, refreshing ice-cold cola that goes well with your meal and completes the experience. Learn more!" },

  { id: 20, name: "Nestea Iced Tea", category: "Cold", price: "3.19" , imageUrl: 'images/cold4.png', des: "A refreshing blend of real tea and natural lemon flavour, served ice cold. " },

  


  
];

function addProducts(displayProducts){
  const productList = document.getElementById("product-list");
  productList.innerHTML = "";

  displayProducts.forEach(product => {
      const productItem = document.createElement("div");
      productItem.classList.add("product-item");
      productItem.innerHTML = `
      <img src="${product.imageUrl}" alt="${product.name}">
    <h3>${product.name}</h3>
    <button class="kick"> Kick Deal </button>
    <div class= "pri">
      <p class="price">$ ${product.price}</p>
    </div>
    <button class="get" onclick="showProductDetails(${product.id})">Get Info</button>
      `

      productList.appendChild(productItem);
  })
}


document.addEventListener("DOMContentLoaded", () => {
  addProducts(products);
});

function showProductDetails(productId) {
  const selectedProduct = products.find(product => product.id === productId);
  
  // Save product details to localStorage
  localStorage.setItem('selectedProduct', JSON.stringify(selectedProduct));

  // Redirect to product details page
  window.location.href = 'productdetails.html';
}


// Function to filter products by category

function filterProducts(category){
  let filteredProducts = [];

  if(category === "all"){
      filteredProducts = products;
  }  else {
      filteredProducts = products.filter(product => product.category === category);
  }

  addProducts(filteredProducts);
}



/* Footer */

// Smooth scroll to sections
document.querySelectorAll('.footer-links a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

document.querySelectorAll('.nav-right a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});










  