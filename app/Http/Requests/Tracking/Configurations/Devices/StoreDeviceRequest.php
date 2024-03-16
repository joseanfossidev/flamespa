<?php

namespace App\Http\Requests\Tracking\Configurations\Devices;

use Illuminate\Foundation\Http\FormRequest;

class StoreDeviceRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'name' => 'required|string|min:3|max:255|unique:tracking_devices',
            'code' => 'required|string|min:3|max:50|unique:tracking_devices',
        ];
    }
}
