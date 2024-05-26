import * as data from '@/dummy_data'
import { sections } from '@/dummy_data'
import {
    Badge,
    Button,
    Card,
    FIX,
    Flexer,
    Form,
    Heading,
    Icon,
    IconLib,
    Input,
    InputControl,
    InputSuffix,
    Link,
    Menu,
    MenuProvider,
    MenuSection,
    Modal,
    Popover,
    Portal,
    Stack,
    Text,
    View,
    generateUEID,
    pad,
    useVisibility,
} from '@fold-dev/core'
import * as Token from '@fold-dev/design/tokens'
import {
    Badges, CalendarMonth, CalendarProvider, CalendarSchedule, CsvImporter, DataGrid,
    DataGridHeader,
    DataGridTypes, DateCell,
    DatePicker,
    DatePickerMonth, DatePickerWeekdays, DateRangeProvider, Detail, Kanban,
    KanbanColumnMenu,
    KanbanSelection,
    KanbanSwimlaneMenu,
    KanbanTypes,
    LabelMenu, LabelSelect, Labels, MonthPicker, Popup, RichInput, ScrollingDatePicker,
    TimePicker, Todo, TodoSectionMenu, UserMenu, UserSelect, Users, YearPicker, dataGridState,
    dispatchDataGridEvent, dispatchTodoEvent, getShortDateFormat, kanbanState, processHTML, setExperimentalGlobalRowCellComponents, todoState, useScrollingDatePicker
} from '@fold-pro/react'
import { useLayoutEffect, useMemo, useRef, useState } from 'react'


export const Month = () => {
    const date = useMemo(() => data.date, [])
    const [events, setEvents] = useState(data.events)
    const [event, setEvent] = useState<any>({})
    const [title, setTitle] = useState('')

    const handleEventUpdate = (ev) => {
        setEvents(events.map((event) => (event.id == ev.id ? { ...event, ...ev } : event)))
    }

    const handleEventDelete = (ev) => {
        setEvents(events.filter((event) => event.id != ev.id))
    }

    const handleEventOpen = (event) => {
        setEvent(event)
    }

    const getMenu = ({ data: { target, payload }, dismiss }) => {
        return (
            <Popup
                colorPalette={data.colorPalette}
                item={{ ...payload }}
                onCancel={dismiss}
                onSave={(event) => {
                    dismiss()
                    handleEventUpdate({ ...payload, ...event })
                }}
                onView={() => {
                    dismiss()
                    setEvent(payload)
                }}
                onDelete={() => {
                    dismiss()
                    handleEventDelete(payload)
                }}
            />
        )
    }

    return (
        <>
            {!!event.id && (
                <Detail
                    colorPalette={data.colorPalette}
                    availableLabels={data.availableLabels}
                    availableUsers={data.availableUsers}
                    item={event}
                    onCancel={() => setEvent({})}
                    onSave={(event) => {
                        handleEventUpdate(event)
                        setEvent({})
                    }}
                    onDelete={(event) => {
                        handleEventDelete(event)
                        setEvent({})
                    }}
                />
            )}

            <MenuProvider menu={getMenu}>
                <CalendarProvider
                    onEventOpen={handleEventOpen}
                    onEventUpdate={handleEventUpdate}
                    onEventAdd={({ done, event }) => {
                        return (
                            <Modal
                                portal={Portal}
                                isVisible={true}
                                onDismiss={done}
                                header={<Heading as="h3">Create New Event</Heading>}
                                footer={
                                    <View
                                        row
                                        width="100%">
                                        <Button onClick={done}>Cancel</Button>
                                        <Flexer />
                                        <Button
                                            onClick={() => {
                                                setEvents([...events, { ...event, title, id: generateUEID() }])
                                                done()
                                            }}
                                            variant="accent"
                                            outline>
                                            Save
                                        </Button>
                                    </View>
                                }>
                                <Form
                                    column
                                    gap="1rem"
                                    onSubmit={() => {
                                        setEvents([...events, { ...event, title, id: generateUEID() }])
                                        done()
                                    }}
                                    width="100%">
                                    <Input
                                        autoFocus
                                        size="lg"
                                        placeholder="Enter event name"
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                    />
                                </Form>
                            </Modal>
                        )
                    }}>
                    <CalendarMonth
                        date={date}
                        events={events}
                    />
                </CalendarProvider>
            </MenuProvider>
        </>
    )
}






export const CustomDays = () => {
    const date = useMemo(() => data.date, [])
    const [events, setEvents] = useState(data.events)
    const [event, setEvent] = useState<any>({})
    const [custom, setCustom] = useState(data.custom)
    const [title, setTitle] = useState('')

    const handleEventUpdate = (ev) => {
        setEvents(events.map((event) => (event.id == ev.id ? { ...event, ...ev } : event)))
    }

    const handleEventDelete = (ev) => {
        setEvents(events.filter((event) => event.id != ev.id))
    }

    const handleEventOpen = (event) => {
        setEvent(event)
    }

    const getMenu = ({ data: { target, payload }, dismiss }) => {
        return (
            <Popup
                colorPalette={data.colorPalette}
                item={{ ...payload }}
                onCancel={dismiss}
                onSave={(event) => {
                    dismiss()
                    handleEventUpdate({ ...payload, ...event })
                }}
                onView={() => {
                    dismiss()
                    setEvent(payload)
                }}
                onDelete={() => {
                    dismiss()
                    handleEventDelete(payload)
                }}
            />
        )
    }

    return (
        <>
            {!!event.id && (
                <Detail
                    colorPalette={data.colorPalette}
                    availableLabels={data.availableLabels}
                    availableUsers={data.availableUsers}
                    item={event}
                    onCancel={() => setEvent({})}
                    onSave={(event) => {
                        handleEventUpdate(event)
                        setEvent({})
                    }}
                    onDelete={(event) => {
                        handleEventDelete(event)
                        setEvent({})
                    }}
                />
            )}

            <MenuProvider menu={getMenu}>
                <CalendarProvider
                    onEventOpen={handleEventOpen}
                    onEventUpdate={handleEventUpdate}
                    onEventAdd={({ done, event }) => {
                        return (
                            <Modal
                                portal={Portal}
                                isVisible={true}
                                onDismiss={done}
                                header={<Heading as="h3">Create New Event</Heading>}
                                footer={
                                    <View
                                        row
                                        width="100%">
                                        <Button onClick={done}>Cancel</Button>
                                        <Flexer />
                                        <Button
                                            onClick={() => {
                                                setEvents([...events, { ...event, title, id: generateUEID() }])
                                                done()
                                            }}
                                            variant="accent"
                                            outline>
                                            Save
                                        </Button>
                                    </View>
                                }>
                                <Form
                                    column
                                    gap="1rem"
                                    onSubmit={() => {
                                        setEvents([...events, { ...event, title, id: generateUEID() }])
                                        done()
                                    }}
                                    width="100%">
                                    <Input
                                        autoFocus
                                        size="lg"
                                        placeholder="Enter event name"
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                    />
                                </Form>
                            </Modal>
                        )
                    }}>
                    <CalendarMonth
                        noClamp
                        date={date}
                        events={events}
                        custom={custom}
                        height={300}
                    />
                </CalendarProvider>
            </MenuProvider>
        </>
    )
}






