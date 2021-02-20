import { BriefInventory, CompleteInventory } from "../parse/services/models/";
import { Sequelize } from "sequelize-typescript"



const sequelize = new Sequelize(
    String(process.env.DB_NAME),
    String(process.env.DB_USER),
    String(process.env.DB_PASSWORD),
    {
        host: String(process.env.DB_HOST),
        port: +process.env.DB_PORT,
        dialect: 'mysql',
        define: {
            timestamps: false
        },
        models: [__dirname + '../parse/services/models'],
        logging: false,
        
    });

sequelize.addModels([BriefInventory, CompleteInventory]) // Добавление моделей для их создания;

export default sequelize;