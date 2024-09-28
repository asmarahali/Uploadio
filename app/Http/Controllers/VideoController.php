<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Video;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;

class VideoController extends Controller
{
    public function dash()
    {
        
        $videos = Video::latest()->get();

       
        return Inertia::render('Dash', [
            'videos' => $videos,
        ]);
    }
    public function upload(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'nullable|string|max:1000',
            'video' => 'required|mimes:mp4,mov,ogg,qt|max:20000',
            
        ]);
    
        // Generate a unique ID for the video
        $uid = uniqid();
    
        // Store the video file
        $filePath = $request->file('video')->store('videos', 'public');
    
        // Create a new video record in the database
        Video::create([
            'user_id' => Auth::id(),
            'title' => $request->title,
            'description' => $request->description,
            'uid' => $uid,
            'path' => $filePath,
            'processed_file' => null, // Initially null before processing
            'visibility' => 'public',
            'processed' => false, // Video is not processed yet
            'allow_like' => $request->allow_like ?? false, // Default to false if not provided
            'allow_coments' => $request->allow_coments ?? false, // Default to false if not provided
            'processing_percentage' => false, // Start at 0%
        ]);
    
        return redirect('/dashboard')->with('success', 'Video uploaded successfully');
    }

    public function show($id)
{
    $video = Video::findOrFail($id); // Fetch video by id
    return Inertia::render('VideoShow', [
        'video' => $video
    ]);
}
public function destroy($id)
{
    $video = Video::findOrFail($id);
    $video->delete(); // Deletes the video from the database
    return redirect()->route('dashboard')->with('success', 'Video deleted successfully');
}
public function update(Request $request, $id)
{
    // Validate the incoming data
    $request->validate([
        'title' => 'required|string|max:255',
        'description' => 'nullable|string'
    ]);

    // Find the video and update it
    $video = Video::findOrFail($id);
    $video->update([
        'title' => $request->input('title'),
        'description' => $request->input('description')
    ]);

    // Redirect the user back with a success message
    return redirect()->route('video.show', $id)->with('success', 'Video updated successfully.');
}


public function edit($id)
{
    // Find the video by its ID
    $video = Video::findOrFail($id);

    // Return the edit view with the video details
    return Inertia::render('VedioEdit', [
        'video' => $video
    ]);
}
}
