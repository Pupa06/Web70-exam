import { Router } from "express";
import { posts } from "../data/posts";
import { validateApiKey } from "../middlewares/validateApiKey";

const postRouter = Router();

postRouter.get("/:id", validateApiKey, (req, res) => {
    const postId = req.params.id;
    const post = posts.find((post) => post.id === postId);
    if (!post) {
        return res.status(404).json({ message: "Không tìm thấy bài viết" });
    }

    // Kiểm tra xem người dùng đã xem bài viết này chưa
    const viewerIds = post.viewer.map((viewer) => viewer.id);
    if (!viewerIds.includes(req.user.id)) {
        post.viewer.push({ id: req.user.id });
    }

    return res.status(200).json({ message: "Xem chi tiết bài viết thành công", post });
});

export default postRouter