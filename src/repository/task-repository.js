'use strict'

export class TaskRepository {
    #tasksItem = [];

    async save(task) {
        const response = await fetch("https://todo.nomarion.pp.ua/todo", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title: task.title,
                done: task.done
            })
        });

        const data = await response.json();
        this.#tasksItem.push(data);
        return data;
    }


    async findAll() {
        const res = await fetch('https://todo.nomarion.pp.ua/todo');
        this.#tasksItem = await res.json();
        return this.#tasksItem;

    }

    async remove(id) {
        const res = await fetch('https://todo.nomarion.pp.ua/todo/' + id, {method: "DELETE"});
        return await res.json();
    }

    async update(id, title, status) {
        const response = await fetch("https://todo.nomarion.pp.ua/todo/" + id, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title: title,
                done: status
            })
        });

        return await response.json();

    }

    async findById(id) {
        const res = await fetch('https://todo.nomarion.pp.ua/todo/' + id)
        return await res.json();
    }
}