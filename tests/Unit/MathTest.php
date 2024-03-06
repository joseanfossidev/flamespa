<?php

require_once __DIR__.'/../../app/Utils/math.php';

describe('Math', function () {
    it('should sum two numbers', function () {
        expect(sum(2, 2))->toBe(4);
    });

    it('should subtract two numbers', function () {
        expect(sub(2, 2))->toBe(0);
    });

    it('should multiply two numbers', function () {
        expect(mul(2, 2))->toBe(4);
    });

    it('should divide two numbers', function () {
        expect(div(2, 2))->toBe(1);
    });
});
