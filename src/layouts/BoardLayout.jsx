import { Outlet } from "react-router";

const BoardLayout = () => {
    return (
        <div className="bg-gray-600  text-lg font-mono">
            <Outlet />
        </div>
    );
}

export default BoardLayout;
