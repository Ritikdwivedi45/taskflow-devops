const express = require("express");

const app = express();

app.use(express.json());
app.use(express.static("public"));

let tasks = [];

// Get all tasks
app.get("/api/tasks", (req, res) => {
    res.json(tasks);
});

// Add task
app.post("/api/tasks", (req, res) => {
    const { title } = req.body;

    if (!title) {
        return res.status(400).json({
            message: "Task title is required"
        });
    }

    const task = {
        id: Date.now(),
        title
    };

    tasks.push(task);

    res.status(201).json(task);
});

// Delete task
app.delete("/api/tasks/:id", (req, res) => {
    const id = Number(req.params.id);

    tasks = tasks.filter(task => task.id !== id);

    res.json({
        message: "Task deleted"
    });
});

// Health check
app.get("/health", (req, res) => {
    res.json({
        status: "healthy"
    });
});

if (require.main === module) {
    app.listen(5000, () => {
        console.log("TaskFlow running on port 5000");
    });
}

module.exports = app;