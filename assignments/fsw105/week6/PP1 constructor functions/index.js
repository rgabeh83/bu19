
const employees = []

function Employee (name, jobTitle, salary){
    this.name = name
    this.jobTitle = jobTitle
    this.salary = salary
    this.status = "full time"
    this.info = function printEmployeeForm(){
        console.log(this.Employee)
    }
}

mark = new Employee("Mark", "Janitor", "$90,000")

john = new Employee("john", "Service Clerk", "$120,000")

harry = new Employee("Harry", "Manager", "$150,000", )

console.log(mark, john, harry)

var newArray = employees.push(mark, john, harry)
console.log(newArray)