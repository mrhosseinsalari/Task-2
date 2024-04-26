import { useState } from "react";
import TransactionsHeader from "./TransactionsHeader";
import TransactionsList from "./TransactionsList";
import useTransactions from "../hooks/useTransactions";
import TransactionsTable from "./TransactionsTable";

function TransactionsContainer() {
  const [searchValue, setSearchValue] = useState("");
  const [sortData, setSortData] = useState({ sort: "", order: "" });
  const [isLoadedList, setIsLoadedList] = useState(false);

  const { transactions } = useTransactions({
    searchValue,
    sort: sortData.sort,
    order: sortData.order,
  });

  return (
    <div className="transactions-container">
      <TransactionsHeader
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        isLoadedList={isLoadedList}
      />
      {isLoadedList ? (
        <TransactionsList>
          <TransactionsTable
            transactions={transactions}
            setSortData={setSortData}
          ></TransactionsTable>
        </TransactionsList>
      ) : (
        <div className="d-flex">
          <button
            onClick={() => setIsLoadedList(true)}
            className="btn btn--primary"
          >
            بارگذاری تراکنش ها
          </button>
        </div>
      )}
    </div>
  );
}

export default TransactionsContainer;
