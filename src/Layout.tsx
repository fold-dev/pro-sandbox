
import {
    App,
    Content,
    DarkModeToggle,
    Flexer,
    Heading,
    LogoSolid,
    Main,
    Navigation,
    NavigationDivider,
    NavigationHeading,
    NavigationItem,
    Notification,
    NotificationContent,
    Resizable,
    Sidebar,
    Text,
    View
} from '@fold-dev/core'
import { useMemo, useState } from 'react'
import { Outlet, useLocation, useNavigate, useParams } from 'react-router-dom'

export const Layout = (props: any) => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const navigate = useNavigate()
    const { pathname } = useLocation()
    const { workspaceId } = useParams()
    const [user, setUser] = useState<any>({})
    const route = useMemo(() => {
        const parts = pathname.split('/')
        return parts[parts.length - 1]
    }, [pathname])

    const handleNavigation = (path: string) => navigate(`/app/${workspaceId}/${path}`)

    return (
        <App>
            <Notification
                variant="highlight"
                display="none">
                <NotificationContent>
                    <Text fontWeight="bold">Connecting...</Text>
                </NotificationContent>
            </Notification>

            <View
                p={0}
                width="100%"
                bg="linear-gradient(45deg, var(--f-color-violet-600), var(--f-color-purple-600))"
            />

            <Content
                height="100%"
                bgToken="background">
                <Sidebar
                    column
                    width="fit-content"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                    height="100%">
                    <Resizable
                        style={{ '--f-resizable-color': 'transparent' }}
                        handle={<></>}
                        width={250}
                        max={450}
                        min={150}
                        height="100%"
                        direction="horizontal">
                        <View
                            row
                            p="1rem"
                            width="100%">
                            <LogoSolid size="sm" />
                            <Flexer />
                            <DarkModeToggle />
                        </View>
                        <Navigation width="100%">
                            <NavigationHeading>Todo List</NavigationHeading>
                            <NavigationItem onClick={() => handleNavigation('todo-default')}>Default</NavigationItem>
                            <NavigationDivider />

                            <NavigationHeading>Kanban List</NavigationHeading>
                            <NavigationItem onClick={() => handleNavigation('kanban-default')}>Default</NavigationItem>
                            <NavigationDivider />

                            <NavigationHeading>Calendar</NavigationHeading>
                            <NavigationItem onClick={() => handleNavigation('calendar-month')}>Month</NavigationItem>
                            <NavigationItem onClick={() => handleNavigation('calendar-custom-days')}>Custom Days</NavigationItem>
                            <NavigationItem onClick={() => handleNavigation('calendar-schdedule')}>Schedule</NavigationItem>
                            <NavigationItem onClick={() => handleNavigation('calendar-schedule-day')}>Schedule Day</NavigationItem>
                            <NavigationItem onClick={() => handleNavigation('calendar-week-view')}>Week View</NavigationItem>
                            <NavigationDivider />

                            <NavigationHeading>Common</NavigationHeading>
                            <NavigationItem onClick={() => handleNavigation('common-user-label-select')}>User & Label Select</NavigationItem>
                            <NavigationItem onClick={() => handleNavigation('common-item-detail')}>Item Detail</NavigationItem>
                            <NavigationDivider />

                            <NavigationItem onClick={() => handleNavigation('calendar')}>Kanban Board</NavigationItem>
                            <NavigationItem onClick={() => handleNavigation('calendar')}>Calendar</NavigationItem>
                            <NavigationItem onClick={() => handleNavigation('calendar')}>Data Grid</NavigationItem>
                            <NavigationItem onClick={() => handleNavigation('calendar')}>CSV Importer</NavigationItem>
                            <NavigationItem onClick={() => handleNavigation('calendar')}>Date & Time</NavigationItem>
                            <NavigationDivider />
                            <NavigationHeading>Common</NavigationHeading>
                            <NavigationItem onClick={() => handleNavigation('calendar')}>User & Label Select</NavigationItem>
                            <NavigationItem>Rich Input</NavigationItem>
                        </Navigation>
                        <Flexer />
                        <View
                            row
                            p={10}
                            gap={5}></View>
                    </Resizable>
                </Sidebar>
                <Main>
                    <View
                        width="calc(100% - 20px)"
                        height="calc(100% - 20px)"
                        position="absolute"
                        className="f-overflow-y-auto"
                        style={{ left: 10, top: 10 }}>
                        <Outlet />
                    </View>
                </Main>
            </Content>
        </App>
    )
}
