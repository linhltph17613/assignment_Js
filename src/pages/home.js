import Banner from "../components/banner";
import NewsList from "../components/newList";

const HomePage = {
    print() {
        return /* html */`
            
            <div class="banner">
            ${Banner.print()}
            </div>
           <h2 class="text-2xl font-semibold uppercase my-4">Tin tức học tập</h2>
            <div class="grid grid-cols-3 gap-8">
            ${NewsList.print()}
            </div>
            <h2 class="text-2xl font-semibold uppercase my-4">Hoạt động sinh viên</h2>
            <div class="grid grid-cols-3 gap-8">
            ${NewsList.print()}
            </div>
            
        `;
    },
};
export default HomePage;