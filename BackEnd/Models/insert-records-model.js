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
  // setProps = (propObj) => { for (const [key, val] of Object.entries(propObj)) {
  //   this.queryData[key] = val;
  // }}
  setProps = (propObj) => {
    for (let i = 0; i < propObj.length; i++) {
      let key = propObj[i][0];
      let val = propObj[i][1];
      this.queryData[key] = val
    }
  }
  setTableName = (tableName) => {
      this.tableName = tableName;
      this.queryData.tableName = tableName;
  }

}

module.exports = insertRecordsModel;