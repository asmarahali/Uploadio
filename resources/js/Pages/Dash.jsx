import React from "react";
import MainLayout from "../Layouts/MainLayout";
import "../../css/Dash.css";

function Dash({ videos }) {
    return (
        <div>
            <h1 className="page-tilte">All Videos</h1>
            <div className="videos-list">
                {videos.length > 0 ? (
                    videos.map((video) => (
                        <div key={video.id} className="video-item">
                            <h3>{video.title}</h3>
                            <p>{video.description}</p>
                            <video controls width="300">
                                <source
                                    src={`/storage/${video.file_path}`}
                                    type={video.mime_type}
                                />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    ))
                ) : (
                    <p>No videos available.</p>
                )}
            </div>
        </div>
    );
}

Dash.layout = (page) => <MainLayout>{page}</MainLayout>;

export default Dash;
