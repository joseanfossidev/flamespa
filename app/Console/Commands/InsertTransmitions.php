<?php

namespace App\Console\Commands;

use GuzzleHttp\Client;
use Illuminate\Console\Command;

class InsertTransmitions extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:insert-transmitions';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Generate transmitions';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $loops = 120;
        $loopsPerSecond = 70;
        $timeout = 1;

        $position = [-53.8870338, -65.4940677];
        $speed = 0;

        while ($loops > 0) {
            $position = $this->updatePosition($position[0], $position[1], 100);

            // load data
            $data = [
                'imei' => 'IMEI001',
                'timestamp' => date('Y-m-d H:i:s'),
                'latitude' => $position[0],
                'longitude' => $position[1],
                'speed' => random_int(0, 100),
            ];

            for ($i = 0; $i < $loopsPerSecond; $i++) {
                $this->sendDataToApiGuzzle('http://localhost:8000/api/transmitions', $data);
            }

            // simulate increment speed
            $speed = ($speed == 200) ? 0 : $speed++;

            echo 'Inserting data...'.PHP_EOL;

            $loops--;

            sleep($timeout);
        }
    }

    private function updatePosition($lat, $lng, $metrosNorte)
    {
        $deltaLat = $metrosNorte / 111000;
        $nuevaLat = $lat + $deltaLat;
        $position = sprintf('%.7f,%.7f', $nuevaLat, $lng);

        return explode(',', $position);
    }

    private function sendDataToApiGuzzle($url, $data)
    {
        $client = new Client();

        try {
            $response = $client->request('POST', $url, [
                'json' => $data,
            ]);

            return $response->getBody()->getContents();
        } catch (Exception $e) {
            echo $e->getMessage();
        }
    }
}
