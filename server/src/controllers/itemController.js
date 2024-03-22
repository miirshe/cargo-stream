import Item from "../models/Item.js";
export async function createItem(req, res) {
  const { item_name, item_description, item_category, userId } = req.body;
  try {
    let item = await Item.create({
      item_name,
      item_description,
      item_category,
      user_id: userId,
    });
    if (!item) {
      return res.status(400).json({ message: "Item creation failed" });
    }
    return res.status(201).json({ message: "Item successfully created" });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
}

export async function updateItem(req, res) {
  const { item_name, item_description, item_category } = req.body;
  const id = req.params.id;

  try {
    let item = await Item.findByIdAndUpdate(
      { _id: id },
      {
        $set: {
          item_name,
          item_description,
          item_category,
        },
      }
    );
    if (!item) {
      return res.status(404).json({ message: "Item not found" });
    }
    return res.status(201).json({ message: "Item successfully updated" });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
}

export async function deleteItem(req, res) {
  const id = req.params.id;
  try {
    const item = await Item.findByIdAndDelete({ _id: id });
    if (!item) {
      return res.status(401).json({ message: "Item not found" });
    }
    return res.status(201).json({ message: "Item successfully deleted" });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
}

export async function getItems(req, res) {
  try {
    const items = await Item.find({  }).sort({ name: "desc" });
    if (items.length == 0) {
      return res.status(404).json({ message: "Items not found" });
    }
    return res.status(201).json({ data: items });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
}
