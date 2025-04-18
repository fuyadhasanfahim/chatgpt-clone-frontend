'use client';

import {
    SidebarGroup,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from '@/components/ui/sidebar';
import Link from 'next/link';

export function NavMain() {
    const data = [
        { id: 1, title: 'Getting started with your assistant' },
        { id: 2, title: 'Project planning discussion' },
        { id: 3, title: 'Help with React hooks' },
        { id: 4, title: 'Website design feedback' },
        { id: 5, title: 'Travel recommendations' },
    ];

    return (
        <SidebarGroup>
            <SidebarGroupLabel>Recent</SidebarGroupLabel>
            <SidebarMenu>
                {data.map(({ id, title }, index) => (
                    <SidebarMenuItem key={index}>
                        <SidebarMenuButton>
                            <Link href={`/${id}`}>
                                <span className="truncate whitespace-nowrap overflow-hidden block max-w-full">
                                    {title}
                                </span>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                ))}
            </SidebarMenu>
        </SidebarGroup>
    );
}
