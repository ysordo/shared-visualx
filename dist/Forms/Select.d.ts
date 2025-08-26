import React from 'react';
interface SelectProps {
    name: string;
    label: string;
    options: {
        value: string;
        text: string;
    }[];
    value: string;
    onChange: (value: string) => void;
}
export declare const Select: React.FC<SelectProps>;
export {};
//# sourceMappingURL=Select.d.ts.map