<?php

namespace App\Models\Tracking\Configurations;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Vehicle extends Model
{
    use HasFactory;

    protected $table = 'tracking_vehicles';

    protected $fillable = [
        'patent',
    ];
}
