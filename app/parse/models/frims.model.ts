import { Column, DataType, Table, Model } from "sequelize-typescript";


@Table({
    modelName: 'Firms_Model',
    omitNull: true
})

export class FirmsModel extends Model<FirmsModel> {

    @Column({type: DataType.TEXT})
    firms_id: String;

    @Column({type: DataType.TEXT})
    firms: string;

    //...?
}
