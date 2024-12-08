import express from "express";
import morgan from 'morgan';
import sequelize from './Configs/database.js';

import swaggerUI from 'swagger-ui-express';
import swaggerSpec from './Configs/swagger.js';

import TaskRouter from "./Routes/Task.js"


const app = express()

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));

const port = process.env.PORT || 9090;

sequelize.sync({ force: true }).then(async () => {
  console.log("Database synced!");
}).catch(err => {
  console.error('Unable to sync database:', err);
});


app.use(express.json())
app.use(morgan('dev'));


app.use("/",TaskRouter)

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`)
});