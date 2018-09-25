export default class Student {
    // 构造
    constructor(name, sex, age) {
        this.name = name;
        this.sex = sex;
        this.age = age;
    }

    getStudentInfo() {
        return '名字：' + this.name + " 性别：" + this.sex + " 年龄：" + this.age;
    }
}