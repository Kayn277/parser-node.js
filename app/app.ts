const bodyParser = require('body-parser');
require('body-parser-xml')(bodyParser);
import dotenv from 'dotenv';
dotenv.config({path: '.env-dev'}); // need .env file for working

import express from 'express';
import sequelize from './database/sequelize';
import {ParseService} from './services/parsing.service'
import { BriefInventory, CompleteInventory } from './services/models';
import { briefInventory } from './services/models/models-array';


const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.listen(process.env.PORT || 3000, async () => {

    try {
        await sequelize.sync({force: true});

        let parseBrief = new ParseService(
             'http://rlsaurora10.azurewebsites.net/api/inventory_brief', 
             BriefInventory
        );
        parseBrief.parseAll();

        let parseComplete = new ParseService(
            'http://rlsaurora10.azurewebsites.net/api/inventory_complete', 
            CompleteInventory
        );
        parseComplete.parseAll();


        // //Когда надо запарсить не одну таблицу а например BriefInventory где данные из нескольких таблиц...
        // let parseBigData = new ParseService(
        //     'http://rlsaurora10.azurewebsites.net/api/inventory_brief', 
        //     briefInventory // Сюда массив моделей
        // );
        // parseComplete.parseAll();//В каждую таблицу он загружает данные из большой

        console.log("Run on port: ", process.env.PORT || 3000)
    }
    catch (err) {
        console.log(err);
    }
});