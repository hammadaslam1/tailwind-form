const HeadingBar = () => {
  const array = [
    "Code",
    "Barcode",
    "Item name",
    "Qty",
    "Net Weight",
    "RTN Qty",
    "RTN Weight",
    "Notes",
    "Action",
  ];
  return (
    <div className="m-1 bg-[#CCCCCC] px-6 py-2 box-border flex flex-row text-left flex-wrap">
        {array.map((data, i) => (
            <div key={i} className="flex-[1] min-w-fit">
                <p className="text-sm font-bold text-black">
                    {data}
                </p>
            </div>
        ))}
    </div>
  );
};

export default HeadingBar;
