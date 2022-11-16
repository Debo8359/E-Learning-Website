const { response } = require("express");
const express = require("express");
const { default: mongoose } = require("mongoose");
const router = express.Router();
const signUpTemplateCopy = require("../models/SignUpModels");
const technicalTemplateCopy = require("../models/technicalmodels");
const ntechnicalTemplateCopy = require("../models/ntechnicalmodels");

require("dotenv").config();

router.post("/signup", (req, res) => {
  signUpTemplateCopy.findOne(
    { username: req.body.username },
    "username email password",
    (err, result) => {
      if (err) console.log(err);
      try {
        if (result != null) {
          throw new Error("Username already exists");
          //res.status(404).send("Username exists");
        } else {
          const signedUpUser = new signUpTemplateCopy({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
            type: "user",
          });
          signedUpUser
            .save()
            .then((data) => {
              res.json(data);
            })
            .catch((error) => {
              res.json(error);
            });
        }
      } catch (err1) {
        res.sendStatus(800, "Username already Exists");
      }
    }
  );
});

router.post("/reset", (req, res) => {
  signUpTemplateCopy.findOne(
    { username: req.body.username },
    "username email password",
    function (err, reset) {
      if (err) console.log(err);
      else {
        reset.password = req.body.password;
        console.log(reset);
        reset.save().then((data) => {
          res.json(data);
        });
      }
    }
  );
});

router.post("/login", (req, res) => {
  signUpTemplateCopy.findOne(
    { username: req.body.username, password: req.body.password, type: "user" },
    "username email password",
    function (err, login) {
      if (err) {
        res.status(404).send("Error");
        console.log(err);
      } else {
        try {
          data = login;
          flag = true;
          console.log(login);
          console.log(process.env.SYNCGATEWAY_URL);
          login.save().then((data) => {
            res.json(data);
          });
        } catch (err1) {
          res.status(404).send("Error");
          console.log(err1);
        }
      }
    }
  );
});

router.post("/adminlogin", (req, res) => {
  signUpTemplateCopy.findOne(
    { username: req.body.username, password: req.body.password, type: "admin" },
    "username password",
    function (err, login) {
      if (err) {
        res.status(404).send("Error");
        console.log(err);
      } else {
        try {
          data = login;
          flag = true;
          console.log(login);
          login.save().then((data) => {
            res.json(data);
          });
        } catch (err1) {
          res.status(404).send("Error");
          console.log(err1);
        }
      }
    }
  );
});

router.get("/technical", (req, res) => {
  let k = [];
  technicalTemplateCopy.find({}, "cname cdetails", function (err, data) {
    if (err) {
      res.status(404).send("Error");
      console.log(err);
    } else {
      console.log(data);
      res.send(data);
    }
  });
});

router.get("/ntechnical", (req, res) => {
  let k = [];
  ntechnicalTemplateCopy.find({}, "cname cdetails", function (err, data) {
    if (err) {
      res.status(404).send("Error");
      console.log(err);
    } else {
      res.send(data);
    }
  });
});

router.post("/deletentech", (req, res) => {
  ntechnicalTemplateCopy.deleteOne(
    { cname: req.body.cname },
    "",
    function (err, data) {
      if (err) {
        res.status(404).send("Error");
        console.log(err);
      } else {
        res.send(data);
      }
    }
  );
});
let mco = [];
router.post("/modifyntech", (req, res) => {
  mco = req.body;
  res.send("OK");
});

router.get("/getmodntech", (req, res) => {
  res.send(mco);
});

router.post("/modntech", (req, res) => {
  ntechnicalTemplateCopy.findOneAndUpdate(
    { cname: mco.cname },
    { cname: req.body.cname, cdetails: req.body.cdetails },
    function (err, data) {
      if (err) {
        res.status(404).send("Error");
        console.log(err);
      } else {
        res.send(data);
      }
    }
  );
});

router.post("/deletetech", (req, res) => {
  technicalTemplateCopy.deleteOne(
    { cname: req.body.cname },
    function (err, data) {
      if (err) {
        res.status(404).send("Error");
        console.log(err);
      } else {
        res.send(data);
      }
    }
  );
});
let mco1 = [];
router.post("/modifytech", (req, res) => {
  mco1 = req.body;
  console.log(mco1);
  res.send("OK");
});

router.get("/getmodtech", (req, res) => {
  res.send(mco1);
});

router.post("/modtech", (req, res) => {
  technicalTemplateCopy.findOneAndUpdate(
    { cname: mco1.cname },
    { cname: req.body.cname, cdetails: req.body.cdetails },
    function (err, data) {
      if (err) {
        res.status(404).send("Error");
        console.log(err);
      } else {
        res.send(data);
      }
    }
  );
});

router.post("/addcourse", (req, res) => {
  if (req.body.type.toLowerCase() === "technical") {
    technicalTemplateCopy.findOne(
      { cname: req.body.cname },
      "cname",
      (err, result) => {
        if (err) console.log(err);
        try {
          if (result != null) {
            throw new Error("Username already exists");
            //res.status(404).send("Username exists");
          } else {
            const technicalCourse = new technicalTemplateCopy({
              cname: req.body.cname,
              cdetails: req.body.cdetails,
            });
            technicalCourse
              .save()
              .then((data) => {
                res.json(data);
              })
              .catch((error) => {
                res.json(error);
              });
          }
        } catch (err1) {
          res.sendStatus(800, "Course already Exists");
        }
      }
    );
  } else if (req.body.type.toLowerCase() === "non technical") {
    ntechnicalTemplateCopy.findOne(
      { cname: req.body.cname },
      "cname",
      (err, result) => {
        if (err) console.log(err);
        try {
          if (result != null) {
            throw new Error("Username already exists");
            //res.status(404).send("Username exists");
          } else {
            const ntechnicalCourse = new ntechnicalTemplateCopy({
              cname: req.body.cname,
              cdetails: req.body.cdetails,
            });
            ntechnicalCourse
              .save()
              .then((data) => {
                res.json(data);
              })
              .catch((error) => {
                res.json(error);
              });
          }
        } catch (err1) {
          res.sendStatus(800, "Course already Exists");
        }
      }
    );
  }
});

module.exports = router;
