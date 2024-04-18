/* eslint-disable no-lone-blocks */
/* eslint-disable no-unreachable */
const TableOne = (props) => {
  const table = [
    {
      name: "Rate / Tola",
      cells: 2,
    },
    {
      name: "Weight Tola",
      cells: 5,
    },
    {
      name: "Waste Polish",
      cells: 5,
    },
    {
      name: "Total Weight",
      cells: 5,
    },
    {
      name: "Received Gold",
      cells: 6,
    },
    {
      name: "Due Gold",
      cells: 5,
    },
    {
      name: "Note",
      cells: 1,
    },
    {
      name: "Sale Ref No",
      cells: 1,
    },
    {
      name: "Note",
      cells: 1,
    },
  ];
  return (
    <table className="flex-[1] flex flex-wrap m-3">
      {table.map((data, i) => (
        <tr
          className="flex items-center text-left flex-wrap"
          // style={{ backgroundColor: props.color }}
        >
          <th className="text-xs pl-2 flex-[1] min-w-[100px]">{data.name}</th>
          <div className="flex-[5] flex justify-evenly min-w-[250px]">
            {new Array(data.cells).fill(1).map((data, i) => (
              <div className="flex p-1 w-full">
                <input
                  type="text"
                  className="w-full pl-2 border border-[#999797]"
                  placeholder="0"
                />
              </div>
            ))}
            {/* <div className="flex p-1 min-w-10">
              <input
                type="text"
                className="w-full pl-2 border border-[#999797]"
                placeholder="0"
              />
            </div>
            <div className="flex p-1 min-w-10">
              <input
                type="text"
                className="w-full pl-2 border border-[#999797]"
                placeholder="0"
              />
            </div>
            <div className="flex p-1 min-w-10">
              <input
                type="text"
                className="w-full pl-2 border border-[#999797]"
                placeholder="0"
              />
            </div>
            <div className="flex p-1 min-w-10">
              <input
                type="text"
                className="w-full pl-2 border border-[#999797]"
                placeholder="0"
              />
            </div> */}
          </div>
        </tr>
      ))}
    </table>
  );
};

export default TableOne;
