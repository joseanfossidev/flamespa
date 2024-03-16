<?php

namespace Database\Factories\Tracking\Configurations;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Tracking\Configurations\Vehicle>
 */
class VehicleFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'patent' => $this->faker->unique()->regexify('[A-Z]{3}[0-9]{3}'),
        ];
    }
}
