<?php

namespace App\Http\Requests\Tracking\Configurations\DevicesTypes;

use Illuminate\Foundation\Http\FormRequest;

class StoreDeviceTypeRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'name' => 'required|string|min:3|max:255|unique:tracking_devices_types',
        ];
    }
}
