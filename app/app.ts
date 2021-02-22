const bodyParser = require('body-parser');
require('body-parser-xml')(bodyParser);
import dotenv from 'dotenv';
dotenv.config({path: '.env-dev'}); // need .env file for working

import express from 'express';
import sequelize from './database/sequelize';
import {ParseService} from './services/parsing.service'
import { BriefInventory, CompleteInventory, PrepMarksModel } from './services/models';
import { briefInventory } from './services/models-array';


const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.listen(process.env.PORT || 3000, async () => {

    try {
        await sequelize.sync({force: true});

        let parseBrief = new ParseService();
        
        //Парсит inventory_brief
        briefInventory.forEach(async model => await parseBrief.parseAllZip('http://rlsaurora10.azurewebsites.net/api/inventory_brief', model));
        
        //Парсит classes_prep_marks
        await parseBrief.parseAllZip('http://rlsaurora10.azurewebsites.net/api/classes_prep_marks', PrepMarksModel);



        console.log("Run on port: ", process.env.PORT || 3000)
    }
    catch (err) {
        console.log(err);
    }
});