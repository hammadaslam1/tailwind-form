const TableOne = () => {
  return (
    // <div className="overflow-x-auto">
      <table className="table-auto border-collapse  m-5 my-12">
        <thead>
          {new Array(9).fill(1).map((data, i) => (
            <tr>
              <th className=" w-12">Heading</th>
              <td className="">Column 1</td>
              <td className="">Column 2</td>
              <td className="">Column 3</td>
              <td className="">Column 4</td>
              <td className="">Column 5</td>
              <td className="">Column 6</td>
              <td className="">Column 7</td>
              <td className="">Column 8</td>
            </tr>
          ))}
        </thead>
      </table>
    // </div>
  );
};

export default TableOne;