export const Schedule = () => {
    const [days, setDays] = useState(data.days)
    const [events, setEvents] = useState(data.events)
    const [event, setEvent] = useState<any>({})
    const [title, setTitle] = useState('')

    const handleEventUpdate = (ev) => {
        setEvents(events.map((event) => (event.id == ev.id ? { ...event, ...ev } : event)))
    }

    const handleEventDelete = (ev) => {
        setEvents(events.filter((event) => event.id != ev.id))
    }

    const handleEventOpen = (event) => {
        setEvent(event)
    }

    const getMenu = ({ data: { target, payload }, dismiss }) => {
        return (
            <Popup
                colorPalette={data.colorPalette}
                item={{ ...payload }}
                onCancel={dismiss}
                onSave={(event) => {
                    dismiss()
                    handleEventUpdate({ ...payload, ...event })
                }}
                onView={() => {
                    dismiss()
                    setEvent(payload)
                }}
                onDelete={() => {
                    dismiss()
                    handleEventDelete(payload)
                }}
            />
        )
    }

    return (
        <>
            {!!event.id && (
                <Detail
                    colorPalette={data.colorPalette}
                    availableLabels={data.availableLabels}
                    availableUsers={data.availableUsers}
                    item={event}
                    onCancel={() => setEvent({})}
                    onSave={(event) => {
                        handleEventUpdate(event)
                        setEvent({})
                    }}
                    onDelete={(event) => {
                        handleEventDelete(event)
                        setEvent({})
                    }}
                />
            )}

            <MenuProvider menu={getMenu}>
                <CalendarProvider
                    dimPastEvents={false}
                    hideDateLabels={true}
                    scheduleEvent={undefined}
                    monthEvent={undefined}
                    onEventOpen={handleEventOpen}
                    onEventUpdate={handleEventUpdate}
                    onEventAdd={({ done, event }) => {
                        return (
                            <Modal
                                portal={Portal}
                                isVisible={true}
                                onDismiss={done}
                                header={<Heading as="h3">Create New Event</Heading>}
                                footer={
                                    <View
                                        row
                                        width="100%">
                                        <Button onClick={done}>Cancel</Button>
                                        <Flexer />
                                        <Button
                                            onClick={() => {
                                                setEvents([...events, { ...event, title, id: generateUEID() }])
                                                done()
                                            }}
                                            variant="accent"
                                            outline>
                                            Save
                                        </Button>
                                    </View>
                                }>
                                <Form
                                    column
                                    gap="1rem"
                                    onSubmit={() => {
                                        setEvents([...events, { ...event, title, id: generateUEID() }])
                                        done()
                                    }}
                                    width="100%">
                                    <Input
                                        autoFocus
                                        size="lg"
                                        placeholder="Enter event name"
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                    />
                                </Form>
                            </Modal>
                        )
                    }}>
                    <CalendarSchedule
                        days={days}
                        events={events.filter((e) => !e.allDay)}
                    />
                </CalendarProvider>
            </MenuProvider>
        </>
    )
}






export const ScheduleDay = () => {
    const [days, setDays] = useState([data.days[2]])
    const [events, setEvents] = useState(data.events)
    const [event, setEvent] = useState<any>({})
    const [title, setTitle] = useState('')

    const handleEventUpdate = (ev) => {
        setEvents(events.map((event) => (event.id == ev.id ? { ...event, ...ev } : event)))
    }

    const handleEventDelete = (ev) => {
        setEvents(events.filter((event) => event.id != ev.id))
    }

    const handleEventOpen = (event) => {
        setEvent(event)
    }

    const getMenu = ({ data: { target, payload }, dismiss }) => {
        return (
            <Popup
                colorPalette={data.colorPalette}
                item={{ ...payload }}
                onCancel={dismiss}
                onSave={(event) => {
                    dismiss()
                    handleEventUpdate({ ...payload, ...event })
                }}
                onView={() => {
                    dismiss()
                    setEvent(payload)
                }}
                onDelete={() => {
                    dismiss()
                    handleEventDelete(payload)
                }}
            />
        )
    }

    return (
        <>
            {!!event.id && (
                <Detail
                    colorPalette={data.colorPalette}
                    availableLabels={data.availableLabels}
                    availableUsers={data.availableUsers}
                    item={event}
                    onCancel={() => setEvent({})}
                    onSave={(event) => {
                        handleEventUpdate(event)
                        setEvent({})
                    }}
                    onDelete={(event) => {
                        handleEventDelete(event)
                        setEvent({})
                    }}
                />
            )}

            <MenuProvider menu={getMenu}>
                <CalendarProvider
                    dimPastEvents={false}
                    hideDateLabels={true}
                    scheduleEvent={undefined}
                    monthEvent={undefined}
                    onEventOpen={handleEventOpen}
                    onEventUpdate={handleEventUpdate}
                    onEventAdd={({ done, event }) => {
                        return (
                            <Modal
                                portal={Portal}
                                isVisible={true}
                                onDismiss={done}
                                header={<Heading as="h3">Create New Event</Heading>}
                                footer={
                                    <View
                                        row
                                        width="100%">
                                        <Button onClick={done}>Cancel</Button>
                                        <Flexer />
                                        <Button
                                            onClick={() => {
                                                setEvents([...events, { ...event, title, id: generateUEID() }])
                                                done()
                                            }}
                                            variant="accent"
                                            outline>
                                            Save
                                        </Button>
                                    </View>
                                }>
                                <Form
                                    column
                                    gap="1rem"
                                    onSubmit={() => {
                                        setEvents([...events, { ...event, title, id: generateUEID() }])
                                        done()
                                    }}
                                    width="100%">
                                    <Input
                                        autoFocus
                                        size="lg"
                                        placeholder="Enter event name"
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                    />
                                </Form>
                            </Modal>
                        )
                    }}>
                    <CalendarSchedule
                        days={days}
                        events={events.filter((e) => !e.allDay)}
                        width="80%"
                    />
                </CalendarProvider>
            </MenuProvider>
        </>
    )
}






