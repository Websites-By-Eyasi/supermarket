<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class ProductVariant extends Model{

    use HasFactory;
    use SoftDeletes;
    protected $casts = [ 'created_at' => 'datetime:Y-m-d H:m' ];

    protected $fillable = [
        'product_id',
        'vendor_id',

        'variant_name',
        'restocking_quantity',
        'measuring_unit',
        'base_price',

        'is_published',

        'description',
        'thumbnail_img',
        'img_url',

        'created_by',
        'deleted_by'
    ];

    public function vendor(){
        return $this->belongsTo('App\Models\Vendor','vendor_id');
    }

    public function product(){
        return $this->belongsTo('App\Models\Product','product_id');
    }

    public function images(){
        return $this->hasMany('App\Models\ProductImage','product_variant_id');
    }

    public function prices(){
        return $this->hasMany('App\Models\ProductVariantPrice','product_variant_id');
    }


}


