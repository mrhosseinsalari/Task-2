import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const BASE_URL = "http://localhost:3000/transactions";

export default function useTransactions({
  searchValue = "",
  sort = "",
  order = "",
}) {
  const [transactions, setTransactions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const { data } = await axios.get(
          `${BASE_URL}?refId_like=${searchValue}&_sort=${sort}&_order=${order}`
        );
        setTransactions(data);
      } catch (err) {
        setTransactions([]);
        toast.error(err?.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, [searchValue, order, sort]);

  return { isLoading, transactions };
}
