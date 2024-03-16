<?php

namespace App\Policies\Tracking\Configurations;

use App\Models\User;
use Illuminate\Auth\Access\Response;

class DevicePolicy
{
    private function responsePolicy(bool $isAllowed)
    {
        return match ($isAllowed) {
            true => Response::allow(),
            default => Response::deny('No estás autorizado.'),
        };
    }

    public function index(User $user): Response
    {
        $isAllowed = true;

        return $this->responsePolicy($isAllowed);
    }

    public function show(User $user): Response
    {
        $isAllowed = true;

        return $this->responsePolicy($isAllowed);
    }

    public function create(User $user): bool
    {
        $isAllowed = true;

        return $isAllowed;
    }

    public function update(User $user): Response
    {
        $isAllowed = true;

        return $this->responsePolicy($isAllowed);
    }

    public function delete(User $user): Response
    {
        $isAllowed = true;

        return $this->responsePolicy($isAllowed);
    }
}
