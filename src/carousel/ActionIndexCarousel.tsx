import React from 'react';

type ActionButtonProps = {
    onClick: () => void;
    disabled?: boolean;
    children: React.ReactNode;
    ariaLabel?: string;
};

export const ActionButton: React.FC<ActionButtonProps> = ({
    onClick,
    disabled = false,
    children,
    ariaLabel,
}) => (
    <button onClick={onClick} disabled={disabled} aria-label={ariaLabel}>
        {children}
    </button>
);
