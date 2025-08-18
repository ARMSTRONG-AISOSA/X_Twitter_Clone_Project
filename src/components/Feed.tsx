import Tweet from "./TweetCard"

const Feed = () => {
  return (
    <div className="p-3">
      <h5 className="fw-bold">Home</h5>
      {/* Tweet Input */}
      <div className="mb-3 border-bottom pb-3">
        <textarea className="form-control" placeholder="What’s happening?" />
        <button className="btn btn-primary mt-2">Tweet</button>
      </div>

      {/* Tweets */}
      <Tweet username="BenTony" content="This is my first tweet clone 🚀" />
      <Tweet username="JohnDoe" content="Loving React + Bootstrap 💙" />
    </div>
  )
}

export default Feed