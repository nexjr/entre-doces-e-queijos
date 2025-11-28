const whatsappIconSvg = '<svg class="w-5 h-5 mr-2" fill="#ffffff" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M26.576 5.363c-2.69-2.69-6.406-4.354-10.511-4.354-8.209 0-14.865 6.655-14.865 14.865 0 2.732 0.737 5.291 2.022 7.491l-0.038-0.070-2.109 7.702 7.879-2.067c2.051 1.139 4.498 1.809 7.102 1.809h0.006c8.209-0.003 14.862-6.659 14.862-14.868 0-4.103-1.662-7.817-4.349-10.507l0 0zM16.062 28.228h-0.005c-0 0-0.001 0-0.001 0-2.319 0-4.489-0.64-6.342-1.753l0.056 0.031-0.451-0.267-4.675 1.227 1.247-4.559-0.294-0.467c-1.185-1.862-1.889-4.131-1.889-6.565 0-6.822 5.531-12.353 12.353-12.353s12.353 5.531 12.353 12.353c0 6.822-5.53 12.353-12.353 12.353h-0zM22.838 18.977c-0.371-0.186-2.197-1.083-2.537-1.208-0.341-0.124-0.589-0.185-0.837 0.187-0.246 0.371-0.958 1.207-1.175 1.455-0.216 0.249-0.434 0.279-0.805 0.094-1.15-0.466-2.138-1.087-2.997-1.852l0.010 0.009c-0.799-0.74-1.484-1.587-2.037-2.521l-0.028-0.052c-0.216-0.371-0.023-0.572 0.162-0.757 0.167-0.166 0.372-0.434 0.557-0.65 0.146-0.179 0.271-0.384 0.366-0.604l0.006-0.017c0.043-0.087 0.068-0.188 0.068-0.296 0-0.131-0.037-0.253-0.101-0.357l0.002 0.003c-0.094-0.186-0.836-2.014-1.145-2.758-0.302-0.724-0.609-0.625-0.836-0.637-0.216-0.010-0.464-0.012-0.712-0.012-0.395 0.010-0.746 0.188-0.988 0.463l-0.001 0.002c-0.802 0.761-1.3 1.834-1.3 3.023 0 0.026 0 0.053 0.001 0.079l-0-0.004c0.131 1.467 0.681 2.784 1.527 3.857l-0.012-0.015c1.604 2.379 3.742 4.282 6.251 5.564l0.094 0.043c0.548 0.248 1.25 0.513 1.968 0.74l0.149 0.041c0.442 0.14 0.951 0.221 1.479 0.221 0.303 0 0.601-0.027 0.889-0.078l-0.031 0.004c1.069-0.223 1.956-0.868 2.497-1.749l0.009-0.017c0.165-0.366 0.261-0.793 0.261-1.242 0-0.185-0.016-0.366-0.047-0.542l0.003 0.019c-0.092-0.155-0.34-0.247-0.712-0.434z"/></svg>';
const WHATSAPP_CATALOG_URL = "https://wa.me/c/5511993936231";

