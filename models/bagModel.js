// this file stores the "customer" model (model is table schema in sequelize lingo)

// this is a function that would take the sequelize instance and DT Class
// and return a Customer model object
module.exports = (sequelize, DataTypes) => {

    // Define a new model, representing a table in the database.
    // modelName is 'customer' (first argument of define function)
    // When synced, this will create a table name of "modelName" + "s", i.e. "customers"
    const Bag = sequelize.define('bag', {
        id: { // the id will be our primary key for accessing customer data
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        label: {
            type: DataTypes.STRING,
            allowNull: false
        },
        customerId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    })

    return Bag
}