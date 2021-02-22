import { Column, DataType, Table, Model } from "sequelize-typescript";


@Table({
    modelName: 'Ntfr',
    omitNull: true
})

export class NtfrModel extends Model<NtfrModel> { 

    @Column({type: DataType.INTEGER})
    ntfr_id: number;

    @Column({type: DataType.TEXT})
    ntfr_name: string;

}