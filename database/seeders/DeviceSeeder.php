<?php

namespace Database\Seeders;

use App\Models\Tracking\Configurations\Device;
use Illuminate\Database\Seeder;

class DeviceSeeder extends Seeder
{
    private $records = [
        [
            'device_type_id' => 1,
            'name' => 'Device 1',
            'number_avl' => '1234567890',
            'number_imei' => '1234567890',
            'phone_number' => '1234567890',
            'network_provider' => 'Network Provider 1',
            'network_bandwith' => 'Network Bandwith 1',
            'provider_supplier' => 'Provider Supplier 1',
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
