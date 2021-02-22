const bodyParser = require('body-parser');
import dotenv from 'dotenv';
dotenv.config({path: '.env-dev'}); // need .env file for working

import express from 'express';
import sequelize from './database/sequelize';
import {ParseService} from './parse/parse.service'
import { PrepMarksModel } from './parse/models';
import { briefInventory } from './parse/models-array';
import { briefRoute } from './parse/brief_inventory';


const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/brief_inventory', briefRoute);
app.listen(process.env.PORT || 3000, async () => {

    try {
        await sequelize.sync({force: true});


        console.log("Run on port: ", process.env.PORT || 3000)
    }
    catch (err) {
        console.log(err);
    }
});