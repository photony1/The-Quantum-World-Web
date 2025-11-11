const mysql = require('mysql2/promise');
require('dotenv').config();

async function setupDatabase() {
  console.log('\n🔧 Setting up Music Festival Line-Up Database...\n');

  try {
    // Connect to MySQL without database first
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST || '127.0.0.1',
      user: process.env.DB_USER || 'root',
      password: process.env.DB_PASSWORD || '',
      multipleStatements: true
    });

    console.log('✓ Connected to MySQL Server');

    // Create database and table
    const sqlScript = `
    CREATE DATABASE IF NOT EXISTS campus_crud;
    USE campus_crud;

    CREATE TABLE IF NOT EXISTS lineup (
      id INT PRIMARY KEY AUTO_INCREMENT,
      festival_name VARCHAR(150) NOT NULL,
      artist_name VARCHAR(150) NOT NULL,
      stage VARCHAR(100) NOT NULL,
      start_time VARCHAR(50),
      end_time VARCHAR(50),
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    );

    INSERT INTO lineup (festival_name, artist_name, stage, start_time, end_time) VALUES
    ('Lusaka Music Fest 2025', 'Chef 187', 'Main Stage', '18:00', '19:30'),
    ('Lusaka Music Fest 2025', 'Dizmo', 'Dance Arena', '19:45', '21:15'),
    ('Lusaka Music Fest 2025', 'Macky2', 'Sunset Stage', '21:30', '23:00'),
    ('Lusaka Music Fest 2025', 'Blood Kid', 'Main Stage', '23:15', '00:45'),
    ('Lusaka Music Fest 2025', 'Yo Maps', 'Dance Arena', '01:00', '02:30'),
    ('Lusaka Music Fest 2025', 'Jae Cash', 'Harmony Stage', '14:00', '15:30'),
    ('Lusaka Music Fest 2025', 'Slap Dee', 'Main Stage', '15:45', '17:15'),
    ('Lusaka Music Fest 2025', 'K Millian', 'Sunset Stage', '17:30', '19:00'),
    ('Lusaka Music Fest 2025', 'Munga', 'Dance Arena', '20:00', '21:30'),
    ('Lusaka Music Fest 2025', 'T-Sean', 'Harmony Stage', '22:00', '23:30'),
    ('Lusaka Music Fest 2025', 'Jay Ritch', 'Main Stage', '02:00', '03:30'),
    ('Lusaka Music Fest 2025', 'Mainje', 'Sunset Stage', '04:00', '05:00');
    `;

    await connection.query(sqlScript);
    console.log('✓ Database created: campus_crud');
    console.log('✓ Table created: lineup');
    console.log('✓ Sample data inserted: 12 artists');

    await connection.end();

    console.log('\n✅ Database setup completed successfully!\n');
    console.log('You can now:');
    console.log('1. Start the backend: npm start');
    console.log('2. Open the frontend: frontend/index.html\n');

    process.exit(0);

  } catch (error) {
    console.error('\n❌ Error setting up database:\n');
    console.error('Error:', error.message);
    
    if (error.code === 'PROTOCOL_CONNECTION_LOST') {
      console.error('\n⚠️  MySQL is not running!');
      console.error('Please start MySQL Server and try again.\n');
    } else if (error.code === 'ER_ACCESS_DENIED_ERROR') {
      console.error('\n⚠️  MySQL connection denied!');
      console.error('Check your database credentials in .env file.\n');
    }
    
    process.exit(1);
  }
}

setupDatabase();
