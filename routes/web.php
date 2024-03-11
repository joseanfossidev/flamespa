<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\Tracking\Configurations\DevicesTypesController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
                        'canLogin' => Route::has('login'),
                        'canRegister' => Route::has('register'),
                        'laravelVersion' => Application::VERSION,
                        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    // all app routes
    Route::group(['prefix' => 'app'], function () {

        // all tracking routes
        Route::group(['prefix' => 'tracking'], function () {

            // all tracking configurations routes
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
            });
        });
    });
});

require __DIR__.'/auth.php';
