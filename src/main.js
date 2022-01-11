import Navigo from 'navigo';
import Header from './components/header.js';

import AboutPage from './pages/about.js';
import HomePage from './pages/home.js';

const router = new Navigo("/", {linksSelector: "a"});
const render =  (content) => {
   // console.log(content); //{print()}
   document.getElementById("header").innerHTML = Header.render();
    document.getElementById("app").innerHTML = content;
};

router.on({
    "/": () => {
        print(HomePage.render());
    },
    "/about": () => {
        print( AboutPage.render());

    },
    
});
router.resolve();


