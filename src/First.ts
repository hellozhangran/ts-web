export default class First {
  run(){
    console.log('i am run')
  }
  async add(a: number, b: number){
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log('计算出来了')
        resolve(a+b)
      }, 1000)
    })
  }
}