"use strict";
{
    // Function with generics
    const createArray = (param) => {
        return [param];
    };
    const createArrayWithGeneric = (param) => {
        return [param];
    };
    const res1 = createArray('Bangladesh');
    const resGeneric = createArrayWithGeneric(true);
    const resGenericObj = createArrayWithGeneric({ id: 222, name: 'persia' });
    // For Tuple
    const createArrayWithTuple = (param1, param2) => {
        return [param1, param2];
    };
    const res2 = createArrayWithTuple('Bangladesh', 222);
    const res3 = createArrayWithTuple('Bangladesh', { name: 'Asia' });
    const addCourseToStudent = (student) => {
        const course = 'Next Level Web Development';
        return Object.assign(Object.assign({}, student), { course });
        const student1 = addCourseToStudent({ name: 'Mr.X', email: 'x@gmail.com', devType: 'NLWD' });
        const student2 = addCourseToStudent({ name: 'Mr.Y ', email: 'y@gmail.com', hasWatch: 'Apple Watch' });
    };
    //   
}
