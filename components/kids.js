const items = [
    {
        id: 1,
        title: "VENOM Women's Crew Neck Cotton T-Shirt Dark Beige",
        price: "LKR 990.00",
        image: "../assest/kids/1.avif",
    },
    {
        id: 2,
        title: "VENOM Women's Crew Neck Cotton T-Shirt Mint Green",
        price: "LKR 990.00",
        image: "../assest/kids/2.avif",
    },
    {
        id: 3,
        title: "VENOM Women's Crew Neck Cotton T-Shirt Light Purple",
        price: "LKR 990.00",
        image: "../assest/kids/3.avif",
    },
    {
        id: 4,
        title: "VENOM Women's Crew Neck Cotton T-Shirt Black",
        price: "LKR 990.00",
        image: "../assest/kids/4.avif",
    },
    {
        id: 5,
        title: "VENOM Women's Crew Neck Cotton T-Shirt Soft Pink",
        price: "LKR 990.00",
        image: "../assest/kids/5.avif",
    },
    {
        id: 6,
        title: "VENOM Women's Crew Neck Cotton T-Shirt Emerald Green",
        price: "LKR 990.00",
        image: "../assest/kids/6.avif",
    },
    {
        id: 7,
        title:
            "HUF & DEE VARSITY Women's V Neck Puff Print Crop T-Shirt White",
        price: "LKR 2,690.00",
        image: "../assest/kids/7.avif",
    },
    {
        id: 8,
        title:
            "HUF & DEE VARSITY Women's V Neck Puff Print Crop T-Shirt Pink",
        price: "LKR 2,690.00",
        image: "../assest/kids/8.avif",
    },
    {
        id: 16,
        title: "King Street HERITAGE Men's Casual Polo T-Shirt",
        price: "LKR 4,990.00",
        image: "../assest/kids/9.avif",
    },
    {
        id: 17,
        title: "King Street HERITAGE Men's Casual Polo T-Shirt",
        price: "LKR 4,990.00",
        image: "../assest/kids/10.avif",
    },
    {
        id: 18,
        title: "King Street HERITAGE Men's Casual Polo T-Shirt",
        price: "LKR 4,990.00",
        image: "../assest/kids/11.avif",
    },
    {
        id: 19,
        title: "King Street HERITAGE Men's Casual Polo T-Shirt",
        price: "LKR 4,990.00",
        image: "../assest/kids/12.avif",
    },
    {
        id: 20,
        title: "King Street HERITAGE Men's Casual Polo T-Shirt",
        price: "LKR 4,990.00",
        image: "../assest/kids/13.avif",
    },
    {
        id: 21,
        title: "King Street HERITAGE Men's Casual Polo T-Shirt",
        price: "LKR 4,990.00",
        image: "../assest/kids/14.avif",
    },
    {
        id: 22,
        title: "King Street HERITAGE Men's Casual Polo T-Shirt",
        price: "LKR 4,990.00",
        image: "../assest/kids/15.avif",
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