export const WeekView = () => {
    const [days, setDays] = useState(data.days)
    const [custom, setCustom] = useState(data.custom)
    const [date, setDate] = useState(data.date)
    const [events, setEvents] = useState(data.events)
    const [event, setEvent] = useState<any>({})
    const [title, setTitle] = useState('')

    const handleEventUpdate = (ev) => {
        setEvents(events.map((event) => (event.id == ev.id ? { ...event, ...ev } : event)))
    }

    const handleEventDelete = (ev) => {
        setEvents(events.filter((event) => event.id != ev.id))
    }

    const handleEventOpen = (event) => {
        setEvent(event)
    }

    const getMenu = ({ data: { target, payload }, dismiss }) => {
        return (
            <Popup
                colorPalette={data.colorPalette}
                item={{ ...payload }}
                onCancel={dismiss}
                onSave={(event) => {
                    dismiss()
                    handleEventUpdate({ ...payload, ...event })
                }}
                onView={() => {
                    dismiss()
                    setEvent(payload)
                }}
                onDelete={() => {
                    dismiss()
                    handleEventDelete(payload)
                }}
            />
        )
    }

    return (
        <>
            {!!event.id && (
                <Detail
                    colorPalette={data.colorPalette}
                    availableLabels={data.availableLabels}
                    availableUsers={data.availableUsers}
                    item={event}
                    onCancel={() => setEvent({})}
                    onSave={(event) => {
                        handleEventUpdate(event)
                        setEvent({})
                    }}
                    onDelete={(event) => {
                        handleEventDelete(event)
                        setEvent({})
                    }}
                />
            )}

            <MenuProvider menu={getMenu}>
                <CalendarProvider
                    dimPastEvents={false}
                    hideDateLabels={true}
                    scheduleEvent={undefined}
                    monthEvent={undefined}
                    onEventOpen={handleEventOpen}
                    onEventUpdate={handleEventUpdate}
                    onEventAdd={({ done, event }) => {
                        return (
                            <Modal
                                portal={Portal}
                                isVisible={true}
                                onDismiss={done}
                                header={<Heading as="h3">Create New Event</Heading>}
                                footer={
                                    <View
                                        row
                                        width="100%">
                                        <Button onClick={done}>Cancel</Button>
                                        <Flexer />
                                        <Button
                                            onClick={() => {
                                                setEvents([...events, { ...event, title, id: generateUEID() }])
                                                done()
                                            }}
                                            variant="accent"
                                            outline>
                                            Save
                                        </Button>
                                    </View>
                                }>
                                <Form
                                    column
                                    gap="1rem"
                                    onSubmit={() => {
                                        setEvents([...events, { ...event, title, id: generateUEID() }])
                                        done()
                                    }}
                                    width="100%">
                                    <Input
                                        autoFocus
                                        size="lg"
                                        placeholder="Enter event name"
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                    />
                                </Form>
                            </Modal>
                        )
                    }}>
                    <View
                        row
                        p="0 0 0 var(--f-calendar-schedule-gutter-width)"
                        width="100%">
                        {days.map(({ date }, index) => {
                            return (
                                <Text
                                    flex={1}
                                    p="1rem"
                                    fontWeight="bold"
                                    textAlign="center"
                                    key={index}>
                                    {getShortDateFormat(date)}
                                </Text>
                            )
                        })}
                    </View>
                    <View
                        p="0 0 0 var(--f-calendar-schedule-gutter-width)"
                        width="100%">
                        <CalendarMonth
                            noClamp
                            date={date}
                            events={events.filter((e) => e.allDay)}
                            custom={custom}
                            height="fit-content"
                        />
                    </View>
                    <View
                        width="100%"
                        flex={1}>
                        <CalendarSchedule
                            days={days}
                            events={events.filter((e) => !e.allDay)}
                        />
                    </View>
                </CalendarProvider>
            </MenuProvider>
        </>
    )
}



export const UserAndLabelSelect = () => {
    return (
        <View
            row
            gap={10}
            alignItems="flex-start"
            justifyContent="flex-start">
            <View width={300}>
                <LabelSelect
                    width={300}
                    labels={data.selectedLabels}
                    availableLabels={data.labels}
                    inputPlaceholder="Add label..."
                    onLabelAdd={(label) => console.log('label add', label)}
                    onLabelDelete={(label) => console.log('label delete', label)}
                    onFilter={(value) => console.log('search ', value)}
                />
            </View>
            <View width={300}>
                <UserSelect
                    width={300}
                    users={data.selectedUsers}
                    availableUsers={data.users}
                    inputPlaceholder="Add user..."
                    onUserAdd={(user) => console.log('user add', user)}
                    onUserDelete={(user) => console.log('user delete', user)}
                    onFilter={(value) => console.log('search ', value)}
                />
            </View>
        </View>
    )
}






export const UserIndicator = () => {
    return (
        <View
            row
            gap="1rem">
            <Users
                onClick={() => console.log('badge clicked!')}
                users={[
                    { id: 'u1', name: 'John', image: '/men/01.jpg' },
                    { id: 'u2', name: 'Ben', image: '/men/02.jpg' },
                    { id: 'u8', name: 'Peter' },
                ]}
            />
        </View>
    )
}






export const BadgeIndicator = () => {
    return (
        <View
            row
            gap="1rem">
            <Badges
                onClick={() => console.log('badge clicked!')}
                badges={[
                    { icon: 'check-circle', label: '3 / 5' },
                    { icon: 'warning', label: 'Warning', color: Token.ColorNeonpink400 },
                    { progress: 73, color: Token.ColorTeal400 },
                ]}
            />
        </View>
    )
}






export const LabelIndicator = () => {
    return (
        <View
            row
            gap="1rem">
            <Labels
                onClick={() => console.log('badge clicked!')}
                labels={[
                    { id: 1, icon: 'check-circle', text: 'Task' },
                    { id: 1, icon: 'warning', text: 'Warning', color: Token.ColorNeonpink400 },
                ]}
            />
        </View>
    )
}






export const ItemDetail = () => {
    const [task, setTask] = useState<any>({})
    const isVisible = !!task.id

    

    return (
        <View>
            <Button onClick={() => setTask(sections[0].tasks[0])}>Open Detail Modal</Button>

            {isVisible && (
                <Detail
                    colorPalette={data.colorPalette}
                    availableLabels={data.availableLabels}
                    availableUsers={data.availableUsers}
                    item={{ ...task }}
                    onCancel={() => setTask({})}
                    onSave={(task) => console.log('Save', task)}
                    onDelete={(task) => console.log('Delete', task)}
                />
            )}
        </View>
    )
}






export const RichInputField = () => {
    const [options, setOptions] = useState<any>([])

    const handleSave = (html) => {
        if (html.trim() != '') {
            const { labels, users, title, date } = processHTML(html)
        }
    }

    const handleTrigger = (word) => {
        switch (word.trim()) {
            case '@':
                setOptions([
                    { id: 'uuid1', name: '@John', type: 'user' },
                    { id: 'uuid2', name: '@Ben', type: 'user' },
                    { id: 'uuid3', name: '@Derek', type: 'user' },
                    { id: 'uuid4', name: '@Craig', type: 'user' },
                    { id: 'uuid5', name: '@Timothy', type: 'user' },
                    { id: 'uuid6', name: '@Byron', type: 'user' },
                    { id: 'uuid7', name: '@Andrew', type: 'user' },
                    { id: 'uuid8', name: '@Peter', type: 'user' },
                ])
                break
            case '#':
                setOptions([
                    { id: 'uuid1', name: '#Sales', type: 'label' },
                    { id: 'uuid2', name: '#Marketing', type: 'label' },
                    { id: 'uuid3', name: '#DevOps', type: 'label' },
                    { id: 'uuid4', name: '#Engineering', type: 'label' },
                    { id: 'uuid5', name: '#Product', type: 'label' },
                ])
                break
        }
    }

    const handleWord = (word, cb, always = false) => {
        if (word.includes('date:')) {
            cb({
                phrase: word.trim(),
                type: 'date',
                value: word.split(':')[1].trim(),
            })
        } else {
            if (always) cb(null)
        }
    }

    return (
        <View width={400}>
            <RichInput
                dontClearOnSubmit
                autoFocus
                defaultValue='Research target audience <span class="f-rich-input-entity" contenteditable="false" tabindex="1" data-value="uuid1" data-type="user">@John</span>'
                placeholder="Task title"
                triggers={['@']}
                options={options}
                onTrigger={handleTrigger}
                onWord={handleWord}
                onEnter={handleSave}
                onCancel={() => null}
                onBlur={handleSave}
                onIndent={() => null}
                onOutdent={() => null}
                onUp={() => null}
                onDown={() => null}
            />
        </View>
    )
}


