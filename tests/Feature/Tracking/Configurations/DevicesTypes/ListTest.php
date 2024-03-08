<?php

/*
* Este test verifica que se pueda listar los
* tipos de dispositivos del módulo de seguimiento.
*
* Test TCDT1: debería retornar un status 200 al entrar a la ruta
* Test TCDT2: debería retornar al login si se intenta acceder sin estar autenticado
* Test TCDT3: debería retornar no hay tipos de dispositivos si no hay registros
* Test TCDT4: debería retornar al menos un registro en la tabla
* Test TCDT5: debería retornar al menos un registro en la tabla si hago una busqueda correcta
* Test TCDT6: debería retornar un mensaje no se encontraron registros si hago una busqueda incorrecta
*/

use App\Models\Tracking\Configurations\DeviceType;
use App\Models\User;

use function Pest\Laravel\{actingAs};

beforeEach(function () {

    $this->URL = '/app/tracking/configurations/devices-types';

    $this->STATUS = (object) [
        'OK' => 200,
        'FOUND' => 302,
        'NOT_FOUND' => 404,
        'UNAUTHORIZED' => 401,
    ];

    $this->user = User::factory()->create();
});

describe('List', function () {

    test('TCDT1 - debería retornar un status 200 al entrar a la ruta', function () {
        $this
            ->actingAs($this->user)
            ->get($this->URL)
            ->assertStatus($this->STATUS->OK);
    });

    test('TCDT2 - debería retornar al login si se intenta acceder sin estar autenticado', function () {
        $this
            ->get($this->URL)
            ->assertStatus($this->STATUS->FOUND);
    });

    test('TCDT3 - debería retornar no hay tipos de dispositivos si no hay registros', function () {
        $this
            ->actingAs($this->user)
            ->get('/app/tracking/configurations/devices-types')
            ->assertStatus($this->STATUS->OK)
            ->assertSee('No hay tipos de dispositivos');
    });

    test('TCDT4 - debería retornar al menos un registro en la tabla', function () {

        $deviceType = DeviceType::factory()->create();

        $this
            ->actingAs($this->user)
            ->get('/app/tracking/configurations/devices-types')
            ->assertStatus($this->STATUS->OK)
            ->assertSee($deviceType->name);
    });
})->group('DevicesTypes');

// it('TCDT5 -debería retornar al menos un registro en la tabla si hago una busqueda correcta', function () {
//     $this
//         ->get('/app/tracking/configurations/devices-types?search=1')
//         ->assertStatus($this->STATUS->OK)
//         ->assertJsonCount(1, 'data');
// })->group('DevicesTypes');

// it('TCDT6 - debería retornar un mensaje no se encontraron registros si hago una busqueda incorrecta', function () {
//     $this
//         ->get('/app/tracking/configurations/devices-types?search=0')
//         ->assertStatus($this->STATUS->OK)
//         ->assertJsonFragment(['message' => 'No se encontraron registros']);
// })->group('DevicesTypes');
