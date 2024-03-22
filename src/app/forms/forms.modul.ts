import { RouterModule, Routes } from "@angular/router";
import { NormalComponent } from "./normal/normal.component";
import { DynamicComponent } from "./dynamic/dynamic.component";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { MatChipsModule } from "@angular/material/chips";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatButtonModule } from "@angular/material/button";


const routesWithChild: Routes = [
  {
    path: '',
    children: [
      {
        path: 'normal',
        component: NormalComponent,
      },
      {
        path: 'dynamic',
        component: DynamicComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [NormalComponent, DynamicComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatFormFieldModule,
    MatChipsModule,
    MatSelectModule,
    FlexLayoutModule,
    RouterModule.forChild(routesWithChild),
  ],
  providers: [],
})
export class FormsModule {}