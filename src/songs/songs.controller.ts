import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Inject,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Scope,
} from '@nestjs/common';
import { SongsService } from './songs.service';
import { CreateSongDTO } from './dto/create-song-dto';
import { Connection } from 'src/common/constants/connection';

@Controller({ path: 'songs', scope: Scope.REQUEST })
export class SongsController {
  constructor(
    private songsSerice: SongsService,
    @Inject('Connection')
    private connection: Connection,
  ) {
    console.log(
      `this is connection string ${this.connection.CONNECTION_STRING}`,
    );
  }

  @Post()
  create(@Body() CreateSongDTO: CreateSongDTO) {
    return this.songsSerice.create(CreateSongDTO);
  }

  @Get()
  findAll() {
    try {
      return this.songsSerice.findAll();
    } catch (e) {
      throw new HttpException(
        'server error',
        HttpStatus.INTERNAL_SERVER_ERROR,
        { cause: e },
      );
    }
  }

  @Get(':id')
  findOne(
    @Param(
      'id',
      new ParseIntPipe({
        errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE,
      }),
    )
    id: number,
  ) {
    return `fetch song on the based on id ${id}`;
  }

  @Put(':id')
  update() {
    return 'update song on based on id';
  }

  @Delete(':id')
  delete() {
    return 'delete song on the based on id';
  }
}
