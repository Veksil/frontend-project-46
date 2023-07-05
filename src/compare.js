import { sortBy } from "lodash";

function compare(filepath1, filepath2) {
  const file1 = sortBy(filepath1);
  const file2 = sortBy(filepath2);
  console.log(filepath1, filepath2);
}

export default compare;
