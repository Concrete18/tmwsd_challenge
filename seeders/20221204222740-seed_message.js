"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Messages",
      [
        {
          title: "Secret Message - Do Not Open!",
          content: "This is a test to see if you are snooping. You failed.",
        },
        {
          title: "Secret Joke",
          content:
            "There are only 10 kinds of people in this world:<br /><br />those who know binary and those who don't.",
        },
        {
          title: "My Bank Login Info",
          content: "Did you think I would post this here?",
        },
        {
          title: "LinkedIn",
          content:
            "Here is my LinkedIn. https://www.linkedin.com/in/michaelericson1",
        },
        {
          title: "Github",
          content: "Here is my github. https://github.com/Concrete18",
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Messages", null, {});
  },
};
