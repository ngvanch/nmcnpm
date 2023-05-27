document.addEventListener('DOMContentLoaded', function() {
    const addStudentBtn = document.getElementById('add-student-btn');
    const addStudentForm = document.getElementById('add-student-form');
    const studentForm = document.getElementById('student-form');
    const deleteStudentBtn = document.getElementById('delete-student-btn');
    const deleteStudentForm = document.getElementById('delete-student-form');
    const deleteForm = document.getElementById('delete-form');
    const editStudentBtn = document.getElementById('edit-student-btn');
    const editStudentForm = document.getElementById('edit-student-form');
    const editForm = document.getElementById('edit-form');
    const studentList = document.getElementById('student-list');
  
    let studentData = []; // Mảng lưu thông tin học sinh
  
    addStudentBtn.addEventListener('click', function() {
      addStudentForm.classList.remove('hidden');
    });
  
    studentForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const classInput = document.getElementById('class-input');
      const nameInput = document.getElementById('name-input');
      const genderInput = document.getElementById('gender-input');
      const dobInput = document.getElementById('dob-input');
      const addressInput = document.getElementById('address-input');
      const emailInput = document.getElementById('email-input');
  
      const student = {
        class: classInput.value,
        name: nameInput.value,
        gender: genderInput.value,
        dob: dobInput.value,
        address: addressInput.value,
        email: emailInput.value
      };
  
      studentData.push(student); // Thêm thông tin học sinh vào mảng
  
      // Tạo hàng mới cho bảng danh sách học sinh
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${studentData.length}</td>
        <td>${student.class}</td>
        <td>${student.name}</td>
        <td>${student.gender}</td>
        <td>${student.dob}</td>
        <td>${student.address}</td>
        <td>${student.email}</td>
      `;
      studentList.appendChild(row);
  
      // Đặt giá trị mặc định cho các input
      classInput.value = '';
      nameInput.value = '';
      genderInput.value = 'Nam';
      dobInput.value = '';
      addressInput.value = '';
      emailInput.value = '';
  
      addStudentForm.classList.add('hidden');
    });
  
    deleteStudentBtn.addEventListener('click', function() {
      deleteStudentForm.classList.remove('hidden');
    });
  
    deleteForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const deleteNameInput = document.getElementById('delete-name-input');
      const deleteClassInput = document.getElementById('delete-class-input');
      const name = deleteNameInput.value;
      const classValue = deleteClassInput.value;
  
      // Tìm học sinh theo tên và lớp
      const index = studentData.findIndex(function(student) {
        return student.name === name && student.class === classValue;
      });
  
      if (index !== -1) {
        studentData.splice(index, 1); // Xóa học sinh khỏi mảng
  
        // Xóa hàng tương ứng trong bảng danh sách học sinh
        studentList.deleteRow(index);
  
        deleteNameInput.value = '';
        deleteClassInput.value = '';
  
        deleteStudentForm.classList.add('hidden');
      }
    });
  
    editStudentBtn.addEventListener('click', function() {
      editStudentForm.classList.remove('hidden');
    });
  
    editForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const editNameInput = document.getElementById('edit-name-input');
      const editClassInput = document.getElementById('edit-class-input');
      const editGenderInput = document.getElementById('edit-gender-input');
      const editDobInput = document.getElementById('edit-dob-input');
      const editAddressInput = document.getElementById('edit-address-input');
      const editEmailInput = document.getElementById('edit-email-input');
      const name = editNameInput.value;
      const classValue = editClassInput.value;
  
      // Tìm học sinh theo tên và lớp
      const index = studentData.findIndex(function(student) {
        return student.name === name && student.class === classValue;
      });
  
      if (index !== -1) {
        // Cập nhật thông tin học sinh
        studentData[index].name = name;
        studentData[index].gender = editGenderInput.value;
        studentData[index].dob = editDobInput.value;
        studentData[index].address = editAddressInput.value;
        studentData[index].email = editEmailInput.value;
  
        // Cập nhật hàng tương ứng trong bảng danh sách học sinh
        const row = studentList.rows[index];
        row.cells[2].textContent = name;
        row.cells[3].textContent = editGenderInput.value;
        row.cells[4].textContent = editDobInput.value;
        row.cells[5].textContent = editAddressInput.value;
        row.cells[6].textContent = editEmailInput.value;
  
        editNameInput.value = '';
        editClassInput.value = '';
        editGenderInput.value = 'Nam';
        editDobInput.value = '';
        editAddressInput.value = '';
        editEmailInput.value = '';
  
        editStudentForm.classList.add('hidden');
      }
    });
  });
  