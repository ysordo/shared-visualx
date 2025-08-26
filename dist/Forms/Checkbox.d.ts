import React from 'react';
import '../../styles/globals.css';
interface CheckboxProps {
    name: string;
    label: string;
    checked: boolean;
    styleType?: 'futuristic' | 'simple';
    className?: string;
    onChange: (checked: boolean) => void;
}
export declare const Checkbox: React.FC<CheckboxProps>;
export {};
//# sourceMappingURL=Checkbox.d.ts.map