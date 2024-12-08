import Task from "../Models/Task.js"

export async function  addTask(task) {

    const newTask = await Task.create(task)

    return newTask.toJSON()

}

export async function  readTask() {

    const Tasks = await Task.findAll()

    console.log(Tasks)

    return Tasks

}

export async function  sortByPriorityTask() {

    const Tasks = await Task.findAll({
            order: [
                ['Priority'],
            ]
        }
    )

    console.log(Tasks)

    return Tasks

}

export async function  updateTask(id,task) {

    const updateTask = await Task.findByPk(id)

    await updateTask.update(task);

    return updateTask.toJSON()

}

export async function  deleteTask(id) {

    await Task.destroy({
        where: {
          id: id,
        },
      });

}