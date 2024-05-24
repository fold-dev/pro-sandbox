import {
    Button,
    Flexer,
    Form,
    Heading,
    Input,
    MenuProvider,
    Modal,
    Portal,
    Text, View, generateUEID
} from '@fold-dev/core'
import {
    CalendarMonth, CalendarProvider, CalendarSchedule,
    Detail,
    Popup,
    getShortDateFormat
} from '@fold-pro/react'
import { useState } from 'react'
import * as data from '../dummy_data'

export const Calendar = (prop) => {
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
