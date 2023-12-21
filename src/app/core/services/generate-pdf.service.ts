import { Injectable } from "@angular/core";
// import { TDocumentDefinitions } from 'pdfmake/interfaces.js';
// import QRCode from 'qrcode';

interface IParamData {
  user: {
    name: string;
    id: string;
  };
  course: {
    id: string;
    name: string;
  }
}
@Injectable({
  providedIn: 'root'
})
export class GeneratePdfService {

  async handleGenerate (data: IParamData){
    let ret = null;
    try {
      const fonts = {
        Helvetica: {
          normal: 'Helvetica',
          bold: 'Helvetica-Bold',
          italics: 'Helvetica-Oblique',
          bolditalics: 'Helvetica-BoldOblique'
        }
      };
      // let qrCode = '';
      // await QRCode.toDataURL(`${data.course.name}-${data.user.name}`)
      // .then((url: string) => {
      //   qrCode = url;
      // })
      // .catch(err => {
      //   console.error(err);
      // });

      // const template: TDocumentDefinitions = {}
    } catch (error) {

    }
  }
}
