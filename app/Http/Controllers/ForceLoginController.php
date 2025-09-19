<?php

namespace App\Http\Controllers;

use App\Enums\Role;
use App\Http\Requests\ForceLoginRequest;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;
use App\Events\SessionInvalidated;

class ForceLoginController extends Controller
{
    public function store(ForceLoginRequest $request): RedirectResponse
    {
        $credentials = $request->validated();

        if(!Auth::attempt($credentials)) {
            return response()->json(['message' => 'Invalid credentials'], 401);
        }

        $user = Auth::user();

        // $sessionId = $user->sessions()->first();

        $user->sessions()
             ->where(
                 'id',
                 '!=',
                 session()->getId()
             )
             ->get()
             ->each(function($s) {
                $sessionId = $s->id;
                $s->delete();
                SessionInvalidated::dispatch($sessionId);
             });

        if($user->role === Role::ADMIN->value) {
            return redirect()->route('admin.dashboard');
        }
        return redirect()->route('dashboard');
    }
}
