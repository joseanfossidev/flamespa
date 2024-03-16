<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        User::factory()->create([
            'name' => 'Irwing',
            'email' => 'khalisser@gmail.com',
            'password' => bcrypt('qwerty123'),
        ]);

        $this->call([
            DeviceTypeSeeder::class,
            DeviceSeeder::class,
        ]);
    }
}
