const FilterBar = () => {
  const fields = [
    {
      placeholder: "Type Transaction ID",
      type: "text",
    },
    {
      placeholder: "Qty",
      type: "text",
    },
    {
      placeholder: "Weight",
      type: "text",
    },
  ];
  return (
    <div className="sm:my-4 lg:flex p-1 items-center flex-wrap">
      <div className="flex-[4] md:flex-wrap lg:flex-row justify-evenly mb-2 md:mb-4 min-w-fit">
        {fields.map((data, i) => (
          <input
            type={data.type}
            className="border rounded-sm p-1 flex-[6] px-3 min-w-[170px] mx-2 my-1 md:my-1"
            placeholder={data.placeholder}
          />
        ))}
        <select
          placeholder="Select an Item"
          name="select"
          className="border rounded-sm p-1 flex-[6] px-3 min-w-[170px] mx-2 my-1 md:my-1 text-gray-400"
        >
          <option value="" disabled selected>
            Select an Item
          </option>
          <option value="value2">Option 2</option>
          <option value="value3">Option 3</option>
        </select>
        <button className="bg-gray-200 text-black rounded-sm py-1 px-3 cursor-pointer hover:bg-[#bbbcbd] hover:text-black m-1 transition-all ease-in-out active:bg-[#d3d1d1] text-xs">
          Submit
        </button>
      </div>
      <div
        className="flex-[2] flex flex-row mb-2 md:mb-4 flex-wrap min-w-fit"
      >
        <div className="flex-[2] flex-row min-w-fit">
          <label class="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" class="sr-only peer" />
            <div class="group peer ring-0 bg-gray-500 peer-checked:bg-green-950  rounded-full outline-none duration-300 after:duration-300 w-24 h-6  shadow-md peer-checked:bg-green peer-focus:outline-none  after:content-['']  after:rounded-full after:absolute after:bg-gray-50 after:outline-none after:h-4 after:w-10 after:top-1 after:left-1 after:-rotate-180 after:flex after:justify-center after:items-center peer-checked:after:translate-x-12 peer-checked:after:content-[''] peer-hover:after:scale-90 peer-checked:bg-green flex justify-around items-center text-white font-medium">
              <span>ON</span>
              <span>OFF</span>
            </div>
          </label>
        </div>
        <div className="flex-[1] flex-row min-w-fit">
          <span>Current Inv #</span>
          <span className="bg-[#EEEEEE] py-1 px-2 w-[300px] ml-2 border border-[#e6e6e6] rounded-sm ">13408</span>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
