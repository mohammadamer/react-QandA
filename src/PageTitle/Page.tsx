import React from 'react';
import { PageTitle } from './PageTitle';

interface Props {
    title?: string;
    children: React.ReactNode;
}

export const Page = ({ title, children }: Props) => (
    <main className="page-shell">
        {title && <PageTitle>{title}</PageTitle>}
        {children}
    </main>
);

// Impotant
// So, the children prop allows a consumer to render custom content within the
// component. This gives the component flexibility and makes it highly reusable.