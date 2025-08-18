import type React from "react";

interface Trend {
    category: string;
    title: string;
    tweets: string;
}

const trends: Trend[] = [
    { category: "Trending in Nigeria", title: "#Tech", tweets: "25.4K Tweets" },
    { category: "Sports · Trending", title: "Messi", tweets: "120K Tweets" },
    { category: "Entertainment · Trending", title: "Oppenheimer", tweets: "78.9K Tweets" },
    { category: "Politics · Trending", title: "Elections2025", tweets: "15.1K Tweets" },
];


const Trends: React.FC = () => {
    return (
        <div className="card mb-3">
            <div className="card-body p-0">
                <h6 className="card-title px-3 py-2 fw-bold">Trends for you</h6>
                {trends.map((trend, idx) => (
                    <div
                        key={idx}
                        className="px-3 py-2 hover-bg-light"
                        style={{ cursor: "pointer" }}
                    >
                        <small className="text-muted">{trend.category}</small>
                        <div className="fw-bold">{trend.title}</div>
                        <small className="text-muted">{trend.tweets}</small>
                    </div>
                ))}
                <div className="px-3 py-2 text-primary" style={{ cursor: "pointer" }}>
                    Show more
                </div>
            </div>
        </div>
    )
}

export default Trends