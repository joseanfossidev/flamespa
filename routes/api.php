<?php

use App\Jobs\ProcessTransmition;
use App\Models\Tracking\Configurations\Device;
use App\Models\Tracking\Configurations\Transmition;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('device', function () {
    $device = new Device;
    $device->device_type_id = 1;
    $device->name = 'GV55W001';
    $device->number_avl = 'AVL001';
    $device->number_imei = 'IMEI001';
    $device->phone_number = '+569001';
    $device->network_provider = 'Claro';
    $device->network_bandwith = '50MB';
    $device->provider_supplier = 'Global Network';
    $device->save();

    return response()->json(['device' => $device]);
});

Route::get('transmitions', function () {
    $transmitionsCount = Transmition::count();

    return response()->json(['transmitions' => $transmitionsCount]);
});

Route::post('transmitions', function () {
    $data = request()->all();
    ProcessTransmition::dispatch($data);

    return response()->json(['message' => 'Transmition created '.$data['imei']], 201);
});

Route::post('transmitions-empty', function () {
    $data = request()->all();

    return response()->json(['message' => 'Transmition created '.$data['imei']], 201);
});
