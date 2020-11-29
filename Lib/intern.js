const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, school, icon) {
        super(name, id, email, icon);
        this.school = school;
        super.role = "Intern";
    };

    getSchool() {
        return this.school;
    };
};

module.exports = Intern;