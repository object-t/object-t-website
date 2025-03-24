import type { p } from 'node_modules/@react-router/dev/dist/routes-DHIOx0R9';
import React from 'react';
import './HomeLink.css';

export interface HomeLinkProps {
    label: string;
}

export const HomeLink = ({
    label,
    ...props
}: HomeLinkProps) => {
    return (
        <a {...props}>
            <span className="label">{label}</span>
        </a>
    );
}