export const CsvimporterUsage = () => {
    return (
        <CsvImporter
            step={1}
            separator=","
            onComplete={(data) => console.log('data', data)}
            csvData={data.csv}
            defaultRecords={data.records}
            defaultHeader={data.headers}
            defaultMapping={data.mapping}
            schema={[
                { key: 'customer-id', label: 'Customer ID', type: 'string' },
                { key: 'first-name', label: 'First Name', type: 'string' },
                { key: 'last-name', label: 'Last Name', type: 'string' },
                { key: 'company', label: 'Company', type: 'string' },
                { key: 'website', label: 'Website', type: 'string' },
                {
                    key: 'email',
                    label: 'Email',
                    type: 'string',
                    validate: ({ value }) => {
                        const valid = String(value)
                            .toLowerCase()
                            .match(
                                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                            )

                        if (valid) {
                            return []
                        } else {
                            return ['Not a valid email address']
                        }
                    },
                },
                {
                    key: 'subscription-date',
                    label: 'Subscription Date',
                    type: 'date',
                    transform: ({ value }) => {
                        return new Date(value).toLocaleDateString('en-US', {
                            weekday: 'short',
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                        })
                    },
                },
            ]}
            toolbar={
                <View
                    row
                    gap={5}
                    justifyContent="flex-start">
                    <Link
                        href="https://drive.google.com/uc?id=1x2IdSNcHGLmot9i1h90gwMJr5lULC2QV&export=download"
                        target="_blank">
                        Download CSV file ↗
                    </Link>
                </View>
            }
        />
    )
}


export const DatagridUsage = () => {
    const [columnWidths, setColumnWidths] = useState(data.widths)
    const [columns, setColumns] = useState<DataGridTypes.Column[]>(data.columns)
    const [footerColumns, setFooterColumns] = useState<DataGridTypes.Column[]>(data.footer)
    const [rows, setRows] = useState<DataGridTypes.Cell[][]>(data.rows)

    const handleColumnMove = ({ origin, target }) => {
        dataGridState({
            columnWidths,
            setColumnWidths,
            columns,
            setColumns,
            footerColumns,
            setFooterColumns,
            rows,
            setRows,
        }).handleColumnMove({ origin, target })
    }

    const handleRowMove = ({ origin, target }) => {
        dataGridState({
            columnWidths,
            setColumnWidths,
            columns,
            setColumns,
            footerColumns,
            setFooterColumns,
            rows,
            setRows,
        }).handleRowMove({ origin, target })
    }

    const handleColumnClick = (index, column: DataGridTypes.Column) => {
        dataGridState({
            columnWidths,
            setColumnWidths,
            columns,
            setColumns,
            footerColumns,
            setFooterColumns,
            rows,
            setRows,
        }).handleColumnClick(index, column)
    }

    const handleCellUpdate = ({ value, row, col }) => {
        dataGridState({
            columnWidths,
            setColumnWidths,
            columns,
            setColumns,
            footerColumns,
            setFooterColumns,
            rows,
            setRows,
        }).handleCellUpdate({ value, row, col })
    }

    const handleCellDelete = ({ row, col }) => {
        dataGridState({
            columnWidths,
            setColumnWidths,
            columns,
            setColumns,
            footerColumns,
            setFooterColumns,
            rows,
            setRows,
        }).handleCellDelete({ row, col })
    }

    useLayoutEffect(() => {
        
        
        
        
        
        
        setExperimentalGlobalRowCellComponents(data._rowCellComponents)
    }, [])

    return (
        <MenuProvider
            menu={({ data: { target, payload }, dismiss }) => (
                <Menu>
                    <MenuSection>Menu for: {target}</MenuSection>
                </Menu>
            )}>
            <div style={{ '--f-data-grid-gutter-width': '0rem' } as any}>
                <DataGrid
                    id="instance-1"
                    
                    defaultCellSelection={{}}
                    defaultRowSelection={{}}
                    draggableColumns
                    draggableRows
                    maxRowsSelectable={undefined}
                    singleRowSelect={false}
                    onSelect={({ rows, cols }: any) => null}
                    
                    
                    
                    variant="virtual"
                    virtual={{
                        rows: 10,
                        rowHeight: 40,
                        paddingTop: 40,
                        paddingBottom: 30,
                    }}
                    hideCheckbox={false}
                    hideGutter={true}
                    rows={rows}
                    columnWidths={columnWidths}
                    header={
                        <DataGridHeader
                            resizableColumns
                            columns={columns}
                            onColumnClick={handleColumnClick}
                            onWidthChange={(index, width) =>
                                setColumnWidths(columnWidths.map((w, i) => (i == index ? width : w)))
                            }
                        />
                    }
                    footer={
                        <DataGridHeader
                            hideCheckbox
                            component={data.FooterCell}
                            columns={footerColumns}
                            style={{
                                '--f-data-grid-cell-height': '30px',
                                'bottom': 0,
                            }}
                        />
                    }
                    pinFirst
                    
                    onCellUpdate={handleCellUpdate}
                    onCellDelete={handleCellDelete}
                    onColumnMove={handleColumnMove}
                    onRowMove={handleRowMove}
                    toolbar={({ rowSelection, cellSelection }) => (
                        <View
                            row
                            position="absolute"
                            bgToken="surface-inverse"
                            colorToken="text-on-color"
                            p="1rem 2rem"
                            radius="var(--f-radius)"
                            shadow="var(--f-shadow-xl)"
                            zIndex={1000}
                            gap={10}
                            display={
                                !Object.values(rowSelection).length && Object.values(cellSelection).length < 2
                                    ? 'none'
                                    : 'flex'
                            }
                            style={{ bottom: 10, left: '50%', transform: 'translateX(-50%)' }}>
                            <Text color="inherit">
                                {Object.values(rowSelection).length} rows, &nbsp;
                                {Object.values(cellSelection).length} cells
                            </Text>
                            <Icon
                                icon={FIX}
                                className="f-buttonize"
                                onClick={() => {
                                    dispatchDataGridEvent('select-cells', { instanceId: 'instance-1' })
                                    dispatchDataGridEvent('select-rows', { instanceId: 'instance-1' })
                                }}
                            />
                        </View>
                    )}
                />
            </div>
        </MenuProvider>
    )
}






