var express = require("express");
var router = express.Router();

router.get("/", function (req, res) {
  messages = [
    {
      id: 1,
      title: "Secrete Message",
      content: "This is a test to see if you are snooping.",
    },
    {
      id: 2,
      title: "Secrete Message 2",
      content: "This is a test to see if you are still snooping.",
    },
  ];
  // TODO load messages here
  res.render("messages/index", { messages });
});

module.exports = router;
