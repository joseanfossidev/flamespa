<?php

namespace App\Models\Tracking\Configurations;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DeviceVehicle extends Model
{
    use HasFactory;

    protected $table = 'tracking_devices_vehicles';

    protected $fillable = [
        'device_id',
        'vehicle_id',
        'status',
    ];
}