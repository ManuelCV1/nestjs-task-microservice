import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';
import { MongooseModule } from '@nestjs/mongoose';
//import { ConfigModule } from '@nestjs/';

@Module({
  imports: [
    TasksModule,
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/myapp'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
