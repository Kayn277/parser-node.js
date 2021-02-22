import { Column, DataType, Table, Model } from "sequelize-typescript";


@Table({
    modelName: 'As',
    omitNull: true
})

export class AsModel extends Model<AsModel> { 

    @Column({type: DataType.BIGINT})
    as_id: number;

    @Column({type: DataType.TEXT})
    as_name_rus: string;

}