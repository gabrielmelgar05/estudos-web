import { Router } from "express";
import pool from "../database/connection.js";

const router = Router();

router.get("/test-db", async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW()");
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro no banco" });
  }
});

export default router;