export const Borderless = () => {
    const [columnWidths, setColumnWidths] = useState(data.widths)
    const [columns, setColumns] = useState<DataGridTypes.Column[]>(data.columns)
    const [footerColumns, setFooterColumns] = useState<DataGridTypes.Column[]>(data.footer)
    const [rows, setRows] = useState<DataGridTypes.Cell[][]>(data.rows)

    const handleColumnMove = ({ origin, target }) => {
        dataGridState({
            columnWidths,
            setColumnWidths,
            columns,
            setColumns,
            footerColumns,
            setFooterColumns,
            rows,
            setRows,
        }).handleColumnMove({ origin, target })
    }

    const handleRowMove = ({ origin, target }) => {
        dataGridState({
            columnWidths,
            setColumnWidths,
            columns,
            setColumns,
            footerColumns,
            setFooterColumns,
            rows,
            setRows,
        }).handleRowMove({ origin, target })
    }

    const handleColumnClick = (index, column: DataGridTypes.Column) => {
        dataGridState({
            columnWidths,
            setColumnWidths,
            columns,
            setColumns,
            footerColumns,
            setFooterColumns,
            rows,
            setRows,
        }).handleColumnClick(index, column)
    }

    const handleCellUpdate = ({ value, row, col }) => {
        dataGridState({
            columnWidths,
            setColumnWidths,
            columns,
            setColumns,
            footerColumns,
            setFooterColumns,
            rows,
            setRows,
        }).handleCellUpdate({ value, row, col })
    }

    const handleCellDelete = ({ row, col }) => {
        dataGridState({
            columnWidths,
            setColumnWidths,
            columns,
            setColumns,
            footerColumns,
            setFooterColumns,
            rows,
            setRows,
        }).handleCellDelete({ row, col })
    }

    useLayoutEffect(() => {
        
        
        
        
        
        
        setExperimentalGlobalRowCellComponents(data._rowCellComponents)
    }, [])

    return (
        <MenuProvider
            menu={({ data: { target, payload }, dismiss }) => (
                <Menu>
                    <MenuSection>Menu for: {target}</MenuSection>
                </Menu>
            )}>
            <div
                style={
                    {
                        '--f-data-grid-row-padding-left': '3rem',
                        '--f-data-grid-row-padding-right': '3px',
                    } as any
                }>
                <DataGrid
                    border="0"
                    id="instance-1"
                    
                    defaultCellSelection={{}}
                    defaultRowSelection={{}}
                    draggableColumns
                    draggableRows
                    maxRowsSelectable={undefined}
                    singleRowSelect={false}
                    onSelect={({ rows, cols }: any) => null}
                    
                    
                    
                    variant="virtual"
                    virtual={{
                        rows: 10,
                        rowHeight: 40,
                        paddingTop: 40,
                        paddingBottom: 30,
                    }}
                    hideCheckbox={false}
                    hideGutter={false}
                    rows={rows}
                    columnWidths={columnWidths}
                    header={
                        <DataGridHeader
                            resizableColumns
                            columns={columns}
                            onColumnClick={handleColumnClick}
                            onWidthChange={(index, width) =>
                                setColumnWidths(columnWidths.map((w, i) => (i == index ? width : w)))
                            }
                        />
                    }
                    footer={
                        <DataGridHeader
                            hideCheckbox
                            component={data.FooterCell}
                            columns={footerColumns}
                            style={{
                                '--f-data-grid-cell-height': '30px',
                                'bottom': 0,
                            }}
                        />
                    }
                    pinFirst
                    pinLast
                    onCellUpdate={handleCellUpdate}
                    onCellDelete={handleCellDelete}
                    onColumnMove={handleColumnMove}
                    onRowMove={handleRowMove}
                    toolbar={({ rowSelection, cellSelection }) => (
                        <View
                            row
                            position="absolute"
                            bgToken="surface-inverse"
                            colorToken="text-on-color"
                            p="1rem 2rem"
                            radius="var(--f-radius)"
                            shadow="var(--f-shadow-xl)"
                            zIndex={1000}
                            gap={10}
                            display={
                                !Object.values(rowSelection).length && Object.values(cellSelection).length < 2
                                    ? 'none'
                                    : 'flex'
                            }
                            style={{ bottom: 10, left: '50%', transform: 'translateX(-50%)' }}>
                            <Text color="inherit">
                                {Object.values(rowSelection).length} rows, &nbsp;
                                {Object.values(cellSelection).length} cells
                            </Text>
                            <Icon
                                icon={FIX}
                                className="f-buttonize"
                                onClick={() => {
                                    dispatchDataGridEvent('select-cells', { instanceId: 'instance-1' })
                                    dispatchDataGridEvent('select-rows', { instanceId: 'instance-1' })
                                }}
                            />
                        </View>
                    )}
                />
            </div>
        </MenuProvider>
    )
}


export const DatepickerUsage = () => {
    const [date, setDate] = useState(new Date())
    const { today, tomorrow } = useMemo(() => {
        const today = new Date()
        const tomorrow = new Date(today.getTime() + 4 * 24 * 60 * 60 * 1000)

        return { today, tomorrow }
    }, [])
    const [selection, setSelection] = useState<any[]>([[today, tomorrow]])

    const handleSelection = (date: Date) => {
        if (selection.length == 0) {
            setSelection([[date, null]])
        } else {
            const selected = selection[0]
            if (!selected[0]) return setSelection([date, null])
            if (!!selected[0] && !!selected[1]) return setSelection([[date, null]])
            if (!!selected[0] && !selected[1])
                return setSelection(selected[0] > date ? [[date, selected[0]]] : [[selected[0], date]])
        }
    }

    return (
        <Card
            p={10}
            width="fit-content">
            <DateRangeProvider>
                <DatePicker
                    height={350}
                    width={300}
                    defaultDate={date}
                    selection={selection}
                    onChange={handleSelection}
                />
            </DateRangeProvider>
        </Card>
    )
}






export const SelectWeek = () => {
    const [date, setDate] = useState(new Date())
    const { today, tomorrow } = useMemo(() => {
        const today = new Date()
        const tomorrow = new Date(today.getTime() + 1 * 24 * 60 * 60 * 1000)

        return { today, tomorrow }
    }, [])
    const [selection, setSelection] = useState<any[]>([])

    const handleWeekSelection = (dates: Date[]) => {
        setSelection([...selection, dates])
    }

    return (
        <DateRangeProvider>
            <DatePicker
                selectWeek
                height={300}
                width={300}
                defaultDate={date}
                selection={selection}
                onChange={handleWeekSelection}
            />
        </DateRangeProvider>
    )
}






export const MonthDisplay = () => {
    const today = new Date()
    const month = today.getMonth()
    const year = today.getFullYear()
    const date = new Date(year, month, 1)
    const selected = new Date(year, month, 16)
    const disabled = new Date(year, month, 14)

    return (
        <DatePickerMonth
            width={300}
            height={300}
            date={date}
            selection={[[selected, selected]]}
            disabled={[[disabled]]}
        />
    )
}






export const MonthAndWeekdays = () => {
    const today = new Date()
    const month = today.getMonth()
    const year = today.getFullYear()
    const date = new Date(year, month, 1)
    const start = new Date(year, month, 16)
    const end = new Date(year, month, 19)
    const disabled = new Date(year, month, 13)

    return (
        <View width={300}>
            <DatePickerWeekdays width="100%" />
            <DatePickerMonth
                width="100%"
                height={300}
                date={date}
                selection={[[start, end]]}
                disabled={[[disabled]]}
            />
        </View>
    )
}






export const MonthCustomDayRender = () => {
    const today = new Date()
    const month = today.getMonth()
    const year = today.getFullYear()
    const date = new Date(year, month, 1)
    const start = new Date(year, month, 16)
    const end = new Date(year, month, 17)
    const disabled = new Date(year, month, 13)

    return (
        <View width={300}>
            <DatePickerWeekdays width="100%" />
            <DatePickerMonth
                width="100%"
                height={300}
                date={date}
                selection={[[start, end]]}
                disabled={[[disabled]]}
                renderDay={(day) => {
                    if (day.getDate() == 11 && day.getMonth() == date.getMonth()) {
                        return (
                            <IconLib
                                icon="warning"
                                color="var(--f-color-danger)"
                            />
                        )
                    } else if (day.getDate() == 7 && day.getMonth() == date.getMonth()) {
                        return (
                            <>
                                <span>{day.getDate()}</span>
                                <Badge
                                    variant="danger"
                                    anchor="top-left"
                                    width={7}
                                    height={7}
                                    style={{ marginLeft: 7, marginTop: 7 }}
                                />
                            </>
                        )
                    } else {
                        return day.getDate()
                    }
                }}
            />
        </View>
    )
}






