import React, { useState, useRef, useEffect } from "react";

function StopWatch() {
  const [isRunning, setIsRunnig] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const intervalId = useRef(null);
  const startTimeRef = useRef(0);

  useEffect(() => {}, [isRunning]);

  function stopWatch() {}
  function startWatch() {}
  function resetWatch() {}
  function formatTime() {
    return `00:00:00`;
  }

  return (
    <div className="stopWatch">
      <div className="display">{formatTime()}</div>
      <div className="controls">
        <button className="start-button" onClick={startWatch}>
          start
        </button>
        <button className="stop-button" onClick={stopWatch}>
          stop
        </button>
        <button className="reset-button" onClick={resetWatch}>
          reset
        </button>
      </div>
    </div>
  );
}

export default StopWatch;
