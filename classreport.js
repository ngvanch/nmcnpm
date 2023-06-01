document.getElementById('reportForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Lấy giá trị từ form
    var semester = document.getElementById('semester').value;

    // Gọi hàm để lấy dữ liệu báo cáo tổng kết từ server
    var reportData = getReportData(semester);

    // Hiển thị dữ liệu trong bảng báo cáo tổng kết
    displayReportTable(reportData);
});

function getReportData(semester) {
    // TODO: Gửi yêu cầu lấy dữ liệu báo cáo tổng kết từ server và trả về dữ liệu

    // Dữ liệu ví dụ
    var reportData = [
        { order: 1, class: 'A', totalStudents: 30, passCount: 25, passRate: 83.33 },
        { order: 2, class: 'B', totalStudents: 28, passCount: 20, passRate: 71.43 },
        { order: 3, class: 'C', totalStudents: 32, passCount: 28, passRate: 87.50 },
        { order: 4, class: 'D', totalStudents: 26, passCount: 22, passRate: 84.62 },
        { order: 5, class: 'E', totalStudents: 30, passCount: 24, passRate: 80.00 }
    ];

    return reportData;
}

function displayReportTable(data) {
    var reportTable = document.getElementById('reportTable').getElementsByTagName('tbody')[0];
    reportTable.innerHTML = '';

    for (var i = 0; i < data.length; i++) {
        var row = reportTable.insertRow(i);

        var orderCell = row.insertCell(0);
        orderCell.textContent = data[i].order;

        var classCell = row.insertCell(1);
        classCell.textContent = data[i].class;

        var totalStudentsCell = row.insertCell(2);
        totalStudentsCell.textContent = data[i].totalStudents;

        var passCountCell = row.insertCell(3);
        passCountCell.textContent = data[i].passCount;

        var passRateCell = row.insertCell(4);
        passRateCell.textContent = data[i].passRate + '%';
    }
}
