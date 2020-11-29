# TeamProfileGenerator
Build a Node CLI that takes in information about employees and generates an HTML webpage that displays summaries for each member of the team.

## Table of contents
* [About](#about-the-project)
  * [Built using](#built-using)
* [Functionality](#functionality)
* [Further Development](#further-development)
* [Link to application](#link-to-deployed-application)
* [License](License)

----------

## About the project
Building on my node.js and inquirer experience, I have developed a command line application that prompts a user to build an engineering team. The engineering team consists of a single manager, and any number of engineers and interns. Once each team member is added, a team.html document is generated to display a nicely formatted, completed team. Each team member has their name, job role and ID featured. Role-specific properties such as school, github username and office number are added depending on the role selected.
For improved user-experience, I have added a customisable team name and included icons to clearly see the position of each member of the team.

To ensure mobile responsiveness, I used Bootstrap and it's grid system to design and customize the design. 

## Built using
* Node.js
* Express
* NPM Inquirer
* JavaScript
* HTML
* CSS
* Bootstrap

----------

## Functionality  

![Team Generator preview](ADD)

-------------
## Further Development
* Refactor the code so the same questions aren't repeated in for each employee. They will be stored in an object instead which is called each time.
* Develop the CSS styling so that the team is displayed in a hierachy based on job role, not matter when that employee was added to the team.

--------------
## Link to deployed application
https://hannahsones.github.io/TeamProfileGenerator/

------------
## License

Licensed under the [MIT License](https://choosealicense.com/licenses/mit/).    
![MIT license](https://img.shields.io/badge/license-MIT-brightgreen)

-------------

Hannah Sones © 2020. All rights reserved.
