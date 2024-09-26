<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('videos', function (Blueprint $table) {
            $table->id();  
            $table->foreignId('user_id')->constrained()->onDelete('cascade'); // Foreign key to 'users' table
            $table->string('title');
            $table->text('description')->nullable();
            $table->string('uid');
            $table->text('path')->nullable(); 
            $table->string('processed_file')->nullable();  
            $table->enum('visibility', ['privet','public'])->default('public');  

            $table->boolean('processed')->default(false); 
            $table->boolean('allow_like')->default(false); 
            $table->boolean('allow_coments')->default(false); 
            $table->string('processing_percentage')->default(false); 
            
            $table->timestamps();  
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('videos');
    }
};
