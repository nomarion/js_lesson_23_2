'use strict'

import {TaskController} from './controller/task-controller.js';
import {TaskItemComponent} from './component/task-item-component.js'
import {taskModal} from "./component/task-modal-component.js";

const taskController = new TaskController();

$('#taskButton').click(async function () {
    const item = await taskController.save($('#taskInput').val());
    $('.table tbody').append(item);
    $('#taskInput').val('');
    $('.table tbody').append(TaskItemComponent([item]))
})

$(document).ready(async function () {
    // новые задачи
    $('.table tbody').append(TaskItemComponent(await taskController.findAll()));
    // модалка
    $('.table tbody').on('click', '.task-link', async function () {
        const taskId = $(this).data('id');
        const task = await taskController.findById(taskId.trim());
        taskModal(task);
    });
    // удаление
    $('.table tbody').on('click', '.btn.btn-danger.delete', async function () {
        const $tr = $(this).closest('tr');
        const $firstTd = $tr.find('td').first();
        const id = $firstTd.text().trim();
        await taskController.remove(id);
        $tr.remove();
    });
    // статусы
    $('.table tbody').on('change', '.form-check-input', async function () {
        const tr = $(this).closest('tr');
        const checked = $(this).is(':checked');
        await taskController.update(
            tr.find('td').first().text().trim(),
            tr.find('td a.task-link').text(),
            checked
        )
        if(checked) {
            tr.toggleClass('text-decoration-line-through text-muted', checked);
        } else {
            tr.removeClass('text-decoration-line-through text-muted');
        }
    });

})