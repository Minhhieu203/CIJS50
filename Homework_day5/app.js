 class Person{
    name;
    phone_number;
    place_has_gone = [];
    constructor(name, phone_number, place_has_gone)
    {
        this.name = name;
        this.phone_number = phone_number;
        this.place_has_gone = place_has_gone;
    }
    addLocation()
    {
        let location = prompt("Nhập vào địa điểm");
        let x = prompt("Nhập vào tọa độ x");
        x = Number(x);
        let y = prompt("Nhập vào tọa độ y");
        y = Number(y);
        this.place_has_gone.push(location, x, y);
    }
    check()
    {
            const a = this.place_has_gone[1];
            const b = this.place_has_gone[2];
            if(Math.sqrt((a-this.place_has_gone[4])*(a-this.place_has_gone[4]) + (b-this.place_has_gone[5])*(b-this.place_has_gone[5])) <= 2)
            {
                console.log("Người này đã bị nhiễm bệnh");
                console.log(person.name + " " + person.phone_number);
            }
            else 
            {
                
                console.log("Người này không bị nhiễm bệnh");
            }
    }
}

let name;
let phone_number;
let arr = [];
let person;
while(true)
{
    let operation = prompt("Nhập vào phương thức(AL/C/E)");
    /* Coi người đầu tiên nhập vào là bệnh nhân F0*/
     if(operation == "AL")
    {
        name = prompt("Nhập vào tên");
        phone_number = prompt("Nhập vào số điện thoại");
        person = new Person(name, phone_number, arr);
        person.addLocation();
    }
    else if(operation == "C")
    {
        person.check();
    }
    else 
    {
        break;
    }
} 
