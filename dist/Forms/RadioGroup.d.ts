import React from 'react';
import '../../styles/globals.css';
interface RadioOption {
    value: string;
    label: string;
}
interface RadioGroupProps {
    options: RadioOption[];
    value: string;
    styleType?: 'futuristic' | 'simple';
    className?: string;
    onChange: (value: string) => void;
}
export declare const RadioGroup: React.FC<RadioGroupProps>;
export {};
//# sourceMappingURL=RadioGroup.d.ts.map