<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Video extends Model
{
    use HasFactory;
    protected $fillable = [
        'user_id',
        'title',
        'description',
        'uid',
        'path',
        'processed_file',
        'visibility',
        'processed',
        'allow_like',
        'allow_coments',
        'processing_percentage',
    ];

    protected $casts = [
        'processed' => 'boolean',
        'allow_like' => 'boolean',
        'allow_coments' => 'boolean',
    ];
    // Video belongs to a user
    public function user()
    {
        return $this->belongsTo(User::class);
    }
    
}