export const CustomWeekend = () => {
    const today = new Date()
    const month = today.getMonth()
    const year = today.getFullYear()
    const date = new Date(year, month, 1)
    const start = new Date(year, month, 16)
    const end = new Date(year, month, 17)
    const disabled = new Date(year, month, 13)

    return (
        <View width={300}>
            <DatePickerWeekdays width="100%" />
            <DatePickerMonth
                width="100%"
                height={300}
                date={date}
                selection={[[start, end]]}
                disabled={[[disabled]]}
                weekendDays={[0, 5]}
            />
        </View>
    )
}






export const MonthsDisplay = () => {
    const today = new Date()
    const month = today.getMonth()
    const year = today.getFullYear()
    const date = new Date(year, month, 1)
    const selectedStart = new Date(year, month, 16)
    const selectedEnd = new Date(year, month + 3, 16)
    const disabled = new Date(year, month + 7, 14)

    return (
        <MonthPicker
            width={300}
            height={300}
            date={date}
            selection={[[selectedStart, selectedEnd]]}
            disabled={[[disabled]]}
        />
    )
}






export const YearsDisplay = () => {
    const today = new Date()
    const month = today.getMonth()
    const year = today.getFullYear()
    const date = new Date(year, month, 1)
    const selectedStart = new Date(year - 1, month, 16)
    const selectedEnd = new Date(year + 1, month, 16)
    const disabled = new Date(year + 4, month, 14)

    return (
        <YearPicker
            width={300}
            height={300}
            date={date}
            selection={[[selectedStart, selectedEnd]]}
            disabled={[[disabled]]}
        />
    )
}







export const DateCellVariants = () => (
    <View row>
        <DateCell
            height={50}
            size="xl">
            23
        </DateCell>
        <DateCell
            height={50}
            weekend>
            19
        </DateCell>
        <DateCell
            height={50}
            pending>
            8
        </DateCell>
        <DateCell
            height={50}
            today>
            31
        </DateCell>
        <DateCell
            height={50}
            disabled>
            June
        </DateCell>
        <DateCell
            height={50}
            selected>
            2023
        </DateCell>
        <DateCell
            height={50}
            unavailable>
            2022
        </DateCell>
        <DateCell
            height={50}
            border="0.15rem solid var(--f-color-danger)">
            13
            <Badge
                variant="accent"
                anchor="top-left"
                style={{ marginLeft: 5, marginTop: 5 }}
            />
        </DateCell>
    </View>
)






export const Time = () => {
    const [date, setDate] = useState(new Date())

    return (
        <Stack spacing={20}>
            <TimePicker
                twelveHours
                width={250}
                height={300}
                date={date}
                onChange={setDate}
            />
            <TimePicker
                hideAmPm
                width={200}
                height={300}
                date={date}
                onChange={setDate}
            />
        </Stack>
    )
}






export const MultipleMonths = () => {
    const date = new Date()
    const { today, tomorrow, disabled1, disabled2 } = useMemo(() => {
        const today = new Date()
        const tomorrow = new Date(today.getTime() + 5 * 24 * 60 * 60 * 1000)
        const disabled1 = new Date(today.getTime() - 6 * 24 * 60 * 60 * 1000)
        const disabled2 = new Date(today.getTime() - 3 * 24 * 60 * 60 * 1000)
        return {
            today,
            tomorrow,
            disabled1,
            disabled2,
        }
    }, [])
    const [selection, setSelection] = useState<any[]>([[today, tomorrow]])

    const handleSelection = (date: Date) => {
        if (selection.length == 0) {
            setSelection([[date, null]])
        } else {
            const selected = selection[0]
            if (!selected[0]) return setSelection([date, null])
            if (!!selected[0] && !!selected[1]) return setSelection([[date, null]])
            if (!!selected[0] && !selected[1])
                return setSelection(selected[0] > date ? [[date, selected[0]]] : [[selected[0], date]])
        }
    }

    return (
        <DateRangeProvider>
            <Stack
                direction="vertical"
                spacing={20}>
                <Card
                    p={10}
                    width="fit-content">
                    <DatePicker
                        defaultDate={date}
                        selection={selection}
                        onChange={handleSelection}
                        disabled={[[disabled1, disabled2]]}
                        height={350}
                        width={300}
                    />
                </Card>

                <Card
                    p={10}
                    width="fit-content">
                    <DatePicker
                        defaultDate={date}
                        selection={selection}
                        onChange={handleSelection}
                        width={600}
                        height={350}
                        disabled={[[disabled1, disabled2]]}
                        panels={2}
                    />
                </Card>

                <Card
                    p={10}
                    width="fit-content">
                    <DatePicker
                        defaultDate={date}
                        selection={selection}
                        onChange={handleSelection}
                        disabled={[[disabled1, disabled2]]}
                        width={900}
                        height={350}
                        panels={3}
                    />
                </Card>
            </Stack>
        </DateRangeProvider>
    )
}






