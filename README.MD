
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
ParseService в конструкторе принимает ссылку на api и sequelize модель

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
Для полного парсинга используется метод parseAll();
Для полного парсинга сжатых данных используется метод parseAllZip();
Для парсинга по запросам используется метод parseQuery(queryString);

```js
let parseBrief = new ParseService();

export const briefInventory = [
    BriefInventory, 
    PrepMarksModel, 
    AsModel, 
    RegModel,
    FirmsModel,
    RegStatusModel,
    NtfrModel,
    RegModel,
    DosageFormModel
]; // model-array.ts

//Парсит массив моделей из данных inventory_brief
briefInventory.forEach(async model => await parseBrief.parseAllZip('http://rlsaurora10.azurewebsites.net/api/inventory_brief', model));
        
//Парсит classes_prep_marks
await parseBrief.parseAllZip('http://rlsaurora10.azurewebsites.net/api/classes_prep_marks', PrepMarksModel);

let parseComplete = new ParseService();
parseComplete.parseQuery(
    'http://rlsaurora10.azurewebsites.net/api/inventory_complete', '?packing_id=124800', 
    CompleteInventory); // Сохраняет в БД пункт с packing_id=124800

```

Для запуска приложения:
```js
-- npm run start
```