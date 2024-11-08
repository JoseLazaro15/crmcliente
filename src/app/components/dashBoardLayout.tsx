import { ReactNode } from "react";

interface DashBoardLayoutProps {
    children: ReactNode;
}

const DashBoardLayout = ({ children }: DashBoardLayoutProps) => {
    return (
        <div className="bg-gray-200 min-h-screen">
            <div className="flex min-h-screen">
                <main className="sm:w-2/3 xl:w-4/5 sm:min-h-screen p-5 text-black">
                    {children}
                </main>
            </div>
        </div>
    )
}

export default DashBoardLayout;