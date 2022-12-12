module.exports = (sequelize, Sequelize) => {
  const Student = sequelize.define("student1", {
    name: {
      type: Sequelize.STRING
    },
    admission:{
      type:Sequelize.INTEGER
    },
    class: {
      type: Sequelize.INTEGER
    },
    city: {
      type: Sequelize.STRING
    }
  });

  return Student;
};