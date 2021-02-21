import { Column, DataType, Table, Model } from "sequelize-typescript";


@Table({
    modelName: 'Prep_Marks'
})

export class PrepMarksModel extends Model<PrepMarksModel> {

/*      
        <prep_id>6666</prep_id>
        <strong>false</strong>
        <toxic>false</toxic>
        <limp>true</limp>
        <no_recipe>false</no_recipe>
        <min_as>false</min_as>
        <comission xsi:nil="true"/>
        <sad_seven>false</sad_seven>
        <druggroup_id>0</druggroup_id>
        <actdate>2020-04-23T00:00:00</actdate>
        <prep_ref>true</prep_ref>
        <prep_change>false</prep_change>
*/

    
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

    @Column({type: DataType.TEXT, allowNull: true})
    comission: Text;

    @Column({type: DataType.BOOLEAN})
    sad_seven: boolean;

    @Column({type: DataType.INTEGER})
    druggroup_id: number; //????

    @Column({type: DataType.DATE})
    actdate: Date;

    @Column({type: DataType.BOOLEAN})
    prep_ref: boolean;

    @Column({type: DataType.BOOLEAN})
    prep_change: boolean;

 }
