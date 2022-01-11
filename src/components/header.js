import { menuList } from "../data";

const Header = {
    render () {
        return /*html*/`
        <div class="bg-[#272f54]  py-4">
        <a href="#">
          <img class="m-auto" src="https://picsum.photos/150/50" alt="">
        </a>
      </div>
      <div class="flex bg-[#c97900]">
        <div class="">
        <ul class="menu">
        <li class="menu_item"><a class="menu_item_link" href="/">Home Page</a></li>
        <li class="menu_item"><a class="menu_item_link" href="/about">About Page</a></li>
        <li class="menu_item"><a class="menu_item_link" href="">Chương trình đào tạo</a></li>
        <li class="menu_item"><a class="menu_item_link" href="">Góc sinh viên</a></li>
      </ul>
        </div>

        <div>
          <form action="" class="my-3 mx-14">
            <input type="text" class="w-52 outline-none">
            <button class="bg-[#272f54] text-[#fff] border-[#fff] border w-24">Tìm kiếm</button>
          </form>
        </div>

      </div>
        `
    }
};
export default Header;