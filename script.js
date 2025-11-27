document.getElementById('current-year').textContent = new Date().getFullYear();

const WHATSAPP_CATALOG_URL = "https://wa.me/c/5511993936231";

const products = [
    {
        name: "Queijo Meia Cura",
        description: "Sabor intenso e textura firme, com o toque de acidez ideal. Perfeito para o café, lanches ou para ralar.",
        imagePlaceholder: "img/fundo2.jpeg",
        category: "queijos"
    },
    {
        name: "Requeijão Manteiga do Norte",
        description: "A cremosidade inconfundível do Norte! Cor amarelada vibrante e sabor amanteigado. Ideal para pães e tapiocas.",
        imagePlaceholder: "https://placehold.co/400x300/FFD700/8B4513?text=Requeijao+Manteiga",
        category: "queijos"
    },
    {
        name: "Queijo Fresco",
        description: "Leve e suave, o companheiro perfeito para doces e saladas. Desfrute da sua frescura natural.",
        imagePlaceholder: "https://placehold.co/400x300/F0FFFF/8B4513?text=Queijo+Fresco",
        category: "queijos"
    },
    {
        name: "Queijo Suíço Cremoso",
        description: "Aveludado por dentro, com um sabor delicado e leitoso. Excelente para derreter e para quem prefere queijos menos salgados.",
        imagePlaceholder: "https://placehold.co/400x300/F5DEB3/8B4513?text=Queijo+Suico",
        category: "queijos"
    },
    {
        name: "Queijo Cremosinho Canastra",
        description: "Similar ao Polenguinho, mas com o sabor autêntico da Canastra. Cremoso, levemente ácido e irresistível para petiscar.",
        imagePlaceholder: "https://placehold.co/400x300/F0E68C/8B4513?text=Cremosinho+Canastra",
        category: "queijos"
    },
    {
        name: "Queijo 4 Sabores (Sabores Especiais)",
        description: "Uma explosão de sabores em um só queijo! Combinação perfeita para inovar na tábua de frios.",
        imagePlaceholder: "https://placehold.co/400x300/DDA0DD/8B4513?text=4+Queijos",
        category: "queijos"
    },
    {
        name: "Cookies Amendoim",
        description: "Biscoitos crocantes em formato de anel, feitos com amendoim. Sabor marcante e textura perfeita para o café.",
        imagePlaceholder: "https://placehold.co/400x300/A0522D/FFFFFF?text=Doce+de+Leite",
        category: "doces"
    },
    {
        name: "Mantecal",
        description: "Biscoito caseiro que desmancha na boca! Sabor suave com um toque de recheio de fruta no centro.",
        imagePlaceholder: "https://placehold.co/400x300/CD5C5C/FFFFFF?text=Goiabada",
        category: "doces"
    },
    {
        name: "Gibi Artesanal",
        description: "Doce de amendoim artesanal, com textura macia e sabor caseiro. Um clássico que derrete na boca.",
        imagePlaceholder: "https://placehold.co/400x300/CD5C5C/FFFFFF?text=Goiabada",
        category: "doces"
    },
    {
        name: "Suspiro",
        description: "Merengues leves e aerados, com recheio cremoso. A doçura na medida certa, ideal para sobremesa ou lanche.",
        imagePlaceholder: "https://placehold.co/400x300/CD5C5C/FFFFFF?text=Goiabada",
        category: "doces"
    },
    {
        name: "Cavaca de Banana com Açúcar",
        description: "Sequilho de banana frito, macio por dentro e polvilhado com açúcar. Uma guloseima leve e irresistível.",
        imagePlaceholder: "https://placehold.co/400x300/CD5C5C/FFFFFF?text=Goiabada",
        category: "doces"
    },
    {
        name: "Cavaca de Banana com Canela",
        description: "Sequilho de banana frito e envolto em canela. O equilíbrio perfeito entre o doce da fruta e o toque aromático da especiaria.",
        imagePlaceholder: "https://placehold.co/400x300/CD5C5C/FFFFFF?text=Goiabada",
        category: "doces"
    },
    {
        name: "Amanteigado Recheado com Goiaba",
        description: "Biscoito amanteigado delicado, recheado com uma deliciosa geleia de goiaba. Combinação clássica e favorita.",
        imagePlaceholder: "https://placehold.co/400x300/CD5C5C/FFFFFF?text=Goiabada",
        category: "doces"
    },
    {
        name: "Palmier",
        description: "Clássico biscoito folhado. Crocante, leve e polvilhado com açúcar e canela. A doçura e a textura perfeita para acompanhar qualquer bebida.",
        imagePlaceholder: "https://placehold.co/400x300/CD5C5C/FFFFFF?text=Goiabada",
        category: "doces"
    },
    {
        name: "Folheado Doce",
        description: "Produto artesanal, massa folhada leve e coberta com açúcar cristalizado. O lanche perfeito para quem ama um crocante doce.",
        imagePlaceholder: "https://placehold.co/400x300/CD5C5C/FFFFFF?text=Goiabada",
        category: "doces"
    },
    {
        name: "Pururuca",
        description: "Pura crocância com sabor intenso! Ideal para petiscar em qualquer hora do dia ou acompanhar uma bebida gelada.",
        imagePlaceholder: "https://placehold.co/400x300/CD5C5C/FFFFFF?text=Goiabada",
        category: "variados"
    },
    {
        name: "Sequilho (Vó Landa)",
        description: "Biscoito fino, leve e que derrete na boca. Acompanhamento perfeito para o café. Pura tradição e crocância.",
        imagePlaceholder: "https://placehold.co/400x300/B8860B/FFFFFF?text=Sequilho",
        category: "variados"
    },
    {
        name: "Azeite Aromatizado Gourmet",
        description: "Azeite extra virgem com ervas finas e especiarias. Adicione um toque especial aos seus pratos.",
        imagePlaceholder: "https://placehold.co/400x300/3CB371/FFFFFF?text=Azeite+Gourmet",
        category: "variados"
    }
];

