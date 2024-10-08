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

    Route::get('/video/{id}', [VideoController::class, 'show'])->name('video.show');

    Route::delete('/video/{id}', [VideoController::class, 'destroy'])->name('video.destroy');


    Route::get('/video/{id}/edit', [VideoController::class, 'edit'])->name('video.edit');

    Route::put('/video/{id}', [VideoController::class, 'update'])->name('video.update');

    Route::get('/all', [VideoController::class, 'all'])->name('video.all');
    Route::inertia('/all', 'AllVideos');

});

