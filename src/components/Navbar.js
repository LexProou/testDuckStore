export function createNavbar() {
  // Создаем элемент навигационной панели
  const navbar = document.createElement('nav');
  navbar.className = 'navbar';

  // Левая часть навигационной панели
  const navbarLeft = document.createElement('div');
  navbarLeft.className = 'navbar-left';

  const logo = document.createElement('img');
  logo.src = 'Logo.svg';
  logo.alt = 'Logo';
  logo.className = 'logo';

  navbarLeft.appendChild(logo);

  // Центральная часть навигационной панели
  const navbarCenter = document.createElement('div');
  navbarCenter.className = 'navbar-center';

  const links = ['Главная', 'Каталог', 'Блок', 'Отзывы', 'Контакты'];
  links.forEach((linkText, index) => {
    const link = document.createElement('a');
    link.href = '#'; 
    link.className = 'nav-link';
    link.textContent = linkText;
    if (index === 0) { 
      link.classList.add('active');
    }
    navbarCenter.appendChild(link);
  });

  // Кнопка обратного звонка
  const callbackButton = document.createElement('button');
  callbackButton.className = 'btn';
  callbackButton.textContent = 'Заказать обратный звонок';
  navbarCenter.appendChild(callbackButton);

  // Правая часть навигационной панели
  const navbarRight = document.createElement('div');
  navbarRight.className = 'navbar-right';

  // Иконка корзины
  const cartIcon = document.createElement('img');
  cartIcon.src = 'ButtonIcons.svg'; 
  cartIcon.alt = 'Корзина';
  cartIcon.className = 'icon';

  // Иконка меню
  const menuIcon = document.createElement('img');
  menuIcon.className = 'menu-icon';
  menuIcon.src = 'menu.svg'; 
  menuIcon.alt = 'Меню';

  navbarRight.appendChild(cartIcon);
  navbarRight.appendChild(menuIcon);

  navbar.appendChild(navbarLeft);
  navbar.appendChild(navbarCenter);
  navbar.appendChild(navbarRight);


  document.body.prepend(navbar);

  // Создание модального окна
  const modal = document.createElement('div');
  modal.className = 'modal';
  modal.innerHTML = `
    <div class="modal-content">
      <div class="close-modal">X</div>
      <label for="name">Имя <span>*</span></label>
      <input type="text" placeholder="Введите ваше имя" id="name" name="name">
      <label for="phone">Телефон  <span>*</span></label>
      <input type="text" placeholder="+7 000 000 00 00" id="phone" name="phone">
      <button class="btn-callback">Отправить</button>
      <p class="disclaimer">Нажимая кнопку “Отправить”, вы соглашаетесь с <span class="highlight">политикой конфиденциальности</span> и <span class="highlight">договором оферты</span>.</p>
    </div>
  `;
  document.body.appendChild(modal);

  callbackButton.addEventListener('click', () => {
    modal.style.display = 'block';
  });

  modal.querySelector('.close-modal').addEventListener('click', () => {
    modal.style.display = 'none';
  });


  menuIcon.addEventListener('click', () => {
    navbarCenter.classList.toggle('show-menu');
  });

  const style = document.createElement('style');
  style.textContent = `
  
  `;
  document.head.appendChild(style);
}