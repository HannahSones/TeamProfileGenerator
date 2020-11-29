const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber, icon) {
        super(name, id, email, icon);
        this.officeNumber = officeNumber;
        super.role = "Manager";

    };

    getOfficeNumber() {
        return this.officeNumber;
    };
};

module.exports = Manager;