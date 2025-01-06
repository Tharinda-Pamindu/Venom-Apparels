const items = [
    {
        id: 1,
        title: "VENOM Women's Crew Neck Cotton T-Shirt Dark Beige",
        price: "LKR 990.00",
        image: "../assest/sale/1.avif",
    },
    {
        id: 2,
        title: "VENOM Women's Crew Neck Cotton T-Shirt Mint Green",
        price: "LKR 990.00",
        image: "../assest/sale/2.avif",
    },
    {
        id: 3,
        title: "VENOM Women's Crew Neck Cotton T-Shirt Light Purple",
        price: "LKR 990.00",
        image: "../assest/sale/3.avif",
    },
    {
        id: 4,
        title: "VENOM Women's Crew Neck Cotton T-Shirt Black",
        price: "LKR 990.00",
        image: "../assest/sale/4.avif",
    },
    {
        id: 5,
        title: "VENOM Women's Crew Neck Cotton T-Shirt Soft Pink",
        price: "LKR 990.00",
        image: "../assest/sale/5.avif",
    },
    {
        id: 6,
        title: "VENOM Women's Crew Neck Cotton T-Shirt Emerald Green",
        price: "LKR 990.00",
        image: "../assest/sale/6.avif",
    },
    {
        id: 7,
        title:
            "HUF & DEE VARSITY Women's V Neck Puff Print Crop T-Shirt White",
        price: "LKR 2,690.00",
        image: "../assest/sale/7.avif",
    },
    {
        id: 8,
        title:
            "HUF & DEE VARSITY Women's V Neck Puff Print Crop T-Shirt Pink",
        price: "LKR 2,690.00",
        image: "../assest/sale/8.avif",
    },
    {
        id: 9,
        title: "King Street TIMELESS Men's Casual Shirt",
        price: "LKR 7,590.00",
        image: "../assest/new_arrivals/1.avif",
    },
    {
        id: 10,
        title: "King Street TIMELESS Men's Casual Shirt",
        price: "LKR 7,590.00",
        image: "../assest/new_arrivals/2.avif",
    },
    {
        id: 11,
        title: "King Street TIMELESS Men's Casual Shirt",
        price: "LKR 7,590.00",
        image: "../assest/new_arrivals/3.avif",
    },
    {
        id: 12,
        title: "King Street TIMELESS Men's Casual Shirt",
        price: "LKR 7,590.00",
        image: "../assest/new_arrivals/4.avif",
    },
    {
        id: 13,
        title: "Hustle Relax Fit Casual T-Shirt",
        price: "LKR 2,750.00",
        image: "../assest/new_arrivals/5.avif",
    },
    {
        id: 14,
        title: "Hustle Relax Fit Casual T-Shirt",
        price: "LKR 2,650.00",
        image: "../assest/new_arrivals/6.avif",
    },
    {
        id: 15,
        title: "King Street HERITAGE Men's Casual Polo T-Shirt",
        price: "LKR 4,990.00",
        image: "../assest/new_arrivals/7.avif",
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
            <span class="position-absolute translate-middle badge bg-danger my-badge">SALE</span>
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