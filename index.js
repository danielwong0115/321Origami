import express from 'express';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const app = express();

// Get the directory name of the current module file
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Serve static files from the build directory
app.use(express.static(__dirname + '/build'));

// Serve index.html for any route
app.get('*', (req, res) => {
  res.sendFile(__dirname + '/build/index.html');
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});