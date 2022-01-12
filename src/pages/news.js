import NewsList from "../components/newList";

const NewPages = {
    print() {
        return /*html*/ `
        <h2 class="text-2xl font-semibold uppercase my-4">News Page</h2>
        <div class="grid grid-cols-3 gap-8">
            ${NewsList.print()}
        </div>
        
        `;
    },
};
export default NewPages;