const new_arrivals = [
    {
        id: 1,
        title: "VENOM Women's Crew Neck Cotton T-Shirt Dark Beige",
        price: "LKR 990.00",
        image: "assest/new_arrivals/1.avif",
    },
    {
        id: 2,
        title:
            "HUF & DEE VARSITY Women's V Neck Puff Print Crop T-Shirt White",
        price: "LKR 2,690.00",
        image: "assest/new_arrivals/7.avif",
    },
    {
        id: 3,
        title: "King Street HERITAGE Men's Casual Polo T-Shirt",
        price: "LKR 4,990.00",
        image: "assest/new_arrivals/15.webp",
    },
    {
        id: 4,
        title: "King Street TIMELESS Men's Casual Shirt",
        price: "LKR 7,590.00",
        image: "assest/new_arrivals/12.webp",
    },
    {
        id: 5,
        title: "Hustle Relax Fit Casual T-Shirt",
        price: "LKR 2,750.00",
        image: "assest/new_arrivals/13.webp",
    },
];

document.write(
    `<div class="h4 pb-2 mb-4 border-bottom border-3">NEW ARRIVALS</div>`
);
document.write(`<div class="row row-cols-1 row-cols-md-5 g-4">`);

new_arrivals.forEach((item) => {
    document.write(`
              <div class="col position-relative">
                <div class="card h-100 hover-div">
                    <img src="${item.image}" class="card-img-top" alt="${item.image}">
                    <span class="position-absolute translate-middle badge bg-primary my-badge">NEW</span>
                    <div class="card-body"><h5 class="card-title">${item.price}</h5></div>
                    <p class="card-text px-3">${item.title}</p>
                    <div class="card-footer text-end">
                      <button class="btn me-2"><img src="assest/Heart.gif" alt="WishList" class="tool-items" /></button>
                      <a href="#" class="btn btn-primary px-3">READ MORE</a>
                    </div>
                </div>
              </div>
            `);
});

document.write(`</div>`);

const men = [
    {
        id: 1,
        title: "VENOM Women's Crew Neck Cotton T-Shirt Emerald Green",
        price: "LKR 990.00",
        image: "assest/men/1.avif",
    },
    {
        id: 2,
        title: "HUF & DEE VARSITY Women's V Neck Puff Print Crop T-Shirt",
        price: "LKR 2,690.00",
        image: "assest/men/7.avif",
    },
    {
        id: 3,
        title: "King Street HERITAGE Men's Casual Polo T-Shirt",
        price: "LKR 4,990.00",
        image: "assest/new_arrivals/15.webp",
    },
    {
        id: 4,
        title: "King Street TIMELESS Men's Casual Shirt",
        price: "LKR 7,590.00",
        image: "assest/new_arrivals/12.webp",
    },
    {
        id: 5,
        title: "Hustle Relax Fit Casual T-Shirt",
        price: "LKR 2,750.00",
        image: "assest/new_arrivals/13.webp",
    },
];

document.write(
    `<div class="h4 pb-2 mb-4 border-bottom border-3 mt-5">MEN</div>`
);
document.write(`<div class="row row-cols-1 row-cols-md-5 g-4">`);

men.forEach((item) => {
    document.write(`
              <div class="col position-relative">
                <div class="card h-100 hover-div">
                    <img src="${item.image}" class="card-img-top" alt="${item.image}">
                    <div class="card-body"><h5 class="card-title">${item.price}</h5></div>
                    <p class="card-text px-3">${item.title}</p>
                    <div class="card-footer text-end">
                      <button class="btn me-2"><img src="assest/Heart.gif" alt="WishList" class="tool-items" /></button>
                      <a href="#" class="btn btn-primary px-3">READ MORE</a>
                    </div>
                </div>
              </div>
            `);
});

document.write(`</div>`);

const women = [
    {
        id: 1,
        title: "VENOM Women's Crew Neck Cotton T-Shirt Dark Beige",
        price: "LKR 990.00",
        image: "assest/women/1.avif",
    },
    {
        id: 2,
        title: "VENOM Women's Crew Neck Cotton T-Shirt Mint Green",
        price: "LKR 990.00",
        image: "assest/women/2.avif",
    },
    {
        id: 3,
        title: "VENOM Women's Crew Neck Cotton T-Shirt Light Purple",
        price: "LKR 990.00",
        image: "assest/women/3.avif",
    },
    {
        id: 4,
        title: "VENOM Women's Crew Neck Cotton T-Shirt Black",
        price: "LKR 990.00",
        image: "assest/women/4.avif",
    },
    {
        id: 5,
        title: "VENOM Women's Crew Neck Cotton T-Shirt Soft Pink",
        price: "LKR 990.00",
        image: "assest/women/5.avif",
    },
];

document.write(
    `<div class="h4 pb-2 mb-4 border-bottom border-3 mt-5">WOMEN</div>`
);
document.write(`<div class="row row-cols-1 row-cols-md-5 g-4">`);

women.forEach((item) => {
    document.write(`
              <div class="col position-relative">
                <div class="card h-100 hover-div">
                    <img src="${item.image}" class="card-img-top" alt="${item.image}">
                    <div class="card-body"><h5 class="card-title">${item.price}</h5></div>
                    <p class="card-text px-3">${item.title}</p>
                    <div class="card-footer text-end">
                      <button class="btn me-2"><img src="assest/Heart.gif" alt="WishList" class="tool-items" /></button>
                      <a href="#" class="btn btn-primary px-3">READ MORE</a>
                    </div>
                </div>
              </div>
            `);
});

document.write(`</div>`);

