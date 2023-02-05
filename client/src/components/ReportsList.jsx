import { useState } from "react";
import ReportsListItem from "./ReportsListItem";

export default function ReportsList() {
  const [reports, setReports] = useState([]);

  // const reportsList = reports.map(report => {
  //   return (
  //     <ReportsListItem
  //       key={report.id}
  //       report={report}
  //     />
  //   )
  // });

  const exampleReport = {
    id: 1,
    lat: -42.234832,
    lon: 37.093822,
    time: "2020-03-02T01:11:18.965Z",
    user: "Joel",
    types: ["Clickers", "Runners", "Bloaters"],
    amount: 30,
    direction: "north-east",
  };

  return (
    <div className="w-1/3 bg-slate-600 pt-10 bg-[url('https://i.redd.it/e4lov1c5n9901.jpg')] bg-cover bg-right overflow-auto">
      {/* {reportsList} */}
      <ReportsListItem key={1} report={exampleReport}/>
      <ReportsListItem key={2} report={exampleReport}/>
      <ReportsListItem key={3} report={exampleReport}/>
      <ReportsListItem key={4} report={exampleReport}/>
      <ReportsListItem key={5} report={exampleReport}/>
    </div>
  );
}