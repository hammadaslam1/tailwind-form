import { Checkbox } from "@mui/material";

const TableTwo = () => {
  return (
    <table className="flex-[1] flex flex-wrap m-3 ml-1 max-w-[400px] min-w-[300px] gap-1">
      {/* row1 */}
      <tr
        className="flex flex w-full items-center text-left flex-wrap grid grid-cols-5"
        // style={{ backgroundColor: props.color }}
      >
        <th className="text-xs pl-2 col-span-2 min-w-[100px]">Gold Amount</th>
        <input
          type="text"
          className="rounded-sm w-full pl-2 col-span-3 border border-[#999797] bg-[#DDDDDD]"
          placeholder="0"
        />
      </tr>
      {/* row2 */}
      <tr
        className="flex flex w-full items-center text-left flex-wrap grid grid-cols-5"
        // style={{ backgroundColor: props.color }}
      >
        <th className="text-xs pl-2 col-span-2 min-w-[100px]">Making</th>
        <input
          type="text"
          className="rounded-sm w-full pl-2 col-span-2 border border-[#999797]"
          placeholder="0"
        />
        <div className="col-span-1 flex items-center ml-1">
          <span>Show</span>
          <input
            type="checkbox"
            className="w-full pl-2 border border-[#999797]"
            placeholder="0"
          />
        </div>
      </tr>
      {/* 3rd row */}
      <tr
        className="flex flex w-full items-center text-left flex-wrap grid grid-cols-5"
        // style={{ backgroundColor: props.color }}
      >
        <th className="text-xs pl-2 col-span-2 min-w-[100px]">Stone / Beeds</th>
        <input
          type="text"
          className="rounded-sm w-full pl-2 col-span-2 border border-[#999797]"
          placeholder="0"
        />
        <div className="col-span-1 flex items-center ml-1">
          <span>Show</span>
          <input
            type="checkbox"
            className="w-full pl-2 border border-[#999797]"
            placeholder="0"
          />
        </div>
      </tr>
      {/* 4th Row */}
      <tr
        className="flex flex w-full items-center text-left flex-wrap grid grid-cols-5 "
        // style={{ backgroundColor: props.color }}
      >
        <th className="text-xs pl-2 col-span-2 min-w-[100px]">Total Amount</th>
        <input
          type="text"
          className="rounded-sm w-full pl-2 col-span-3 border border-[#999797] bg-[#DDDDDD]"
          placeholder="0"
        />
      </tr>
      {/* 5th Row */}
      <tr
        className="flex flex w-full items-center text-left flex-wrap grid grid-cols-5 "
        // style={{ backgroundColor: props.color }}
      >
        <th className="text-xs pl-2 col-span-2 min-w-[100px]">Discount</th>
        <input
          type="text"
          className="rounded-sm w-full pl-2 col-span-3 border border-[#999797]"
          placeholder="0"
        />
      </tr>
      {/* 6th Row */}
      <tr
        className="flex flex w-full items-center text-left flex-wrap grid grid-cols-5 "
        // style={{ backgroundColor: props.color }}
      >
        <th className="text-xs pl-2 col-span-2 min-w-[100px]">
          Total Tax Charged
        </th>
        <input
          type="text"
          className="rounded-sm w-full pl-2 col-span-3 border border-[#999797] bg-[#DDDDDD]"
          placeholder="0"
        />
      </tr>
      {/* 7th row */}
      <tr
        className="flex flex w-full items-center text-left flex-wrap grid grid-cols-5 "
        // style={{ backgroundColor: props.color }}
      >
        <th className="text-xs pl-2 col-span-2 min-w-[100px]">Net Payable</th>
        <input
          type="text"
          className="rounded-sm w-full pl-2 col-span-3 border border-[#999797]"
          placeholder="0"
        />
      </tr>
      {/* 8th row */}
      <tr
        className="flex flex w-full items-center text-left flex-wrap grid grid-cols-5 "
        // style={{ backgroundColor: props.color }}
      >
        <th className="text-xs pl-2 col-span-2 min-w-[100px]">Received</th>
        <input
          type="text"
          className="rounded-sm w-full pl-2 col-span-3 border border-[#999797]"
          placeholder="0"
        />
      </tr>
      {/* 9th row */}
      <tr
        className="flex flex w-full items-center text-left flex-wrap grid grid-cols-5 "
        // style={{ backgroundColor: props.color }}
      >
        <th className="text-xs pl-2 col-span-2 min-w-[100px]">Amount Due</th>
        <input
          type="text"
          className="rounded-sm w-full pl-2 col-span-3 border border-[#999797] bg-[#DDDDDD]"
          placeholder="0"
        />
      </tr>
      {/* 10th Row */}
      <tr
        className="flex flex w-full items-center text-left flex-wrap grid grid-cols-5 "
        // style={{ backgroundColor: props.color }}
      >
        <th className="text-xs pl-2 col-span-2 min-w-[100px]">Due Date</th>
        <input
          type="text"
          className="rounded-sm w-full pl-2 col-span-3 border border-[#999797]"
          placeholder="0"
        />
      </tr>
    </table>
  );
};
export default TableTwo;