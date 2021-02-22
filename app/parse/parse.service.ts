import bent from 'bent';
import base64 from 'base-64';
import admZip from 'adm-zip';
import { Repository, Model } from 'sequelize-typescript';
//import { Model} from 'sequelize/types';
import { Console } from 'console';
import sequelize from '../database/sequelize';


export class ParseService <T extends Model>{

    constructor(){
    }

    /**
     * Парсинг сжатых данных
     * @param url - Ссылка api
     * @param model - Модель для работы с базой данных
     */
    public async parseAllZip(url: string, model: (new () => T)):Promise<T[]>{ 
        try
        {
            const getData = bent('GET', 200, 'buffer',
            {
                authorization: 'Basic ' + base64.encode(String(process.env.LOGIN) + ":" + String(process.env.PASSWORD)),
            });
            let decodeData = await getData(url)
            let zip = new admZip(decodeData as Buffer);
            let zipEntries = zip.getEntries();
            for (var i = 0; i < zipEntries.length; i++) {
                let decodeData = zip.readAsText(zipEntries[i]);
                let repositoryModel = sequelize.getRepository(model);
                let dupKey = repositoryModel.primaryKeyAttribute;
                return await repositoryModel.bulkCreate(JSON.parse(decodeData), {updateOnDuplicate: [dupKey]}).catch(err => {throw new Error(err)});
            }
        }
        catch (err) 
        {
            console.log(err);
        }
    }

    /**
     * Парсинг данных
     * @param url - Ссылка api
     * @param model - Модель для работы с базой данных
     */
    public async parseAll(url: string, model: (new () => T)):Promise<T[]>{
        try
        {
            const getData = bent('GET', 200, 'json',
            {
                authorization: 'Basic ' + base64.encode(String(process.env.LOGIN) + ":" + String(process.env.PASSWORD)),
            });

            let decodeData = await getData(url)
            let repositoryModel = sequelize.getRepository(model);
            let dupKey = repositoryModel.primaryKeyAttribute;
            return await repositoryModel.bulkCreate(JSON.parse(JSON.stringify(decodeData)), {updateOnDuplicate: [dupKey]}).catch(err => {throw new Error(err)});

        }
        catch (err) 
        {
            console.log(err);
        }
        
    }

    /**
     * Парсинг по запросам
     * @param url - Ссылка api
     * @param query - Запрос прим. - packing_id=124800
     * @param model - Модель для работы с базой данных
     */
    public async parseQuery(url: string, query: string, model: (new () => T)):Promise<void | T[]> {
        try
        {
            console.log('Go work with ', query);
            console.log('and with  ', url);
            const getData = bent('GET', 200, 'json',
            {
                authorization: 'Basic ' + base64.encode(String(process.env.LOGIN) + ":" + String(process.env.PASSWORD)),
            });
            let decodeData = await getData(url + "?" + query);
            console.log('goto ', url + "?" + query)
            console.log(JSON.parse(JSON.stringify([decodeData])));
            let repositoryModel = sequelize.getRepository(model);
            let dupKey = repositoryModel.primaryKeyAttribute;
            return await repositoryModel.bulkCreate(JSON.parse(JSON.stringify([decodeData])), {updateOnDuplicate: [dupKey]}).catch(err => console.log(err));
         
        }
        catch (err) 
        {
            console.log(err);
            throw new Error(err);
        }
    }
 
  } 