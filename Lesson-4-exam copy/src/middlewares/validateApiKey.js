import { users } from "../data/users";

export const validateApiKey = (req, res, next) => {
    const apiKey = req.query.apiKey;
    if (!apiKey) {
        return res.status(403).json({ message: "Không được phép" });
    }

    const user = users.find((user) => user.apiKey === apiKey);
    if (!user) {
        return res.status(403).json({ message: "Không được phép" });
    }

    req.user = user;
    next();
}