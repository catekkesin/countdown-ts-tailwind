import { useEffect, useState } from "react";

const DAYS_MULTIPLIER = 86400000;
const HOURS_MULTIPLIER = 3600000;
const MINUTES_MULTIPLIER = 60000;
const SECONDS_MULTIPLIER = 1000;

type CountdownType = {
  days?: number;
  hours?: number;
  minutes?: number;
  seconds?: number;
};

function App() {
  const [countdown, setCountdown] = useState<CountdownType>({});

  const get_dhms = (miliseconds: number) => {
    const temp_days = Math.floor(miliseconds / DAYS_MULTIPLIER);
    let remain = miliseconds % DAYS_MULTIPLIER;

    const temp_hours = Math.floor(remain / HOURS_MULTIPLIER);
    remain = remain % HOURS_MULTIPLIER;

    const temp_minutes = Math.floor(remain / MINUTES_MULTIPLIER);
    remain = remain % MINUTES_MULTIPLIER;

    const temp_seconds = Math.floor(remain / SECONDS_MULTIPLIER);

    setCountdown({
      days: temp_days,
      hours: temp_hours,
      minutes: temp_minutes,
      seconds: temp_seconds,
    });
  };

  const bounce_effect = () => {
    console.log("boucne");
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const end = new Date("9/19/2022 10:33:18");
      const diffTime = end.getTime() - now.getTime();
      get_dhms(diffTime);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App ">
      <div className="cell-container ">
        <div className="cell">{countdown.days} days</div>
        <div className="cell">{countdown.hours} hours</div>
        <div className="cell">{countdown.minutes} minutes</div>
        <div className="cell">{countdown.seconds} seconds</div>
      </div>
    </div>
  );
}

export default App;
