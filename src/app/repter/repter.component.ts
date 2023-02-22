import { Component, OnInit } from '@angular/core';
import { JaratokapiService } from '../shared/jaratokapi.service';

@Component({
  selector: 'app-repter',
  templateUrl: './repter.component.html',
  styleUrls: ['./repter.component.scss']
})
export class RepterComponent implements OnInit {

  jaratok:any = [];
  constructor(private api: JaratokapiService) { }

  ngOnInit(): void {
    this.getJaratok();
  }

  getJaratok() {
    
    this.api.getJaratok().subscribe({
      next: (jaratok) => {
        console.log(jaratok)
        this.jaratok = jaratok;
      },
      error: (err) => {
        console.log('Hiba! A REST API elérése sikertelen!')
        console.log(err)
      }
    });
  }
}
