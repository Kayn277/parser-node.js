import bent from 'bent';
import base64 from 'base-64';
import fs from 'fs';
import admZip from 'adm-zip';
import { Repository } from 'sequelize-typescript';
import { Model, ModelCtor } from 'sequelize/types';


export class ParseService <T extends Model<T>>{
    /**
    * 
    * @param url - Ссылка api
    * @param model - Модель для работы с базой данных
    */
    constructor(public url: string, public model: Repository<T>){
    }

    /**
     * Парсинг сжатых данных
     */
    public async parseAll():Promise<void>{ 
        const getData = bent('GET', 200, 'buffer',
        {
            authorization: 'Basic ' + base64.encode(String(process.env.LOGIN) + ":" + String(process.env.PASSWORD)),
        });
        let decodeData = await getData(this.url)
        
        let zip = new admZip(decodeData as Buffer);
        let zipEntries = zip.getEntries();
        let data: Array<T> = new Array<T>();
        for (var i = 0; i < zipEntries.length; i++) {
            this.model.bulkCreate(JSON.parse(zip.readAsText(zipEntries[i])));
        }
        fs.writeFile('text.txt', JSON.parse(JSON.stringify(data.toString())), (err) => {
            console.log(err);
        });
    }

    /**
     * Парсинг по запросам
     */
    public async parseQuery(query: string):Promise<void> {
        const getData = bent('GET', 200, 'json',
        {
            authorization: 'Basic ' + base64.encode(String(process.env.LOGIN) + ":" + String(process.env.PASSWORD)),
        });
        let decodeData = await getData(this.url + query)
        this.model.create(JSON.parse(JSON.stringify(decodeData)));
    }
 
  } 