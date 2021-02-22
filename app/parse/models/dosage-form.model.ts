import { Column, DataType, Table, Model } from "sequelize-typescript";


@Table({
    modelName: 'Dosage_Form',
    omitNull: false
})

export class DosageFormModel extends Model<DosageFormModel> { 

    @Column({type: DataType.INTEGER})
    dosage_form_id: number;

    @Column({type: DataType.TEXT})
    dosage_form_full_name: string;
}