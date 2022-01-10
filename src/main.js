import Navigo from 'navigo';

import AboutPage from './pages/about.js';
import HomePage from './pages/home.js';

const router = new Navigo("/", {linksSelector: "a"});
const render =  (content) => {
   // console.log(content); //{print()}
    document.getElementById("app").innerHTML = content.print();
};

router.on({
    "/": () => {
        render(HomePage);
    },
    "/about": () => {
        render(AboutPage);

    },
});
router.resolve();


