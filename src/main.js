import Navigo from 'navigo';
import Footer from './components/footer.js';
import Header from './components/header.js';

import AboutPage from './pages/about.js';
import detailNewPage from './pages/detailNews.js';
import HomePage from './pages/home.js';
import NewPages from './pages/news.js';

const router = new Navigo("/", {linksSelector: "a"});
const render =  (content) => {
   // console.log(content); //{print()}
   document.getElementById("header").innerHTML = Header.print();
    document.getElementById("app").innerHTML = content;
    document.getElementById("footer").innerHTML = Footer.print();
};

router.on({
    "/": () => {
        render(HomePage.print());
    },
    "/about": () => {
        render( AboutPage.print());

    },
    "/news": () => {
        render(NewPages.print());
    },
    "/news/:id": ({data}) => {
        const {id} = data;
        render(detailNewPage.print(id));
    },
    
    
});
router.resolve();


