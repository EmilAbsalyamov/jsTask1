// на входе число до 12 символов,на выход прописью на инглише
function toWords(data) {
   const nameNumDes = {
   2: 'twenty ',
   3: 'thirty ',
   4: 'forty ',
   5: 'fifty ',
   6: 'sixty ',
   7: 'seventy ',
   8: 'eighty ',
   9: 'ninety ',
   0: '',
   }
   const nameNum = {
   1: 'one',
   2: 'two',
   3: 'three',
   4: 'four',
   5: 'five',
   6: 'six',
   7: 'seven',
   8: 'eight',
   9: 'nine',
   0: '',
   11: 'eleven ',
   12: 'twelve ',
   13: 'thirteen ',
   14: 'fourteen ',
   15: 'fifteen ',
   16: 'sixteen ',
   17: 'seventeen ',
   18: 'eighteen ',
   19: 'nineteen ',
   }
   let answer = 'Ваше число прописью: '
   const dataList = data.split('').reverse()
   for (i = dataList.length - 1; i >= 0; i--) {
      let word = nameNum[dataList[i]];
      if ((i == 2) || (i == 5) || (i == 8) || (i == 11)) {
         word += ' hundred '
      }
      if (i == 3) {
         word += ' thousand '
      }
      if ((i == 1) || (i == 4) || (i == 7) || (i == 10)) {
         word = nameNumDes[dataList[i]]
      }
      if (i == 9) {
         word += ' billion '
      }
      if (i == 6) {
         word += ' million '
      }
      if ((dataList[i] == 1) & ((i == 1) || (i == 4) || (i == 7) || (i == 10))) {
         dataList[i] += dataList[i - 1];
         word = nameNum[dataList[i]];
         
         i -= 1;
         if (i == 9) {
            word += ' billion ';
         }
         if (i == 6) {
            word += ' million '
         }
         if (i == 3) {
            word += ' thousand '
         }
         if ((i == 2) || (i == 5) || (i == 8) || (i == 11)) {
            word += ' hundred '
         }
      }
      if (dataList[dataList.length - 1] == 0) {
         i = -1
         word = 'Null'
      }
      answer += word    
   }

      
   
   console.log(answer)
}
toWords('0000')

