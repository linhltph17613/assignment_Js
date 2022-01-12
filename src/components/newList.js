import data from "../data";



const NewsList = {
    print() {
        return /* html */`
        

        ${data.map((news) => `
        <div class="new-item border p-4 hover:border-red-300;">
        <a href="/news/${news.id}"><img width="300px" src="${news.img}" alt="">
        <p class="font-semibold my-3 text-[#c97900]">${news.title}</p>
        <p class="text-sm ">${news.desc}</p>
        </a>
        </div>`
         ).join("")}
          
        
       
        `;
    },
};
export default NewsList;