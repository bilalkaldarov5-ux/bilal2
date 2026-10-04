// ===== Тамактардын маалыматы =====
const IMG = (k) => `https://loremflickr.com/600/420/${k}?lock=${k.length}`;
const foods = [
  // Кыргыз
  {id:1,cat:'kyrgyz',name:'Бешбармак',price:450,rating:4.9,img:'beshbarmak,meat,noodles',portion:'400 г',desc:'Салттуу кыргыз тамагы: кесме жана жумшак эт.',ing:'Жылкы/уй эти, кесме, пияз, шорпо'},
  {id:2,cat:'kyrgyz',name:'Куурдак',price:380,rating:4.8,img:'fried,meat,potato',portion:'350 г',desc:'Кууруп бышырылган жумшак эт жана картошка.',ing:'Козу эти, картошка, пияз, жашылча'},
  {id:3,cat:'kyrgyz',name:'Манты',price:250,rating:4.9,img:'dumplings,manti',portion:'5 даана',desc:'Буу менен бышкан ширелүү эттүү манты.',ing:'Эт, пияз, камыр, дөмүртөк май'},
  {id:4,cat:'kyrgyz',name:'Чучук',price:420,rating:4.6,img:'horse,sausage,meat',portion:'200 г',desc:'Салттуу жылкы этинен жасалган даамдуу чучук.',ing:'Жылкы эти, дурус, тузу'},
  {id:5,cat:'kyrgyz',name:'Лагман',price:300,rating:4.8,img:'lagman,noodle,soup',portion:'450 г',desc:'Колдо созулган кесме, эт жана жашылча.',ing:'Кесме, уй эти, болгар калемпири, сабиз'},
  // Өзбек
  {id:6,cat:'uzbek',name:'Плов',price:320,rating:4.9,img:'pilaf,rice,meat',portion:'400 г',desc:'Казанда бышкан хушбой өзбек палоосу.',ing:'Күрүч, сабиз, эт, пияз, зире'},
  {id:7,cat:'uzbek',name:'Самса',price:120,rating:4.7,img:'samsa,pastry',portion:'1 даана',desc:'Тандырда бышкан, чыртылдак эттүү самса.',ing:'Катмарлуу камыр, эт, пияз'},
  {id:8,cat:'uzbek',name:'Дымлама',price:410,rating:4.6,img:'stew,meat,vegetables',portion:'500 г',desc:'Жашылча жана эттен жай бышырылган тамак.',ing:'Эт, картошка, помидор, капуста'},
  {id:9,cat:'uzbek',name:'Шашлык',price:350,rating:4.9,img:'shashlik,kebab,grill',portion:'250 г',desc:'Көмүрдө бышырылган ширелүү шашлык.',ing:'Козу эти, пияз, сумах, зире'},
  {id:10,cat:'uzbek',name:'Лагман (өзбекче)',price:310,rating:4.7,img:'noodle,soup,beef',portion:'450 г',desc:'Өзбек стилиндеги жупуну курамдуу лагман.',ing:'Кесме, эт, редька, калемпир'},
  // Пакистан
  {id:11,cat:'pakistan',name:'Biryani',price:360,rating:4.9,img:'biryani,rice',portion:'400 г',desc:'Татымалдуу күрүч жана тоок эти.',ing:'Басмати күрүчү, тоок, йогурт, татымал'},
  {id:12,cat:'pakistan',name:'Chicken Karahi',price:390,rating:4.8,img:'chicken,curry',portion:'350 г',desc:'Помидор жана зыңгыбыздан казанда бышкан тоок.',ing:'Тоок, помидор, зыңгыбыз, чили'},
  {id:13,cat:'pakistan',name:'Nihari',price:430,rating:4.7,img:'nihari,beef,stew',portion:'400 г',desc:'Узакка бышкан жумшак эттүү салттуу шорпо.',ing:'Уй эти, татымал, ун, зыңгыбыз'},
  {id:14,cat:'pakistan',name:'Chicken Tikka',price:340,rating:4.8,img:'chicken,tikka',portion:'6 даана',desc:'Йогурт менен маринадталган тоок шашлыгы.',ing:'Тоок, йогурт, паприка, лимон'},
  {id:15,cat:'pakistan',name:'Samosa',price:130,rating:4.6,img:'samosa,fried',portion:'2 даана',desc:'Картошкалуу татымал самса.',ing:'Картошка, нокот, татымал, камыр'},
  // Салаттар
  {id:16,cat:'salad',name:'Ачыкчүчүк',price:140,rating:4.5,img:'tomato,onion,salad',portion:'200 г',desc:'Помидор жана пияздан жеңил салат.',ing:'Помидор, пияз, кийик от, туз'},
  {id:17,cat:'salad',name:'Цезарь',price:260,rating:4.7,img:'caesar,salad',portion:'250 г',desc:'Тоок эти жана пармезан менен салат.',ing:'Тоок, салат жалбырагы, пармезан, сухарь'},
  {id:18,cat:'salad',name:'Жашылча салаты',price:170,rating:4.4,img:'vegetable,salad',portion:'220 г',desc:'Жаңы жашылчалардан даярдалган салат.',ing:'Бадыраң, помидор, калемпир, зайтун майы'},
  // Суусундуктар
  {id:19,cat:'drink',name:'Кара чай',price:60,rating:4.6,img:'tea,cup',portion:'400 мл',desc:'Хушбой кара чай, чайнекте.',ing:'Кара чай, кайнак суу'},
  {id:20,cat:'drink',name:'Максым',price:90,rating:4.5,img:'drink,glass,grain',portion:'300 мл',desc:'Салттуу кыргыз суусундугу.',ing:'Жаргак, суу, талкан'},
  {id:21,cat:'drink',name:'Лимонад',price:120,rating:4.7,img:'lemonade',portion:'400 мл',desc:'Муздак лимонад жалбыз менен.',ing:'Лимон, жалбыз, шекер, муз'},
  // Десерттер
  {id:22,cat:'dessert',name:'Чак-чак',price:180,rating:4.7,img:'honey,dessert,pastry',portion:'150 г',desc:'Бал менен капталган таттуу камыр.',ing:'Камыр, бал, шекер'},
  {id:23,cat:'dessert',name:'Медовик',price:200,rating:4.8,img:'honey,cake',portion:'1 кесим',desc:'Назик бал торту.',ing:'Бал, сметана, ун, жумуртка'},
  {id:24,cat:'dessert',name:'Гулаб жамун',price:170,rating:4.6,img:'gulab,jamun,dessert',portion:'3 даана',desc:'Сироптун ичинде жумшак пакистан таттуусу.',ing:'Сүт порошогу, ун, шекер сиропу, кардамон'}
];

