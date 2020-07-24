<template>
  <!-- <div class="addTodo">
        <form action="#" @submit='submit'>
            <input type="text" v-model="title" placeholder="addTodo...">
            <input type="submit" value="Submit">
        </form>
    </div> -->
  <div class="container">
    <div class="row d-md-flex justify-content-center">
      <div class="col-md-6 col-12">
        <div class="card">
          <div class="card-header text-white">Sửa sinh viên</div>
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
                      id="name"
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
                    <input type="number" min = 0 max = 100 class="form-control" id="age" placeholder="Nhập tuổi..." />
                  </div>
                </div>
              </div>
              <div class="form-group">
                <div class="row">
                  <div class="col-md-3 col-12">
                    <label>Điểm:</label>
                  </div>
                  <div class="col-md-9 col-12">
                    <input type="number" min = 0 max = 10 class="form-control" id="score" placeholder="Nhập điểm..." />
                  </div>
                </div>
              </div>
              <button type="submit" class="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./public/js/editStudent.js"></script>

<style src="./public/sass/editstudent.scss" lang="scss" scoped></style>
