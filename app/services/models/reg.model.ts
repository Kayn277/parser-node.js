import { Column, DataType, Table, Model } from "sequelize-typescript";


@Table({
    modelName: 'Reg',
    omitNull: true
})

export class RegModel extends Model<RegModel> { 

    @Column({type: DataType.INTEGER})
    reg_id: number;

}