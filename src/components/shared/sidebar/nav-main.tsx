'use client';

import { Separator } from '@/components/ui/separator';
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
                    <SidebarMenuButton tooltip={'Nothing'}>
                        Nothing
                    </SidebarMenuButton>
                </SidebarMenuItem>
            </SidebarMenu>
            <Separator className="my-4" />
            <SidebarGroupLabel>All Conversations</SidebarGroupLabel>
            <SidebarMenu>
                <SidebarMenuItem>
                    <SidebarMenuButton tooltip={'Nothing'}>
                        Nothing
                    </SidebarMenuButton>
                </SidebarMenuItem>
            </SidebarMenu>
        </SidebarGroup>
    );
}
