import type { Metadata } from 'next';
import './globals.css';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import AppSidebar from '@/components/shared/sidebar/app-sidebar';
import MessageInput from '@/components/shared/MessageInput';

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <link
                    href="https://api.fontshare.com/v2/css?f[]=ranade@1&f[]=excon@1&display=swap"
                    rel="stylesheet"
                />
            </head>
            <body className={`antialiased`}>
                <SidebarProvider>
                    <AppSidebar variant="floating" />
                    <main className="w-full py-2 pr-2">
                        <SidebarTrigger />
                        <section className="flex flex-col">
                            {children}
                            <MessageInput />
                        </section>
                    </main>
                </SidebarProvider>
            </body>
        </html>
    );
}
