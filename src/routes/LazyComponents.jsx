import React from "react"
import { Suspense } from "react/cjs/react.development"

const LoginComponent = React.lazy(() => import('../components/Login'))
const SidebarComponent = React.lazy(() => import('../components/Sidebar'))

export const Login = () => (
    <Suspense fallback={<div>Loading...</div>}>
        <LoginComponent />
    </Suspense>
)

export const Sidebar = () => (
    <Suspense fallback={<div>Loading...</div>}>
        <SidebarComponent />
    </Suspense>
)
