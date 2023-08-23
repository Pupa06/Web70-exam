import { users } from "../data/users.js";

export const validateRegisterData = (req, res, next) => {
    const { username, password, fullname } = req.body;

    if (!username || !password || !fullname) {
        return res.status(400).json({ message: "Vui lòng nhập đầy đủ thông tin đăng ký" });
    }

    if (!/^[A-Za-z0-9]+$/.test(username)) {
        return res.status(400).json({ message: "Username sai định dạng" });
    }

    if (!/^[A-Za-z0-9]{6,}$/.test(password)) {
        return res.status(400).json({ message: "Password sai định dạng" });
    }

    next();
}