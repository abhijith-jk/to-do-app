import Todo from "../model/Todo.js";

export const addTodo = async (req, res) => {
  try {
    const newTodo = await Todo.create({
      data: req.body.data,
      createdAt: Date.now(),
    });

    await newTodo.save();

    return res.status(200).json(newTodo);
  } catch (err) {
    return res.status(500).json(err.message);
  }
};

export const getAllTodos = async (req, res) => {
  try {
    const todos = await Todo.find({}).sort({ createdAt: -1 });

    return res.status(200).json(todos);
  } catch (err) {
    return res.status(500).json(err.message);
  }
};

export const toggleTodo = async (req, res) => {
  try {
    const todoRef = await Todo.findById(req.params.id);

    const todo = await Todo.findOneAndUpdate(
      { _id: req.params.id },
      { done: !todoRef.done }
    );
    await todo.save();

    return res.status(200).json(todo);
  } catch (err) {
    return res.status(500).json(err.message);
  }
};

export const updateTodo = async (req, res) => {
  try {
    await Todo.findOneAndUpdate(
      { _id: req.params.id },
      { data: req.body.task }
    );
    const todo = await Todo.findById(req.params.id);

    return res.status(200).json(todo);
  } catch (err) {
    return res.status(500).json(err.message);
  }
};

export const deleteTodo = async (req, res) => {
  try {
    const todo = await Todo.findByIdAndDelete(req.params.id);

    return res.status(200).json(todo);
  } catch (err) {
    return res.status(500).json(err.message);
  }
};
