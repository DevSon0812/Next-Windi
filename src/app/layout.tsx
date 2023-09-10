import type { Metadata } from 'next';
import { ReactNode } from 'react';

import 'windi.css';
import './global.css';
import Header from '../layout/header/Header';

export const metadata: Metadata = {
    title: 'Son',
    description: 'Create by LB',
};

interface IRootLayoutProps {
    children: ReactNode;
}

export default function RootLayout({ children }: IRootLayoutProps) {
    return (
        <html lang="en">
            <body>
                <Header />
                <main>{children}</main>
            </body>
        </html>
    );
}
