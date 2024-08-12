import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./auth/ProtectRouter";
import ErrorBoundary from "./error/ErrorBoundary";
import {LayoutLoader} from "./components/AppLayout/Loaders"


const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));
const Chat = lazy(() => import("./pages/Chat"));
const Group = lazy(() => import("./pages/Group"));
const Notfound = lazy(() => import("./pages/Notfound"));


let user = false;

function App() {
    return (
        <BrowserRouter>
            <Suspense fallback={<LayoutLoader/>}>
                <ErrorBoundary>
                    <Routes>
                        <Route element={<ProtectedRoute user={user} redirect="/login" />}>
                            <Route path="/" element={<Home />} />
                            <Route path="/chat/:chatId" element={<Chat />} />
                            <Route path="/groups" element={<Group />} />
                        </Route>
                        <Route element={<ProtectedRoute user={!user} redirect="/" />}>
                            <Route path="/login" element={<Login />} />
                        </Route>
                        <Route path="*" element={<Notfound />} />
                    </Routes>
                </ErrorBoundary>
            </Suspense>
        </BrowserRouter>
    );
}

export default App;
