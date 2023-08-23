import { Router } from "express";
import { users } from "../data/users.js";
import { validateLoginData } from "../middlewares/validateLogin.js";

const loginRouter = Router();

loginRouter.post("/login", validateLoginData, (req, res) => {
    const { username, password } = req.body;

    // Tìm user trong danh sách users
    const user = users.find((user) => user.username === username && user.password === password);

    // Nếu không tìm thấy user
    if (!user) {
        return res.status(401).json({ message: "Username hoặc password không đúng" });
    }

    return res.status(200).json({ message: "Đăng nhập thành công", user });
});

export default loginRouter