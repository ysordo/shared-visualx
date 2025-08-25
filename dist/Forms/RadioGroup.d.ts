import React from 'react';
interface RadioOption {
    value: string;
    label: string;
}
interface RadioGroupProps {
    name: string;
    options: RadioOption[];
    value: string;
    onChange: (value: string) => void;
}
export declare const RadioGroup: React.FC<RadioGroupProps>;
export {};
//# sourceMappingURL=RadioGroup.d.ts.map