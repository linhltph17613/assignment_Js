import footer from "../components/footer";
import Header from "../components/header";

const AboutPage = {
    render() {
        return /*html */`
        
        <header>
        ${Header.render()}
        </header>
        <h1>About Page</h1>
        <p> Tối ngày 16/06/2018, Cao đẳng FPT Polytechnic Hà Nội đã tổ chức Lễ tôn vinh “Ong vàng Poly”,tuyên dương 295 cá nhân và tập thể có thành tích xuất sắc trong học tập cũng như hoạt",
 
        </p>
        <footer class="bg-[#272f54] mt-4">
        ${footer.render()}
        </footer>
        `;
    },
};
export default AboutPage;