const kids = [
    {
        id: 1,
        title: "VENOM Women's Crew Neck Cotton T-Shirt Dark Beige",
        price: "LKR 990.00",
        image: "assest/kids/1.avif",
    },
    {
        id: 2,
        title: "VENOM Women's Crew Neck Cotton T-Shirt Mint Green",
        price: "LKR 990.00",
        image: "assest/kids/2.avif",
    },
    {
        id: 3,
        title: "VENOM Women's Crew Neck Cotton T-Shirt Light Purple",
        price: "LKR 990.00",
        image: "assest/kids/3.avif",
    },
    {
        id: 4,
        title: "VENOM Women's Crew Neck Cotton T-Shirt Black",
        price: "LKR 990.00",
        image: "assest/kids/4.avif",
    },
    {
        id: 5,
        title: "VENOM Women's Crew Neck Cotton T-Shirt Soft Pink",
        price: "LKR 990.00",
        image: "assest/kids/5.avif",
    },
];

document.write(
    `<div class="h4 pb-2 mb-4 border-bottom border-3 mt-5">KIDS</div>`
);
document.write(`<div class="row row-cols-1 row-cols-md-5 g-4">`);

kids.forEach((item) => {
    document.write(`
              <div class="col position-relative">
                <div class="card h-100 hover-div">
                    <img src="${item.image}" class="card-img-top" alt="${item.image}">
                    <div class="card-body"><h5 class="card-title">${item.price}</h5></div>
                    <p class="card-text px-3">${item.title}</p>
                    <div class="card-footer text-end">
                      <button class="btn me-2"><img src="assest/Heart.gif" alt="WishList" class="tool-items" /></button>
                      <a href="#" class="btn btn-primary px-3">READ MORE</a>
                    </div>
                </div>
              </div>
            `);
});

document.write(`</div>`);

const watch = [
    {
        id: 1,
        title: "VENOM Women's Crew Neck Cotton T-Shirt Dark Beige",
        price: "LKR 990.00",
        image: "assest/watch/1.avif",
    },
    {
        id: 2,
        title: "VENOM Women's Crew Neck Cotton T-Shirt Mint Green",
        price: "LKR 990.00",
        image: "assest/watch/2.avif",
    },
    {
        id: 3,
        title: "VENOM Women's Crew Neck Cotton T-Shirt Light Purple",
        price: "LKR 990.00",
        image: "assest/watch/3.avif",
    },
    {
        id: 4,
        title: "VENOM Women's Crew Neck Cotton T-Shirt Black",
        price: "LKR 990.00",
        image: "assest/watch/4.avif",
    },
    {
        id: 5,
        title: "VENOM Women's Crew Neck Cotton T-Shirt Soft Pink",
        price: "LKR 990.00",
        image: "assest/watch/5.avif",
    },
];

document.write(
    `<div class="h4 pb-2 mb-4 border-bottom border-3 mt-5">WATCH</div>`
);
document.write(`<div class="row row-cols-1 row-cols-md-5 g-4">`);

watch.forEach((item) => {
    document.write(`
              <div class="col position-relative">
                <div class="card h-100 hover-div">
                    <img src="${item.image}" class="card-img-top" alt="${item.image}">
                    <div class="card-body"><h5 class="card-title">${item.price}</h5></div>
                    <p class="card-text px-3">${item.title}</p>
                    <div class="card-footer text-end">
                      <button class="btn me-2"><img src="assest/Heart.gif" alt="WishList" class="tool-items" /></button>
                      <a href="#" class="btn btn-primary px-3">READ MORE</a>
                    </div>
                </div>
              </div>
            `);
});

document.write(`</div>`);

const sale = [
    {
        id: 1,
        title: "VENOM Women's Crew Neck Cotton T-Shirt Dark Beige",
        price: "LKR 990.00",
        image: "assest/sale/1.avif",
    },
    {
        id: 2,
        title: "VENOM Women's Crew Neck Cotton T-Shirt Mint Green",
        price: "LKR 990.00",
        image: "assest/sale/2.avif",
    },
    {
        id: 3,
        title: "VENOM Women's Crew Neck Cotton T-Shirt Light Purple",
        price: "LKR 990.00",
        image: "assest/sale/3.avif",
    },
    {
        id: 4,
        title: "VENOM Women's Crew Neck Cotton T-Shirt Black",
        price: "LKR 990.00",
        image: "assest/sale/4.avif",
    },
    {
        id: 5,
        title: "VENOM Women's Crew Neck Cotton T-Shirt Soft Pink",
        price: "LKR 990.00",
        image: "assest/sale/5.avif",
    },
];

document.write(
    `<div class="h4 pb-2 mb-4 border-bottom border-3 mt-5">SALE</div>`
);
document.write(`<div class="row row-cols-1 row-cols-md-5 g-4">`);

sale.forEach((item) => {
    document.write(`
              <div class="col position-relative">
                <div class="card h-100 hover-div">
                    <img src="${item.image}" class="card-img-top" alt="${item.image}">
                    <span class="position-absolute translate-middle badge bg-danger my-badge">SALE</span>
                    <div class="card-body"><h5 class="card-title">${item.price}</h5></div>
                    <p class="card-text px-3">${item.title}</p>
                    <div class="card-footer text-end">
                      <button class="btn me-2" onClick="addToCart([${item.id}]);"><img src="assest/Heart.gif" alt="WishList" class="tool-items" /></button>
                      <a href="#" class="btn btn-primary px-3">READ MORE</a>
                    </div>
                </div>
              </div>
            `);
});

document.write(`</div>`);