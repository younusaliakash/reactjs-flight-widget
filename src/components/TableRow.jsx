import TableCell from "./TableCell";

const TableRow = ({ flight }) => {
  const words = Object.values(flight);
  return (
    <tr>
      <td>✈︎</td>
      {words?.map((word, idx) => (
        <TableCell word={word} key={idx} index={idx} />
      ))}
    </tr>
  );
};

export default TableRow;
