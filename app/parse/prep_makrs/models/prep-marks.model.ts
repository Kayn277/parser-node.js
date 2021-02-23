import { Column, DataType, Table, Model } from "sequelize-typescript";


@Table({
    modelName: 'Prep_Marks',
    omitNull: true
})

export class PrepMarksModel extends Model<PrepMarksModel> {
    
    @Column({type: DataType.INTEGER, primaryKey: true})
    prep_id: number;

    @Column({type: DataType.BOOLEAN})
    strong: boolean;

    @Column({type: DataType.BOOLEAN})
    toxic: boolean;

    @Column({type: DataType.BOOLEAN})
    limp: boolean;

    @Column({type: DataType.BOOLEAN})
    no_recipe: boolean;

    @Column({type: DataType.BOOLEAN})
    min_as: boolean;

    @Column({type: DataType.TEXT})
    comission: String;

    @Column({type: DataType.BOOLEAN})
    sad_seven: boolean;

    @Column({type: DataType.INTEGER})
    druggroup_id: number; //?????

    @Column({type: DataType.DATE})
    actdate: Date;

    @Column({type: DataType.BOOLEAN})
    prep_ref: boolean;

    @Column({type: DataType.BOOLEAN})
    prep_change: boolean;

 }
