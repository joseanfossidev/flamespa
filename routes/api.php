<?php

use App\Jobs\ProcessTransmition;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('transmitions', function () {

    $data = request()->all();
    ProcessTransmition::dispatch($data);

    return response()->json(['message' => 'Transmition created'], 201);
});
