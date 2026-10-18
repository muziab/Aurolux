import { GrAnnounce } from "react-icons/gr";
import Features from "./Features";

function PageTitle({title}) {
  return (
    <div className="text-white gap-y-5 w-full max-lg:overflow-hidden flex justify-between place-self-start max-lg:flex-col" style={{padding:"20px"}}>
      <div>
        <h1 className="text-5xl mb-2 max-sm:text-4xl">{title}</h1>
        <p className="text-[14px] max-sm:text-[12px]">
          Discover premium products from trusted vendors worldwide.
        </p>
        <div className="flex items-center gap-1">
          <span className="text-yellow-500 flex items-center gap-1 text-sm">
            <GrAnnounce /> 12,300
          </span>
          products found
        </div>
      </div>
      <Features />
    </div>
  );
}

export default PageTitle;
