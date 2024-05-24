import { FoldProvider } from '@fold-dev/core'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Calendar } from './Calendar'

const App = (props: any) => {
    return (
        <BrowserRouter>
            <FoldProvider>
                <Routes>
                    <Route
                        path="/"
                        element={<Calendar />}
                    />
                </Routes>
            </FoldProvider>
        </BrowserRouter>
    )
}

export default App
