const express = require("express");
const router = express.Router();

// DB 세팅
const mysql = require("mysql");
const path = require("path");

const conn = mysql.createConnection({
  host: "localhost",
  user: "gisuser",
  password: "12345",
  port: 3306,
  database: "nodejs_db",
});


router.post("/joinData", (req, res) => {
  console.log("joinData 라우터");
  console.log(req.body.user);

  let sql = "insert into member values (?, ?, 3)";
  conn.query(sql, [req.body.user.id, req.body.user.pw], (err, rows) => {
    if (rows) {
      console.log("회원가입 성공");
      res.json({
        result: "success",
      });
    } else {
      console.log("회원가입 실패");
      res.json({
        result: "fail",
      });
    }
    res.end();
  });
});

router.post("/loginData", (req, res) => {
  console.log("loginData 라우터");
  console.log(req.body.userLogin);

  let sql = "select * from member where id=? and pw=?";
  conn.query(sql, [req.body.userLogin.id, req.body.userLogin.pw], (err, rows) => {
    if (rows[0]!=null) {
      req.session.userLogin = {
        id : rows[0].id
      };
      console.log("로그인 성공");
      console.log(req.session.userLogin.id);
      res.json({
        result: "success",
      });
    } else {
      console.log("로그인 실패");
      res.json({
        result: "fail",
      });
    }
    res.end();
  });
});

router.get("*", (req, res) => {
  console.log("happy hacking!");
  res.sendFile(
    path.join(__dirname, "..", "react-project", "build", "index.html")
  );
});

module.exports = router;
