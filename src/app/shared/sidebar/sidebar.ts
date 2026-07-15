import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { Dashbord } from '../../feature/dashbord/dashbord';

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink,Dashbord],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {

}
