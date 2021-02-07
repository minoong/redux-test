const friends = [
  { name: "name1", age: 1 },
  { name: "name2", age: 2 },
  { name: "name3", age: 3 },
  { name: "name3", age: 4 },
  { name: "name4", age: 5 },
];

const timelines = [
  { desc: "timeline 1", likes: 1 },
  { desc: "timeline 2", likes: 2 },
  { desc: "timeline 3", likes: 3 },
  { desc: "timeline 4", likes: 4 },
  { desc: "timeline 5", likes: 5 },
];

function makeDataGenerator(items) {
  let itemIndex = 0;

  return function getNextData() {
    const item = items[itemIndex % items.length];
    itemIndex += 1;

    return { ...item, id: itemIndex };
  };
}

export const getNextFriend = makeDataGenerator(friends);
export const getNextTimeline = makeDataGenerator(timelines);
