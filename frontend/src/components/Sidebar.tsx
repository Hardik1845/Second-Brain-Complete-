import { ShareIcon } from "../icons/ShareIcon"

export function Sidebar() {
    const sidebarItems = [
        { label: "Tweets" },
        { label: "Videos" },
        { label: "Documents" },
        { label: "Links" },
        { label: "Tags" },
    ]

    return (
        <div className="h-screen w-56 border-r border-gray-200 bg-white flex flex-col px-4 py-6 fixed top-0 left-0">
            {/* Logo */}
            <div className="flex items-center gap-2 mb-8 px-2"> 
               
                <div className="w-7 h-7 rounded-full bg-purple-600 shrink-0"  />
                <span className="text-gray-900 font-semibold text-base">
                    Second Brain
                </span>

            </div>

            {/* Nav */}
            <nav className="flex flex-col gap-1">
                {sidebarItems.map((item) => (
                    <div
                        key={item.label}
                        className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-600 text-sm font-medium hover:bg-gray-100 hover:text-gray-900 transition-colors cursor-pointer"
                    >
                        {/* Icon placeholder — replace this div with your icon */}
                        <div className="w-4 h-4 rounded-sm bg-gray-300 shrink-0" />
                     {item.label}
                    </div>
                ))}
            </nav>
        </div>
    )
}