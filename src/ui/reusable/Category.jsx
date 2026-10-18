import { useState } from "react";
import Data from "../../ui/items.json";
import ChevronDown from "./ChevronDown";
import AddedCategories from "./AddedCategories";
export default function Categories({ catWrap, title, search }) {
  const [collapse, setCollapse] = useState(false);
  function toggleCollapse() {
    setCollapse(!collapse);
    console.log(collapse);
  }
  let wrap = catWrap;
  return (
    <>
      <div className="py-3 border-neutral-800 border-t flex justify-between items-center">
        <h1 className="font-semibold">{title}</h1>
        {/* <ChevronDown/> */}

        {!wrap && (
          <ChevronDown
            toggleCollapse={() => toggleCollapse()}
            collapsed={collapse}
          />
        )}
        {/* <FaChevronUp className={`font-extralight ${collapse == !false?"rotate-180":""}`} onClick={toggleCollapse} /> */}
      </div>
      {search}
      {/* <div className={`flex py-2  flex-col gap-2`}> */}
      <div
        className={`flex  ${collapse == !false ? "h-0 p-0  overflow-hidden box-border " : "py-2"} flex flex-col gap-2`}
      >
        {Data.map((product) => product)
          .filter((product) => product.id.endsWith("-1"))
          .map((product) => (
            <AddedCategories
              CategorieTitle={product.category}
              key={product.id}
              numberOfProducts={
                !wrap
                  ? Data.filter(
                      (product) => product.category == product.category,
                    ).length
                  : null
              }
            />
          ))}
        {/* <AddedCategories icon={<FaShoePrints />} CategorieTitle={"Others"} /> */}
      </div>
    </>
  );
}
