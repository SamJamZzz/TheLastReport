import ReportsListItem from "./ReportsListItem";

export default function ReportsList() {
  return (
    <div className="w-1/3 bg-slate-600 pt-10 bg-[url('https://i.redd.it/e4lov1c5n9901.jpg')] bg-cover bg-right overflow-auto">
      <ReportsListItem />
      <ReportsListItem />
      <ReportsListItem />
      <ReportsListItem />
      <ReportsListItem />
    </div>
  );
}