const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const postsController = require("../controllers/posts");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Post Routes - simplified for now
router.get("/:id", ensureAuth, postsController.getPost); // the colon id ":id" is a query parameter that lets me grab the id entered by the Feeds.ejs

router.post("/createPost", upload.single("file"), postsController.createPost);

// these 2 server requests below were originally post requests from the browser(client) but with this npm packet: const methodOverride = require("method-override"); in server.js now the post requests can become put or delete requests, with an addtional query parameter in the action of the forms '?_method=(either put or delete)
//Use forms for put / delete
// app.use(methodOverride("_method"));

router.put("/likePost/:id", postsController.likePost);

router.delete("/deletePost/:id", postsController.deletePost);

module.exports = router;
