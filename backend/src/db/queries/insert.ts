export function insert(table: string, columns: string[]): string {
  const columnsString = columns.toString();
  let valuesString = "";
  for (let i = 1; i <= columns.length; i++) valuesString += ("$" + i + ",");

  const queryString = "INSERT INTO " +
    table +
    "(" +
    columnsString +
    ") VALUES(" +
    valuesString.slice(0, -1) +
    ") RETURNING *";

  return queryString;
}
