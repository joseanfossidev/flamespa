<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DeviceTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        \App\Models\Tracking\Configurations\DeviceType::factory(100)->create();
    }
}
