const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '../frontend')));

// Define routes
app.use('/api/artisans', require('./routes/artisans'));
app.use('/api/bookings', require('./routes/bookings'));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

