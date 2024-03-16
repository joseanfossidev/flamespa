<?php

namespace Database\Seeders;

use App\Models\Tracking\Configurations\DeviceType;
use Illuminate\Database\Seeder;

class DeviceTypeSeeder extends Seeder
{
    private $records = [
        ['name' => 'GPS'],
        ['name' => 'Tablet'],
        ['name' => 'DVR'],
        ['name' => 'MDVR'],
    ];

    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        foreach ($this->records as $record) {
            $deviceType = new DeviceType;
            $deviceType->name = $record['name'];
            $deviceType->save();
        }
    }
}
