<?php

use App\Http\Controllers\UserController;
use App\Http\Controllers\VideoController;
use Illuminate\Support\Facades\Route;


Route::get('/register', function () {
    return inertia('Register');
})->name('register');

Route::post('/register', [UserController::class, 'register']);


Route::get('/login', function () {
    return inertia('Login'); })->name('login');

    Route::post('/login', [UserController::class, 'login']);


Route::get('/', function () {
    return inertia('Home');
});


Route::middleware('auth')->group(function () {
    Route::get('/dashboard', function () { return inertia('Dash'); })->name('dashboard');
    Route::get('/dashboard', [VideoController::class, 'dash'])->name('dashboard');

    Route::post('/logout', [UserController::class, 'logout'])->name('logout');
    
    Route::post('/upload-video', [VideoController::class, 'upload'])->name('video.upload');
    Route::inertia('/upload', 'Upload');

    Route::get('/videos/{video}/edit', [VideoController::class, 'edit'])->name('video.edit');
    Route::inertia('/edit', 'Edit');

    Route::get('/all', [VideoController::class, 'all'])->name('video.all');
    Route::inertia('/all', 'AllVideos');

   // Route::post('/upload-video', [VideoController::class, 'uploadVideo']);
});

