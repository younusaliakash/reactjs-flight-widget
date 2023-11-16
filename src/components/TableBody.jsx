import { useEffect, useState } from "react";
import TableRow from "./TableRow";
import data from "./../../data.json";

const TableBody = () => {
  const [flights, setFlights] = useState(null);

  //   const flightData = async () => {
  //     const response = await axios.get("http://localhost:8000/flights");
  //     console.log(response);
  //   };

  useEffect(() => {
    setFlights(data);
  }, []);

  return (
    <tbody>
      {flights?.map((flight, idx) => (
        <TableRow flight={flight} key={idx} />
      ))}
    </tbody>
  );
};

export default TableBody;
