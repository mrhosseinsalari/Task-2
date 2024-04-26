function TransactionsList({ children }) {
  return (
    <div className="transactions-list">
      <h3 className="title">لیست تراکنش های شما</h3>
      {children}
    </div>
  );
}

export default TransactionsList;
