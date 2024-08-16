import { Injectable, Scope } from '@nestjs/common';

@Injectable({
  scope:Scope.TRANSIENT,
})
export class SongsService {
  //local db
  //local array

  private readonly songs = [];

  create(songs) {
    this.songs.push(songs);
    return this.songs;
  }

  findAll() {
    //errors comes while fetching the data from DB
    //throw new Error('error in the db while fetching record');
    return this.songs;
  }
}
