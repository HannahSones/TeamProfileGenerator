class Employee {
    constructor(name, id, email, icon) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.icon = icon;
        this.role = "Employee";
    };

    getName() {
        return this.name;
    };

    getId() {
        return this.id;
    };

    getEmail() {
        return this.email;
    };

    getIcon() {
        return this.Icon;
    };

    getRole() {
        return this.role;
    };
};

module.exports = Employee;