import { Column, DataType, Table, Model } from "sequelize-typescript";


@Table({
    modelName: 'Prep',
    omitNull: true
})

export class PrepModel extends Model<PrepModel> {
    
    @Column({type: DataType.INTEGER, primaryKey: true})
    id: number;

    @Column({type: DataType.TEXT})
    class_name: String;

    @Column({type: DataType.INTEGER})
    prep_id: number;


    @Column({type: DataType.INTEGER})
    node_id: number;

    @Column({type: DataType.INTEGER})
    use_id: number;

    @Column({type: DataType.DATE})
    actdate: Date;

    @Column({type: DataType.TEXT})
    class_code: String;

    @Column({type: DataType.TEXT})
    class_value: String;

    @Column({type: DataType.INTEGER})
    as_id: number;
 }
