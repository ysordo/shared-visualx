import '../../styles/globals.css';
interface InputProps {
    type: 'text' | 'date' | 'email' | 'file' | 'number' | 'password' | 'phone';
    name: string;
    label: string;
    value?: string | number;
    onChange?: (value: string | number | File | null) => void;
    placeholder?: string;
    className?: string;
    styleType?: 'futuristic' | 'simple';
}
export declare const Input: React.FC<InputProps>;
export {};
//# sourceMappingURL=Input.d.ts.map