// ===== Абал =====
let cart = JSON.parse(localStorage.getItem('dd_cart') || '[]');
let category = 'all', query = '';
const $ = (s) => document.querySelector(s);
const fmt = (n) => n.toLocaleString('ru-RU') + ' сом';
const imgTag = (f, cls = '') =>
  `<img class="${cls}" src="${IMG(f.img)}" alt="${f.name}" loading="lazy" onerror="this.style.opacity=0">`;

// ===== Менюну чыгаруу =====
function renderMenu() {
  const q = query.trim().toLowerCase();
  const list = foods.filter(f =>
    (category === 'all' || f.cat === category) && f.name.toLowerCase().includes(q));
  $('#menuGrid').innerHTML = list.map((f, i) => `
    <article class="card" style="animation-delay:${i * 0.05}s">
      <div class="card-img">${imgTag(f)}</div>
      <div class="card-body">
        <div class="card-top"><h3>${f.name}</h3><span class="rating">⭐ ${f.rating}</span></div>
        <p>${f.desc}</p>
        <div class="price">${fmt(f.price)}</div>
        <div class="card-btns">
          <button class="btn-add" data-add="${f.id}">Себетке кошуу</button>
          <button class="btn-view" data-view="${f.id}">Толук көрүү</button>
        </div>
      </div>
    </article>`).join('');
  $('#emptyMsg').hidden = list.length > 0;
}

// ===== Себет =====
function saveCart() { localStorage.setItem('dd_cart', JSON.stringify(cart)); }

function addToCart(id) {
  const item = cart.find(c => c.id === id);
  item ? item.qty++ : cart.push({ id, qty: 1 });
  updateCart();
  const b = $('#cartCount');
  b.classList.remove('bump'); void b.offsetWidth; b.classList.add('bump');
  toast(foods.find(f => f.id === id).name + ' себетке кошулду ✓');
}

function changeQty(id, d) {
  const item = cart.find(c => c.id === id);
  if (!item) return;
  item.qty += d;
  if (item.qty <= 0) cart = cart.filter(c => c.id !== id);
  updateCart();
}

function removeItem(id) { cart = cart.filter(c => c.id !== id); updateCart(); }

function cartTotal() {
  return cart.reduce((s, c) => s + foods.find(f => f.id === c.id).price * c.qty, 0);
}

function updateCart() {
  saveCart();
  $('#cartCount').textContent = cart.reduce((s, c) => s + c.qty, 0);
  $('#cartTotal').textContent = fmt(cartTotal());
  $('#cartItems').innerHTML = cart.length ? cart.map(c => {
    const f = foods.find(x => x.id === c.id);
    return `<div class="ci">
      ${imgTag(f)}
      <div class="ci-info"><b>${f.name}</b>
        <small>${fmt(f.price)} × ${c.qty} = ${fmt(f.price * c.qty)}</small>
        <div class="qty">
          <button data-minus="${f.id}">−</button><span>${c.qty}</span><button data-plus="${f.id}">+</button>
        </div>
      </div>
      <button class="del" data-del="${f.id}" title="Өчүрүү">🗑️</button>
    </div>`;
  }).join('') : '<p class="cart-empty">Себет бош 🛒<br>Тамак тандаңыз!</p>';
}

