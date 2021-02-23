import { Column, DataType, Table, Model } from "sequelize-typescript";


@Table({
    modelName: 'Complete_Inventory',
    omitNull: true
})
export class CompleteInventory extends Model<CompleteInventory> {

    @Column({type: DataType.INTEGER, primaryKey: true})
    packing_id: number;

    //desc
    @Column({type: DataType.INTEGER, allowNull: true})
    desc_id: number;
    //prep
    @Column({type: DataType.INTEGER, allowNull: true})
    prep_id: number;
    
    //trade_name
    @Column({type: DataType.INTEGER})
    trade_name_id: number;

    @Column({type: DataType.TEXT})
    trade_name_rus: string;

    @Column({type: DataType.TEXT})
    trade_name_html: string;

    @Column({type: DataType.INTEGER})
    lat_name_id: number;
    //dosage_form
    @Column({type: DataType.INTEGER})
    dosage_form_id: number;

    @Column({type: DataType.TEXT})
    dosage_form_full_name: string;

    @Column({type: DataType.TEXT})
    dosage_form_short_name: string;

    @Column({type: DataType.TEXT})
    dose: string;

    @Column({type: DataType.TEXT, allowNull: true})
    dose_amount: string;

    @Column({type: DataType.INTEGER, allowNull: true})
    pack1_id: number;

    @Column({type: DataType.TEXT, allowNull: true})
    pack1sn: string;

    @Column({type: DataType.TEXT, allowNull: true})
    pack1n: string;

    @Column({type: DataType.INTEGER, allowNull: true})
    amount1: number;

    @Column({type: DataType.INTEGER, allowNull: true})
    pack2_id: number;

    @Column({type: DataType.TEXT, allowNull: true})
    pack2sn: string;

    @Column({type: DataType.TEXT, allowNull: true})
    pack2n: string;

    @Column({type: DataType.INTEGER, allowNull: true})
    amount2: number;

    @Column({type: DataType.INTEGER, allowNull: true})
    pack3_id: number;

    @Column({type: DataType.TEXT, allowNull: true})
    pack3sn: string;

    @Column({type: DataType.TEXT, allowNull: true})
    pack3n: string;

    @Column({type: DataType.INTEGER, allowNull: true})
    amount3: number;


    @Column({type: DataType.TEXT})
    prep_short: string;

    @Column({type: DataType.TEXT})
    prep_full: string;

    @Column({type: DataType.TEXT})
    amount: string;

    @Column({type: DataType.TEXT})
    packing_short: string;

    @Column({type: DataType.TEXT})
    packing_full: string;

    @Column({type: DataType.TEXT})
    barcode: number;

    @Column({type: DataType.TEXT})
    firms_id: number;

    @Column({type: DataType.TEXT})
    firms: string;

    //as
    @Column({type: DataType.BIGINT})
    as_id: number;

    @Column({type: DataType.TEXT})
    as_name_rus: string;

    //reg
    @Column({type: DataType.TEXT})
    reg_id: string;

    @Column({type: DataType.TEXT})
    reg_number: string;

    @Column({type: DataType.DATE})
    reg_date: Date;

    @Column({type: DataType.DATE})
    reg_cancel_date: Date;

    //reg_status
    @Column({type: DataType.TEXT})
    reg_status_id: string;

    @Column({type: DataType.TEXT})
    reg_status: string;

    @Column({type: DataType.TEXT})
    registration: string;

    //registrator
    @Column({type: DataType.INTEGER})
    registrator_id: number;

    @Column({type: DataType.TEXT})
    registrator_tran: string;

    @Column({type: DataType.TEXT})
    registrator_orig: string;

    //registrator_country
    @Column({type: DataType.INTEGER})
    registrator_country_id: number;

    @Column({type: DataType.TEXT})
    registrator_country: string;

    //ntfr r
    @Column({type: DataType.INTEGER})
    ntfr_id: number;

    @Column({type: DataType.TEXT})
    ntfr_name: string;
    //ntfr

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

    @Column({type: DataType.FLOAT, allowNull: true})
    weight: number;

    @Column({type: DataType.INTEGER})
    producer_id: number;

    @Column({type: DataType.TEXT})
    producer_tran: string;

    @Column({type: DataType.TEXT})
    producer_orig: string;

    @Column({type: DataType.INTEGER})
    producer_country_id: number;

    @Column({type: DataType.TEXT})
    producer_country: string;

    //???
    @Column({type: DataType.INTEGER, allowNull: true})
    packer_id: number; 
    
    //???
    @Column({type: DataType.TEXT, allowNull: true})
    packer_country_id : number; 

    //???
    @Column({type: DataType.INTEGER, allowNull: true})
    dfc_id: number; 

    //???
    @Column({type: DataType.INTEGER, allowNull: true})
    completeness_id : number; 
    //lt
    @Column({type: DataType.INTEGER})
    lt_id : number;

    @Column({type: DataType.TEXT})
    lt_name : string;

    @Column({type: DataType.FLOAT})
    lt_month : number;

    @Column({type: DataType.INTEGER})
    sc_id : number;

    @Column({type: DataType.TEXT})
    sc_name : string;

    @Column({type: DataType.TEXT})
    sc_short_name : string;

}
