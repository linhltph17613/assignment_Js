import HeaderAdmin from "../components/headerAdmin";
import { dataNew } from "../data";

const newAdmin = {
    print () {
        return /*html*/ `
        <!-- This example requires Tailwind CSS v2.0+ -->
        ${HeaderAdmin.print()}
        
     

        <div class="flex flex-col mx-auto max-w-7xl">
        <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table class="min-w-full divide-y divide-gray-200">
                <thead class="bg-gray-50">
                <tr>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Name
                    </th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Title
                    </th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                    </th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Role
                    </th>
                    <th scope="col" class="relative px-6 py-3">
                    <span class="sr-only">Edit</span>
                    </th>
                </tr>
                </thead>
                ${dataNew.map((postNew) => `
                <tbody class="bg-white divide-y divide-gray-200">
                
                <tr>
                <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center">
                <div class="flex-shrink-0 h-10 w-10">
                <a href="/admin/detail/${postNew.id}">
                        <img class="h-10 w-10 rounded-full" src="${postNew.img}" alt="">
                        </a>
                        </div>
                        <div class="ml-4">
                        <div class="text-sm font-medium text-gray-900">
                        ${postNew.name}
                        </div>
                        <div class="text-sm text-gray-500">
                        ${postNew.email}
                        </div>
                        </div>
                    </div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                    <div class="text-sm text-gray-900">${postNew.title}</div>
                    <div class="text-sm text-gray-500">Optimization</div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                    <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        Active
                    </span>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    Admin
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <a href="/admin/news/${postNew.id}/edit" class="text-indigo-600 hover:text-indigo-900">Edit</a>
                    </td>
                    </tr>
                `    
                ).join("")}
                <!-- More people... -->
                </tbody>
                
               
            </table>
            </div>
          <a href="/admin/add"><button class="mt-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Add news</button></a>  
        </div>
        </div>
        </div>

        `;
    }
}
export default newAdmin;