// ===== Modal / drawer =====
function openModal(id) { $(id).classList.add('show'); document.body.style.overflow = 'hidden'; }
function closeAll() {
  document.querySelectorAll('.modal.show').forEach(m => m.classList.remove('show'));
  $('#cart').classList.remove('open'); $('#overlay').classList.remove('show');
  document.body.style.overflow = '';
}
function openCart() { $('#cart').classList.add('open'); $('#overlay').classList.add('show'); }

function showDetail(id) {
  const f = foods.find(x => x.id === id);
  $('#detailContent').innerHTML = `
    ${imgTag(f)}
    <div class="detail-body">
      <h3>${f.name}</h3>
      <p>${f.desc}</p>
      <p><b>Курамы:</b> ${f.ing}</p>
      <div class="meta"><span>⭐ ${f.rating}</span><span>🍽️ Порция: ${f.portion}</span><b class="price">${fmt(f.price)}</b></div>
      <button class="btn btn-gold full" data-add="${f.id}">Себетке кошуу</button>
    </div>`;
  openModal('#detailModal');
}

function toast(msg) {
  const t = $('#toast'); t.textContent = msg; t.classList.add('show');
  clearTimeout(toast.t); toast.t = setTimeout(() => t.classList.remove('show'), 2000);
}

function startCheckout() {
  if (!cart.length) { toast('Алгач себетке тамак кошуңуз'); return; }
  closeAll(); openModal('#orderModal');
}

// ===== Форманы текшерүү =====
function setErr(input, msg) {
  input.classList.toggle('invalid', !!msg);
  input.parentElement.querySelector('.err').textContent = msg;
  return !msg;
}

$('#orderForm').addEventListener('submit', e => {
  e.preventDefault();
  const name = $('#fName'), phone = $('#fPhone'), addr = $('#fAddress');
  const ok = [
    setErr(name, name.value.trim().length < 3 ? 'Аты-жөнүңүздү жазыңыз' : ''),
    setErr(phone, !/^\+?[\d\s()-]{9,16}$/.test(phone.value.trim()) ? 'Телефон номерин туура жазыңыз' : ''),
    setErr(addr, addr.value.trim().length < 5 ? 'Дарегиңизди жазыңыз' : '')
  ].every(Boolean);
  if (!ok) return;
  cart = []; updateCart(); e.target.reset();
  closeAll(); openModal('#successModal');
});

// ===== Окуяларды байлоо =====
document.addEventListener('click', e => {
  const t = e.target.closest('button, .overlay, .modal');
  if (!t) return;
  if (t.dataset.add) addToCart(+t.dataset.add);
  else if (t.dataset.view) showDetail(+t.dataset.view);
  else if (t.dataset.plus) changeQty(+t.dataset.plus, 1);
  else if (t.dataset.minus) changeQty(+t.dataset.minus, -1);
  else if (t.dataset.del) removeItem(+t.dataset.del);
  else if (t.hasAttribute('data-close')) closeAll();
  else if (t.classList.contains('overlay') || (t.classList.contains('modal') && e.target === t)) closeAll();
});

$('#filters').addEventListener('click', e => {
  const b = e.target.closest('.filter'); if (!b) return;
  document.querySelectorAll('.filter').forEach(x => x.classList.remove('active'));
  b.classList.add('active'); category = b.dataset.cat; renderMenu();
});
$('#searchInput').addEventListener('input', e => { query = e.target.value; renderMenu(); });
$('#cartBtn').addEventListener('click', openCart);
$('#checkoutBtn').addEventListener('click', startCheckout);
$('#heroOrder').addEventListener('click', () => cart.length ? startCheckout() : (location.hash = '#menu', toast('Тамак тандап, себетке кошуңуз')));
$('#burger').addEventListener('click', () => $('#navLinks').classList.toggle('open'));
$('#navLinks').addEventListener('click', () => $('#navLinks').classList.remove('open'));
document.addEventListener('keydown', e => e.key === 'Escape' && closeAll());
window.addEventListener('scroll', () => $('#header').classList.toggle('scrolled', scrollY > 60));

// Scroll animation
const io = new IntersectionObserver(entries => entries.forEach(en => {
  if (en.isIntersecting) { en.target.classList.add('visible'); io.unobserve(en.target); }
}), { threshold: 0.15 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// Баштоо
renderMenu();
updateCart();
