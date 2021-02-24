
Для установки требующихся зависимостей:
```js
-- npm init
```

Для настройки парсера изменяем файл .env:
```js
PORT - Порт открытия сервера

DB_HOST - Хост базы данных
(По умолчанию 127.0.0.1)

DB_NAME - Имя базы данных
DB_PORT - Порт базы данных
DB_USER - Имя пользователя базы данных
DB_PASSWORD - Пароль пользователя базы данных

LOGIN - Логин авторизации для api сервера
PASSWORD - Пароль авторизации для api сервера
```
ParseService 

Пример модели:
```js
import { Column, DataType, Table, Model } from "sequelize-typescript";

@Table({
    modelName: 'Frims_Model'
})
export class FirmsModel extends Model<FirmsModel> { 

    @Column({type: DataType.INTEGER, primaryKey: true})
    firms_id: number;

    @Column({type: DataType.TEXT})
    firms_name: string;
}
```
Для полного парсинга используется метод parseAll(url, model);
Для полного парсинга сжатых данных используется метод parseAllZip(url, model);
Для парсинга по запросам используется метод parseQuery(url, query, model);

```js
public async parseAll(req: Request, res: Response) {
    try {
        const data = await this.parseService.parseAll('http://rlsaurora10.azurewebsites.net/api/inventory_brief', BriefInventory)
        res.status(200).send(data);
    } 
    catch (err) {
        res.status(501).send(err);
    }
}


public async parseAllZip(req: Request, res: Response) {
    try {
        const data = await this.parseService.parseAllZip('http://rlsaurora10.azurewebsites.net/api/inventory_brief', BriefInventory)
        res.status(200).send(data);
    } 
    catch (err) {
        res.status(501).send(err);
    }
}


public async parseQuery(req: Request, res: Response) {
    try {
        const {query} = req.params;
        console.log(query);
        const data = await this.parseService.parseQuery('http://rlsaurora10.azurewebsites.net/api/inventory_brief', query, BriefInventory);
        res.status(200).send(data);
    } 
    catch (err) {
        res.status(501).send(err);
    }
}
```

Для запуска приложения:
```js
-- npm run start
```

Запросы:
```js
POST /brief_inventory/packing_id=95600 // Парсит brief inventory с packing_id=95600

POST /complete_inventory/allzip // Парсит сжатый complete inventory

POST /complete_inventory/all // Парсит не сжатый complete inventory
```


Доступные запросы:
```js
brief_inventory 

complete_inventory

prep_marks

prep
```