import { users } from "../data/users";

export const validateLoginData = (req, res, next) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ message: "Vui lòng nhập đầy đủ thông tin đăng nhập" });
    }

    next();
}