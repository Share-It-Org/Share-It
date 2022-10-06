class insertRecordsModel {
  constructor(tableName) {
      this.tableName = tableName;
      this.columns = [];
      this.values = [];
      
      this.queryData = {
          tableName: this.tableName,
          // columns: this.columns,
          // values: this.values
      }
  }

  // setColumns = (...cols) => {cols.forEach(element => this.columns.push(element));}
  // setValues = (...vals) => {vals.forEach(element => this.values.push(element))}
  setProps = (propObj) => { for (const [key, val] of propObj) {
    this.queryData[key] = val;
  }}
  setTableName = (tableName) => {
      this.tableName = tableName;
      this.queryData.tableName = tableName;
  }

}

module.exports = insertRecordsModel;