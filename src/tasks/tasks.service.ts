import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Task } from '../schemas/task.schema';
import { Model } from 'mongoose';
import { CreateTaskDto } from '../dto/create-task.dto';
import { UdateTaskDto } from '../dto/update-task.dto';

@Injectable() //Decorador de Nest js , para hacer que la clase sea inyectable a los controladores correspondientes (definidos en el module.ts)
export class TasksService {
  constructor(@InjectModel(Task.name) private taskModel: Model<Task>) {}

  async getAllTasks() {
    const allTasks = await this.taskModel.find();
    return allTasks;
  }

  async createTask(task: CreateTaskDto) {
    const createdTask = await this.taskModel.create(task);
    return createdTask;
  }

  async findOne(id: string) {
    const taskFound = await this.taskModel.findById(id);
    return taskFound;
  }

  async uptadteTask(id: string, task: UdateTaskDto) {
    const taskUpdated = await this.taskModel.findByIdAndUpdate(id, task, {
      new: true,
    });
    return taskUpdated;
  }

  async deleteTask(id: string) {
    const taskDeleted = await this.taskModel.findByIdAndDelete(id);
    return taskDeleted;
  }
}
