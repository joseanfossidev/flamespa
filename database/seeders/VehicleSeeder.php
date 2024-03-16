<?php

namespace Database\Seeders;

use App\Models\Tracking\Configurations\Vehicle;
use Illuminate\Database\Seeder;

class VehicleSeeder extends Seeder
{
    private $records = [
        ['patent' => 'ABC123'],
    ];

    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        foreach ($this->records as $record) {
            $vehicle = new Vehicle;
            $vehicle->patent = $record['patent'];
            $vehicle->save();
        }

        Vehicle::factory()->count(100)->create();
    }
}
