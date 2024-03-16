<?php

namespace App\Providers;

use App\Models\Tracking\Configurations\Device;
use App\Models\Tracking\Configurations\DeviceType;
use App\Policies\Tracking\Configurations\DevicePolicy;
use App\Policies\Tracking\Configurations\DeviceTypePolicy;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The model to policy mappings for the application.
     *
     * @var array<class-string, class-string>
     */
    protected $policies = [
        DeviceType::class => DeviceTypePolicy::class,
        Device::class => DevicePolicy::class,
    ];

    /**
     * Register any authentication / authorization services.
     */
    public function boot(): void
    {
        //
    }
}
