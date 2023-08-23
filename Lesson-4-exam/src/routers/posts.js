import { Router } from "express";
import { posts } from "../data/posts.js";
import { users } from "../data/users.js";
import { validateApiKey } from "../middlewares/validateApiKey.js";

const postRouter = Router();

postRouter.get("/:id", validateApiKey, (req, res) => {
    const postId = req.params.id;
    const post = posts.find((post) => post.id === postId);

    if (!post) {
        return res.status(404).json({ message: "Không tìm thấy bài viết" });
    }

    // Kiểm tra xem người dùng đã xem bài viết này chưa
    const viewerIds = post.viewer.map((viewer) => viewer.id);

    // Kiểm tra xem người dùng hiện tại đã xem bài viết này chưa
    const viewerIndex = viewerIds.indexOf(req.user.id);

    if (viewerIndex === -1) {
        // Nếu chưa xem, thêm id của người dùng vào field 'viewer' của bài viết
        post.viewer.push({ id: req.user.id });
    } else {
        // Nếu đã xem, không thêm id của người dùng vào field 'viewer' nữa
        // Bạn cũng có thể thực hiện các hành động khác tại đây nếu cần thiết
    }

    return res.status(200).json({ message: "Xem chi tiết bài viết thành công", post });
});

export default postRouter;
