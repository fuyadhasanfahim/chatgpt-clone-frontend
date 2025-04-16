'use client';

import * as React from 'react';
import { ArrowLeftFromLine, ArrowRightFromLine, Plus } from 'lucide-react';

import { NavMain } from '@/components/shared/sidebar/nav-main';
import { NavUser } from '@/components/shared/sidebar/nav-user';
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarRail,
    useSidebar,
} from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    const { state, isMobile, toggleSidebar } = useSidebar();

    return (
        <Sidebar collapsible="icon" {...props}>
            <SidebarHeader>
                <Button
                    variant="secondary"
                    size="icon"
                    onClick={() => {
                        toggleSidebar();
                    }}
                >
                    {state === 'collapsed' || isMobile ? (
                        <ArrowRightFromLine />
                    ) : (
                        <ArrowLeftFromLine />
                    )}
                </Button>
                <Button>
                    <Plus />
                    {state !== 'collapsed' && 'New Conversation'}
                </Button>
            </SidebarHeader>
            <SidebarContent>
                {state === 'collapsed' || isMobile ? <></> : <NavMain />}
            </SidebarContent>
            <SidebarFooter>
                <NavUser />
            </SidebarFooter>
            <SidebarRail />
        </Sidebar>
    );
}
