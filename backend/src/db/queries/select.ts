export function select(columns: string[], table: string): string {
  const columnsString = columns.toString();
  return "SELECT " + columnsString + " FROM " + table;
}

export function selectAll(table: string): string {
  return "SELECT * FROM " + table;
}

export function selectAllByField(value: string, field: string, table: string): string {
  return `SELECT * FROM ${table} WHERE ${field} = '${value}'`;
}
