<?php

namespace App\Actions\Fortify;

use App\Enums\Role;
use Illuminate\Http\RedirectResponse;
use Laravel\Fortify\Contracts\LoginResponse as FortifyLoginResponse;

class LoginResponse implements FortifyLoginResponse
{
    public function toResponse($request): RedirectResponse
    {
        if($request->user()->role === Role::ADMIN->value) {
            return redirect()->route('admin.dashboard');
        }
        return redirect()->route('dashboard');
    }
}
