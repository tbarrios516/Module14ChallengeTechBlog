const router = require("express").Router();
const { Post, User, Comment } = require("../../dbtable");
const withAuth = require("../../utils/auth");

router.post("/", withAuth, async (req, res) => {
  try {
    const newPost = await Post.create({
      title: req.body.title,
      content: req.body.content,
      user_id: req.session.userId,
    });
    res.redirect("/dashboard");
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        { model: User, attributes: ["username"] },
        {
          model: Comment,
          include: [{ model: User, attributes: ["username"] }],
        },
      ],
    });

    if (!postData) {
      res.status(404).json({ message: "No post found with this id!" });
      return;
    }

    const post = postData.get({ plain: true });
    res.render("single-post", {
      ...post,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.error("Detailed error:", err);
    res
      .status(500)
      .json({ message: "Internal server error", error: err.message });
  }
});

router.get("/edit-post/:id", withAuth, async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id);
    const post = postData.get({ plain: true });
    res.render("editPost", { post });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put("/:id", withAuth, async (req, res) => {
  try {
    const updatedPost = await Post.update(
      {
        title: req.body.title,
        content: req.body.content,
      },
      {
        where: {
          id: req.params.id,
          user_id: req.session.userId,
        },
      }
    );
    if (!updatedPost) {
      res.status(404).json({ message: "No post found with this id" });
      return;
    }
    res.status(200).json({ message: "Post updated successfully" });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete("/:id", withAuth, async (req, res) => {
  try {
    const deletedPost = await Post.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.userId,
      },
    });
    if (!deletedPost) {
      res.status(404).json({ message: "No post found with this id" });
      return;
    }
    res.status(200).json(deletedPost);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
