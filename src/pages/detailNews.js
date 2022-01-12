import data from "../data";
const detailNewPage = {
    print(id) {
        const result = data.find((news) => news.id === id);

        return /*html*/`
     <h1>Detail NewPage</h1>
        <a href=""><img width="300px" src="${result.img}" alt=""></a>
        <p class="font-semibold my-3 text-[#c97900]">${result.title}</p>
        <p class="text-sm ">${result.desc}</p>
        
        `;
    },
};
export default detailNewPage;