const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const cors = require('cors');
const connectDB = require('./config/db');
const errorHandler = require('./middleware/error');

//Load env vars
dotenv.config({ path: './config/.env' });

connectDB();

// Route files
const posts = require('./routes/posts');
const auth = require('./routes/auth');

const app = express();

// Body Parser
app.use(express.json());

app.use(cors());

// Mount routers
app.use('/api/v1/posts', posts);
app.use('/api/v1/auth', auth);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `Server running in ${process.env.NODE_ENV} on PORT ${PORT}`.yellow.bold
  );
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error : ${err.message}`.red);
  //Close server & exit process
  server.close(() => process.exit(1));
});
