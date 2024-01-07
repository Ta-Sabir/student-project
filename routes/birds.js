const express = require("express");
const router = express.Router();
const userController = require("../Controllers/userController");
// GET Requst

router.get("/", userController.user_index_get);

router.get("/pages/add.html", userController.user_add_get);

router.get("/pages/view.html", userController.user_view_get);

router.get("/pages/edit.html", userController.user_edit_get);

router.get("/student/:id", userController.user_student_get);

router.get("/edit/:id", userController.user_edit_id);

// POST
router.post("/", userController.user_index_post);

router.post("/pages/add.html", userController.user_add_post);

router.post("/search", userController.user_search);

// DELTE REQUEST
router.delete("/edit/:id", userController.user_delte);

// UPDATE DATA
router.put("/edit/:id", userController.user_update);

module.exports = router;
