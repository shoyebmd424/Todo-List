import ToDoSchema from "../Model/ToDoSchema.js";

export const saveItem = async (req, res) => {
  try {
    const { title, ...other } = req.body;
    const isItem = await ToDoSchema.findOne({ title: title });
    if (isItem) {
      return res.send({
        success: false,
        message: "This item already added....",
      });
    }
    await ToDoSchema(req.body).save();
    return res.send({
      success: true,
      message: "Item successfully added on your list....",
    });
  } catch (error) {
    console.log(error);
    res.send({ success: false, message: "Some thing went wrong" });
  }
};

export const updateItem = async (req, res) => {
  try {
    const updatedItem = await ToDoSchema.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    if (updatedItem) {
      return res.send({
        success: true,
        message: "Your data updatede successfully",
      });
    } else {
      return res.send({
        success: false,
        message: "your product id is wrong...!",
      });
    }
  } catch (error) {
    console.log(error);
    res.send("Something went wrong");
  }
};

export const deleteItem = async (req, res) => {
  try {
    const isDelete = await ToDoSchema.findByIdAndDelete(req.params.id);
    if (!isDelete) {
      return res.send({
        success: false,
        message: "Oops! Your item id is Wrong.",
      });
    } else {
      return res.send({
        success: true,
        message: "Your item has deleted succesfully...",
      });
    }
  } catch (error) {
    console.log(error);
    res.send({ success: false, message: "something went wrong....!" });
  }
};
export const getOneItem = async (req, res) => {
  console.log(req.params.id);
  try {
    const result = await ToDoSchema.findById(req.params.id);
    if (result) {
      return res.send({ success: true, message: result });
    } else {
      return res.send({
        success: false,
        message: "oops! Your item Id is wrong....",
      });
    }
  } catch (error) {
    console.log(error);
    res.send({ success: false, message: "Oops! Your item Id wrong..." });
  }
};

export const getAllItem = async (req, res) => {
  try {
    const data = await ToDoSchema.find();
    return res.send({ success: true, message: data });
  } catch (err) {
    console.log(err);
    res.send({ success: false, meesage: "something went wrong" });
  }
};
