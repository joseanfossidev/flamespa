<?php

namespace App\Models\Tracking\Configurations;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Transmition extends Model
{
    use HasFactory;

    protected $table = 'tracking_transmitions';

    protected $fillable = [
        'device_id',
        'vehicle_id',
        'timestamp',
        'latitude',
        'longitude',
        'speed',
    ];
}
