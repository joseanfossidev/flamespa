<?php

namespace App\Jobs;

use App\Models\Tracking\Configurations\Device;
use App\Models\Tracking\Configurations\Transmition;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class ProcessTransmition implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    protected $data;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct($data)
    {
        $this->data = $data;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $device = Device::where('number_imei', $this->data['imei'])->first(); // y podría eliminar esto
        if (! $device) {
            return;
        }

        $transmition = new Transmition();
        $transmition->timestamp = now();
        $transmition->device_id = $device->id; // Esto se puede cambiar por el email haciendolo un key
        $transmition->latitude = $this->data['latitude'];
        $transmition->longitude = $this->data['longitude'];
        $transmition->speed = $this->data['speed'];
        $transmition->save();
    }
}
