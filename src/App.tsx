import { FoldProvider, View } from '@fold-dev/core'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './Layout'
import { Month } from './Stories'
import { CustomDays } from './Stories'
import { Schedule } from './Stories'
import { ScheduleDay } from './Stories'
import { WeekView } from './Stories'
import { UserAndLabelSelect } from './Stories'
import { UserIndicator } from './Stories'
import { BadgeIndicator } from './Stories'
import { LabelIndicator } from './Stories'
import { ItemDetail } from './Stories'
import { RichInputField } from './Stories'
import { CsvimporterUsage } from './Stories'
import { DatagridUsage } from './Stories'
import { Borderless } from './Stories'
import { DatepickerUsage } from './Stories'
import { SelectWeek } from './Stories'
import { MonthDisplay } from './Stories'
import { MonthAndWeekdays } from './Stories'
import { MonthCustomDayRender } from './Stories'
import { CustomWeekend } from './Stories'
import { MonthsDisplay } from './Stories'
import { YearsDisplay } from './Stories'
import { DateCellVariants } from './Stories'
import { Time } from './Stories'
import { MultipleMonths } from './Stories'
import { DateInputs } from './Stories'
import { ScrollingPicker } from './Stories'
import { DateTimePicker } from './Stories'
import { KanbanUsage } from './Stories'
import { TodoUsage } from './Stories'


const App = (props: any) => {
    return (
        <BrowserRouter>
            <FoldProvider>
                <Routes>
                    <Route
                        path="/"
                        element={<Layout />}>
                        <Route path="/calendar-month" element={<Month />} />
                        <Route path="/calendar-customdays" element={<CustomDays />} />
                        <Route path="/calendar-schedule" element={<Schedule />} />
                        <Route path="/calendar-scheduleday" element={<ScheduleDay />} />
                        <Route path="/calendar-weekview" element={<WeekView />} />
                        <Route path="/common-userandlabelselect" element={<UserAndLabelSelect />} />
                        <Route path="/common-userindicator" element={<UserIndicator />} />
                        <Route path="/common-badgeindicator" element={<BadgeIndicator />} />
                        <Route path="/common-labelindicator" element={<LabelIndicator />} />
                        <Route path="/common-itemdetail" element={<ItemDetail />} />
                        <Route path="/common-richinputfield" element={<RichInputField />} />
                        <Route path="/csv-importer-csvimporterusage" element={<CsvimporterUsage />} />
                        <Route path="/data-grid-datagridusage" element={<DatagridUsage />} />
                        <Route path="/data-grid-borderless" element={<Borderless />} />
                        <Route path="/date-picker-datepickerusage" element={<DatepickerUsage />} />
                        <Route path="/date-picker-selectweek" element={<SelectWeek />} />
                        <Route path="/date-picker-monthdisplay" element={<MonthDisplay />} />
                        <Route path="/date-picker-monthandweekdays" element={<MonthAndWeekdays />} />
                        <Route path="/date-picker-monthcustomdayrender" element={<MonthCustomDayRender />} />
                        <Route path="/date-picker-customweekend" element={<CustomWeekend />} />
                        <Route path="/date-picker-monthsdisplay" element={<MonthsDisplay />} />
                        <Route path="/date-picker-yearsdisplay" element={<YearsDisplay />} />
                        <Route path="/date-picker-datecellvariants" element={<DateCellVariants />} />
                        <Route path="/date-picker-time" element={<Time />} />
                        <Route path="/date-picker-multiplemonths" element={<MultipleMonths />} />
                        <Route path="/date-picker-dateinputs" element={<DateInputs />} />
                        <Route path="/date-picker-scrollingpicker" element={<ScrollingPicker />} />
                        <Route path="/date-picker-datetimepicker" element={<DateTimePicker />} />
                        <Route path="/kanban-kanbanusage" element={<KanbanUsage />} />
                        <Route path="/todo-todousage" element={<TodoUsage />} />
                    </Route>
                </Routes>
            </FoldProvider>
        </BrowserRouter>
    )
}

export default App
