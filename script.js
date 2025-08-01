/* style.css */
body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #f4f7fa;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.container {
  width: 90%;
  max-width: 700px;
  background-color: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

h1 {
  text-align: center;
  color: #2c3e50;
  margin-bottom: 1.5rem;
}

select, button {
  width: 100%;
  padding: 0.75rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
}

button {
  background-color: #2c3e50;
  color: white;
  border: none;
  cursor: pointer;
  transition: background 0.3s ease;
}

button:hover {
  background-color: #34495e;
}

textarea {
  width: 100%;
  height: 300px;
  padding: 1rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  resize: vertical;
  box-sizing: border-box;
  font-family: monospace;
}  
