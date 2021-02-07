import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNextTimeline } from "../common/mockData";
import store from "../common/store";
import TimelineList from "../component/TimelineList";
import { addTimeline } from "../timeline/state";

function useForceUpdate() {
  const [value, setValue] = useState(0);
  return () => setValue((value) => value + 1);
}

const TimelineMain = () => {
  const timelines = useSelector(({ timeline: { timelines } }) => timelines);
  const dispatch = useDispatch();
  const onAdd = () => {
    const timeline = getNextTimeline();
    dispatch(addTimeline(timeline));
  };

  return (
    <div>
      <button onClick={() => onAdd()}>timeline add</button>
      <TimelineList timelines={timelines} />
    </div>
  );
};

export default React.memo(TimelineMain);
