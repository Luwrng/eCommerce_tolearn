import React, { useState } from 'react';

function Button({ 
    children, 
    onClick, 
    disabled = false,
    type = 'button',
    variant = 'primary',
    size = 'medium',
    fullWidth = false,
    loading = false,
    icon,
    className = '',
    ...props
}) {

    const baseStyles = "inline-flex items-center justify-center font-medium transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed border border-black rounded-[15px]";

    const variants = {
        primary: "bg-transparent text-black focus-visible:ring-black ",
        submit: "bg-gold text-white hover:bg-gold focus-visible:ring-gold border-none",
        danger: "bg-red-600 text-white hover:bg-red-700 focus-visible:ring-red-600",
    };

    const sizes = {
        none: "px-2 py-2",
        small: "px-3 py-1.5 text-sm",
        medium: "px-4 py-2.5 text-base",
        large: "px-8 py-3 text-lg",
    };

    const resolvedVariant = variants[variant] || variants.primary;
    const resolvedSize = sizes[size] || sizes.medium;

    return (
        <button
            onClick={onClick}
            disabled={disabled || loading}
            type={type}
            aria-busy={loading}
            className={`${baseStyles} ${resolvedVariant} ${resolvedSize} ${fullWidth ? "w-full" : ""} ${className}`}
            {...props}
        >
            {icon && <span className="mr-2 inline-flex">{icon}</span>}
            <span>{children}</span>
            {loading && <span className="ml-2">Loading...</span>}
        </button>
    )
}

export default Button;