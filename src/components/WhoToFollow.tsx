interface User {
    name: string;
    handle: string;
}

const suggestions: User[] = [
    { name: "John Doe", handle: "@johndoe" },
    { name: "Jane Smith", handle: "@janesmith" },
    { name: "Elon Musk", handle: "@elonmusk" },
];


const WhoToFollow: React.FC = () => {
    return (
        <div className="card">
            <div className="card-body p-0">
                <h6 className="card-title px-3 py-2 fw-bold">Who to follow</h6>
                {suggestions.map((user, idx) => (
                    <div
                        key={idx}
                        className="d-flex justify-content-between align-items-center px-3 py-2 hover-bg-light"
                        style={{ cursor: "pointer" }}
                    >
                        <div>
                            <div className="fw-bold">{user.name}</div>
                            <small className="text-muted">{user.handle}</small>
                        </div>
                        <button className="btn btn-sm btn-dark rounded-pill">Follow</button>
                    </div>
                ))}
                <div className="px-3 py-2 text-primary" style={{ cursor: "pointer" }}>
                    Show more
                </div>
            </div>
        </div>
    )
}

export default WhoToFollow