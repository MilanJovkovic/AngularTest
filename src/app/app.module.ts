import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { StoreModule } from "@ngrx/store";
import { TodoReducer } from "./reducers/todo.reducer";
import { EffectsModule } from "@ngrx/effects";
import { TodoEffect } from "./effects/todo.effect";

import { AppComponent } from "./app.component";
import { TodoInputComponent } from "./components/todo-input/todo-input.component";
import { TodoRenderComponent } from "./components/todo-render/todo-render.component";

@NgModule({
  declarations: [AppComponent, TodoInputComponent, TodoRenderComponent],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({ todos: TodoReducer }),
    EffectsModule.forRoot([TodoEffect])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
