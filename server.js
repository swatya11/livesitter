const express = require('express');
const app = express();
const port = 3000;

// Serve the HTML and other static assets from the 'public' directory.
app.use(express.static('public'));

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
