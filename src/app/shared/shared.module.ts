import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {InputTextModule} from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';

const modules= [
  InputTextModule,
  FormsModule
]

@NgModule({
  declarations: [],
  imports: [...modules,
    CommonModule
  ],
  exports: [
    ...modules,
    
  ]
})
export class SharedModule { }
