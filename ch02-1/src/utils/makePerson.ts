export function makePerson(name: string, age: number) {
  return { name: name, age: age };
}

export function testMakePerson() {
  console.log(makePerson("Kdong", 30), makePerson("Omna", 25));
}
