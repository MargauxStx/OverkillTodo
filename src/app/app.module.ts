import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSnackBarModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';


import { TodoListComponent } from './todoList/todoList.component';
import { TodoDetailComponent } from './todoDetail/todoDetail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TodoAjoutComponent } from './todoAjout/todoAjout.component';
import { TodoEditComponent } from './todoEdit/todoEdit.component';

@NgModule({
   declarations: [
      AppComponent,
      TodoListComponent,
      TodoDetailComponent,
      TodoAjoutComponent,
      TodoEditComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      MatCardModule,
      MatChipsModule,
      MatExpansionModule,
      MatSnackBarModule,
      BrowserAnimationsModule,
      FlexLayoutModule,
      MatCheckboxModule,
      MatInputModule,
      MatSelectModule,
      FormsModule,
      MatTooltipModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
