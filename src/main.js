import Navigo from 'navigo';
import Footer from './components/footer.js';

import AboutPage from './pages/about.js';
import detailAdminNew from './pages/admin/news/detailAdminNew.js';
import detailNewPage from './pages/detailNews.js';
import EditNewAdmin from './pages/admin/news/edit.js';
import HomePage from './pages/home.js';
import NewPages from './pages/news.js';
import SignUp from './pages/signup.js';
import Signin from './pages/signin.js';
import ProductPage from './pages/admin/products.js/index.js';
import DashboardPage from './pages/dashboard.js';
import AdminNewsAdd from './pages/admin/news/add.js';
import AdminNews from './pages/admin/news/index.js';

const router = new Navigo("/", {linksSelector: "a"});
const render =  (content) => {
   // console.log(content); //{print()}
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

    "/product": () => render(ProductPage.print()),


    "/signup": () => {
        render(SignUp.print())
    },
    "/signin": () => render(Signin.print()),
    
    "/news/:id": ({data}) => {
        const {id} = data;
        render(detailNewPage.print(id));
    },

    // "/admin/dashboard": ()=> {
    //     render(Admin.print());
    // },

    // "/admin/news":() => {
    //     render(newAdmin.print())
    // },

    "/admin/detail/:id": ({data}) => {
        const {id} = data;
        render(detailAdminNew.print(id));
    },
    "/admin/news/:id/edit" : ({data}) =>{
        const {id} = data;
        render(EditNewAdmin.print(id));
    },

    "/admin/add": () => {
        render(AdminNewsAdd.print())
    },
    
    "/admin/dashboard": () => render(DashboardPage.print()),
    "/admin/products": () => render(ProductPage.print()),
    "/admin/news": () => render(AdminNews.print()),
    "/admin/news/add": () => render(AdminNewsAdd.print()),
});

router.resolve();


