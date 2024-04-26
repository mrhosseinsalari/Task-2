import { HiChevronDown } from "react-icons/hi";

function SortButton({ handleSort, orderBy }) {
  return (
    <button className="d-flex" onClick={handleSort}>
      <HiChevronDown
        className="sort-icon"
        style={{ rotate: orderBy ? "0deg" : "180deg" }}
      />
    </button>
  );
}

export default SortButton;
