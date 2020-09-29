class Book_case
{
    id;
    max_number_of_book;
    category;
    day_create;

    constructor(id, max_number_of_book, category,day_create)
    {
        this.id = id;
        this.max_number_of_book = max_number_of_book;
        this.category = category;
        this.day_create = day_create;
    }
}
class Book extends Book_case
{
    book_name;
    author;

    constructor(id, category, day_create, book_name, author)
    {
        super(id, category, day_create);
        this.book_name = book_name;
        this.author = author;
    }
}
class BookCaseManagement
{
    bcm = [];

    constructor(bcm)
    {
        this.bcm = bcm;
    }
    addBookcase()
    {
        let id = prompt("Nhap vao chi so sach");
        let max = prompt("Nhap vao so luong sach lon nhat");
        let category = prompt("Nhap vao the loai sach");
        let day_create = prompt("Nhap vao ngay tao");
        let bc = new Book_case(id, max, category, day_create);
        this.bcm.push(bc);
    }
    listed()
    {
        for(let i = 0; i < this.bcm.length; i++)
        {
            console.log(this.bcm[i]);
        }
    }
    updateList()
    {
        let index = prompt("Nhap vao chi so can sua");
        let property = prompt("Nhap vao thuoc tinh");
        let content = prompt("Nhap vao noi dung muon sua");
        this.bcm[index - 1][property] = content;
    }
    deleteList()
    {
        let index = prompt("Nhap vao chi so can xoa");
        this.bcm.splice(index - 1, 1);
    }
    findBook()
    {
        let property = prompt("Nhap vao thuoc tinh can tim");
        for(let i = 0; i < this.bcm.length; i++)
        {
            console.log(this.bcm[i][property]);
        }
    }
    listedBookInCase()
    {
        for(let i = 0; i < this.bcm.length; i++)
        {
            console.log(this.bcm[i]["category"]);
        }
    }
}
let arr = [];
let bm = new BookCaseManagement(arr);
while(true)
{
    let operations = prompt("Nhap vao phuong thuc(AB/L/UL/DL/FB/LBIC/E)");
    if(operations == "AB")
    {
        bm.addBookcase();
    }
    else if(operations == "L")
    {
        bm.listed();
    }
    else if(operations == "UL")
    {
        bm.updateList();
    }
    else if(operations == "DL")
    {
        bm.deleteList();
    }
    else if(operations == "FB")
    {
        bm.findBook();
    }
    else if(operations == "LBIC")
    {
        bm.listedBookInCase();
    }
    else 
    {
        break;
    }
}
