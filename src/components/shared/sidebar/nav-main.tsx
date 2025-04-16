'use client';

import {
    SidebarGroup,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from '@/components/ui/sidebar';

export function NavMain() {
    return (
        <SidebarGroup>
            <SidebarGroupLabel>Recent</SidebarGroupLabel>
            <SidebarMenu>
                <SidebarMenuItem>
                    {Array.from({ length: 100 }).map((_, idx: number) => (
                        <SidebarMenuButton
                            key={idx}
                            tooltip={`Item ${idx + 1}`}
                        >
                            Item {idx + 1}
                        </SidebarMenuButton>
                    ))}
                </SidebarMenuItem>
            </SidebarMenu>
        </SidebarGroup>
    );
}
