import { Component } from "@angular/core";
import { GeneratePdfService } from "../../core/services/generate-pdf.service";

@Component({
  selector: 'app-example-create-pdf',
  styleUrl: './example-create-pdf.component.scss',
  templateUrl: './example-create-pdf.component.html',
  standalone: true,
})
export class ExampleCreatePdfComponent {

  constructor(private generatePdf: GeneratePdfService){}
  count = 1;

  sum (){
    this.count++;
  }

  // async handleGeneratePdf (): Promise<void> {
  //   const url = await this.generatePdf.handleGenerate({});
  //   window.open(url, '_black');
  // }
}
