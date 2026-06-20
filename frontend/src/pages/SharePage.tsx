import "../App.css"
import { useParams } from "react-router-dom"
import { Card } from "../components/Card"
import { useShareContent } from "../hooks/useShareContent"

export function SharePage() {
    const { shareLink } = useParams<{ shareLink: string }>();
    const { username, content } = useShareContent(shareLink ?? "");

    const grouped = content.reduce((acc: Record<string, typeof content>, item) => {
        if (!acc[item.type]) acc[item.type] = [];
        acc[item.type].push(item);
        return acc;
    }, {});

    const typeLabels: Record<string, string> = {
        twitter: "Tweets",
        youtube: "Videos",
        document: "Documents",
        link: "Links",
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-violet-50 via-white to-white">
            {/* Header */}
            <div className="border-b border-violet-100 bg-white/70 backdrop-blur-sm">
                <div className="max-w-5xl mx-auto px-6 py-10 sm:py-14">
                    <div className="flex items-center gap-3 mb-3">
                        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-violet-600 to-indigo-500 shrink-0" />
                        <span className="text-xs font-medium tracking-widest text-violet-500 uppercase">
                            Shared Second Brain
                        </span>
                    </div>
                    <h1 className="text-3xl sm:text-4xl font-semibold text-gray-900 tracking-tight">
                        {username ? `${username}'s collection` : "Loading collection…"}
                    </h1>
                    <p className="text-gray-500 mt-2 text-sm sm:text-base">
                        {content.length} {content.length === 1 ? "item" : "items"} curated and saved for later
                    </p>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-5xl mx-auto px-6 py-10 sm:py-12">
                {content.length === 0 && (
                    <div className="text-center py-20">
                        <p className="text-gray-400 text-sm">Nothing's been added to this brain yet.</p>
                    </div>
                )}

                <div className="flex flex-col gap-10">
                    {Object.entries(grouped).map(([type, items]) => (
                        <section key={type}>
                            <div className="flex items-center gap-3 mb-4">
                                <h2 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
                                    {typeLabels[type] ?? type}
                                </h2>
                                <span className="text-xs text-gray-400">{items.length}</span>
                                <div className="flex-1 h-px bg-gray-100" />
                            </div>

                            <div className="flex  gap-2  flex-wrap min-w -[80vw]">
                                {items.map((item) => (
                                    <Card
                                        key={item._id}
                                        type={item.type}
                                        title={item.title}
                                        link={item.link}
                                    />
                                ))}
                            </div>
                        </section>
                    ))}
                </div>
            </div>
        </div>
    )
}