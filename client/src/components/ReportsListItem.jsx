export default function ReportsListItem() {
  return (
    <div className="flex justify-between text-white backdrop-brightness-50 p-3">
      <div>
        <h2 className="text-2xl font-semibold">48th & Walter St.</h2>
        <p>0.4km away | 42.386287, -71.049275</p>
        <p className="text-sm">Reported 4 days ago by Joel</p>
        <br />
        <p>Clickers, Runners, Bloaters</p>
        <p><strong>25-50</strong> last reported heading <strong>north</strong></p>
      </div>
      <div className="flex self-end">
        <p>REPORT #0681</p>
      </div>
    </div>
  );
}