
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(50) NOT NULL UNIQUE,
  email VARCHAR(100) NOT NULL UNIQUE,
  password TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)

/*exemple data   users */

INSERT INTO users (username, email, password) VALUES
('alice', 'alice@example.com', 'hashedpassword1'),
('bob', 'bob@example.com', 'hashedpassword2'),
('charlie', 'charlie@example.com', 'hashedpassword3'),
('diana', 'diana@example.com', 'hashedpassword4'),
('edward', 'edward@example.com', 'hashedpassword5'),
('fiona', 'fiona@example.com', 'hashedpassword6');




CREATE TABLE projects (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  description TEXT,
  status VARCHAR(20) DEFAULT 'active',
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)
/*exemple data   projects */
INSERT INTO projects (name, description, status, user_id) VALUES
('Project Alpha', 'Web development project', 'active', 1),
('Project Beta', 'Ongoing mobile app project', 'active', 2),
('Project Gamma', 'E-commerce site redesign', 'inactive', 3),
('Project Delta', 'Internal management tool', 'completed', 1),
('Project Epsilon', 'AI research project', 'active', 4),
('Project Zeta', 'Hardware prototype', 'active', 5);


CREATE TABLE tasks (
  id SERIAL PRIMARY KEY,
  title VARCHAR(100) NOT NULL,
  description TEXT,
  status VARCHAR(20) DEFAULT 'pending',
  priority VARCHAR(20) DEFAULT 'medium',
  due_date DATE,
  project_id INTEGER REFERENCES projects(id) ON DELETE CASCADE,
  user_id INTEGER REFERENCES users(id) ON DELETE SET NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)
/*exemple data  tasks */
INSERT INTO tasks (title, description, status, priority, due_date, project_id, user_id) VALUES
('Create database schema', 'Design and create tables', 'completed', 'high', '2025-07-10', 1, 1),
('UI Design', 'Design user interface mockups', 'pending', 'medium', '2025-07-12', 1, 2),
('Initial deployment', 'Deploy on staging server', 'in_progress', 'high', '2025-07-15', 2, 2),
('Security audit', 'Check for security vulnerabilities', 'pending', 'low', '2025-08-01', 3, 3),
('Write documentation', 'Document the project for users', 'pending', 'medium', '2025-07-20', 4, 1),
('Unit testing', 'Write tests for core modules', 'in_progress', 'high', '2025-07-18', 5, 4);




