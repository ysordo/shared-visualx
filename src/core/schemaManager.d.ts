interface IRendered {
    data: Record<string,unknown>;
    onChange: (e:{key: string, value: unknown}, ) => void;
    style?: 'futuristic' | 'simple'&undefined;
}

interface ISchemaGenerate extends IRendered {
    element: unknown;
    key?: string
}

interface IDoomRendered {
    Doom({
        data,
        onChange,
        style
    }: IRendered): JSX.Element | null;
}