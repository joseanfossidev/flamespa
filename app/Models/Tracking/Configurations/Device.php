<?php

namespace App\Models\Tracking\Configurations;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Device extends Model
{
    use HasFactory;

    protected $table = 'tracking_devices';

    protected $fillable = [
        'name',
        'code',
    ];

    // find retaion with device_type_id from tracking_devices_types id
    public function type()
    {
        return $this->belongsTo(DeviceType::class, 'device_type_id');
    }
}
