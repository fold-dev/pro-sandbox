
import {
    App,
    Content,
    DarkModeToggle,
    Flexer,
    Header,
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

    const handleNavigation = (path: string) => navigate(`/${path}`)

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
                            width="100%"
                            height="100%"
                            position="absolute"
                            className="f-overflow-y-auto"
                            style={{ inset: 0 }}>
                            <Header
                                row
                                p="1rem"
                                width="100%"
                                position="sticky"
                                bgToken="surface"
                                zIndex={1000}
                                style={{ top: 0 }}>
                                <LogoSolid size="sm" />
                                <Flexer />
                                <DarkModeToggle />
                            </Header>
                            <Navigation width="100%">
                                <NavigationHeading>Calendar</NavigationHeading>
                                <NavigationItem onClick={() => handleNavigation('calendar-month')}>Month</NavigationItem>
                                <NavigationItem onClick={() => handleNavigation('calendar-customdays')}>CustomDays</NavigationItem>
                                <NavigationItem onClick={() => handleNavigation('calendar-schedule')}>Schedule</NavigationItem>
                                <NavigationItem onClick={() => handleNavigation('calendar-scheduleday')}>ScheduleDay</NavigationItem>
                                <NavigationItem onClick={() => handleNavigation('calendar-weekview')}>WeekView</NavigationItem>
                                <NavigationDivider />
                                <NavigationHeading>Common</NavigationHeading>
                                <NavigationItem onClick={() => handleNavigation('common-userandlabelselect')}>UserAndLabelSelect</NavigationItem>
                                <NavigationItem onClick={() => handleNavigation('common-userindicator')}>UserIndicator</NavigationItem>
                                <NavigationItem onClick={() => handleNavigation('common-badgeindicator')}>BadgeIndicator</NavigationItem>
                                <NavigationItem onClick={() => handleNavigation('common-labelindicator')}>LabelIndicator</NavigationItem>
                                <NavigationItem onClick={() => handleNavigation('common-itemdetail')}>ItemDetail</NavigationItem>
                                <NavigationItem onClick={() => handleNavigation('common-richinputfield')}>RichInputField</NavigationItem>
                                <NavigationDivider />
                                <NavigationHeading>CSV Importer</NavigationHeading>
                                <NavigationItem onClick={() => handleNavigation('csv-importer-csvimporterusage')}>CsvimporterUsage</NavigationItem>
                                <NavigationDivider />
                                <NavigationHeading>Data Grid</NavigationHeading>
                                <NavigationItem onClick={() => handleNavigation('data-grid-datagridusage')}>DatagridUsage</NavigationItem>
                                <NavigationItem onClick={() => handleNavigation('data-grid-borderless')}>Borderless</NavigationItem>
                                <NavigationDivider />
                                <NavigationHeading>Date & Time Pickers</NavigationHeading>
                                <NavigationItem onClick={() => handleNavigation('date-picker-datepickerusage')}>DatepickerUsage</NavigationItem>
                                <NavigationItem onClick={() => handleNavigation('date-picker-selectweek')}>SelectWeek</NavigationItem>
                                <NavigationItem onClick={() => handleNavigation('date-picker-monthdisplay')}>MonthDisplay</NavigationItem>
                                <NavigationItem onClick={() => handleNavigation('date-picker-monthandweekdays')}>MonthAndWeekdays</NavigationItem>
                                <NavigationItem onClick={() => handleNavigation('date-picker-monthcustomdayrender')}>MonthCustomDayRender</NavigationItem>
                                <NavigationItem onClick={() => handleNavigation('date-picker-customweekend')}>CustomWeekend</NavigationItem>
                                <NavigationItem onClick={() => handleNavigation('date-picker-monthsdisplay')}>MonthsDisplay</NavigationItem>
                                <NavigationItem onClick={() => handleNavigation('date-picker-yearsdisplay')}>YearsDisplay</NavigationItem>
                                <NavigationItem onClick={() => handleNavigation('date-picker-datecellvariants')}>DateCellVariants</NavigationItem>
                                <NavigationItem onClick={() => handleNavigation('date-picker-time')}>Time</NavigationItem>
                                <NavigationItem onClick={() => handleNavigation('date-picker-multiplemonths')}>MultipleMonths</NavigationItem>
                                <NavigationItem onClick={() => handleNavigation('date-picker-dateinputs')}>DateInputs</NavigationItem>
                                <NavigationItem onClick={() => handleNavigation('date-picker-scrollingpicker')}>ScrollingPicker</NavigationItem>
                                <NavigationItem onClick={() => handleNavigation('date-picker-datetimepicker')}>DateTimePicker</NavigationItem>
                                <NavigationDivider />
                                <NavigationHeading>Kanban Board</NavigationHeading>
                                <NavigationItem onClick={() => handleNavigation('kanban-kanbanusage')}>KanbanUsage</NavigationItem>
                                <NavigationDivider />
                                <NavigationHeading>Todo List</NavigationHeading>
                                <NavigationItem onClick={() => handleNavigation('todo-todousage')}>TodoUsage</NavigationItem>
                                <NavigationDivider />

                            </Navigation>
                        </View>
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
