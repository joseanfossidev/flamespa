<?php

namespace App\Models\Tracking\Configurations;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DeviceType extends Model
{
    use HasFactory;

    protected $table = 'tracking_devices_types';

    protected $fillable = [
        'name',
    ];
}
