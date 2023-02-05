import Moment from 'react-moment';

export default function ReportsListItem(props) {
  const infectedTypes = props.report.types;
  const infectedTypesList = infectedTypes.join(", ");

  return (
    <div className="flex justify-between text-white backdrop-brightness-50 p-3">
      <div>
        {/* get address from api? */}
        <h2 className="text-2xl font-semibold">48th & Walter St.</h2>
        {/* get distance from api? */}
        <p>0.4km away | {props.report.lat}, {props.report.lon}</p>
        <p className="text-sm">Reported <Moment fromNow>{props.report.time}</Moment> by {props.report.user}</p>
        <br />
        <p>{infectedTypesList}</p>
        <p><strong>{props.report.amount}</strong> last reported heading <strong>{props.report.direction}</strong></p>
      </div>
      <div className="flex self-end">
        <p>REPORT #{props.report.id}</p>
      </div>
    </div>
  );
}