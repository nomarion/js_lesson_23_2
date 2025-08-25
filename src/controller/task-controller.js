'use strict'

import {TaskService} from "../service/task-service.js";

export class TaskController {
    #taskService = new TaskService();

    async save(taskName) {
        if(taskName?.trim() !== '') {
            return await this.#taskService.save(taskName.trim());
        }
        return null;
    }

    async findAll() {
        return await this.#taskService.findAll();
    }

    async remove(id) {
        return await this.#taskService.remove(id);
    }

    async update(id, title, status) {
        return await this.#taskService.update(id, title, status);
    }

    async findById(id) {
        return await this.#taskService.findById(id);
    }


}