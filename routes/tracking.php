<?php

use App\Http\Controllers\Tracking\Configurations\DevicesController;
use App\Http\Controllers\Tracking\Configurations\DevicesTypesController;
use Illuminate\Support\Facades\Route;

Route::middleware('auth')->group(function () {
    Route::group(['prefix' => 'app'], function () {
        Route::group(['prefix' => 'tracking'], function () {
            Route::group(['prefix' => 'configurations'], function () {
                Route::resource('devices-types', DevicesTypesController::class)->names([
                    'index' => 'devices-types.index',
                    'create' => 'devices-types.create',
                    'store' => 'devices-types.store',
                    'show' => 'devices-types.show',
                    'edit' => 'devices-types.edit',
                    'update' => 'devices-types.update',
                    'destroy' => 'devices-types.destroy',
                ]);

                Route::resource('devices', DevicesController::class)->names([
                    'index' => 'devices.index',
                    'create' => 'devices.create',
                    'store' => 'devices.store',
                    'show' => 'devices.show',
                    'edit' => 'devices.edit',
                    'update' => 'devices.update',
                    'destroy' => 'devices.destroy',
                ]);
            });
        });
    });
});
