
<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateComplaintsCommentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('complaints_comments', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('complaint_id')->unsigned();
            $table->integer('user_id')->unsigned();
            $table->text('comment');
            $table->timestamps();

            $table->foreign('complaint_id')->references('id')->on('complaints')->onDelete('cascade');
<<<<<<< HEAD
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            
=======
            $table->foreign('user_id')->references('id')->on('users');
>>>>>>> 46cbd99e11f43d2b9b3cee78a9bc6b3671a14030
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('complaints_comments');
    }
}