export const DateInputs = () => {
    const [text, setText] = useState<any>('')
    const [date, setDate] = useState<Date>(new Date())
    const [selection, setSelection] = useState<any[]>([])
    const dateModal = useVisibility(false)
    const timeModal = useVisibility(false)

    const getTimeFormat = (date: Date) => {
        const hours = date.getHours()
        const minutes = date.getMinutes()
        const seconds = date.getSeconds()
        return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`
    }

    const getDateFormat = (date) => {
        const day = date.getDate()
        const month = date.getMonth() + 1
        const year = date.getFullYear()
        return `${pad(year)}-${pad(month)}-${pad(day)}`
    }

    const handleSelection = (ndate: Date) => {
        setSelection([[ndate, ndate]])
        const d = new Date(date)
        d.setFullYear(ndate.getFullYear())
        d.setMonth(ndate.getMonth())
        d.setDate(ndate.getDate())
        setDate(new Date(d))
        dateModal.hide()
    }

    return (
        <DateRangeProvider>
            <Stack
                direction="horizontal"
                spacing={10}>
                <Popover
                    isVisible={dateModal.visible}
                    onDismiss={dateModal.hide}
                    anchor="bottom-center"
                    content={
                        <View p={20}>
                            <DatePicker
                                defaultDate={new Date()}
                                selection={selection}
                                onChange={handleSelection}
                                width="100%"
                                height={300}
                                monthProps={{ flex: 1 }}
                            />
                        </View>
                    }>
                    <InputControl onFocus={(e) => dateModal.delayedShow()}>
                        <Input
                            onChange={(e) => setText(e.target.value)}
                            placeholder="Type here - datetimelocal"
                            value={getDateFormat(date)}
                            type="date"
                        />
                        <InputSuffix>
                            <IconLib
                                icon="date"
                                style={{ pointerEvents: 'none' }}
                            />
                        </InputSuffix>
                    </InputControl>
                </Popover>

                <Popover
                    isVisible={timeModal.visible}
                    onDismiss={timeModal.hide}
                    anchor="bottom-center"
                    content={
                        <View p={20}>
                            <TimePicker
                                width="100%"
                                height={300}
                                date={date}
                                onChange={(date) => setDate(date)}
                            />
                        </View>
                    }>
                    <InputControl
                        onFocus={(e) => timeModal.delayedShow()}
                        onClick={(e) => timeModal.delayedShow()}>
                        <Input
                            onChange={(e) => setText(e.target.value)}
                            placeholder="Type here - datetimelocal"
                            value={getTimeFormat(date)}
                            type="time"
                        />
                        <InputSuffix>
                            <IconLib
                                icon="time"
                                style={{ pointerEvents: 'none' }}
                            />
                        </InputSuffix>
                    </InputControl>
                </Popover>
            </Stack>
        </DateRangeProvider>
    )
}






export const ScrollingPicker = () => {
    const { goToToday } = useScrollingDatePicker()
    const ref = useRef(null)
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    const { today, tomorrow, start, end } = useMemo(() => {
        const today = new Date()
        const tomorrow = new Date(today.getTime() + 1 * 24 * 60 * 60 * 1000)
        const start = new Date(today.getTime() + 1 * 24 * 60 * 60 * 1000)
        const end = new Date(today.getTime() + 6 * 24 * 60 * 60 * 1000)
        return {
            today,
            tomorrow,
            start,
            end,
        }
    }, [])
    const [selection, setSelection] = useState<any[]>([[start, end]])

    const handleSelection = (date: Date) => {
        if (selection.length == 0) {
            setSelection([[date, null]])
        } else {
            const selected = selection[0]
            if (!selected[0]) return setSelection([date, null])
            if (!!selected[0] && !!selected[1]) return setSelection([[date, null]])
            if (!!selected[0] && !selected[1])
                return setSelection(selected[0] > date ? [[date, selected[0]]] : [[selected[0], date]])
        }
    }

    const handleTodayClick = (e) => {
        goToToday(ref.current)
    }

    return (
        <View width={300}>
            <DateRangeProvider>
                <Button onClick={handleTodayClick}>Go to Today</Button>
                <ScrollingDatePicker
                    height={300}
                    ref={ref}
                    defaultDate={today}
                    selection={selection}
                    onChange={handleSelection}
                    monthTitle={(date: Date) => (
                        <Text
                            p="1rem"
                            as="span"
                            width="100%">
                            {monthNames[date.getMonth()]} / {date.getFullYear()}
                        </Text>
                    )}
                />
            </DateRangeProvider>
        </View>
    )
}






export const DateTimePicker = () => {
    const [date, setDate] = useState(new Date())

    return (
        <View>
            <TimePicker
                twelveHours
                width={250}
                height={300}
                date={date}
                onChange={setDate}
            />
            <TimePicker
                hideAmPm
                width={200}
                height={300}
                date={date}
                onChange={setDate}
            />
        </View>
    )
}


export const KanbanUsage = () => {
    const [swimlanes, setSwimlanes] = useState<KanbanTypes.Swimlane[]>([data.swimlanes[0]])
    const [card, setCard] = useState<any>({})

    const handleCardMove = ({ origin, target }, selection: KanbanSelection[]) => {
        kanbanState({ swimlanes, setSwimlanes, card, setCard }).handleCardMove({ origin, target }, selection)
    }

    const handleColumnMove = ({ origin, target }) => {
        kanbanState({ swimlanes, setSwimlanes, card, setCard }).handleColumnMove({ origin, target })
    }

    const handleSwimlaneMove = ({ origin, target }) => {
        kanbanState({ swimlanes, setSwimlanes, card, setCard }).handleSwimlaneMove({ origin, target })
    }

    const handleCardOpen = (card) => {
        kanbanState({ swimlanes, setSwimlanes, card, setCard }).handleCardOpen(card)
    }

    const handleCardAdd = ({ value, swimlaneIndex, columnIndex }) => {
        kanbanState({ swimlanes, setSwimlanes, card, setCard }).handleCardAdd({ value, swimlaneIndex, columnIndex })
    }

    const handleCardUpdate = (ca) => {
        kanbanState({ swimlanes, setSwimlanes, card, setCard }).handleCardUpdate(ca)
    }

    const handleCardDelete = (ca) => {
        kanbanState({ swimlanes, setSwimlanes, card, setCard }).handleCardDelete(ca)
    }

    const handleColumnAdd = ({ value, swimlaneIndex }) => {
        kanbanState({ swimlanes, setSwimlanes, card, setCard }).handleColumnAdd({ value, swimlaneIndex })
    }

    const handleColumnUpdate = (col) => {
        kanbanState({ swimlanes, setSwimlanes, card, setCard }).handleColumnUpdate(col)
    }

    const handleColumnDelete = (col) => {
        kanbanState({ swimlanes, setSwimlanes, card, setCard }).handleColumnDelete(col)
    }

    const handleSwimlaneUpdate = (sl) => {
        kanbanState({ swimlanes, setSwimlanes, card, setCard }).handleSwimlaneUpdate(sl)
    }

    const handleSwimlaneDelete = (sl) => {
        kanbanState({ swimlanes, setSwimlanes, card, setCard }).handleSwimlaneDelete(sl)
    }

    const getMenu = ({ data: { target, payload }, dismiss }) => {
        switch (target) {
            case 'kanban-label':
                return (
                    <LabelMenu
                        onFilter={(value) => console.log('filter', value)}
                        availableLabels={data.availableLabels}
                        labels={payload.labels}
                        onCancel={dismiss}
                        onSave={(labels) => {
                            handleCardUpdate({ ...payload, labels })
                            dismiss()
                        }}
                    />
                )
            case 'kanban-user':
                return (
                    <UserMenu
                        onFilter={(value) => console.log('filter', value)}
                        availableUsers={data.availableUsers}
                        users={payload.users}
                        onCancel={dismiss}
                        onSave={(users) => {
                            handleCardUpdate({ ...payload, users })
                            dismiss()
                        }}
                    />
                )
            case 'kanban-menu':
                return (
                    <Popup
                        colorPalette={data.colorPalette}
                        item={payload}
                        onCancel={dismiss}
                        onSave={(card) => {
                            dismiss()
                            handleCardUpdate({ ...payload, ...card })
                        }}
                        onView={() => {
                            dismiss()
                            setCard(payload)
                        }}
                        onDelete={() => {
                            dismiss()
                            handleCardDelete(payload)
                        }}
                    />
                )
            case 'kanban-column':
                return (
                    <KanbanColumnMenu
                        colorPalette={data.colorPalette}
                        onSave={(column) => {
                            handleColumnUpdate({ ...payload, ...column })
                            dismiss()
                        }}
                        onDelete={() => {
                            handleColumnDelete(payload)
                            dismiss()
                        }}
                        column={payload}
                    />
                )
            case 'kanban-swimlane':
                return (
                    <KanbanSwimlaneMenu
                        colorPalette={data.colorPalette}
                        onSave={(swimlane) => {
                            handleSwimlaneUpdate({ ...payload, ...swimlane })
                            dismiss()
                        }}
                        onDelete={() => {
                            handleSwimlaneDelete(payload)
                            dismiss()
                        }}
                        swimlane={payload}
                    />
                )
            default:
                return null
        }
    }

    return (
        <View
            width="100%"
            height={700}>
            {!!card.id && (
                <Detail
                    colorPalette={data.colorPalette}
                    availableLabels={data.availableLabels}
                    availableUsers={data.availableUsers}
                    item={card}
                    onCancel={() => setCard({})}
                    onSave={(card) => {
                        handleCardUpdate(card)
                        setCard({})
                    }}
                    onDelete={(card) => {
                        handleCardDelete(card)
                        setCard({})
                    }}
                />
            )}

            <MenuProvider menu={getMenu}>
                <Kanban
                    
                    style={{ '--f-kanban-swimlane-minheight': '100%' }}
                    swimlanes={swimlanes}
                    onCardOpen={handleCardOpen}
                    onCardAdd={handleCardAdd}
                    onCardMove={handleCardMove}
                    onColumnAdd={handleColumnAdd}
                    onColumnMove={handleColumnMove}
                    onSwimlaneMove={handleSwimlaneMove}
                    onColumnUpdate={handleColumnUpdate}
                    onSwimlaneUpdate={handleSwimlaneUpdate}
                    hideCheckbox={false}
                    collapsibleColumn={true}
                    targetVariant={{ cards: 'animated', nav: 'focus' }}
                    card={undefined}
                    columnHeader={undefined}
                    swimlaneHeader={undefined}
                />
            </MenuProvider>
        </View>
    )
}


export const TodoUsage = () => {
    const [sections, setSections] = useState<any>(data.sections)
    const [task, setTask] = useState<any>({})
    const [options, setOptions] = useState<any>([])

    const handleTaskOpen = (task) => {
        todoState({ task, setTask, sections, setSections }).handleTaskOpen(task)
    }

    const handleTaskUpdate = (taskData) => {
        todoState({ task, setTask, sections, setSections }).handleTaskUpdate(taskData)
    }

    const handleTaskDelete = (task) => {
        todoState({ task, setTask, sections, setSections }).handleTaskDelete(task)
    }

    const handleTaskAddBelow = ({ id, shouldIndent, task: { title, users, badges, labels } }) => {
        todoState({ task, setTask, sections, setSections }).handleTaskAddBelow({
            id,
            shouldIndent,
            task: { title, users, badges, labels },
        })
    }

    const handleTaskAdd = ({ task, sectionIndex }) => {
        todoState({ task, setTask, sections, setSections }).handleTaskAdd({ task, sectionIndex })
    }

    const handleTaskMove = ({ origin, target, selection }) => {
        todoState({ task, setTask, sections, setSections }).handleTaskMove({ origin, target, selection })
    }

    const handleSectionUpdate = (sec) => {
        todoState({ task, setTask, sections, setSections }).handleSectionUpdate(sec)
    }

    const handleSectionDelete = (sec) => {
        todoState({ task, setTask, sections, setSections }).handleSectionDelete(sec)
    }

    const handleSectionAdd = ({ name, sectionIndex }) => {
        todoState({ task, setTask, sections, setSections }).handleSectionAdd({ name, sectionIndex })
    }

    const handleSectionMove = ({ origin, target }) => {
        todoState({ task, setTask, sections, setSections }).handleSectionMove({ origin, target })
    }

    const handleTrigger = (word) => {
        if (word.trim().charAt(0) == '@') {
            setOptions(data.richInputUsers)
        } else if (word.trim().charAt(0) == '#') {
            setOptions(data.richInputLabels)
        } else {
            setOptions([])
        }
    }

    const handleHighlight = (word, cb, always = false) => {
        if (word.includes('date:')) {
            cb({
                phrase: word.trim(),
                type: 'date',
                value: word.split(':')[1].trim(),
            })
        } else {
            if (always) cb(null)
        }
    }

    const getMenu = ({ data: { target, payload }, dismiss }) => {
        switch (target) {
            case 'todo-label':
                return (
                    <LabelMenu
                        onFilter={(value) => console.log('filter', value)}
                        availableLabels={data.availableLabels}
                        labels={payload.labels}
                        onCancel={dismiss}
                        onSave={(labels) => {
                            handleTaskUpdate({ ...payload, labels })
                            dismiss()
                        }}
                    />
                )
            case 'todo-user':
                return (
                    <UserMenu
                        onFilter={(value) => console.log('filter', value)}
                        availableUsers={data.availableUsers}
                        users={payload.users}
                        onCancel={dismiss}
                        onSave={(users) => {
                            handleTaskUpdate({ ...payload, users })
                            dismiss()
                        }}
                    />
                )
            case 'todo-menu':
                return (
                    <Popup
                        isTodo
                        item={payload}
                        onCancel={dismiss}
                        colorPalette={data.colorPalette}
                        onTodoAddBelow={() => {
                            dismiss()
                            dispatchTodoEvent('open-addbelow', { id: payload.id })
                        }}
                        onTodoEdit={() => {
                            dismiss()
                            dispatchTodoEvent('edit-task', { id: payload.id })
                        }}
                        onSave={(card) => {
                            dismiss()
                            handleTaskUpdate({ ...payload, ...card })
                        }}
                        onView={() => {
                            dismiss()
                            setTask(payload)
                        }}
                        onDelete={() => {
                            dismiss()
                            handleTaskDelete(payload)
                        }}
                    />
                )
            case 'todo-section':
                return (
                    <TodoSectionMenu
                        colorPalette={data.colorPalette}
                        onSave={(section) => {
                            handleSectionUpdate({ ...payload, ...section })
                            dismiss()
                        }}
                        onDelete={() => {
                            handleSectionDelete(payload)
                            dismiss()
                        }}
                        section={payload}
                    />
                )
            default:
                return null
        }
    }

    return (
        <>
            {!!task.id && (
                <Detail
                    colorPalette={data.colorPalette}
                    availableLabels={data.availableLabels}
                    availableUsers={data.availableUsers}
                    item={{ ...task }}
                    onCancel={() => {
                        setTask({})
                    }}
                    onSave={(task) => {
                        handleTaskUpdate(task)
                        setTask({})
                    }}
                    onDelete={(task) => {
                        handleTaskDelete(task)
                        setTask({})
                    }}
                />
            )}

            <MenuProvider menu={getMenu}>
                <Todo
                    sections={sections}
                    onTaskOpen={handleTaskOpen}
                    onTaskUpdate={handleTaskUpdate}
                    onTaskAdd={handleTaskAdd}
                    onTaskAddBelow={handleTaskAddBelow}
                    onTaskMove={handleTaskMove}
                    onSectionUpdate={handleSectionUpdate}
                    onSectionAdd={handleSectionAdd}
                    onSectionMove={handleSectionMove}
                    availableLabels={data.availableLabels}
                    onLabelFilter={(value) => console.log('filter labels', value)}
                    availableUsers={data.availableUsers}
                    onUserFilter={(value) => console.log('filter users', value)}
                    richInputHighlight={handleHighlight}
                    richInputTrigger={handleTrigger}
                    richInputOptions={options}
                    editableSectionName={true}
                    showSectionCount={true}
                    hideCheckbox={false}
                    collapsibleSection={true}
                    collapsibleTask={true}
                    targetVariant={{ cards: 'animated', nav: 'focus' }}
                    task={undefined}
                    sectionHeader={undefined}
                    defaultSelection={{}}
                    toolbar={({ selection }) => {
                        return (
                            <View
                                row
                                position="absolute"
                                bgToken="surface-inverse"
                                colorToken="text-on-color"
                                p="1rem 2rem"
                                radius="var(--f-radius)"
                                shadow="var(--f-shadow-xl)"
                                zIndex={1000}
                                gap={10}
                                className="f-fadein"
                                display={!Object.keys(selection).length ? 'none' : 'flex'}
                                style={{ bottom: 10, left: '50%', transform: 'translateX(-50%)' }}>
                                <Text color="inherit">{Object.keys(selection).length} selected</Text>
                                <Icon
                                    icon={FIX}
                                    className="f-buttonize"
                                    onClick={() => dispatchTodoEvent('select', {})}
                                />
                            </View>
                        )
                    }}
                />
            </MenuProvider>
        </>
    )
}
