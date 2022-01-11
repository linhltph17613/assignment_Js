import Banner from "../components/banner";
import footer from "../components/footer";
import Header from "../components/header";
import NewsList from "../components/newList";

const HomePage = {
    render() {
        return /* html */`
            <header>
            ${Header.render()}
            </header>
            <div class="banner">
            ${Banner.render()}
            </div>
           <h2 class="text-2xl font-semibold uppercase my-4">Tin tức học tập</h2>
            <div class="grid grid-cols-3 gap-8">
            ${NewsList.render()}
            </div>
            <h2 class="text-2xl font-semibold uppercase my-4">Hoạt động sinh viên</h2>
            <div class="grid grid-cols-3 gap-8">
            ${NewsList.render()}
            </div>
            <footer class="bg-[#272f54] mt-4">
            ${footer.render()}
            </footer>
        `;
    },
};
export default HomePage;