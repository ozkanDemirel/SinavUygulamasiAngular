//import { Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { LessonComponent } from "./components/lesson/lesson.component";

export const appRoutes:Routes=[

    {path:"home",component:HomeComponent},
    {path:"lesson",component:LessonComponent},
    {path:"**", redirectTo:"home", pathMatch:"full"}

];

