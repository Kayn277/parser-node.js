const bodyParser = require('body-parser');
import dotenv from 'dotenv';
dotenv.config({path: '.env-dev'}); // need .env file for working

import express from 'express';
import sequelize from './database/sequelize';
import { briefRoute } from './parse/brief_inventory';
import { completeBriefRoute } from './parse/complete_inventory';
import { prepMarksRoute } from './parse/prep_makrs';


const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/brief_inventory', briefRoute);
app.use('/complete_inventory', completeBriefRoute);
app.use('/prep_marks', prepMarksRoute);
app.listen(process.env.PORT || 3000, async () => {

    try {
        await sequelize.sync({force: true});


        console.log("Run on port: ", process.env.PORT || 3000)
    }
    catch (err) {
        console.log(err);
    }
});