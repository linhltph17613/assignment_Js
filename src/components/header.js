import { menuList } from "../data";

const Header = {
    print () {
        return /*html*/`
        <div class="bg-[#272f54]  py-4">
        <a href="#">
          <img class="m-auto" src="./img/logo.jpg" alt="">
        </a>
      </div>
      <div class="flex bg-[#c97900]">
        <div class="">
          <ul class="menu flex">
          ${menuList.map((post) => `
         
          <li class="menu_item"><a class="menu_item_link block py-3 px-6 hover:bg-indigo-600 hover:text-white hover:decoration-1" href="/${post.link}">${post.name}</a></li>

           ` ).join("")}
            
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