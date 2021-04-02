module.exports.post = function (req, res) {
  return res.render("posts", {
    title: "Posts",
  });
};

module.exports.createPost = function (req, res) {
  //Todo
};
