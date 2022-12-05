var express = require("express");
var router = express.Router();

const { asyncHandler } = require("./utils");
const { Message } = require("../models");
const e = require("express");

router.get(
  "/",
  asyncHandler(async (req, res, next) => {
    messages = await Message.findAll();
    res.render("messages/index", { messages });
  })
);

router.post(
  "/messages",
  asyncHandler(async (req, res, next) => {
    // TODO req.body is undefined
    const { message_title, message_content } = req.body;
    await Message.create({
      title: message_title,
      content: message_content,
    });
    res.redirect(`/`);
  })
);

router.get(
  "/messages/:id(\\d+)",
  asyncHandler(async (req, res, next) => {
    let messageId = req.params.id;
    // finds message by id from route
    const message = await Message.findByPk(messageId);
    // destroys the message in the db then displays it
    if (message) {
      message.destroy(); // TODO uncomment
      res.render("messages/message", {
        message,
      });
      // redirects to the home page is no message exists
    } else {
      res.redirect(`/`);
    }
  })
);

module.exports = router;
