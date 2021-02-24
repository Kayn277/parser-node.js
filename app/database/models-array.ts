import { AsModel } from "../parse/models/as.model";
import { BriefInventory } from "../parse/brief_inventory/models/brief-inventory.model";
import { CompleteInventory } from "../parse/complete_inventory/models/complete-brief-inventory.model";
import { DosageFormModel } from "../parse/models/dosage-form.model";
import { FirmsModel } from "../parse/models/frims.model";
import { NtfrModel } from "../parse/models/ntfr.model";
import { PrepMarksModel } from "../parse/prep_makrs/models/prep-marks.model";
import { RegStatusModel } from "../parse/models/reg-status.model";
import { RegModel } from "../parse/models/reg.model";
import { PrepModel } from "../parse/prep/models/prep.model";

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
    DosageFormModel,
    PrepModel
]; // Все модели
