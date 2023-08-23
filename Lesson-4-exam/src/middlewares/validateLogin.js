import { users } from "../data/users.js";

export const validateLoginData = (req, res, next) => {
    const { username, password } = req.body;

    // Kiểm tra nếu username hoặc password không được cung cấp trong req.body
    if (!username || !password) {
        return res.status(400).json({ message: "Vui lòng cung cấp cả username và password" });
    }

    const user = users.find(
        (user) => user.username === username && user.password === password
    );

    // Kiểm tra nếu không tìm thấy người dùng phù hợp trong danh sách users
    if (!user) {
        return res.status(400).json({ message: "Tài khoản không hợp lệ" });
    }

    next();
}