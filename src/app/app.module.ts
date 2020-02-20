import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { TodoInputComponent } from "./components/todo-input/todo-input.component";
import { TodoRenderComponent } from "./components/todo-render/todo-render.component";

@NgModule({
  declarations: [AppComponent, TodoInputComponent, TodoRenderComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
