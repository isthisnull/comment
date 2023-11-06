import React from "react";
import "./App.css";

function App() {
  return (
    <>
      <div className="container">
        <div className="card">
          <div className="info">
            <div className="avatar">
              <img src="assets/22.png" className="pic" />
            </div>
            <div className="textInfo">
              <div className="user">
                <div className="username">
                  <p className="stun">STUNNIFER</p>
                  <p className="at">@nfts</p>
                </div>
                <div className="id">
                  <p>16h ago</p>
                </div>
              </div>
              <div className="reply">
                <img src="assets/comment.png" className="commentIcon" />
                Replied to your skurp
              </div>
            </div>
          </div>
          <p className="text">
            nah i prefer to believe its just a sign from the universe
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
