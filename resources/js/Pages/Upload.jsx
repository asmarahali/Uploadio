import React, { useState } from "react";
import { useForm } from "@inertiajs/react"; // Inertia.js form hook
import "../../css/Upload.css";

function Upload() {
    const { data, setData, post, errors } = useForm({
        title: "",
        description: "",
        video: null,
    });

    // State to store the processed video URL
    const [videoUrl, setVideoUrl] = useState(null);

    const handleChange = (e) => {
        setData(e.target.name, e.target.value);
    };

    const handleFileChange = (e) => {
        setData("video", e.target.files[0]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        post("/upload-video", {
            onSuccess: (response) => {
                // Capture the returned video URL from Laravel response
                setVideoUrl(response.video_url);

                Inertia.visit("/dash");
            },
        });
    };

    return (
        <>
            <div className="upload-container">
                <h1>Upload New Video</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="title"
                        placeholder="Title"
                        value={data.title}
                        onChange={handleChange}
                        required
                    />
                    {errors.title && <span>{errors.title}</span>}
                    <br />

                    <input
                        type="text"
                        name="description"
                        placeholder="Description"
                        value={data.description}
                        onChange={handleChange}
                        required
                    />
                    {errors.description && <span>{errors.description}</span>}
                    <br />

                    <input
                        type="file"
                        name="video"
                        accept="video/*"
                        onChange={handleFileChange}
                        required
                    />
                    {errors.video && <span>{errors.video}</span>}
                    <br />

                    <button type="submit">Upload Video</button>
                </form>

                {/* Display processed video URL or video */}
                {videoUrl && (
                    <div>
                        <h2>Processed Video:</h2>
                        <video width="600" controls>
                            <source src={videoUrl} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                )}
            </div>
        </>
    );
}

export default Upload;
