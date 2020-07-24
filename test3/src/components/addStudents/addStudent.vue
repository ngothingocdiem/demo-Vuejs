<template>
  <!-- <div class="addTodo">
        <form action="#" @submit='submit'>
            <input type="text" v-model="name" placeholder="name...">
            <input type="text" v-model="age" placeholder="age...">
            <input type="text" v-model="sex" placeholder="sex...">
            <input type="text" v-model="address" placeholder="address...">
            <input type="text" v-model="classs" placeholder="classs...">
            <input type="text" v-model="score" placeholder="score...">
            
            <router-link to="/"><input type="submit" value="Submit"></router-link>
            
        </form>
  </div>-->
  <div class="container mt-4">
    <div class="row">
      <div class="col-md-6 col-12">
        <div class="card">
          <div class="card-header text-white">Thêm sinh viên</div>
          <div class="card-body">
            <form>
              <div class="form-group">
                <div class="row">
                  <div class="col-md-3 col-12">
                    <label>Họ và tên:</label>
                  </div>
                  <div class="col-md-9 col-12">
                    <input
                      type="text"
                      class="form-control"
                      v-model.trim="name"
                      placeholder="Họ và tên..."
                    />
                  </div>
                </div>
              </div>
              <div class="form-group">
                <div class="row">
                  <div class="col-md-3 col-12">
                    <label>Tuổi:</label>
                  </div>
                  <div class="col-md-9 col-12">
                    <input
                      type="number"
                      min="0"
                      max="100"
                      class="form-control"
                      v-model.number="age"
                      placeholder="Nhập tuổi..."
                    />
                  </div>
                </div>
              </div>
              <div class="form-group">
                <div class="row">
                  <div class="col-md-3 col-12">
                    <label>Giới tính:</label>
                  </div>
                  <div class="col-md-9 col-12">
                    <input
                      type="text"
                      class="form-control"
                      v-model="sex"
                      placeholder="Nhập giới tính..."
                    />
                  </div>
                </div>
              </div>
              <div class="form-group">
                <div class="row">
                  <div class="col-md-3 col-12">
                    <label>Địa chỉ:</label>
                  </div>
                  <div class="col-md-9 col-12">
                    <input
                      type="text"
                      class="form-control"
                      v-model.trim="address"
                      placeholder="Nhập địa chỉ..."
                    />
                  </div>
                </div>
              </div>
              <div class="form-group">
                <div class="row">
                  <div class="col-md-3 col-12">
                    <label>Lớp :</label>
                  </div>
                  <div class="col-md-9 col-12">
                    <input
                      type="text"
                      class="form-control"
                      v-model.trim="classs"
                      placeholder="Nhập tên lớp..."
                    />
                  </div>
                </div>
              </div>
              <div class="form-group">
                <div class="row">
                  <div class="col-md-3 col-12">
                    <label>Điểm:</label>
                  </div>
                  <div class="col-md-9 col-12">
                    <input
                      type="number"
                      min="0"
                      max="10"
                      class="form-control"
                      v-model.number="score"
                      placeholder="Nhập điểm..."
                    />
                  </div>
                </div>
              </div>
              <button @click="submit($event)" type="submit" class="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./public/js/addStudent.js"></script>

<style src="./public/sass/addstudent.scss" lang="scss" scoped></style>
