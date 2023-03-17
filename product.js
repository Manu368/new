// select elements from HTML
const imageFirst = document.getElementById("image01");
const textElement = document.getElementById("text01");
const java01 = document.getElementById("java01");

// create a new XMLHttpRequest object
const xhr = new XMLHttpRequest();
xhr.open("GET", "https://5d76bf96515d1a0014085cf9.mockapi.io/product", true);

// set up the callback function for when the request loads
xhr.onload = function() {
  if (xhr.status === 200) {
    // parse the response as JSON
    const response = JSON.parse(xhr.responseText);

    const product = response[0]; // select the first product in the array

    // populate image element
    const imgElement = document.createElement("img");
    imgElement.classList.add("img01");
    imgElement.src = product.preview;
    imageFirst.appendChild(imgElement);

    // populate text elements
    const headingElement = document.createElement("h1");
    headingElement.classList.add("heading01");
    headingElement.textContent = product.name;
    textElement.appendChild(headingElement);

    const headingElemnt01 = document.createElement("h4");
    headingElemnt01.classList.add("heading02");
    headingElemnt01.textContent = product.brand;
    textElement.appendChild(headingElemnt01);

    const headingElement02 = document.createElement("h3");
    headingElement02.classList.add("heading03");
    headingElement02.textContent = "Price: Rs ";

    const spanElement = document.createElement("span");
    spanElement.classList.add("span01");
    spanElement.textContent = product.price;
    headingElement02.appendChild(spanElement);

    textElement.appendChild(headingElement02);

    const headingElement04 = document.createElement("h3");
    headingElement04.classList.add("heading03");
    headingElement04.textContent = "Description";
    textElement.appendChild(headingElement04);

    const paraElement = document.createElement("p");
    paraElement.classList.add("para01");
    paraElement.textContent = product.description;
    textElement.appendChild(paraElement);

    const headingElement05 = document.createElement("h3");
    headingElement05.classList.add("heading03");
    headingElement05.textContent = "Product Preview";
    textElement.appendChild(headingElement05);

    for (let i = 0; i < product.photos.length; i++) {
      const smallimg = document.createElement("img");
      smallimg.classList.add("small01");
      smallimg.src = product.photos[i];
      smallimg.id = i;
      java01.appendChild(smallimg);

      smallimg.onclick = function() {
        imgElement.src = smallimg.src;
        smallimg.style.border = "3px solid #009688";
      }

      smallimg.onmouseout = function() {
        smallimg.style.border = "";
      }
    }

    const btnElement = document.createElement("button");
    btnElement.classList.add("button01");
    btnElement.textContent = "Add to Cart";
    textElement.appendChild(btnElement);
  } else {
    console.log("Error: " + xhr.status);
  }
};

// open and send the request

xhr.send();
