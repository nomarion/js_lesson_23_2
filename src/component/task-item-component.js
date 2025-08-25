export function TaskItemComponent(tasksItem) {
    let rows = '';
    tasksItem.forEach((task, index) => {
        rows += `
        <tr ${task.done ? 'class="text-decoration-line-through text-muted"' : ''}>
            <td>${task._id}</th>
            <td><a class="task-link" data-id="${task._id}">${task.title}</a></td>
            <td>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" ${task.done ? 'checked' : ''}>
                </div>
            </td>
            <td>${new Date(task.createdAt).toLocaleString('ru-RU')}</td>
            <td>
            <button type="button" class="btn btn-danger delete">Delete</button>
            </td>
        </tr>
    `;
    });
    return rows;
}
