export default function toLocalDateWithTime(date) {
  const formattedDate = new Date(date)
    .toLocaleTimeString("fa-IR", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    })
    .split(",");

  return `${formattedDate[0]} ساعت ${formattedDate[1]}`;
}
