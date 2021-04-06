const nodeMailer = require("../config/nodemailer");

//this is another way of exporting
exports.newComment = (comment) => {
  console.log("inside");

  nodeMailer.transporter.sendMail(
    {
      from: "sohailkhan2709@gmail.com",
      to: comment.user.email,
      subject: "New Comment Posted",
      html: "<h1>Yup ur commnet isnow published</h1>",
    },
    (err, info) => {
      if (err) {
        console.log("Error in sending the mail");
        return;
      }
      console.log("Message sent", info);
      return;
    }
  );
};
