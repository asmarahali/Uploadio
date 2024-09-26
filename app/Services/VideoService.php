<?php

namespace App\Services;

use FFMpeg\FFMpeg;
use FFMpeg\Format\Video\X264;

class VideoService
{
    protected $ffmpeg;

    public function __construct()
    {
        $this->ffmpeg = FFMpeg::create([
            'ffmpeg.binaries'  => env('FFMPEG_PATH', 'C:\ProgramData\chocolatey\bin\ffmpeg.exe'),
            'ffprobe.binaries' => env('FFPROBE_PATH', 'C:\ProgramData\chocolatey\bin\ffprobe.exe'),
            'timeout'          => 3600, // Adjust according to your needs
            'ffmpeg.threads'   => 12,   // Adjust according to your CPU threads
        ]);
    }

    public function convertVideo($inputPath, $outputPath)
    {
        $video = $this->ffmpeg->open($inputPath);
        $video->save(new X264(), $outputPath);
    }
}
