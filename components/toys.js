const items = [
    {
        id: 1,
        title: "VENOM toy's Crew Neck Cotton T-Shirt Dark Beige",
        price: "LKR 990.00",
        image: "../assest/toy/1.webp",
    },
    {
        id: 2,
        title: "VENOM toy's Crew Neck Cotton T-Shirt Mint Green",
        price: "LKR 990.00",
        image: "../assest/toy/2.webp",
    },
    {
        id: 3,
        title: "VENOM toy's Crew Neck Cotton T-Shirt Light Purple",
        price: "LKR 990.00",
        image: "../assest/toy/3.webp",
    },
    {
        id: 4,
        title: "VENOM toy's Crew Neck Cotton T-Shirt Black",
        price: "LKR 990.00",
        image: "../assest/toy/4.webp",
    },
    {
        id: 5,
        title: "VENOM toy's Crew Neck Cotton T-Shirt Soft Pink",
        price: "LKR 990.00",
        image: "../assest/toy/5.webp",
    },
    {
        id: 6,
        title: "VENOM toy's Crew Neck Cotton T-Shirt Emerald Green",
        price: "LKR 990.00",
        image: "../assest/toy/6.webp",
    },
    {
        id: 7,
        title:
            "HUF & DEE VARSITY toy's V Neck Puff Print Crop T-Shirt White",
        price: "LKR 2,690.00",
        image: "../assest/toy/7.webp",
    },
    {
        id: 8,
        title:
            "HUF & DEE VARSITY toy's V Neck Puff Print Crop T-Shirt Pink",
        price: "LKR 2,690.00",
        image: "../assest/toy/8.webp",
    },
    {
        id: 16,
        title: "King Street HERITAGE Men's Casual Polo T-Shirt",
        price: "LKR 4,990.00",
        image: "../assest/toy/9.webp",
    },
    {
        id: 17,
        title: "King Street HERITAGE Men's Casual Polo T-Shirt",
        price: "LKR 4,990.00",
        image: "../assest/toy/10.webp",
    },
    {
        id: 18,
        title: "King Street HERITAGE Men's Casual Polo T-Shirt",
        price: "LKR 4,990.00",
        image: "../assest/toy/11.webp",
    },
    {
        id: 19,
        title: "King Street HERITAGE Men's Casual Polo T-Shirt",
        price: "LKR 4,990.00",
        image: "../assest/toy/12.webp",
    },
    {
        id: 20,
        title: "King Street HERITAGE Men's Casual Polo T-Shirt",
        price: "LKR 4,990.00",
        image: "../assest/toy/13.webp",
    },
    {
        id: 21,
        title: "King Street HERITAGE Men's Casual Polo T-Shirt",
        price: "LKR 4,990.00",
        image: "../assest/toy/14.webp",
    },
    {
        id: 22,
        title: "King Street HERITAGE Men's Casual Polo T-Shirt",
        price: "LKR 4,990.00",
        image: "../assest/toy/15.webp",
    },
];


document.write(`
        <div class="row row-cols-1 row-cols-md-5 g-4">
  `);

items.forEach((item) => {
    document.write(`
      <div class="col position-relative">
        <div class="card h-100 hover-div">
            <img src="${item.image}" class="card-img-top" alt="${item.image}">
            <div class="card-body"><h5 class="card-title">${item.price}</h5></div>
            <p class="card-text px-3">${item.title}</p>
            <div class="card-footer text-end">
              <button class="btn me-2" onClick="addToCart([${item.id}]);"><img src="../assest/Heart.gif" alt="WishList" class="tool-items" /></button>
              <a href="#" class="btn btn-primary px-3">READ MORE</a>
            </div>
        </div>
      </div>
    `);
});

document.write(`</div>`);