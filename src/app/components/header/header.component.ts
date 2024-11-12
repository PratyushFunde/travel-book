import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
// import { MatSelectModule,MatFormFieldModule }  from '@angular/material';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatButtonModule,RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  currency:any=[
    {
      cur:'INR',
    },
    {
      cur:'USD'
    },

    {
      cur:'YUF'
    }
  ]
}
