import { Column, DataType, Table, Model } from "sequelize-typescript";


@Table({
    modelName: 'Frims_Model'
})

export class FirmsModel extends Model<FirmsModel> {

    @Column({type: DataType.INTEGER, primaryKey: true})
    firms_id: number;

    @Column({type: DataType.TEXT})
    firms: string;

    //...?
}
