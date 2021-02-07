import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNextFriend } from "../common/mockData";
import FriendList from "../component/FriendList";
import NumberSelect from "../component/NumberSelect";
import { MAX_AGE_LIMIT, MAX_SHOW_LIMIT } from "../friend/common";
import { addFriend } from "../friend/state";

const FriendMain = () => {
  const friends = useSelector(({ friend: { friends } }) => friends);
  const dispatch = useDispatch();
  const onAdd = () => {
    const friend = getNextFriend();
    dispatch(addFriend(friend));
  };

  const ageLimitOptions = [15, 20, 25, MAX_AGE_LIMIT];
  const showLimitOptions = [2, 4, 6, MAX_SHOW_LIMIT];

  return (
    <div>
      <button onClick={() => onAdd()}>친구 추가</button>
      <FriendList friends={friends} />
    </div>
  );
};

export default React.memo(FriendMain);
