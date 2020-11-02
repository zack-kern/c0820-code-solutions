// const { json } = require('express');
const express = require('express');
const app = express();
const pg = require('pg');
app.use(express.json());
const db = new pg.Pool({
  connectionString: 'postgres://dev:lfz@localhost/studentGradeTable'
});
// eslint-disable-next-line
app.listen(3000, console.log('We listening on 3000 g')
);

app.get('/api/grades/:gradeId', (req, res, next) => {
  const gradeId = parseInt(req.params.gradeId, 10);
  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    return res.status(400).json({
      error: '"gradeId" must be a positive integer'
    });
  }
  const sql = `
    select *
    from "grades"
    where "gradeId" = $1
  `;
  const params = [gradeId];
  // review the documentation on parameterized queries here:
  // https://node-postgres.com/features/queries#parameterized-query
  // you'll be using this information to prevent SQL injection attacks
  // https://www.youtube.com/watch?v=_jKylhJtPmI
  db.query(sql, params)
    .then(result => {
      // the query succeeded, even if nothing was found
      // the result object will include an array of rows
      // see the docs on results
      // https://node-postgres.com/api/result
      const grade = result.rows[0];
      if (!grade) {
        res.status(404).json({
          error: `Cannot find grade with "gradeId" ${gradeId}`
        });
      } else {
        res.json(grade);
      }
    })
    .catch(err => {
      // the query failed for some reason
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.get('/api/grades', (req, res, next) => {
  const sql2 = `
    select *
    from "grades"
  `;
  db.query(sql2)
    .then(result => {
      // res.json(result.rows);
      const fullTable = result.rows;
      res.status(200).json(fullTable);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An error happened but idk exactly what...'
      });
    });
});

app.post('/api/grades', (req, res, next) => {
  var NAM = req.body.name;
  var COU = req.body.course;
  var GRA = req.body.grade;
  var numGrade = parseInt(GRA);
  var arr = [NAM, COU, numGrade];
  if (isNaN(numGrade)) {
    res.status(400).json({
      error: 'Lets, uhhh, maybe supply an actual integer grade value, guys ....'
    });
  } else {
    var sql3 = `
  insert into "grades" ("name", "course", "grade")
  values($1, $2, $3)
  returning *;
  `;
    db.query(sql3, arr)
      .then(result => {
        const student = result.rows;
        res.status(201);
        res.json(student);
      })
      .catch(err => {
        console.error(err);
        res.status(500).json({
          error: 'An unexpected error occurred.'
        });
      });
  }
});

app.put('/api/grades/:gradeId', (req, res, next) => {
  const gradeId = parseInt(req.params.gradeId, 10);
  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    return res.status(400).json({
      error: '"gradeId" must be a positive integer'
    });
  }
  var NAM = req.body.name;
  var COU = req.body.course;
  var GRA = req.body.grade;
  var numGrade = parseInt(GRA);
  var arr = [NAM, COU, numGrade, gradeId];
  if (isNaN(numGrade)) {
    res.status(400).json({
      error: 'Lets, uhhh, maybe supply an actual integer grade value, guys ....'
    });
  } else {
    var sql4 = `
    update "grades"
    set "name" = $1,
        "course" = $2,
        "grade" = $3
    where "gradeId" = $4
    returning *;
    `;
    db.query(sql4, arr)
      .then(result => {
        const student = result.rows;
        if (!student) {
          res.status(404).json({
            error: `Cannot find grade with "gradeId" ${gradeId}`
          });
        } else {
          res.status(200);
          res.json(student);
        }
      })
      .catch(err => {
        console.error(err);
        res.status(500).json({
          error: 'An unexpected error occurred.'
        });
      });
  }
});

app.delete('/api/grades/:gradeId', (req, res, next) => {
  const gradeId = parseInt(req.params.gradeId, 10);
  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    return res.status(400).json({
      error: '"gradeId" must be a positive integer'
    });
  }
  var arr = [gradeId];
  var sql5 = `
    delete from "grades"
    where "gradeId" = $1
    returning *;
    `;
  db.query(sql5, arr)
    .then(result => {
      const student = result.rows;
      if (!student) {
        res.status(404).json({
          error: `Cannot find grade with "gradeId" ${gradeId}`
        });
      } else {
        res.status(204);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});
