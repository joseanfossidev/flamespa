<?php

namespace Database\Factories\Tracking\Configurations;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Device>
 */
class DeviceFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'device_type_id' => 1,
            'name' => $this->faker->uuid,
            'number_avl' => $this->faker->uuid,
            'number_imei' => $this->faker->uuid,
            'phone_number' => $this->faker->phoneNumber,
            'network_provider' => $this->faker->company,
            'network_bandwith' => $this->faker->numberBetween(1, 100),
            'provider_supplier' => $this->faker->company,
        ];
    }
}