function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden border border-gray-100';

    card.innerHTML = `
        <div class="h-64 overflow-hidden">
            <img src="${product.imagePlaceholder}" 
                 alt="${product.name}" 
                 class="w-full h-full object-cover transition duration-500 ease-in-out hover:scale-110">
        </div>
        <div class="p-5">
            <h3 class="text-xl font-semibold text-gray-800 mb-2">${product.name}</h3>
            <p class="text-gray-500 text-sm mb-3">${product.description}</p>
            
            <p class="text-lg font-bold text-store-accent mb-4">
                Consulte o preço via WhatsApp!
            </p>

            <a href="${WHATSAPP_CATALOG_URL}" target="_blank" 
               class="whatsapp-link w-full inline-flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-lg shadow-sm text-white bg-store-accent hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-store-accent">
               
                <svg class="w-5 h-5 mr-2" fill="#ffffff" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                 <path d="M26.576 5.363c-2.69-2.69-6.406-4.354-10.511-4.354-8.209 0-14.865 6.655-14.865 14.865 0 2.732 0.737 5.291 2.022 7.491l-0.038-0.070-2.109 7.702 7.879-2.067c2.051 1.139 4.498 1.809 7.102 1.809h0.006c8.209-0.003 14.862-6.659 14.862-14.868 0-4.103-1.662-7.817-4.349-10.507l0 0zM16.062 28.228h-0.005c-0 0-0.001 0-0.001 0-2.319 0-4.489-0.64-6.342-1.753l0.056 0.031-0.451-0.267-4.675 1.227 1.247-4.559-0.294-0.467c-1.185-1.862-1.889-4.131-1.889-6.565 0-6.822 5.531-12.353 12.353-12.353s12.353 5.531 12.353 12.353c0 6.822-5.53 12.353-12.353 12.353h-0zM22.838 18.977c-0.371-0.186-2.197-1.083-2.537-1.208-0.341-0.124-0.589-0.185-0.837 0.187-0.246 0.371-0.958 1.207-1.175 1.455-0.216 0.249-0.434 0.279-0.805 0.094-1.15-0.466-2.138-1.087-2.997-1.852l0.010 0.009c-0.799-0.74-1.484-1.587-2.037-2.521l-0.028-0.052c-0.216-0.371-0.023-0.572 0.162-0.757 0.167-0.166 0.372-0.434 0.557-0.65 0.146-0.179 0.271-0.384 0.366-0.604l0.006-0.017c0.043-0.087 0.068-0.188 0.068-0.296 0-0.131-0.037-0.253-0.101-0.357l0.002 0.003c-0.094-0.186-0.836-2.014-1.145-2.758-0.302-0.724-0.609-0.625-0.836-0.637-0.216-0.010-0.464-0.012-0.712-0.012-0.395 0.010-0.746 0.188-0.988 0.463l-0.001 0.002c-0.802 0.761-1.3 1.834-1.3 3.023 0 0.026 0 0.053 0.001 0.079l-0-0.004c0.131 1.467 0.681 2.784 1.527 3.857l-0.012-0.015c1.604 2.379 3.742 4.282 6.251 5.564l0.094 0.043c0.548 0.248 1.25 0.513 1.968 0.74l0.149 0.041c0.442 0.14 0.951 0.221 1.479 0.221 0.303 0 0.601-0.027 0.889-0.078l-0.031 0.004c1.069-0.223 1.956-0.868 2.497-1.749l0.009-0.017c0.165-0.366 0.261-0.793 0.261-1.242 0-0.185-0.016-0.366-0.047-0.542l0.003 0.019c-0.092-0.155-0.34-0.247-0.712-0.434z"></path>
                </svg>

                Fazer Pedido por WhatsApp
                </a>
            </div>
        `;
    return card;
}

function renderProductsByCategory(category, elementId) {
    const grid = document.getElementById(elementId);
    if (!grid) return;

    grid.innerHTML = '';
    
    const filteredProducts = products.filter(p => p.category === category);

    filteredProducts.forEach(product => {
        const card = createProductCard(product);
        grid.appendChild(card);
    });
}

function renderAllSections() {
    renderProductsByCategory('queijos', 'laticinios-grid');
    renderProductsByCategory('doces', 'doces-grid');
    renderProductsByCategory('variados', 'variados-grid');
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('current-year').textContent = new Date().getFullYear();
    renderAllSections();
});