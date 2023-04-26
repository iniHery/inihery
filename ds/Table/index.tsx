import Head from "./Head";
import Body from "./Body";
import Row from "./Row";
import Cell from "./Cell";
import classNames from "classnames";

type Props = {
  children: React.ReactNode;
  type?: "auto" | "fixed";
};

const Table = (props: Props) => {
  const { type = "fixed" } = props;

  return (
    <table
      className={classNames("w-full", {
        "table-fixed": type === "fixed",
        "table-auto": type === "auto",
      })}
    >
      {props.children}
    </table>
  );
};

Table.Head = Head;
Table.Body = Body;
Table.Row = Row;
Table.Cell = Cell;

export default Table;
