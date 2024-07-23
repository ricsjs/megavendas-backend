import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { CreateGroupDto } from 'src/dto/create-group.dto';

@Injectable()
export class GroupsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createGroupDto: CreateGroupDto) {
    const { name, userId, contacts } = createGroupDto;

    const newGroup = await this.prisma.group.create({
      data: {
        name,
        userId,
        contacts: {
          create: contacts.map(contact => ({
            name: contact.name,
            phone_number: contact.phone_number,
          })),
        },
      },
      include: {
        contacts: true,
      },
    });

    return newGroup.id;
  }
}
