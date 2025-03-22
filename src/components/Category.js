// Создание одного элемента категории с иконкой
function createCategoryElement(name) {
    const category = document.createElement('div');
    category.className = 'category';

    const icon = document.createElement('img');
    icon.src = 'arrow.svg';
    icon.alt = name;
    icon.className = 'category-icon';

    const text = document.createElement('div');
    text.textContent = name;

    category.appendChild(icon); 
    category.appendChild(text); 

    return category; 
}

// Создание основного контента с категориями
export function createCategories() {
    const app = document.querySelector('#app'); 
    const content = document.createElement('div');
    content.className = 'content';

    const container = document.createElement('div');
    container.className = 'container';
    container.innerHTML = `
        <h1 class="large-text">МНОГО</h1>
        <h1 class="large-text2">УТОЧЕК</h1>
        <img src="c.svg" alt="Image" class="image-c">
        <img src="ImageDuck.svg" alt="Duck" class="image-duck"> 
        <div class="container2">
            <p class="description">Маленький друг найдётся для каждого в этом кряквенно жёлтом мире.</p>
            <button class="btn-show">Смотреть уточек</button> 
        </div>
    `;

    const categoriesDiv = document.createElement('div');
    categoriesDiv.className = 'categories';

    const categories = [
        'Классические',
        'Уточки панки',
        'Супер герои',
        'Милые',
        'Для детей',
        'Взрослым'
    ];

    categories.forEach(categoryName => {
        const categoryElement = createCategoryElement(categoryName);
        categoriesDiv.appendChild(categoryElement);
    });

    content.appendChild(container); 
    content.appendChild(categoriesDiv); 
    app.appendChild(content);
}