const products = [
    // LATICÍNIOS E QUEIJOS
    {
        name: "Queijo Meia Cura",
        description: "Sabor intenso e textura firme, com o toque de acidez ideal. Perfeito para o café, lanches ou para ralar.",
        imagePlaceholder: "img/sequilho.jpeg",
        category: "queijos"
    },
    {
        name: "Requeijão Manteiga do Norte",
        description: "A cremosidade inconfundível do Norte! Cor amarelada vibrante e sabor amanteigado. Ideal para pães e tapiocas.",
        imagePlaceholder: "https://placehold.co/400x300/FFD700/8B4513?text=Requeijao+Manteiga",
        category: "queijos"
    },
    {
        name: "Queijo Fresco (Minas Padrão)",
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
        name: "Queijo Coalho",
        description: "Queijo de textura firme, ideal para ser grelhado ou assado na brasa. Um sabor suave e levemente salgado que não pode faltar.",
        imagePlaceholder: "https://placehold.co/400x300/F0E68C/8B4513?text=Queijo+Coalho",
        category: "queijos"
    },
    {
        name: "Manteiga com Sal",
        description: "Manteiga cremosa e fresca da Terra de Minas, com a quantidade certa de sal para realçar o sabor do seu pão ou torradas.",
        imagePlaceholder: "https://placehold.co/400x300/FFD700/8B4513?text=Manteiga+c/+Sal",
        category: "queijos"
    },
    {
        name: "Manteiga de Garrafa",
        description: "A legítima manteiga do sertão nordestino. Sabor intenso e cor dourada. Perfeita para finalizar carnes, tapiocas e cuscuz.",
        imagePlaceholder: "https://placehold.co/400x300/FFD700/8B4513?text=Manteiga+Garrafa",
        category: "queijos"
    },

    // DOCES E DELÍCIAS
    {
        name: "Doce de Leite Cremoso",
        description: "O verdadeiro doce de leite de tacho. Textura aveludada, sabor intenso e sem cristais de açúcar. Perfeito com queijo ou puro!",
        imagePlaceholder: "https://placehold.co/400x300/A0522D/FFFFFF?text=Doce+de+Leite",
        category: "doces"
    },
    {
        name: "Goiabada Cascão Artesanal",
        description: "Receita tradicional mineira com pedaços de goiaba. Ideal para harmonizar com Queijo Minas Frescal.",
        imagePlaceholder: "https://placehold.co/400x300/CD5C5C/FFFFFF?text=Goiabada",
        category: "doces"
    },
    {
        name: "Cavaca de Banana e Açúcar",
        description: "Sequilho de banana frito, macio por dentro e polvilhado com açúcar. Uma guloseima leve e irresistível.",
        imagePlaceholder: "https://placehold.co/400x300/FFE4B5/8B4513?text=Cavaca+Banana",
        category: "doces"
    },
    {
        name: "Cavaca de Banana e Canela",
        description: "Sequilho de banana frito e envolto em canela. O equilíbrio perfeito entre o doce da fruta e o toque aromático da especiaria.",
        imagePlaceholder: "https://placehold.co/400x300/D2B48C/8B4513?text=Cavaca+Canela",
        category: "doces"
    },
    {
        name: "Amanteigado de Goiaba",
        description: "Biscoito amanteigado delicado, recheado com uma deliciosa geleia de goiaba. Combinação clássica e favorita.",
        imagePlaceholder: "https://placehold.co/400x300/F0FFFF/CD5C5C?text=Amanteigado",
        category: "doces"
    },
    {
        name: "Cookies de Amendoim",
        description: "Biscoitos crocantes em formato de anel, feitos com amendoim. Sabor marcante e textura perfeita para o café.",
        imagePlaceholder: "https://placehold.co/400x300/FFD700/8B4513?text=Cookies",
        category: "doces"
    },
    {
        name: "Mantecal (Biscoito Doce)",
        description: "Biscoito caseiro que desmancha na boca! Sabor suave com um toque de recheio de fruta no centro.",
        imagePlaceholder: "https://placehold.co/400x300/F0FFFF/8B4513?text=Mantecal",
        category: "doces"
    },
    {
        name: "Suspiro Recheado",
        description: "Merengues leves e aerados, com recheio cremoso. A doçura na medida certa, ideal para sobremesa ou lanche.",
        imagePlaceholder: "https://placehold.co/400x300/F0FFFF/8B4513?text=Suspiro",
        category: "doces"
    },
    {
        name: "Palmier (Folhado Doce)",
        description: "Clássico biscoito folhado em formato de coração. Crocante, leve e polvilhado com açúcar e canela. A doçura e a textura perfeita para acompanhar qualquer bebida.",
        imagePlaceholder: "https://placehold.co/400x300/D2B48C/8B4513?text=Palmier",
        category: "doces"
    },
    {
        name: "Folheado Doce Artesanal",
        description: "Produto artesanal, massa folhada leve e coberta com açúcar cristalizado. O lanche perfeito para quem ama um crocante doce.",
        imagePlaceholder: "https://placehold.co/400x300/FFD700/8B4513?text=Folhado+Doce",
        category: "doces"
    },
    {
        name: "Queijo Desidratado c/ Goiabada",
        description: "Snacks de queijo crocantes com o doce clássico da goiabada. O famoso Romeu e Julieta em uma versão perfeita para petiscar.",
        imagePlaceholder: "https://placehold.co/400x300/F0E68C/CD5C5C?text=Romeu+e+Julieta",
        category: "doces"
    },
    {
        name: "Amendoim Tipo Ovinho",
        description: "Amendoim doce e coberto por uma casquinha açucarada. O clássico 'ovinho', macio por dentro e doce por fora.",
        imagePlaceholder: "https://placehold.co/400x300/F0FFFF/8B4513?text=Amendoim+Ovinho",
        category: "doces"
    },
    {
        name: "Amendoim Doce Praline",
        description: "Amendoim caramelizado com pralinê. Uma delícia crocante e doce, ideal para quem busca uma guloseima cheia de sabor.",
        imagePlaceholder: "https://placehold.co/400x300/A0522D/FFFFFF?text=Praline",
        category: "doces"
    },
    {
        name: "Amendoim Caram. de Gergilim",
        description: "Amendoim crocante, caramelizado e polvilhado com gergelim e canela. Um snack doce com toque aromático.",
        imagePlaceholder: "https://placehold.co/400x300/8B4513/FFFFFF?text=Gergilim",
        category: "doces"
    },
    {
        name: "Amendoim de Chocolate",
        description: "Amendoim torrado e coberto com uma fina camada de chocolate. O petisco doce e energético que você precisa.",
        imagePlaceholder: "https://placehold.co/400x300/A0522D/FFFFFF?text=Chocolate",
        category: "doces"
    },
    {
        name: "Doce Pastoso c/ Leite Fazenda",
        description: "Doce de leite cremoso, estilo fazenda. Sabor autêntico, perfeito para comer de colher, com pão ou queijo.",
        imagePlaceholder: "https://placehold.co/400x300/A0522D/FFFFFF?text=Doce+Fazenda",
        category: "doces"
    },
    {
        name: "Cocada Cremosa",
        description: "O doce de coco mais cremoso que você já provou. Feito com leite, é ideal para quem busca uma doçura suave e textura aveludada.",
        imagePlaceholder: "https://placehold.co/400x300/F0FFFF/8B4513?text=Cocada+Cremosa",
        category: "doces"
    },
    {
        name: "Doce de Milho",
        description: "Doce cremoso e suave à base de milho verde. Uma delícia de tradição mineira, com sabor leve e toque caseiro.",
        imagePlaceholder: "https://placehold.co/400x300/FFD700/8B4513?text=Doce+Milho",
        category: "doces"
    },
    {
        name: "Bananada de Colher",
        description: "Bananada cremosa, pronta para ser servida. Sabor concentrado e delicioso de banana. Ótima como recheio ou sobremesa.",
        imagePlaceholder: "https://placehold.co/400x300/8B4513/FFFFFF?text=Bananada",
        category: "doces"
    },
    {
        name: "Ambrosia",
        description: "Doce conventual, preparado com ovos e leite coalhado. Textura macia e sabor único, um clássico da culinária portuguesa e mineira.",
        imagePlaceholder: "https://placehold.co/400x300/FFA07A/8B4513?text=Ambrosia",
        category: "doces"
    },
    {
        name: "Geleia de Goiaba (57% Fruta)",
        description: "Geleia gourmet com alto teor de fruta (57%). Sabor intenso e natural da goiaba. Perfeita para torradas, iogurte ou recheios.",
        imagePlaceholder: "https://placehold.co/400x300/CD5C5C/FFFFFF?text=Geleia",
        category: "doces"
    },
    {
        name: "Mel Puro Ouro de Minas",
        description: "Mel puro, de alta qualidade. Excelente fonte de energia e antioxidantes. Ideal para adoçar bebidas, frutas e receitas.",
        imagePlaceholder: "https://placehold.co/400x300/FFD700/8B4513?text=Mel+Puro",
        category: "doces"
    },
    {
        name: "Mamão Ralado com Coco",
        description: "Doce de mamão verde ralado cozido com coco. Cor vibrante e sabor tradicional. Perfeito para acompanhar um café.",
        imagePlaceholder: "https://placehold.co/400x300/3CB371/FFFFFF?text=Mamao+Coco",
        category: "doces"
    },
    {
        name: "Cidra Ralada com Coco",
        description: "Doce de cidra (citrus) em compota com coco. Um sabor cítrico e refrescante que equilibra perfeitamente com a doçura do coco.",
        imagePlaceholder: "https://placehold.co/400x300/90EE90/8B4513?text=Cidra+Coco",
        category: "doces"
    },

    // MERCEARIA E PETISCOS SALGADOS (VARIADOS)
    {
        name: "Queijo 4 Sabores",
        description: "Uma explosão de sabores em um só queijo! Combinação perfeita para inovar na tábua de frios.",
        imagePlaceholder: "https://placehold.co/400x300/DDA0DD/8B4513?text=4+Queijos",
        category: "variados"
    },
    {
        name: "Palito de Parmesão (Congelado)",
        description: "Pão de queijo em formato de palito, congelado e pronto para assar. O autêntico sabor de Minas, rico em parmesão.",
        imagePlaceholder: "https://placehold.co/400x300/FFA07A/8B4513?text=Palito+Parm",
        category: "variados"
    },
    {
        name: "Empada de Palmito (Congelada)",
        description: "Empadas congeladas, prontas para assar. Massa amanteigada e recheio cremoso e farto de palmito.",
        imagePlaceholder: "https://placehold.co/400x300/F0FFFF/8B4513?text=Empada",
        category: "variados"
    },
    {
        name: "Ovos Caipiras (Cartela)",
        description: "Ovos de galinhas criadas soltas, com gemas amarelas e sabor superior. A melhor escolha para suas receitas.",
        imagePlaceholder: "https://placehold.co/400x300/D2B48C/8B4513?text=Ovos+Caipiras",
        category: "variados"
    },
    {
        name: "Ovos Brancos (Cartela c/ 30)",
        description: "Cartela econômica com 30 ovos brancos frescos. Essencial para o seu dia a dia e para grandes receitas.",
        imagePlaceholder: "https://placehold.co/400x300/F0FFFF/8B4513?text=Ovos+Brancos",
        category: "variados"
    },
    {
        name: "Lemon Pepper Poletto (200g)",
        description: "O toque cítrico e picante ideal para realçar aves, peixes e saladas. Um tempero premium que transforma qualquer prato.",
        imagePlaceholder: "https://placehold.co/400x300/B8860B/FFFFFF?text=Lemon+Pepper",
        category: "variados"
    },
    {
        name: "Salsa Criolla Poletto (300g)",
        description: "Tempero completo inspirado na cozinha latina. Perfeito para marinadas, carnes assadas e churrasco, dando um sabor único.",
        imagePlaceholder: "https://placehold.co/400x300/87CEFA/000000?text=Salsa+Criolla",
        category: "variados"
    },
    {
        name: "Pimenta Comari Verde (Molho)",
        description: "Molho de pimenta Comari Verde (pimenta de cheiro). Sabor frutado e ardência na medida certa para quem ama um toque de frescor.",
        imagePlaceholder: "https://placehold.co/400x300/3CB371/FFFFFF?text=Pimenta+Comari",
        category: "variados"
    },
    {
        name: "Pururuca Premium (Sabores)",
        description: "Pururuca crocante, saborosa e pronta para petiscar! O clássico que não pode faltar na sua mesa de aperitivos.",
        imagePlaceholder: "https://placehold.co/400x300/D2B48C/8B4513?text=Pururuca",
        category: "variados"
    },
    {
        name: "Pururuca Sabor Limão",
        description: "A crocância da pururuca com um toque refrescante e ácido de limão. Uma explosão de sabor para surpreender!",
        imagePlaceholder: "https://placehold.co/400x300/90EE90/8B4513?text=Pururuca+Limao",
        category: "variados"
    },
    {
        name: "Molho Pimenta Scorpion",
        description: "Pimenta de altíssima ardência para os corajosos! Sabor frutado, ideal para quem busca um nível extremo de picante.",
        imagePlaceholder: "https://placehold.co/400x300/FF4500/FFFFFF?text=Pimenta+Scorpion",
        category: "variados"
    },
    {
        name: "Molho Pimenta Carolina Reaper",
        description: "O molho mais ardido do mundo! Sabor único e picância intensa, recomendado apenas para amantes de pimenta forte.",
        imagePlaceholder: "https://placehold.co/400x300/B22222/FFFFFF?text=Carolina+Reaper",
        category: "variados"
    },
    {
        name: "Molho Pimenta Calabresa",
        description: "Molho de ardência média com pedaços de pimenta calabresa. O clássico tempero brasileiro para pizzas, lanches e petiscos.",
        imagePlaceholder: "https://placehold.co/400x300/FF6347/FFFFFF?text=Pimenta+Calabresa",
        category: "variados"
    },
    {
        name: "Molho de Pequi",
        description: "Molho tradicional com o sabor marcante e exótico do pequi. Perfeito para acompanhar arroz, frango e a culinária sertaneja.",
        imagePlaceholder: "https://placehold.co/400x300/FFD700/8B4513?text=Molho+Pequi",
        category: "variados"
    },
    {
        name: "Creme de Alho",
        description: "Creme saboroso e suave à base de alho. Ideal para passar no pão, temperar saladas e usar em churrascos.",
        imagePlaceholder: "https://placehold.co/400x300/F0FFFF/8B4513?text=Creme+Alho",
        category: "variados"
    },
    {
        name: "Pão de Queijo Congelado",
        description: "Pronto para assar! Sabor mineiro autêntico e irresistível, feito com muito mais queijo. Perfeito para o café da manhã.",
        imagePlaceholder: "https://placehold.co/400x300/CD5C5C/FFFFFF?text=Pao+de+Queijo",
        category: "variados"
    },
    {
        name: "Amendoim Sem Pele (500g)",
        description: "Amendoim torrado e salgado, sem pele. Crocante e fácil de comer, ideal para petiscos e bares.",
        imagePlaceholder: "https://placehold.co/400x300/FFD700/8B4513?text=Amendoim+Salgado",
        category: "variados"
    },
    {
        name: "Amendoim Crocante Natural (500g)",
        description: "Amendoim crocante com casquinha saborosa. O clássico temperado para acompanhar momentos de lazer.",
        imagePlaceholder: "https://placehold.co/400x300/FFA07A/8B4513?text=Amendoim+Crocante",
        category: "variados"
    },
    {
        name: "Amendoim Crocante Pimenta (500g)",
        description: "Crocância com um toque picante! Amendoim torrado e coberto com uma casquinha de pimenta, para quem gosta de calor.",
        imagePlaceholder: "https://placehold.co/400x300/FF6347/FFFFFF?text=Amendoim+Pimenta",
        category: "variados"
    },
    {
        name: "Amendoim Crocante Churrasco (500g)",
        description: "Sabor de churrasco na sua mão! Amendoim crocante e temperado, perfeito para harmonizar com cerveja e encontros.",
        imagePlaceholder: "https://placehold.co/400x300/A0522D/FFFFFF?text=Amendoim+Churrasco",
        category: "variados"
    },
    {
        name: "Amendoim Crocante Japonês (500g)",
        description: "O tradicional amendoim japonês com casquinha crocante e salgada. Um petisco que agrada a todos.",
        imagePlaceholder: "https://placehold.co/400x300/D2B48C/8B4513?text=Amendoim+Japones",
        category: "variados"
    },
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
               
                ${whatsappIconSvg}

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