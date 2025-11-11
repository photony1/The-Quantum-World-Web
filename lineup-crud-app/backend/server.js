const express = require('express');
const cors = require('cors');
const pool = require('./db');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes

// GET all lineup records
app.get('/api/lineup', async (req, res) => {
  try {
    const connection = await pool.getConnection();
    const [rows] = await connection.query('SELECT * FROM lineup ORDER BY id DESC');
    connection.release();
    res.json(rows);
  } catch (error) {
    console.error('Error fetching lineup:', error);
    res.status(500).json({ error: 'Failed to fetch lineup' });
  }
});

// GET single lineup record by ID
app.get('/api/lineup/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const connection = await pool.getConnection();
    const [rows] = await connection.query('SELECT * FROM lineup WHERE id = ?', [id]);
    connection.release();
    
    if (rows.length === 0) {
      return res.status(404).json({ error: 'Lineup record not found' });
    }
    res.json(rows[0]);
  } catch (error) {
    console.error('Error fetching lineup:', error);
    res.status(500).json({ error: 'Failed to fetch lineup' });
  }
});

// POST create new lineup record
app.post('/api/lineup', async (req, res) => {
  try {
    const { festival_name, artist_name, stage, start_time, end_time } = req.body;
    
    if (!festival_name || !artist_name || !stage) {
      return res.status(400).json({ error: 'Missing required fields' });
    }
    
    const connection = await pool.getConnection();
    const [result] = await connection.query(
      'INSERT INTO lineup (festival_name, artist_name, stage, start_time, end_time, created_at, updated_at) VALUES (?, ?, ?, ?, ?, NOW(), NOW())',
      [festival_name, artist_name, stage, start_time, end_time]
    );
    connection.release();
    
    res.status(201).json({
      id: result.insertId,
      festival_name,
      artist_name,
      stage,
      start_time,
      end_time,
      message: 'Lineup record created successfully'
    });
  } catch (error) {
    console.error('Error creating lineup:', error);
    res.status(500).json({ error: 'Failed to create lineup' });
  }
});

// PUT update lineup record
app.put('/api/lineup/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { festival_name, artist_name, stage, start_time, end_time } = req.body;
    
    const connection = await pool.getConnection();
    const [result] = await connection.query(
      'UPDATE lineup SET festival_name = ?, artist_name = ?, stage = ?, start_time = ?, end_time = ?, updated_at = NOW() WHERE id = ?',
      [festival_name, artist_name, stage, start_time, end_time, id]
    );
    connection.release();
    
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Lineup record not found' });
    }
    
    res.json({ id, festival_name, artist_name, stage, start_time, end_time, message: 'Lineup updated successfully' });
  } catch (error) {
    console.error('Error updating lineup:', error);
    res.status(500).json({ error: 'Failed to update lineup' });
  }
});

// DELETE lineup record
app.delete('/api/lineup/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const connection = await pool.getConnection();
    const [result] = await connection.query('DELETE FROM lineup WHERE id = ?', [id]);
    connection.release();
    
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Lineup record not found' });
    }
    
    res.json({ message: 'Lineup deleted successfully' });
  } catch (error) {
    console.error('Error deleting lineup:', error);
    res.status(500).json({ error: 'Failed to delete lineup' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
