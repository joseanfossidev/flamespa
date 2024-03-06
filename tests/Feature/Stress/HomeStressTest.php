<?php

use function Pest\Stressless\stress;

it('has a fast response time', function () {
    $result = stress('/');

    expect($result->requests()->duration()->med())
        ->toBeLessThan(100);
});
