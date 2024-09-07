import express from "express";

const app = express();
app.use(express.json());

const loginMiddleWere = (req, res, next) => {
  console.log(`${req.method} , ${req.url}`);
  next();
};

const resolveIndexByUserId = (req, res, next) => {
  const {
    params: { id },
  } = req;
  const parsedId = parseInt(id);
  if (isNaN(parsedId)) return res.sendstatus(400);

  const finduserIndex = makeUser.findIndex((usen) => usen.id === parsedId);
  if (finduserIndex === -1) return res.sendStatus(404);
  req.finduserIndex = finduserIndex;
  next();
};

const PORT = process.env.PORT || 3000;

const makeUser = [
  {
    id: 1,
    UserName: "hajar",
    displayName: "Hajar",
  },
  {
    id: 2,
    UserName: "hajarr",
    displayName: "Hajarr",
  },
];

app.get(
  "/",
  (req, res, next) => {
    console.log("base url");
    next();
  },
  (req, res, next) => {
    console.log("base url 2");
    next();
  },
  (req, res) => {
    // res.send('hello...')
    res.status(201).send({ msg: "hello" });
  }
);

app.get("/api/users", (req, res) => {
  const {
    query: { filter, value },
  } = req;
  if (!filter && !value) return res.send(makeUser);
  if (filter && value)
    return res.send(makeUser.filter((user) => user[filter].includes(value)));
  return res.send(makeUser);
});

app.use(loginMiddleWere, (req, res, next) => {
  console.log("finished loggin...");
  next();
});

app.post("/api/users", (req, res) => {
  console.log(req.body);
  const { body } = req;
  const newUser = { id: makeUser[makeUser.length - 1].id + 1, ...body };
  makeUser.push(newUser);

  return res.send(newUser);
});

app.get("/api/products", (req, res) => {
  res.status(201).send([
    {
      id: 155,
      name: "apple",
      displayName: "20",
    },
  ]);
});

app.get("/api/users/:id", resolveIndexByUserId, (req, res) => {
  const { finduserIndex } = req;
  const findUser = makeUser[finduserIndex];
  if (!findUser) return res.sendStatus(404);
  return res.send(findUser);
});

app.put("/api/users/:id", resolveIndexByUserId, (req, res) => {
  const { body, findIndex } = req;
  makeUser[finduserIndex] = { id: makeUser[findIndex].id, ...body };
  return res.sendStatus(200);
});

app.patch("/api/users/:id", resolveIndexByUserId, (req, res) => {
  const { body, finduserIndex } = req;
  makeUser[finduserIndex] = { ...makeUser[finduserIndex], ...body };
  return res.sendStatus(200);
});

app.delete("/api/users/:id", resolveIndexByUserId, (req, res) => {
  const { finduserIndex } = req;

  mockusers.splice(finduserIndex, 1);
  return res.sendStatus(200);
});

app.listen(PORT, () => {
  console.log(`runnig on port ${PORT}`);
});
