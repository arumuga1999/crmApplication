import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getColor'
})
export class GetColorPipe implements PipeTransform {

  transform(values:Array<Object>,status:String): String {
    let result:any = {};
    if(values){
      result = values.find(v=> v['status'] == status) || {}
    }
    return result['color'] || '#0757a8';
  }

}
