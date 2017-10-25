import First from './first'

const first = new First()
first.run()
async function asyncTest(){
  let res = await first.add(1, 2)
  console.log('result:', res)
}

asyncTest()

