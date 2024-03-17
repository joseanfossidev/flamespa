<?php

namespace Database\Seeders;

use App\Models\Tracking\Configurations\Device;
use Illuminate\Database\Seeder;

class DeviceSeeder extends Seeder
{
    private $records = [
        [
            'device_type_id' => 1,
            'name' => 'GV55W001',
            'number_avl' => 'AVL001',
            'number_imei' => 'IMEI001',
            'phone_number' => '+569001',
            'network_provider' => 'Claro',
            'network_bandwith' => '50MB',
            'provider_supplier' => 'Global Network',
        ],
    ];

    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        foreach ($this->records as $record) {
            $device = new Device;
            $device->device_type_id = $record['device_type_id'];
            $device->name = $record['name'];
            $device->number_avl = $record['number_avl'];
            $device->number_imei = $record['number_imei'];
            $device->phone_number = $record['phone_number'];
            $device->network_provider = $record['network_provider'];
            $device->network_bandwith = $record['network_bandwith'];
            $device->provider_supplier = $record['provider_supplier'];
            $device->save();
        }

        // Device::factory()->count(100)->create();
    }
}
