import {
  Body,
  ConflictException,
  Controller,
  Delete,
  Get,
  HttpCode,
  NotFoundException,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from '../dto/create-task.dto';
import { UdateTaskDto } from '../dto/update-task.dto';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  async getAllTasks() {
    const allTask = await this.tasksService.getAllTasks();
    return allTask;
  }

  @Post()
  async createTask(@Body() body: CreateTaskDto) {
    try {
      const taskCreated = await this.tasksService.createTask(body);
      return taskCreated;
    } catch (error) {
      if (error.code === 11000) {
        throw new ConflictException('La tarea ya existe');
      }
      throw error;
    }
  }

  @Get(':id')
  async findOneTask(@Param('id') id: string) {
    const taskFound = await this.tasksService.findOne(id);
    if (!taskFound) throw new NotFoundException('Tarea no encontrada');
    return taskFound;
  }

  @Put(':id')
  async updateTask(@Param('id') id: string, @Body() task: UdateTaskDto) {
    const taskUpdated = await this.tasksService.uptadteTask(id, task);
    if (!taskUpdated) throw new NotFoundException('Tarea no encontrada');
    return taskUpdated;
  }

  @Delete(':id')
  @HttpCode(204) //Status 204 indica que se proceso todo con exito y no hay nada que retornar (de echo fuerza a que no retorne nada si todo se proceso correctamente)
  async deleteTask(@Param('id') id: string) {
    const taskDeleted = await this.tasksService.deleteTask(id);
    if (!taskDeleted) throw new NotFoundException('Tarea no encontrada');
    return taskDeleted;
  }
}
