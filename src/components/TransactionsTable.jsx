import Table from "../ui/Table";
import TransactionRow from "./TransactionRow";
import { useState } from "react";
import SortButton from "../ui/SortButton";

function TransactionsTable({ transactions, setSortData }) {
  const [orderByDate, setOrderByDate] = useState(true);
  const [orderByPrice, setOrderByPrice] = useState(true);

  const handleSort = (sort, orderBy, setOrderBy) => {
    setOrderBy((is) => !is);
    setSortData({ sort, order: orderBy ? "asc" : "desc" });
  };

  if (!transactions.length) return <h2>تراکنشی یافت نشد</h2>;

  return (
    <div className="transactions-table">
      <Table>
        <Table.Header>
          <th>ردیف</th>
          <th>نوع تراکنش</th>
          <th>
            <div className="d-flex">
              <span>مبلغ</span>
              <SortButton
                orderBy={orderByPrice}
                handleSort={() =>
                  handleSort("price", orderByPrice, setOrderByPrice)
                }
              />
            </div>
          </th>
          <th>شماره پیگیری</th>
          <th>
            <div className="d-flex">
              <span>تاریخ تراکنش</span>
              <SortButton
                orderBy={orderByDate}
                handleSort={() =>
                  handleSort("date", orderByDate, setOrderByDate)
                }
              />
            </div>
          </th>
        </Table.Header>
        <Table.Body>
          {transactions.map((transaction, index) => (
            <TransactionRow
              key={transaction.id}
              transaction={transaction}
              index={index}
            />
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}

export default TransactionsTable;
