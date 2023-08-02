import express from "express";
import crypto from "crypto";
const app = express();

const todoList = [
    {
        id: crypto.randomUUID(),
        todoName: "Làm gì đó 1",
        date: new Date(),
        status: "PENDING",
    },
    {
        id: crypto.randomUUID(),
        todoName: "Làm gì đó 2",
        date: new Date(),
        status: "TODO",
    },
    {
        id: crypto.randomUUID(),
        todoName: "Làm gì đó 3",
        date: new Date(),
        status: "DOING",
    },
    {
        id: crypto.randomUUID(),
        todoName: "Làm gì đó 4",
        date: new Date(),
        status: "DONE",
    },
];

app.get("/api/v1/todo-list", (req, res) => {
    const { id, todoName } = req.query;

    // Hàm lọc dữ liệu theo params
    const filterData = (item) => {
        const filteredItem = {};

        if (id === "1") filteredItem.id = item.id;
        if (todoName === "1") filteredItem.todoName = item.todoName;
        if (id === "0") {
            filteredItem.date = item.date;
            filteredItem.status = item.status;
        }

        return filteredItem;
    };

    if (!id && !todoName) {
        res.send({
            data: todoList,
            message: "Thành công",
            success: true,
        });
    } else {
        const filteredList = todoList.map(filterData);

        res.send({
            data: filteredList,
            message: "Thành công",
            success: true,
        });
    }
});

app.listen(5001, () => {
    console.log("Server đã khởi động thành công tại http://localhost:5001/");
});

