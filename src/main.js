import Navigo from 'navigo';
import Header from './components/header.js';

import AboutPage from './pages/about.js';
import HomePage from './pages/home.js';

const router = new Navigo("/", {linksSelector: "a"});
const render =  (content) => {
   // console.log(content); //{print()}
   document.getElementById("header").innerHTML = Header.print();
    document.getElementById("app").innerHTML = content;
};

router.on({
    "/": () => {
        render(HomePage.print());
    },
    "/about": () => {
        render( AboutPage.print());

    },
    
});
router.resolve();


