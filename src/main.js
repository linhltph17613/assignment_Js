import Navigo from 'navigo';
import Footer from './components/footer.js';
import Header from './components/header.js';

import AboutPage from './pages/about.js';
import AddNewAdmin from './pages/addminNews.js';
import Admin from './pages/admin.js';
import detailAdminNew from './pages/detailAdminNew.js';
import detailNewPage from './pages/detailNews.js';
import EditNewAdmin from './pages/editNews.js';
import HomePage from './pages/home.js';
import newAdmin from './pages/newAdmin.js';
import NewPages from './pages/news.js';
import SignUp from './pages/signup.js';
import Signin from './pages/signin.js';

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
    "/signup": () => {
        render(Signup.print())
    },
    "/dangnhap": () => render(Signin.print()),
    "/news/:id": ({data}) => {
        const {id} = data;
        render(detailNewPage.print(id));
    },

    "/admin/dashboard": ()=> {
        render(Admin.print());
    },

    "/admin/news":() => {
        render(newAdmin.print())
    },

    "/admin/detail/:id": ({data}) => {
        const {id} = data;
        render(detailAdminNew.print(id));
    },
    "/admin/news/:id/edit" : ({data}) =>{
        const {id} = data;
        render(EditNewAdmin.print(id));
    },

    "/admin/add": () => {
        render(AddNewAdmin.print())
    },
    
    
});
router.resolve();


