class getRecordsModel {
    constructor(tableName) {
        this.tableName = tableName;
        this.attributes = [];
        this.conditions = [];
        
        this.queryData = {
            tableName: this.tableName,
            attributes: this.attributes,
            conditions: this.conditions
        }
    }

    setAttributes = (...columns) => {columns.forEach(element => this.attributes.push(element));}
    setConditions = (...conditions) => {conditions.forEach(element => this.conditions.push(element))}
    setTableName = (tableName) => {
        this.tableName = tableName;
        this.queryData.tableName = tableName;
    }

}

module.exports = getRecordsModel;