import { useState } from "react";
import TableLetter from "./TableLetter";

const TableCell = ({ word, index }) => {
//   const [flip, setFlip] = useState(false);

//   setTimeout(() => {
//     setFlip(true);
//   }, 100 * index);

  return (
    <td>
      {Array.from(word)?.map((letter, idx) => (
        <TableLetter key={idx} letter={letter} index={idx} />
      ))}
    </td>
  );
};

export default TableCell;
