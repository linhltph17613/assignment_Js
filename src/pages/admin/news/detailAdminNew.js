import HeaderAdmin from "../../../components/headerAdmin";
import { dataNew } from "../../../data";

const detailAdminNew = {
    print (id) {
        const result = dataNew.find((postNew) => postNew.id === id);
        return /*html*/ `
        ${HeaderAdmin.print()}
        <div class="m-auto">
        <h1 class="text-center text-2xl font-semibold my-4">Information Page</h1>
        
        <div> <img class="rounded-full m-auto" src="${result.img}"> </div>

    
        <div class="text-center"> ${result.name}</div>
        <div class="text-center"> ${result.email}</div>
        <div class="text-center"> ${result.title}</div>
       </div>
        `;
    }
}
export default detailAdminNew;