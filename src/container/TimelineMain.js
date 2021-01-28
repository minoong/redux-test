import React, { useEffect, useState } from "react";
import store from "../common/store";
import TimelineList from "../component/TimelineList";
import { addTimeline } from "../timeline/state";

function useForceUpdate() {
  const [value, setValue] = useState(0);
  return () => setValue((value) => value + 1);
}

const TimelineMain = () => {
  const forceUpdate = useForceUpdate();
  let unsubcribe = null;

  useEffect(() => {
    unsubcribe = store.subscribe(() => forceUpdate());

    return () => unsubcribe();
  }, []);

  const onAdd = () => {
    const timeline = getNextTimeline();
    store.dispatch(addTimeline(timeline));
  };

  const timelines = store.getState().timeline.timelines;

  return (
    <div>
      <button onClick={() => onAdd()}>timeline add</button>
      <TimelineList timelines={timelines} />
    </div>
  );
};

export default TimelineMain;
