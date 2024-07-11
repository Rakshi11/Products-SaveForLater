document.addEventListener('DOMContentLoaded', () => {
    const productsList = document.getElementById('products');
    const saveForLaterList = document.getElementById('saveForLater');

    // Sample data for products
    const products = [
        {
            id: 1,
            title: 'iPhone 9',
            description: 'An apple mobile which is nothing like apple',
            price: 549,
            image: 'images/product 1.jpg',
        },
        {
            id: 2,
            title: 'iPhone X',
            description: 'SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...',
            price: 899,
            image: 'images/product 2.jpg',
        },
        {
            id: 3,
            title: 'iPhone X',
            description: 'SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...',
            price: 899,
            image: 'images/product 3.jpg',
        },
        {
            id: 4,
            title: 'iPhone X',
            description: 'SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...',
            price: 899,
            image: 'images/product 4.jpg',
        },
        {
            id: 5,
            title: 'iPhone X',
            description: 'SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...',
            price: 899,
            image: 'images/product 5.jpg',
        },
        {
            id: 6,
            title: 'iPhone X',
            description: 'SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...',
            price: 899,
            image: 'images/product 6.jpg',
        },
        {
            id: 7,
            title: 'iPhone X',
            description: 'SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...',
            price: 899,
            image: 'images/product 7.jpg',
        },
        {
            id: 8,
            title: 'iPhone X',
            description: 'SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...',
            price: 899,
            image: 'images/product 8.jpg',
        },
        {
            id: 9,
            title: 'iPhone X',
            description: 'SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...',
            price: 899,
            image: 'images/product 9.jpg',
        },
        {
            id: 10,
            title: 'iPhone X',
            description: 'SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...',
            price: 899,
            image: 'images/product 10.jpg',
        },
    ];

    products.forEach(product => {
        const listItem = document.createElement('li');
        listItem.className = 'list-group-item';
        listItem.innerHTML = `
            <img src="${product.image}" alt="${product.title}">
            <div>
                <h5>${product.title}</h5>
                <p>${product.description}</p>
                <p>$${product.price}</p>
            </div>
            <button class="btn-add" onclick="addToSaveForLater(${product.id})">Save for Later</button>
        `;
        productsList.appendChild(listItem);
    });

    window.addToSaveForLater = (productId) => {
        const product = products.find(p => p.id === productId);
        if (!product) return;

        const listItem = document.createElement('li');
        listItem.className = 'list-group-item';
        listItem.innerHTML = `
            <img src="${product.image}" alt="${product.title}">
            <div>
                <h5>${product.title}</h5>
                <p>${product.description}</p>
                <p>$${product.price}</p>
            </div>
            <button class="btn-add" onclick="removeFromSaveForLater(${productId})">Remove</button>
        `;
        saveForLaterList.appendChild(listItem);
    };

    window.removeFromSaveForLater = (productId) => {
        const items = Array.from(saveForLaterList.children);
        items.forEach(item => {
            if (item.innerHTML.includes(`onclick="removeFromSaveForLater(${productId})"`)) {
                item.remove();
            }
        });
    };
});