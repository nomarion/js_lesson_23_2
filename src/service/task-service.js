'use strict'
import {TaskRepository} from '../repository/task-repository.js';

export class TaskService {
    #taskRepository = new TaskRepository();

    async save(task) {
        const taskObj = {
            "title": task,
            "done": false
        }
        return await this.#taskRepository.save(taskObj);
    }

    async findAll() {
        return await this.#taskRepository.findAll();
    }

    async remove(id) {
        return await this.#taskRepository.remove(id);
    }

    async update(id, title, status) {
        return await this.#taskRepository.update(id, title, status);
    }

    async findById(id) {
        return await this.#taskRepository.findById(id);
    }
}