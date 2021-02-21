import { Model } from "sequelize-typescript"
import { BuildOptions } from "sequelize/types"

export type ModelStatic = typeof Model & {
    new(values?: object, options?: BuildOptions): Model<typeof Model>;
}

export default ModelStatic;