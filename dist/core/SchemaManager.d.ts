import { type RenderSchema, type TSchema } from './schemaManager.t';
export declare class SchemaManager {
    protected schema: TSchema;
    constructor(schema: TSchema);
    protected Generate({ element, data, onChange, style, key, }: ISchemaGenerate): RenderSchema;
}
export declare class Rendered extends SchemaManager implements IDoomRendered {
    constructor(schema: TSchema);
    Doom({ ...props }: IRendered): RenderSchema;
}
//# sourceMappingURL=SchemaManager.d.ts.map