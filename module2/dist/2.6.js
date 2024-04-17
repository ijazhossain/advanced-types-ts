"use strict";
{
    //constraints
    const addCourseToStudent = (student) => {
        const course = 'Next Level Web Development';
        return Object.assign(Object.assign({}, student), { course });
    };
    const student1 = addCourseToStudent({
        id: 222,
        name: 'Mr.X',
        email: 'x@gmail.com',
        devType: 'NLWD'
    });
    const student2 = addCourseToStudent({
        id: 333,
        name: 'Mr.Y ',
        email: 'y@gmail.com',
        hasWatch: 'Apple Watch'
    });
    const student3 = addCourseToStudent({ id: 444, name: 'Mr z', email: 'z@gmail.com', emni: 'emni' });
    //
}
