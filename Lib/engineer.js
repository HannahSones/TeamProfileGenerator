const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, github, icon) {
        super(name, id, email, icon);
        this.github = github;
        super.role = "Engineer";
    };

    getGithub() {
        return this.github;
    };
};

module.exports = Engineer;