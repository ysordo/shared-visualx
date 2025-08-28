import type { FormProps } from './core/form';

export const Form: React.FC<FormProps> = ({onSubmit, className,...props}) => {
    return (<form onSubmit={()=>onSubmit} className={`flex flex-col gap-4 p-4 ${className ?? ''}`} {...props} />);
};