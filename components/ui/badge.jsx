// components/ui/badge.jsx
import React from 'react';

import { cn } from "@/lib/utils";

export function Badge({ className, children, ...props }) {
    return (
        <span
            className={cn(
                "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium",
                className
            )}
            {...props}
        >
            {children}
        </span>
    );
}
