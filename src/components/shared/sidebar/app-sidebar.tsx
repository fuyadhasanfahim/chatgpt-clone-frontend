'use client';

import * as React from 'react';
import { Plus } from 'lucide-react';

import { NavMain } from '@/components/shared/sidebar/nav-main';
import { NavUser } from '@/components/shared/sidebar/nav-user';
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenuButton,
    SidebarRail,
    useSidebar,
} from '@/components/ui/sidebar';

export default function AppSidebar({
    ...props
}: React.ComponentProps<typeof Sidebar>) {
    const { state } = useSidebar();

    return (
        <Sidebar collapsible="icon" {...props}>
            <SidebarHeader>
                <SidebarMenuButton
                    size="lg"
                    className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground cursor-pointer"
                >
                    <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                        <Plus className="size-4" />
                    </div>
                    <h4 className="text-left text-sm leading-tight truncate font-medium">
                        New Conversation
                    </h4>
                </SidebarMenuButton>
            </SidebarHeader>
            <SidebarContent>
                {state === 'expanded' && <NavMain />}
            </SidebarContent>
            <SidebarFooter>
                <NavUser />
            </SidebarFooter>
            <SidebarRail />
        </Sidebar>
    );
}
