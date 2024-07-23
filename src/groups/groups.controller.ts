import { Body, Controller, Get, Post, UseGuards, Param, Delete } from '@nestjs/common';
import { GroupsService } from './groups.service';
import { CreateGroupDto } from 'src/dto/create-group.dto';
import { AuthGuard } from 'src/auth/auth.guard';

@UseGuards(AuthGuard)
@Controller('groups')
export class GroupsController {
  constructor(private readonly groupsService: GroupsService) {}

  @Post()
  async create(@Body() createGroupDto: CreateGroupDto) {
    return this.groupsService.create(createGroupDto);
  }

  @Get(':userId')
  async findGroupsByUserId(@Param('userId') userId: string) {
    return this.groupsService.findGroupsByUserId(userId);
  }

  @Delete(':id')
  async deleteGroup(@Param('id') id: string) {
    return this.groupsService.deleteGroup(id);
  }
}
