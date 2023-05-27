document.addEventListener('DOMContentLoaded', function() {
    const searchForm = document.getElementById('search-form');
    const classInput = document.getElementById('class-input');
    const studentNameInput = document.getElementById('student-name-input');
    const searchResultsTable = document.getElementById('search-results-table');
    const searchResultsBody = document.getElementById('search-results-body');
  
    let studentData = []; // Dữ liệu danh sách học sinh
  
    searchForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const className = classInput.value.trim();
      const studentName = studentNameInput.value.trim();
  
      // Tra cứu học sinh
      const searchResults = studentData.filter(function(student) {
        if (className && studentName) {
          return student.class === className && student.name.toLowerCase().includes(studentName.toLowerCase());
        } else if (className) {
          return student.class === className;
        } else if (studentName) {
          return student.name.toLowerCase().includes(studentName.toLowerCase());
        }
        return false;
      });
  
      // Hiển thị kết quả tra cứu
      displaySearchResults(searchResults);
    });
  
    // Hàm hiển thị kết quả tra cứu
    function displaySearchResults(results) {
      searchResultsBody.innerHTML = '';
      results.forEach(function(student, index) {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${index + 1}</td>
          <td>${student.name}</td>
          <td>${student.grade1}</td>
          <td>${student.grade2}</td>
        `;
        searchResultsBody.appendChild(row);
      });
    }
  
    // Dữ liệu mẫu danh sách học sinh
    studentData = [
      { name: 'Nguyễn Văn A', class: '12A', grade1: 8.5, grade2: 9.0 },
      { name: 'Trần Thị B', class: '12A', grade1: 9.0, grade2: 8.0 },
      { name: 'Phạm Văn C', class: '11B', grade1: 7.5, grade2: 7.5 },
      { name: 'Lê Thị D', class: '11B', grade1: 8.0, grade2: 7.0 },
      { name: 'Hoàng Văn E', class: '10C', grade1: 7.0, grade2: 6.5 },
      { name: 'Mai Thị F', class: '10C', grade1: 6.5, grade2: 7.0 },
    ];
  });
  