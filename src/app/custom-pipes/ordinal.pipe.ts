import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ordinal'
})
export class OrdinalPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    let stringVal = value.toString()
    switch(value){
      case 11:{ return value+"th"}
      case 12:{ return value+"th"}
      case 13:{ return value+"th"}

    }
    switch(stringVal.charAt(stringVal.length-1)){
      case "1":{
        return value+"st"
      }
      case "2":{
        return value+"nd"
      }
      case "3":{
        return value+"rd"
      }
      case "4":{
        return value+"th"
      }
      case "5":{
        return value+"th"
      }
      case "6":{
        return value+"th"
      }
      case "4":{
        return value+"th"
      }
      case "7":{
        return value+"th"
      }
      case "8":{
        return value+"th"
      }
      case "9":{
        return value+"th"
      }
      case "0":{
        return value+"th"
      }
    }
    return value
  }

}
