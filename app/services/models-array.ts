import { AsModel } from "./models/as.model";
import { BriefInventory } from "./models/brief-inventory.model";
import { CompleteInventory } from "./models/complete-brief-inventory.model";
import { DosageFormModel } from "./models/dosage-form.model";
import { FirmsModel } from "./models/frims.model";
import { NtfrModel } from "./models/ntfr.model";
import { PrepMarksModel } from "./models/prep-marks.model";
import { RegStatusModel } from "./models/reg-status.model";
import { RegModel } from "./models/reg.model";

//???
export const AllModels = [
    BriefInventory,
    CompleteInventory,
    PrepMarksModel, 
    AsModel,
    FirmsModel,
    RegModel,
    RegStatusModel,
    NtfrModel,
    RegModel,
    DosageFormModel
]; // Все модели

export const briefInventory = [
    BriefInventory, 
    PrepMarksModel, 
    AsModel, 
    RegModel,
    FirmsModel,
    RegStatusModel,
    NtfrModel,
    RegModel,
    DosageFormModel
]; // Brief Inventory состоит из таблиц Firms, Prep ... ?