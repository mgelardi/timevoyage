import Countdown from "react-countdown";

const CountdownData = () => {
  const Completionist = () => <span>{"You are good to go!"}</span>;

  const renderer = ({ days, hours, minutes, seconds, completed }: any) => {
    if (completed) {
      return <Completionist />;
    } else {
      return (
        <div>
          <ul>
            <li>
              <span id="days" className="time digits">{days}</span>
              <span className="title">{"days"}</span>
            </li>
            <li>
              <span>{hours}</span>
              <span className="title">{"Hours"}</span>
            </li>
            <li>
              <span>{minutes}</span>
              <span className="title">{"Minutes"}</span>
            </li>
            <li>
              <span>{seconds}</span>
              <span className="title">{"Seconds"}</span>
            </li>
          </ul>
        </div>
      );
    }
  };

  var d = new Date();
  var year = d.getFullYear();
  var month = d.getMonth();
  var day = d.getDate();
  var coundown = new Date(year, month, day + 10).getTime();

  return <Countdown date={coundown} renderer={renderer} />;
};

export default CountdownData;
