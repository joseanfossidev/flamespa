<?php

namespace App\Http\Controllers\Tracking\Configurations;

use App\Http\Controllers\Controller;
use App\Models\Tracking\Configurations\Vehicle;
use Illuminate\Http\Request;
use Inertia\Inertia;

class VehiclesController extends Controller
{
    public function index()
    {
        $this->authorize('index', Vehicle::class);

        $vehicles = Vehicle::
            when(request('search'), function ($query, $search) {
                $query
                    ->where('patent', 'like', "%$search%");
            })
            ->paginate(request()->query('per_page', 20))
            ->appends(request()->query());

        return Inertia::render('App/Tracking/Configurations/Vehicles/List', [
            'paginate' => $vehicles,
        ]);
    }

    public function create()
    {
        $this->authorize('create', Vehicle::class);
        //
    }

    public function store(StoreDeviceRequest $request)
    {
        Vehicle::create($request->validated());
        //
    }

    public function show(string $id)
    {
        $this->authorize('show', Vehicle::class);
        //
    }

    public function edit(string $id)
    {
        $this->authorize('update', Vehicle::class);
        //
    }

    public function update(Request $request, string $id)
    {
        $this->authorize('update', Vehicle::class);
        //
    }

    public function destroy(string $id)
    {
        $this->authorize('delete', Vehicle::class);
        //
    }
}
