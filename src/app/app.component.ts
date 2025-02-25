import { Component } from '@angular/core';
//exportar los componentes que se utilizaran ya sea el header, content y el footer
import { HeaderComponent } from './Component/header/header.component';
import { ContentComponent } from './Component/content/content.component';
import { FooterComponent } from './Component/footer/footer.component';
import { CounterComponent } from './Component/counter/counter.component';
@Component({
  //indica la etiqueta
  selector: 'app-root',
  //indica las rutas de donde se sacan los componentes
  imports: [HeaderComponent,ContentComponent,FooterComponent,CounterComponent],
  //el archivo html de donde sale el componente
  templateUrl: './app.component.html',
  //el archivo css de donde sale el componente
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'EpoxyPage';
}
