const mysql = require('mysql');
const bcrypt = require('bcrypt');

// Create a MySQL connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root', // Replace with your MySQL username
  password: 'root', // Replace with your MySQL password
  database: 'bus_booking'
});

// Connect to the MySQL database
connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL database!');
});

// Signup function
function signup(username, email, phone, password) {
  // Hash the password
  bcrypt.hash(password, 10, (err, hashedPassword) => {
    if (err) throw err;

    // Insert new user into the database
    const query = 'INSERT INTO users (username, email, phone, password) VALUES (?, ?, ?, ?)';
    connection.query(query, [username, email, phone, hashedPassword], (err, results) => {
      if (err) {
        console.error('Error inserting user:', err);
        return;
      }
      console.log('User signed up successfully!');
    });
  });
}

// Login function
function login(username, enteredPassword) {
  // Fetch user from the database
  const query = 'SELECT * FROM users WHERE username = ?';
  connection.query(query, [username], (err, results) => {
    if (err) {
      console.error('Error fetching user:', err);
      return;
    }

    if (results.length > 0) {
      const user = results[0];
      const hashedPassword = user.password;

      // Compare entered password with hashed password
      bcrypt.compare(enteredPassword, hashedPassword, (err, isMatch) => {
        if (err) throw err;

        if (isMatch) {
          console.log('Login successful!');
        } else {
          console.log('Invalid username or password');
        }
      });
    } else {
      console.log('Invalid username or password');
    }
  });
}

// Example usage
signup('new_username', 'new_email@example.com', '1234567890', 'user_password');
login('new_username', 'user_password');

// Close the MySQL connection when done
process.on('exit', () => {
  connection.end();
});
