// vulnerable.js

// 1. Hardcoded password
const password = "123456"; 
console.log("Using hardcoded password:", password);

// 2. SQL Injection
const userInput = "' OR '1'='1";
const query = `SELECT * FROM users WHERE username = '${userInput}'`;
console.log("SQL Query:", query);

// 3. Unsafe eval
const code = "console.log('Running eval')";
eval(code);

// 4. Insecure HTTP request
const http = require('http');
http.get('http://example.com', (res) => {
  console.log('HTTP GET request made');
});

// 5. Exposed JWT secret
const jwt = require('jsonwebtoken');
const token = jwt.sign({ userId: 1 }, "supersecret"); 
console.log("JWT token:", token);

// 6. Command injection
const { exec } = require('child_process');
const userCommand = "rm -rf /"; 
exec(userCommand, (err, stdout, stderr) => {
  if (err) console.error(err);
  console.log(stdout);
});

// 7. Insecure random (predictable)
const crypto = require('crypto');
const random = Math.random(); 
console.log("Insecure random:", random);

// 8. Directory traversal
const fs = require('fs');
const filePath = "../etc/passwd"; 
fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) console.error(err);
  console.log(data);
});

// 9. Weak hashing (MD5)
const md5 = require('crypto').createHash('md5').update('password').digest('hex');
console.log("Weak hash (MD5):", md5);

// 10. Storing secrets in source
const apiKey = "AKIAFAKEAPIKEY123456";
console.log("Exposed API key:", apiKey);

// 11. XSS vulnerability in string interpolation
const userInputXSS = "<script>alert('XSS')</script>";
const html = `<div>${userInputXSS}</div>`;
console.log("HTML content:", html);

// 12. Insecure TLS options
const https = require('https');
const agent = new https.Agent({ rejectUnauthorized: false });
console.log("Insecure TLS agent:", agent);

// 13. Open redirect
const redirectUrl = "http://evil.com";
console.log("Redirecting to:", redirectUrl);

// 14. Weak cipher usage
const cipher = crypto.createCipher('aes192', 'weakpassword');
let encrypted = cipher.update('mydata', 'utf8', 'hex');
encrypted += cipher.final('hex');
console.log("Weak cipher:", encrypted);

// 15. Logging sensitive information
console.log("User password:", password);
