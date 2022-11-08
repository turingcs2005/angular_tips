import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-print-pdf',
  templateUrl: './print-pdf.component.html',
  styleUrls: ['../../../assets/styles/print-pdf.component.scss']
})
export class PrintPdfComponent implements OnInit {

  styleString: string = '';

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.http.get('../../../assets/styles/print-pdf.component.scss', {responseType: 'text'}).subscribe(
      styleSheet => {
        this.styleString = styleSheet;
      });
  }

  printToPDF() {
    const printArea: HTMLElement = document.getElementById('pdf');
    const printWindow = window.open('', 'PRINT')!;
    printWindow.document.write(`<html><head><style>${this.styleString}</style></head><body>${printArea.innerHTML}</body>`);
    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
  }

}
