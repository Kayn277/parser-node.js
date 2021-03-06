import { Column, DataType, Table, Model } from "sequelize-typescript";


@Table({
    modelName: 'Brief_Inventory',
    omitNull: true
})
export class BriefInventory extends Model<BriefInventory> {

    @Column({type: DataType.INTEGER, primaryKey: true})
    packing_id: number;

    @Column({type: DataType.INTEGER, allowNull: true})
    desc_id: number;
    // Prep
    @Column({type: DataType.INTEGER, allowNull: true})
    prep_id: number;
    
    @Column({type: DataType.TEXT})
    prep_short: string;

    @Column({type: DataType.TEXT})
    prep_full: string;
    //
    @Column({type: DataType.TEXT})
    amount: string;

    @Column({type: DataType.TEXT})
    packing_short: string;

    @Column({type: DataType.TEXT})
    packing_full: string;

    @Column({type: DataType.TEXT})
    barcode: number;
    // Firms
    @Column({type: DataType.TEXT})
    firms_id: number;

    @Column({type: DataType.TEXT})
    firms: string;
    // 

    // as
    @Column({type: DataType.BIGINT})
    as_id: number;

    @Column({type: DataType.TEXT})
    as_name_rus: string;
    //

    // reg
    @Column({type: DataType.TEXT})
    reg_id: string;
    //

    // reg_status
    @Column({type: DataType.INTEGER})
    reg_status_id: number;
    // 
    @Column({type: DataType.TEXT})
    registration: string;

    // ntfr
    @Column({type: DataType.INTEGER})
    ntfr_id: number;

    @Column({type: DataType.TEXT})
    ntfr_name: string;
    // 
    @Column({type: DataType.TEXT})
    lifetime_text: string;

    @Column({type: DataType.TEXT})
    lifetime_month: string;

    @Column({type: DataType.TEXT})
    sc_short: string;

    @Column({type: DataType.TEXT})
    sc_text: string;

    @Column({type: DataType.DATE})
    actdate: Date;

    @Column({type: DataType.FLOAT})
    weight: number;

    // dosage_form
    @Column({type: DataType.INTEGER})
    dosage_form_id: number;

    @Column({type: DataType.TEXT})
    dosage_form_full_name: string;
    // 
}
