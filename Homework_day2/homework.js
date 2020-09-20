class Person{
    name;
    sex; 
    age; 
    address;

    constructor(name, sex, age, address)
    {
        this.name = name;
        this.sex = sex;
        this.age = age;
        this.address = address;
    }
    speak(){
        console.log('Xin chào tất cả mọi người');
    }
    introduce(){
        console.log(`
            Mình tên là ${this.name},
            Giới tính của mình là ${this.sex},
            Năm nay mình ${this.age} tuổi,
            Hiện nay mình đang sống ở ${this.address}
        `);
    }
}
class Crush extends Person{
    apperance;
    favourite;

    constructor(name, sex, age, address, apperance, favourite)
    {
        super(name, sex, age, address);
        this.apperance = apperance;
        this.favourite = favourite;
    }
}
class Oldgirlfriend extends Person{
    apperance;

    constructor(name, sex, age, address, apperance)
    {
        super(name, sex, age, address);
        this.apperance = apperance;
    }
}
class List {
    owner;
    person = [];
    constructor(owner, person){
        this.owner = owner;
        this.person = person;
    }
    addCrush()
    {
        let name = prompt("Nhập tên crush");
        let age  = prompt("Nhập tuổi crush");
        let address = prompt("Nhập địa chỉ crush");
        let apperance = prompt("Miêu tả ngoại hình crush");
        let favourite = prompt("Crush thích gì");
        let crush = new Crush(name, 'nữ', age, address, apperance, favourite);
        this.person.push(crush);
    }
    addOldGirlfriend()
    {
        let name = prompt("Nhập tên người yêu cũ");
        let age  = prompt("Nhập tuổi người yêu cũ");
        let address = prompt("Nhập địa chỉ người yêu cũ");
        let apperance = prompt("Miêu tả ngoại hình người yêu cũ");
        let oldgirlfriend = new Oldgirlfriend(name, 'nữ', age, address, apperance);
        this.person.push(oldgirlfriend);   
    }
    showAll() 
    {
        for(let i = 0; i < this.person.length; i++)
        {
            console.log(this.person[i]);
        }
    }
}
let arr = [];
let list = new List("Hieu", arr);
let person = new Person("Hiếu", 20, 'nam', 'Hà Nội');
person.speak();
person.introduce();
while(true)
{
    let operation = prompt("Nhập vào phương thức(AC/AO/SA/E)");
    if(operation == 'AC')
    {
        list.addCrush();
    }
    else if(operation == 'AO')
    {
        list.addOldGirlfriend();
    }else if(operation == 'SA')
    {
        list.showAll();
    }else
    {
        break;
    }
}
