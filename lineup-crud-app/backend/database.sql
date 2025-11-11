-- Create Database
CREATE DATABASE IF NOT EXISTS campus_crud;
USE campus_crud;

-- Create lineup table
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

-- Insert sample data (10+ records)
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
