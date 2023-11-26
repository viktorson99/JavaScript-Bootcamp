const productList = {
    products: [
        {
            title: 'A pillow',
            imageUrl: 'https://www.bludot.com/media/catalog/product/p/l/pl1_18squr_top2_tm-signal-square-pillow-edwards-tomatoe_1.jpg?optimize=medium&fit=bounds&height=1200&width=1500&canvas=1500:1200',
            price: 19.99,
            description: 'A soft pillow'
        },
        {
            title: 'A carpet',
            imageUrl: 'https://machanents.com/media/product/RGSO0389-1.jpg',
            price: 89.99,
            description: 'A carpet which you might like - or not.'
        }
    ],
    render() {
        const renderHook = document.getElementById('app');
        const prodList = document.createElement('ul');
        prodList.className = 'product-list';
        for (const prod of this.products) {
            const prodEl = document.createElement('li');
            prodEl.className = 'product-item';
            prodEl.innerHTML = `
            <div>
            <img src="${prod.imageUrl}" alt="${prod.title}">
            <div class="product-item__content">
            <h2>${prod.title}</h2>
            <h3>\$${prod.price}</h3>
            <p>${prod.description}</p>
            <button> Add to Cart</button>
            </div>
            `;
            prodList.append(prodEl);
        }
        renderHook.append(prodList);
    }
};

productList.render();