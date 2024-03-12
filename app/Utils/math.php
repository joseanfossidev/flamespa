<?php

function sum($a, $b)
{
    if (! is_numeric($a) || ! is_numeric($b)) {
        return 'Error';
    }

    return $a + $b;
}

function sub($a, $b)
{
    return $a - $b;
}

function mul($a, $b)
{
    return $a * $b;
}

function div($a, $b)
{
    return $a / $b;
}
