import { Outlet } from "react-router-dom"

function Root() {
    return (
        <>
            <main className="rootLayout__content">
                <Outlet />
            </main>
        </>
    )
}

export default Root