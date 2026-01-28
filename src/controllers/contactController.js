const portfolioData = require("../data/portfolioData");

exports.postContact = (req, res) => {
  const { name, email, message } = req.body;

  const newMessage = {
    id: portfolioData.contactMessages.length + 1,
    name,
    email,
    message,
    date: new Date().toISOString()
  };

  portfolioData.contactMessages.push(newMessage);

  res.status(201).json({
    success: true,
    message: "Contact message received",
    data: newMessage
  });
};
