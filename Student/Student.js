class Student {
    constructor(name, grade, homeroomTeacher) {
        this._name = name;
        this._grade = grade;
        this._homeroomTeacher = homeroomTeacher;
    }

    get name() {
        return this._name;
    }

    get grade() {
        return this._grade;
    }

    get homeroomTeacher() {
        return this._homeroomTeacher;
    }

    graduateGrade() {
        const currentGrade = this._grade;
        if (currentGrade < 12) {
            this._grade++
        } else if ( currentGrade === 12) {
          console.log(`${this._name} has graduated!`)  
        }
    }

    static selectHomeroomTeacher() {
        const teachers =  ['Angel', 'Spike', 'Buffy', 'Willow', 'Tara'];
        return teachers[Math.floor(Math.random()*teachers.length)];
    }
}

const teacher = Student.selectHomeroomTeacher();

const billy = new Student(
    'Billy',
    10,
    teacher
)

console.log(billy.name);
console.log(billy.grade);
console.log(billy.homeroomTeacher);
billy.graduateGrade();
console.log(billy.grade);
billy.graduateGrade();
console.log(billy.grade);
billy.graduateGrade();