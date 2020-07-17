<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('sanpham','Api\SanPhamController@index');
Route::get('sanpham/{sanpham}','Api\SanPhamController@show');
Route::post('sanpham/{sanpham}','Api\SanPhamController@store');
Route::delete('sanpham/{sanpham}','Api\SanPhamController@destroy');

