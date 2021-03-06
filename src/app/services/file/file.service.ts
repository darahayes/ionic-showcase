import { Injectable } from '@angular/core';
import {
  UPLOADS,
  UPLOAD_FILE
} from './graphql.queries';
import { VoyagerService } from '../sync/voyager.service';
import { ApolloOfflineClient } from 'offix-client-boost';
import { FileEntries, FileEntry } from './types';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  private readonly apollo: ApolloOfflineClient;

  constructor(aeroGear: VoyagerService) {
    this.apollo = aeroGear.apolloClient;
  }

  // Watch local cache for updates
  getItems() {
    const getTasks = this.apollo.query<FileEntries>({
      query: UPLOADS,
      fetchPolicy: 'network-only',
      errorPolicy: 'none'
    });
    return getTasks;
  }

  createFile(file: FileList) {
    return this.apollo.mutate<FileEntry>({
      mutation: UPLOAD_FILE,
      variables: { file }
    });
  }
}
