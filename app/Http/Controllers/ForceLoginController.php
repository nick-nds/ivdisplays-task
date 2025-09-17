<?php

namespace App\Http\Controllers;

use App\Enums\Role;
use App\Http\Requests\ForceLoginRequest;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;

class ForceLoginController extends Controller
{
    public function store(ForceLoginRequest $request): RedirectResponse
    {
        $credentials = $request->validated();

        if(!Auth::attempt($credentials)) {
            return response()->json(['message' => 'Invalid credentials'], 401);
        }

        $user = Auth::user();

        if($user->sessions->count() > 0) {
            $user->sessions()
                 ->where(
                     'id',
                     '!=',
                     session()->getId()
                 )
                 ->delete();
        }

        if($user->role === Role::ADMIN->value) {
            return redirect()->route('admin.dashboard');
        }
        return redirect()->route('dashboard');
    }
}
