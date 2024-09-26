<?php

namespace App\Http\Controllers;

use App\Models\Video;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use FFMpeg\FFMpeg;
use FFMpeg\Format\Video\X264;
use App\Services\VideoService;

class VideoController extends Controller
{
//     protected $videoService;

//     public function __construct(VideoService $videoService)
//     {
//         $this->videoService = $videoService;
//     }

//     public function upload(Request $request)
//     {
//         $inputPath = $request->file('video')->getPathname();
//         $outputPath = storage_path('app/public/videos/output.mp4');

//         $this->videoService->convertVideo($inputPath, $outputPath);

//         return response()->json(['message' => 'Video converted successfully!']);
//     }

//     public function uploadVideo(Request $request)
// {
    
//     $request->validate([
//         'title' => 'required|string',
//         'description' => 'required|string',
//         'video' => 'required|file|mimes:mp4,mov,ogg,qt|max:50000', 
//     ]);

   
//     $videoPath = $request->file('video')->store('videos/originals');

//     $ffmpeg = FFMpeg::create();
//     $video = $ffmpeg->open(storage_path('app/' . $videoPath));

   
//     $processedVideoPath = public_path('videos/processed.mp4');
//     $video->save(new X264(), $processedVideoPath);

//     return response()->json([
//         'message' => 'Video uploaded and processed successfully',
//         'video_url' => url('videos/processed.mp4'), 
//     ]);
// }
    public function upload(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string|max:1000',
            'video' => 'required|mimes:mp4,mov,ogg,qt|max:20000' 
        ]);

        $filePath = $request->file('video')->store('videos', 'public');

        Video::create([
            'user_id' => Auth::id(),
            'title' => $request->title,
            'description' => $request->description,
            'file_path' => $filePath,
            'mime_type' => $request->file('video')->getClientMimeType(),
            'size' => $request->file('video')->getSize(),
        ]);

        return redirect('/dashboard')->with('success', 'Video uploaded successfully');
    }
    public function dash()
    {
        
        $videos = Video::latest()->get();

       
        return Inertia::render('Dash', [
            'videos' => $videos,
        ]);
    }
  
}
