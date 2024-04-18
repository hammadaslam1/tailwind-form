const TableOne = () => {
  return (
    <div>
      <table className="flex-[1] -wrap m-3 ml-1 max-w-[600px] min-w-[300px] gap-1">
        <tr
          className=" w-full items-center text-left flex-wrap grid grid-cols-1 sm:grid-cols-9 "
          // style={{ backgroundColor: props.color }}
        >
          <th className="text-xs pl-2 col-span-1 sm:col-span-2 min-w-[100px]">
            Rate/Tola
          </th>
          <div className="grid grid-cols-7 col-span-1 sm:col-span-7 gap-1">
            <input
              type="text"
              className="rounded-sm w-full pl-2 col-span-3 border border-[#999797]"
              placeholder="0"
            />
            <span className="col-span-1">Carat</span>
            <input
              type="text"
              className="rounded-sm w-full pl-2 col-span-3 border border-[#999797]"
              placeholder="0"
            />
          </div>
        </tr>
        {/* row2 */}
        <tr
          className=" w-full items-center text-left flex-wrap grid grid-cols-1 sm:grid-cols-9"
          // style={{ backgroundColor: props.color }}
        >
          <th className="text-xs pl-2 col-span-2 min-w-[100px]">Weight/Tola</th>
          <div className="grid grid-cols-7 col-span-1 sm:col-span-7 gap-1">
            <input
              type="text"
              className="rounded-sm w-full pl-2 col-span-1 border border-[#999797] bg-[#DDDDDD]"
              placeholder="0"
            />
            <input
              type="text"
              className="rounded-sm w-full pl-2 col-span-1 border border-[#999797] bg-[#DDDDDD]"
              placeholder="0"
            />
            <input
              type="text"
              className="rounded-sm w-full pl-2 col-span-1 border border-[#999797] bg-[#DDDDDD]"
              placeholder="0"
            />
            <input
              type="text"
              className="rounded-sm w-full pl-2 col-span-1 border border-[#999797] bg-[#DDDDDD]"
              placeholder="0"
            />
            <input
              type="text"
              className="rounded-sm w-full pl-2 col-span-3 border border-[#999797] bg-[#DDDDDD]"
              placeholder="0"
            />
          </div>
        </tr>
        {/* 3rd row */}
        <tr
          className=" w-full items-center text-left flex-wrap grid grid-cols-1 sm:grid-cols-9"
          // style={{ backgroundColor: props.color }}
        >
          <th className="text-xs pl-2 col-span-2 min-w-[100px]">
            Waste Polish
          </th>
          <div className="grid grid-cols-7 col-span-1 sm:col-span-7 gap-1">
            <input
              type="text"
              className="rounded-sm w-full pl-2 col-span-1 border border-[#999797]"
              placeholder="0"
            />
            <input
              type="text"
              className="rounded-sm w-full pl-2 col-span-1 border border-[#999797]"
              placeholder="0"
            />
            <input
              type="text"
              className="rounded-sm w-full pl-2 col-span-1 border border-[#999797]"
              placeholder="0"
            />
            <input
              type="text"
              className="rounded-sm w-full pl-2 col-span-1 border border-[#999797]"
              placeholder="0"
            />
            <input
              type="text"
              className="rounded-sm w-full pl-2 col-span-3 border border-[#999797]"
              placeholder="0"
            />
          </div>
        </tr>
        {/* 4th Row */}
        <tr
          className=" w-full items-center text-left flex-wrap grid grid-cols-1 sm:grid-cols-9"
          // style={{ backgroundColor: props.color }}
        >
          <th className="text-xs pl-2 col-span-2 min-w-[100px]">
            Total Weight
          </th>
          <div className="grid grid-cols-7 col-span-1 sm:col-span-7 gap-1">
            <input
              type="text"
              className="rounded-sm w-full pl-2 col-span-1 border border-[#999797]"
              placeholder="0"
            />
            <input
              type="text"
              className="rounded-sm w-full pl-2 col-span-1 border border-[#999797]"
              placeholder="0"
            />
            <input
              type="text"
              className="rounded-sm w-full pl-2 col-span-1 border border-[#999797]"
              placeholder="0"
            />
            <input
              type="text"
              className="rounded-sm w-full pl-2 col-span-1 border border-[#999797]"
              placeholder="0"
            />
            <input
              type="text"
              className="rounded-sm w-full pl-2 col-span-3 border border-[#999797]"
              placeholder="0"
            />
          </div>
        </tr>
        {/* 5th Row */}
        <tr
          className="items-center text-left flex-wrap grid grid-cols-1 sm:grid-cols-9 "
          // style={{ backgroundColor: props.color }}
        >
          <th className="text-xs w-full pl-2 col-span-2 min-w-[100px]">
            Received Gold
          </th>
          <div className="grid grid-cols-7 col-span-1 sm:col-span-7 gap-1">
            <input
              type="text"
              className="rounded-sm w-full pl-2 col-span-1 border border-[#999797]"
              placeholder="0"
            />
            <input
              type="text"
              className="rounded-sm w-full pl-2 col-span-1 border border-[#999797]"
              placeholder="0"
            />
            <input
              type="text"
              className="rounded-sm w-full pl-2 col-span-1 border border-[#999797]"
              placeholder="0"
            />
            <input
              type="text"
              className="rounded-sm w-full pl-2 col-span-1 border border-[#999797]"
              placeholder="0"
            />
            <input
              type="text"
              className="rounded-sm w-full pl-2 col-span-1 border border-[#999797]"
              placeholder="0"
            />
            <span className="col-span-1">Gross</span>
            <input
              type="text"
              className="rounded-sm w-full pl-2 col-span-1 border border-[#999797]"
              placeholder="0"
            />
          </div>
        </tr>
        {/* 6th Row */}
        <tr
          className=" w-full items-center text-left flex-wrap grid grid-cols-1 sm:grid-cols-9"
          // style={{ backgroundColor: props.color }}
        >
          <th className="text-xs pl-2 col-span-2 min-w-[100px]">Due Gold</th>
          <div className="grid grid-cols-7 col-span-1 sm:col-span-7 gap-1">
            <input
              type="text"
              className="rounded-sm w-full pl-2 col-span-1 border border-[#999797] bg-[#DDDDDD]"
              placeholder="0"
            />
            <input
              type="text"
              className="rounded-sm w-full pl-2 col-span-1 border border-[#999797] bg-[#DDDDDD]"
              placeholder="0"
            />
            <input
              type="text"
              className="rounded-sm w-full pl-2 col-span-1 border border-[#999797] bg-[#DDDDDD]"
              placeholder="0"
            />
            <input
              type="text"
              className="rounded-sm w-full pl-2 col-span-1 border border-[#999797] bg-[#DDDDDD]"
              placeholder="0"
            />
            <input
              type="text"
              className="rounded-sm w-full pl-2 col-span-3 border border-[#999797] bg-[#DDDDDD]"
              placeholder="0"
            />
          </div>
        </tr>
        {/* 7th row */}
        <tr
          className="w-full items-center text-left flex-wrap grid grid-cols-1 sm:grid-cols-9 "
          // style={{ backgroundColor: props.color }}
        >
          <th className="text-xs pl-2 col-span-2 min-w-[100px]">Note</th>
          <textarea
            rows="1"
            type="text"
            className="grid rounded-sm grid-cols-7 col-span-1 sm:col-span-7 px-2 border border-[#999797]"
            placeholder="0"
          />
        </tr>
        {/* 8th row */}
        <tr
          className=" w-full items-center text-left flex-wrap grid grid-cols-1 sm:grid-cols-9"
          // style={{ backgroundColor: props.color }}
        >
          <th className="text-xs pl-2 col-span-2 min-w-[100px]">
            Sales Ref No
          </th>
          <input
            type="text"
            className="grid rounded-sm grid-cols-7 col-span-1 sm:col-span-7 px-2 border border-[#999797]"
            placeholder="0"
          />
        </tr>
        {/* 9th row */}
        <tr
          className="items-center w-full text-left flex-wrap grid grid-cols-1 sm:grid-cols-9 "
          // style={{ backgroundColor: props.color }}
        >
          <th className="text-xs pl-2 col-span-2 min-w-[100px]">Note</th>
          <select
            type="text"
            className="grid rounded-sm grid-cols-7 col-span-1 sm:col-span-7 px-2 border border-[#999797]"
            placeholder="0"
          />
        </tr>
      </table>
      <div className="flex-1 flex flex-row p-3 px-2 pr-5 box-border justify-center">
        <button className="bg-gray-200 text-black rounded-sm py-1 px-3 cursor-pointer hover:bg-[#bbbcbd] hover:text-black m-1 transition-all ease-in-out active:bg-[#d3d1d1] text-xs">
          Submit
        </button>
        <button className="bg-gray-200 text-black rounded-sm py-1 px-3 cursor-pointer hover:bg-[#bbbcbd] hover:text-black m-1 transition-all ease-in-out active:bg-[#d3d1d1] text-xs">
          Cancel
        </button>
      </div>
    </div>
  );
};
export default TableOne;
