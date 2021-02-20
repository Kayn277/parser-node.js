const bodyParser = require('body-parser');
require('body-parser-xml')(bodyParser);
import dotenv from 'dotenv';
dotenv.config({path: '.env-dev'}); // need .env file for working

import express from 'express';
import sequelize from './database/sequelize';
import {ParseService} from '../app/parse/services/parsing.abstract.service'
import { BriefInventory, CompleteInventory } from './parse/services/models';


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

        console.log("Run on port: ", process.env.PORT || 3000)
    }
    catch (err) {
        console.log(err);
    }
});