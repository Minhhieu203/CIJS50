class Test {
    id;
    test_name;
    time;
    questions;
    day_create;
    constructor(id, test_name, time, questions, day_create)
    {
        this.id = id;
        this.test_name = test_name;
        this.time = time;
        this.questions = questions;
        this.day_create = day_create;
    }
}
class Questions{
    id;
    content;
    correct_answer;

    constructor(id, content, correct_answer)
    {
        this.id = id;
        this.content = content;
        this.correct_answer = correct_answer;
    }
}
class Multi_choice extends Questions{
    constructor(id, content, correct_answer)
    {
        super(id, content, correct_answer);
    }
}
class Essay extends Questions{
    constructor(id, content, correct_answer)
    {
        super(id, content, correct_answer);
    }
}
class TOperation {
    newTest = [];
    constructor(newTest)
    {
        this.newTest = newTest;
    }
    addTest()
    {
        let id = prompt("Nhập vào chỉ số bài test");
        let test_name = prompt("Nhập vào tên bài test");
        let time = prompt("Nhập vào thời gian");
        let questions = prompt("Nhập vào câu hỏi");
        let day_create = prompt("Nhập vào ngày tạo bài");
        let test = new Test(id, test_name, time, questions, day_create);
        this.newTest.push(test);
    }
    showTest()
    {
        for(let i = 0; i < this.newTest.length; i++)
        {
            console.log(this.newTest[i]);
        }
    }
}
let questions;
class QOperation {
    questions = [];
    constructor(questions){
        this.questions = questions;
    }
    addQuestions()
    {
        let id = prompt("Nhập chỉ số câu hỏi");
        let content = prompt("Nhập vào nội dung câu hỏi");
        let correct_answer = prompt("Nhập vào đáp án đúng");
        questions = new Questions(id, content, correct_answer);
        this.questions.push(questions);
    }
    showQuestions()
    {
        for(let i = 0; i < this.questions.length; i++)
        {
            console.log(this.questions[i]);
        }
    }
    modifyQuestions()
    {
        let index = prompt("Nhập vào chỉ số của câu hỏi muốn sửa");
        let property = prompt("Nhập vào thuộc tính muốn sửa");
        let modify = prompt("Nhập vào nội dung muốn sửa");
        this.questions[index - 1][property] = modify;
    }
    deleteQuestions()
    {
        let index = prompt("Nhập vào chỉ số câu hỏi muốn xóa");
        this.questions.splice(index - 1, 1);
    }
}
let arr1 = [];
let arr2 = [];
let t = new TOperation(arr1);
let q = new QOperation(arr2);
while(true)
{
    let request = prompt("Nhập vào yêu cầu của bạn(SQ/ST/AQ/MQ/DQ/AT/E)");
    if(request == "AQ")
    {
        q.addQuestions();
    }
    else if(request == "SQ")
    {
        q.showQuestions();
    }
    else if(request == "MQ")
    {
        q.modifyQuestions();
    }
    else if(request == "DQ")
    {
        q.deleteQuestions();
    }
    else if(request == "AT")
    {
        t.addTest();
    }
    else if(request == "ST")
    {
        t.showTest();
    }
    else if("E")
    {
        break;
    }
    else
    {
        console.log("Wrong Input");
        break;
    }
}