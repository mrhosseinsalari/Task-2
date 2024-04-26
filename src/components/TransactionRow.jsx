import toLocalDateWithTime from "../utils/toLocalDateWithTime";
import Table from "../ui/Table";
import numberWithCommas from "./../utils/numberWithCommas";

function TransactionRow({ transaction, index }) {
  const typeColor =
    transaction.type === "افزایش اعتبار"
      ? "var(--color-success)"
      : "var(--color-error)";

  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td style={{ color: typeColor }}>{transaction.type}</td>
      <td className="price">{numberWithCommas(transaction.price)}</td>
      <td>{transaction.refId}</td>
      <td>{toLocalDateWithTime(transaction.date)}</td>
    </Table.Row>
  );
}

export default TransactionRow;
