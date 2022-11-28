module.exports((sequelize, DataTypes) => {
  const User = sequelize.define(
    "User", //mysql에는 users로 저장됨
    {
      //id는 자동으로 생성 됨
      email: {
        type: DataTypes.STRING(30), //SRING , TEXT, BOOLEAN, INTGER, FLOAT, DATETIME
        allowNull: false, //필수
        unique: true, //고유한 값
      },
      nickname: {
        type: DataTypes.STRING(30),
        allowNull: false, //필수
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false, //필수
      },
    },
    {
      charset: "utf8",
      collate: ":utf8_general_ci", // charset, collate 적으면 한글 저장
    }
  );

  User.associate = (db) => {
    db.User.hasMany(db.Post);
    db.User.hasMany(db.Comment);
    db.User.belongsToMany(db.Post, { through: "Like", as: "Liked" });
    db.User.belongsToMany(db.User, {
      through: "Follow",
      as: "Followers",
      foreignKey: "FollowingId",
    });
    db.User.belongsToMany(db.User, {
      through: "Follow",
      as: "Followings",
      foreignKey: "FollowerId",
    });
  };
  return User;
});
