import { HiSearch } from "react-icons/hi";

function TransactionsHeader({ searchValue, setSearchValue, isLoadedList }) {
  return (
    <div className="transactions-header">
      <h2 className="title">لیست تراکنش ها</h2>
      {isLoadedList && (
        <div className="header-search">
          <input
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            type="text"
            name="query"
            id="query"
            className="text-field"
            placeholder="جستجو تراکنش ..."
          />
          <HiSearch className="search-icon" />
        </div>
      )}
    </div>
  );
}

export default TransactionsHeader;
