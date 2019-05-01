import { Injectable } from '@angular/core';
import { Brew } from './brews/brews.module';

@Injectable({
  providedIn: 'root'
})
export class ModalLoaderService {

  selectedBrew: Brew;

  constructor() { }
  
  loadModal(brew: Brew) {
    this.selectedBrew = brew;
  }

}
