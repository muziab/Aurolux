import { CgGym } from "react-icons/cg";
export default function AddedCategories({ icon, CategorieTitle, numberOfProducts }) {
  return (
    <div className="flex  items-center text-sm justify-between text-neutral-400">
      <div className="flex gap-2 items-center">
        <div className="text-yellow-500 flex gap-2">
          {icon || <CgGym />}
        </div>
        <span className="font-extralight">{CategorieTitle}</span>
      </div>
      <span className="font-extralight">{numberOfProducts}</span>
    </div>
  );
}
