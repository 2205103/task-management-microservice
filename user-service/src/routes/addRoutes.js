const express = require('express');
const router = express.Router();
const pool = require('../models/db');

//POST /service/add/user
router.post("/user", async (req, res) => {
    const { name, studentId } = req.body;
    if (!name || !studentId) {
        return res.status(400).json({ error: "Missing required fields" });
    }

    try {
        const existingUser = await pool.query(
            "SELECT * FROM users WHERE student_id = $1",
            [studentId]
        );
        if (existingUser.rows.length > 0)
            return res.status(400).json({ error: "User already registered" });
        else {
            await pool.query(
                "INSERT INTO users(name, student_id) VALUES($1,$2)"
            );
            return res.send("User added successfully");
        }
    } catch (error) {
        console.error(err);
        return res.status(500).json({
            error: "Internal Server Error"
        });
    }
});

//POST /service/add/task
router.post("/task", async (req, res) => {
    const { studentId, task } = req.body;
    if (!task || !studentId) {
        return res.status(400).json({ error: "Missing required fields" });
    }

    try {

        await pool.query(
            "INSERT INTO tasks(student_id, task) VALUES($1,$2)"
        );
        return res.send("Task added successfully");

    } catch (error) {
        console.error(err);
        return res.status(500).json({
            error: "Internal Server Error"
        });
    }
});

module.exports = router;