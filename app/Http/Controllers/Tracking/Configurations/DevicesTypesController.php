<?php

namespace App\Http\Controllers\Tracking\Configurations;

use App\Http\Controllers\Controller;
use App\Http\Requests\Tracking\Configurations\StoreDeviceTypeRequest;
use App\Models\Tracking\Configurations\DeviceType;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DevicesTypesController extends Controller
{
    public function index()
    {
        $this->authorize('index', DeviceType::class);

        $decivesTypes = DeviceType::when(request('search'), function ($query, $search) {
                $query->where('name', 'like', "%$search%");
            })
            ->paginate(10)
            ->appends(request()->query());

        return Inertia::render('App/Tracking/Configurations/DevicesTypes/List', [
            'paginate' => $decivesTypes,
        ]);
    }

    public function create()
    {
        $this->authorize('create', DeviceType::class);

        return 'Create a new device type.';
    }

    public function store(StoreDeviceTypeRequest $request)
    {
        DeviceType::create($request->validated());

        return redirect()
            ->route('devices-types.index')
            ->with('error', 'Error test.');
    }

    public function show(string $id)
    {
        $this->authorize('show', DeviceType::class);

        return DeviceType::find($id);
    }

    public function edit(string $id)
    {
        $this->authorize('update', DeviceType::class);

        return 'Edit a device type.';
    }

    public function update(Request $request, string $id)
    {
        $this->authorize('update', DeviceType::class);

        return 'Update a device type.';
    }

    public function destroy(string $id)
    {
        $this->authorize('delete', DeviceType::class);

        return 'Delete a device type.';
    }
}
