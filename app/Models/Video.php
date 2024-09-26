<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Video extends Model
{
    use HasFactory;
    protected $fillable = ['title', 'description', 'file_path', 'thumbnail_path', 'mime_type', 'size', 'user_id'];

    
    // Video belongs to a user
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
