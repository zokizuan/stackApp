import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PaginatorModule} from 'primeng/paginator';
import { FormsModule } from '@angular/forms';
// import {SkeletonModule} from 'primeng/skeleton';
const modules= [
  FormsModule,
  PaginatorModule,
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
