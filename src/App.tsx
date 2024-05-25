import { FoldProvider, View } from '@fold-dev/core'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './Layout'
import { Month } from './Stories'

const App = (props: any) => {
    return (
        <BrowserRouter>
            <FoldProvider>
                <Routes>
                    <Route
                        path="/"
                        element={<Layout />}>
                        <Route
                            path="/month"
                            element={<Month />}
                        />
                    </Route>
                </Routes>
            </FoldProvider>
        </BrowserRouter>
    )
}

export default App
