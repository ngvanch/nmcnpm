document.addEventListener('DOMContentLoaded', function() {
  const classForm = document.getElementById('class-form');
  const classInput = document.getElementById('class-input');
  const classSizeTable = document.getElementById('class-size-table');
  const classSizeBody = document.getElementById('class-size-body');
  const studentListTable = document.getElementById('student-list-table');
  const studentListBody = document.getElementById('student-list-body');

  let studentData = []; // Dữ liệu danh sách học sinh

  classForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const className = classInput.value;
    if (className) {
      const classSize = studentData.filter(function(student) {
        return student.class === className;
      }).length;

      // Hiển thị sĩ số lớp
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${className}</td>
        <td>${classSize}</td>
      `;
      classSizeBody.innerHTML = '';
      classSizeBody.appendChild(row);

      // Hiển thị danh sách học sinh trong lớp
      renderStudentList(className);
    }
  });

  function renderStudentList(className) {
    const filteredStudents = studentData.filter(function(student) {
      return student.class === className;
    });

    // Hiển thị danh sách học sinh
    studentListBody.innerHTML = '';
    filteredStudents.forEach(function(student, index) {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${index + 1}</td>
        <td>${student.name}</td>
        <td>${student.gender}</td>
        <td>${student.birthYear}</td>
        <td>${student.address}</td>
      `;
      studentListBody.appendChild(row);
    });
  }
});
