import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import{HttpClientModule} from'@angular/common/http';

//components
import { AppComponent } from './app.component';
import { HeadComponent } from './head/head.component';
import { PrimeiroBlocoComponent } from './primeiro-bloco/primeiro-bloco.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { PerguntasService } from './services/perguntas.service';

@NgModule({
  declarations: [AppComponent, HeadComponent, PrimeiroBlocoComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    FormsModule,
    HttpClientModule,
    CommonModule


  ],
  exports:[PrimeiroBlocoComponent


  ],
  providers: [PerguntasService],
  bootstrap: [AppComponent],
})
export class AppModule {}
