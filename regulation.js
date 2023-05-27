document.addEventListener('DOMContentLoaded', function() {
    const ruleTypesTable = document.getElementById('rule-types-table');
    const selectedRuleTitle = document.getElementById('selected-rule-title');
    const selectedRuleTable = document.getElementById('selected-rule-table');
    const selectedRuleBody = document.getElementById('selected-rule-body');
    const editRuleForm = document.getElementById('edit-rule-form');
    const ruleContentInput = document.getElementById('rule-content');

    let selectedRuleType = '';

    ruleTypesTable.addEventListener('click', function(e) {
        if (e.target.classList.contains('select-rule-btn')) {
            const ruleRow = e.target.parentNode.parentNode;
            const ruleType = ruleRow.querySelector('td:nth-child(2)').textContent;
            selectedRuleType = ruleType;
            selectedRuleTitle.textContent = ruleType;
            selectedRuleBody.innerHTML = '';

            // Hiển thị bảng dữ liệu tương ứng với loại quy định đã chọn
            // Ở đây chúng ta chỉ mô phỏng dữ liệu, bạn có thể thay thế bằng dữ liệu thực tế từ nguồn dữ liệu của bạn
            for (let i = 1; i <= 5; i++) {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${i}</td>
                    <td>Quy định ${i} - ${ruleType}</td>
                    <td><button class="edit-rule-btn">Sửa</button></td>
                    <td><button class="delete-rule-btn">Xóa</button></td>
                `;
                selectedRuleBody.appendChild(row);
            }
        }
    });

    selectedRuleBody.addEventListener('click', function(e) {
        if (e.target.classList.contains('edit-rule-btn')) {
            const ruleRow = e.target.parentNode.parentNode;
            const ruleContent = ruleRow.querySelector('td:nth-child(2)').textContent;
            ruleContentInput.value = ruleContent;
            editRuleForm.classList.remove('hidden');
        } else if (e.target.classList.contains('delete-rule-btn')) {
            const ruleRow = e.target.parentNode.parentNode;
            ruleRow.remove();
        }
    });

    editRuleForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const updatedContent = ruleContentInput.value;
        const editedRow = selectedRuleBody.querySelector('.edit-rule-btn').parentNode.parentNode;
        editedRow.querySelector('td:nth-child(2)').textContent = updatedContent;
        editRuleForm.classList.add('hidden');
    });
});
