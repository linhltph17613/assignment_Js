import {data} from "../data";
import Header from "../components/header";
const detailNewPage = {
    print(id) {
        const result = data.find((news) => news.id === id);

        return /*html*/`
        ${Header.print()}

        <div class="my-4"> 
        <p class="font-semibold my-3 text-[#c97900] text-center">${result.title}</p>
        <a href=""><img class="m-auto my-4 " width="300px" src="${result.img}" alt=""></a>
        <p class="text-sm ">${result.desc}</p>
        </div>  
        `;
    },
};
export default detailNewPage;