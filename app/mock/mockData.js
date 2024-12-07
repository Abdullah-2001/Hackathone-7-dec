import monitor from '../../public/monitor.png';
import gamepad from '../../public/gamepad.png';

export const NAV_LINKS = [
    { subMenus: true, link: 'Woman’s Fashion' },
    { subMenus: true, link: 'Men’s Fashion' },
    { subMenus: false, link: 'Electronics' },
    { subMenus: false, link: 'Home & Lifestyle' },
    { subMenus: false, link: 'Medicine' },
    { subMenus: false, link: 'Sports & Outdoor' },
    { subMenus: false, link: 'Baby’s & Toys' },
    { subMenus: false, link: 'Groceries & Pets' },
    { subMenus: false, link: 'Health & Beauty' },
];

export const CART_TIEMS = [
    { id: 1, image: monitor, product: "LCD Monitor", price: 300, qty: 0, subTotal: 1200 },
    { id: 2, image: gamepad, product: "H1 Gamepad", price: 400, qty: 0, subTotal: 1200 },
    { id: 3, image: gamepad, product: "H1 Gamepad", price: 600, qty: 0, subTotal: 1200 },
];