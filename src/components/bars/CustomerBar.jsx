import SearchBar from "../inputs/SearchBar";

const CustomerBar = () => {
  return (
    <div className="lg:flex">
      <div className="flex-1 flex flex-row  p-3 px-2 box-border items-center">
        <span className="flex-[1] hidden sm:inline-block">Customer</span>
        <input
          type="text"
          className="border rounded-sm p-1 flex-[6] px-3 min-w-[250px]"
          placeholder="Search"
        />
        <div className="flex-[1]  hidden sm:inline-block"></div>
      </div>
      <div className="flex-1 flex flex-row p-3 px-2 pr-5 box-border justify-center">
        <button className="bg-gray-200 text-black rounded-sm py-1 px-3 cursor-pointer hover:bg-[#bbbcbd] hover:text-black m-1 transition-all ease-in-out active:bg-[#d3d1d1] text-xs">
          Add Customer
        </button>
        <button className="bg-gray-200 text-black rounded-sm py-1 px-3 cursor-pointer hover:bg-[#bbbcbd] hover:text-black m-1 transition-all ease-in-out active:bg-[#d3d1d1] text-xs">
          Manage Customer
        </button>
      </div>
    </div>
  );
};

export default CustomerBar;
