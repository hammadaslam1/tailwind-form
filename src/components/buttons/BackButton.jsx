import { Button } from "@mui/material";
import { ButtonCSS } from "../../styles/ButtonCSS";

const BackButton = () => {
  return (
    <div>
      <button className="bg-[#7b7e81] text-white rounded-sm py-1 px-3 cursor-pointer hover:bg-[#57595b] m-1 transition-all ease-in-out active:bg-[#838586] text-xs">
        Back
      </button>
    </div>
  );
};

export default BackButton;
