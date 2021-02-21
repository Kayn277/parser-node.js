

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
Для полного парсинга используется метод parseAll()
Для парсинга по запросам используется метод parseQuery(queryString);

```js
let parseBrief = new ParseService(
            'http://rlsaurora10.azurewebsites.net/api/inventory_brief', 
            BriefInventory
        );
parseBrief.parseAll(); // Сохраняет в БД полный справочник
```

```js
let parseComplete = new ParseService(
            'http://rlsaurora10.azurewebsites.net/api/inventory_brief', 
            CompleteInventory
        );
parseComplete.parseQuery(?packing_id=124800); // Сохраняет в БД пункт с packing_id=124800
```

Для запуска приложения:
```js
-- npm run start
```