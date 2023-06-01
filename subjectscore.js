document.getElementById('scoreForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Lấy giá trị từ form
    var className = document.getElementById('class').value;
    var semester = document.getElementById('semester').value;
    var subject = document.getElementById('subject').value;

    // Gọi hàm để lấy dữ liệu bảng điểm từ server
    var scoreData = getScoreData(className, semester, subject);

    // Hiển thị dữ liệu trong bảng điểm
    displayScoreTable(scoreData);
});

function getScoreData(className, semester, subject) {
    // TODO: Gửi yêu cầu lấy dữ liệu bảng điểm từ server và trả về dữ liệu

    // Dữ liệu ví dụ
    var scoreData = [
        { name: 'Nguyễn Văn A', test15: 8, test1: 7.5, semester: 8.2 },
        { name: 'Trần Thị B', test15: 9, test1: 8, semester: 8.5 },
        { name: 'Lê Văn C', test15: 7, test1: 7.8, semester: 7.6 },
        { name: 'Phạm Thị D', test15: 8.5, test1: 8.2, semester: 8.4 },
        { name: 'Hoàng Văn E', test15: 6.5, test1: 7, semester: 6.8 }
    ];

    return scoreData;
}

function displayScoreTable(data) {
    var scoreTable = document.getElementById('scoreTable').getElementsByTagName('tbody')[0];
    scoreTable.innerHTML = '';

    for (var i = 0; i < data.length; i++) {
        var row = scoreTable.insertRow(i);

        var nameCell = row.insertCell(0);
        nameCell.textContent = data[i].name;

        var test15Cell = row.insertCell(1);
        test15Cell.textContent = data[i].test15;

        var test1Cell = row.insertCell(2);
        test1Cell.textContent = data[i].test1;

        var semesterCell = row.insertCell(3);
        semesterCell.textContent = data[i].semester;
    }
}
