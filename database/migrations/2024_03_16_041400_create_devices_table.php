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
        Schema::create('tracking_devices', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('device_type_id');
            $table->foreign('device_type_id')->references('id')->on('tracking_devices_types');
            $table->string('name')->unique();
            $table->string('number_avl')->unique();
            $table->string('number_imei')->unique();
            $table->string('phone_number')->unique();
            $table->string('network_provider')->unique();
            $table->string('network_bandwith')->unique();
            $table->string('provider_supplier')->unique();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tracking_devices');
    }
};
