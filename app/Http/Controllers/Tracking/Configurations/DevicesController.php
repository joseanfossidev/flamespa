<?php

namespace App\Http\Controllers\Tracking\Configurations;

use App\Http\Controllers\Controller;
use App\Http\Requests\Tracking\Configurations\Devices\StoreDeviceRequest;
use App\Models\Tracking\Configurations\Device;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DevicesController extends Controller
{
    public function index()
    {
        $this->authorize('index', Device::class);

        $decives = Device::with('type')
            ->when(request('search'), function ($query, $search) {
                $query
                    ->where('name', 'like', "%$search%")
                    ->orWhere('number_avl', 'like', "%$search%")
                    ->orWhere('number_imei', 'like', "%$search%")
                    ->orWhere('phone_number', 'like', "%$search%")
                    ->orWhere('network_provider', 'like', "%$search%")
                    ->orWhere('network_bandwith', 'like', "%$search%")
                    ->orWhere('provider_supplier', 'like', "%$search%");
            })
            ->paginate(request()->query('per_page', 20))
            ->appends(request()->query());

        return Inertia::render('App/Tracking/Configurations/Devices/List', [
            'paginate' => $decives,
        ]);
    }

    public function create()
    {
        $this->authorize('create', Device::class);

        return 'Create a new device type.';
    }

    public function store(StoreDeviceRequest $request)
    {
        Device::create($request->validated());

        return redirect()
            ->route('devices-types.index')
            ->with('error', 'Error test.');
    }

    public function show(string $id)
    {
        $this->authorize('show', Device::class);

        return Device::find($id);
    }

    public function edit(string $id)
    {
        $this->authorize('update', Device::class);

        return 'Edit a device type.';
    }

    public function update(Request $request, string $id)
    {
        $this->authorize('update', Device::class);

        return 'Update a device type.';
    }

    public function destroy(string $id)
    {
        $this->authorize('delete', Device::class);

        return 'Delete a device type.';
    }
}
