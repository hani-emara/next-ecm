
import {  getCollections } from "@/lib/shopify";

export default async function CategoriesView() {
    let categories = (await getCollections()).filter(x => x.image && x.handle != '')
    return (
    <>
      <div className="md:hidden flex flex-row p-5 gap-10 justify-around rounded-xl shadow-sm divide-y overflow-auto sm:divide-y-0 sm:divide-x dark:border-neutral-700 dark:shadow-neutral-700/70 dark:divide-neutral-600 no-scrollbar">
      
      {categories.map(category => <>
        <div className="shrink-0 w-1/6 min-w-40 bg-white border rounded-xl shadow-sm flex justify-center dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
          <div className="flex-shrink-0 basis-1/3 relative w-full rounded-t-xl overflow-hidden pt-[40%] sm:rounded-s-xl sm:max-w-60 md:rounded-se-none md:max-w-xs">
            <img className="size-full absolute top-0 start-0 object-fit" src={category.image.url} alt={category.image.title} />
          </div>
          <div className="shrink-0 basis-2/3 flex flex-col justify-center items-center">
            {category.title}
          </div>
          
      </div>

      </>)}
      </div>
    </>
           
      
    );
  }