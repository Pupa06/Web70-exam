import { users } from "../data/users.js";

export const validateApiKey = (req, res, next) => {
    const { apikey, username } = req.query;

    if (!apikey && !username) {
        return res.status(401).json({ message: "Không được phép" });
    }

    if (apikey) {
        // Kiểm tra apiKey có hợp lệ không bằng cách so sánh với dữ liệu users
        const userWithApiKey = users.find((user) => user.apiKey === apikey);

        if (!userWithApiKey) {
            return res.status(401).json({ message: "Không được phép" });
        }
    }

    if (username) {
        // Kiểm tra username có hợp lệ không bằng cách so sánh với dữ liệu users
        const userWithUsername = users.find((user) => user.username === username);

        if (!userWithUsername) {
            return res.status(401).json({ message: "Không được phép" });
        }
    }

    // Lưu thông tin người dùng vào req.user để sử dụng ở các API khác
    req.user = {
        id: username ? users.find((user) => user.username === username).id : null,
    };

    next();
};
