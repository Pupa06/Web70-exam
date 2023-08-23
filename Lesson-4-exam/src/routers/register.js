import { Router } from "express";
import { users } from "../data/users.js";
import { validateRegisterData } from "../middlewares/validateRegister.js";
import crypto from "crypto";

const registerRouter = Router();

registerRouter.post("/register", validateRegisterData, (req, res) => {
    const { username, password, fullname } = req.body;

    // Kiểm tra xem username đã tồn tại chưa
    const existingUser = users.find((user) => user.username === username);
    if (existingUser) {
        return res.status(400).json({ message: "Username đã tồn tại" });
    }

    // Tạo mới user
    const newUser = {
        id: crypto.randomUUID(),
        username,
        password,
        fullname,
        apiKey: `${username}.${password}`,
    };

    users.push(newUser);

    return res.status(201).json({ message: "Đăng ký thành công", user: newUser });
});

export default registerRouter