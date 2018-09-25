import Student from "./Student";

export default class SubStudent extends Student{
    // 构造
      constructor() {
        super('小猫', '男', 20);
      }

      getStudentInfo(){
          return 'sub: ' + super.getStudentInfo();
      }
}
