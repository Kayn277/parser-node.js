import { Column, DataType, Table, Model } from "sequelize-typescript";


@Table({
    modelName: 'Reg_Status',
    omitNull: true
})

export class RegStatusModel extends Model<RegStatusModel> { 

    @Column({type: DataType.INTEGER})
    reg_status_id: number;

}