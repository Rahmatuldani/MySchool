import config from "./config/config";

function AppLayout() {
    document.title = config.title;

    return (
        <>App Layout</>
    );
}

export default AppLayout;