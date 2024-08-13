import { DropResult } from "react-beautiful-dnd";

const reorder = <T>(list: T[], startIndex: number, endIndex: number): T[] => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  console.log({ result });
  return result;
};

export const onDragEnd = <T>({
  result,
  callback,
  list,
}: {
  result: DropResult;
  callback: (list: T[]) => void;
  list: T[];
}) => {
  if (!result.destination) {
    return;
  }

  if (result.destination.index === result.source.index) {
    return;
  }

  const reorderedList = reorder<T>(
    list,
    result.source.index,
    result.destination.index
  );

  callback(reorderedList);
  // Update the field array with the new order
  //   reorderedList.forEach((item, index) => update(index, item));
};
